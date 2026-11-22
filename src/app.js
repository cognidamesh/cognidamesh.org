import {content, diagram} from './content.mjs';

const lang = document.documentElement.lang;
const c = content[lang] || content.en;
const runtimePanel = document.querySelector('#runtime-panel');
const deployPanel = document.querySelector('#deploy-panel');

const DEPLOY_MODES = ['server_or_vm', 'containers_and_clusters', 'infrastructure_as_code'];
const SECTIONS = ['all', 'overview', 'use_cases', 'components', 'architecture', 'runtimes', 'workflow', 'deployment', 'starter_prompt'];

function setRuntime(index) {
 const r = c.runtimes[index];
 runtimePanel.querySelector('.runtime-symbol').textContent = r[4];
 runtimePanel.querySelector('.eyebrow').textContent = r[1];
 runtimePanel.querySelector('h3').textContent = r[0];
 runtimePanel.querySelector('p').textContent = r[2];
 runtimePanel.querySelector('code').textContent = r[3];
 runtimePanel.setAttribute('aria-labelledby', `runtime-${index}`);
}

function setDeploy(index) {
 const d = c.deploy[index];
 deployPanel.querySelector('.eyebrow').textContent = d[0];
 deployPanel.querySelector('h3').textContent = d[1];
 deployPanel.querySelector('p').textContent = d[2];
 deployPanel.querySelectorAll('.pills span').forEach((el, i) => {
  el.textContent = d[3][i];
 });
 deployPanel.setAttribute('aria-labelledby', `deploy-${index}`);
}

function tabs(selector, render) {
 const buttons = [...document.querySelectorAll(selector)];
 function activate(i) {
  buttons.forEach((b, j) => {
   b.setAttribute('aria-selected', String(j === i));
   b.tabIndex = j === i ? 0 : -1;
  });
  render(i);
 }
 buttons.forEach((b, i) => {
  b.addEventListener('click', () => activate(i));
  b.addEventListener('keydown', (e) => {
   let n = i;
   if (['ArrowRight', 'ArrowDown'].includes(e.key)) n = (i + 1) % buttons.length;
   else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) n = (i - 1 + buttons.length) % buttons.length;
   else if (e.key === 'Home') n = 0;
   else if (e.key === 'End') n = buttons.length - 1;
   else return;
   e.preventDefault();
   activate(n);
   buttons[n].focus();
  });
 });
 return activate;
}

const activateRuntime = tabs('.runtime-tab', setRuntime);
const activateDeploy = tabs('.deploy-controls button', setDeploy);

const copyButton = document.querySelector('#copy-prompt');
const promptText = document.querySelector('#bootstrap-prompt');
const copyStatus = document.querySelector('#copy-status');
copyButton.hidden = false;

async function copyStarterPrompt() {
 const guideUrl = new URL('/agents.md', location.origin).href;
 const prompt = promptText.textContent;
 try {
  await navigator.clipboard.writeText(prompt);
  copyStatus.textContent = c.copySuccess;
  return {copied: true, status: c.copySuccess, prompt, guideUrl};
 } catch {
  const range = document.createRange();
  range.selectNodeContents(promptText);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  copyStatus.textContent = c.copyFailure;
  return {copied: false, status: c.copyFailure, prompt, guideUrl};
 }
}

copyButton.addEventListener('click', copyStarterPrompt);

function toolResult(data) {
 return {
  ...data,
  content: [{type: 'text', text: JSON.stringify(data, null, 2)}]
 };
}

function resolveLanguage(requestedLang) {
 if (requestedLang === undefined) return lang in content ? lang : 'en';
 if (typeof requestedLang === 'string' && Object.hasOwn(content, requestedLang)) return requestedLang;
 throw new Error('Unsupported language. Use "en" or "fr".');
}

function serializeSection(targetLang, section = 'all') {
 if (typeof section !== 'string' || !SECTIONS.includes(section)) {
  throw new Error(`Unsupported section "${section}". Choose one of: ${SECTIONS.join(', ')}.`);
 }
 const data = content[targetLang];
 const builders = {
  overview: () => ({
   language: targetLang,
   title: data.title,
   description: data.description,
   prerequisite: data.prerequisiteText,
   strip: data.strip
  }),
  use_cases: () => data.uses.map(([title, description], index) => ({index, title, description})),
  components: () => data.components.map((v, index) => ({
   index,
   capability: v[0],
   title: v[1],
   description: v[2],
   flow: v[3],
   bricks: v[4].map(([name, url]) => ({name, url})),
   notes: v[5],
   ...(v[6] ? {
    modelNotes: {
     abliteratedTitle: v[6][0],
     abliteratedText: v[6][1],
     exampleLabel: v[6][2],
     exampleUrl: v[6][3],
     harnessTitle: v[6][4],
     harnessText: v[6][5]
    }
   } : {})
  })),
  architecture: () => ({
   title: data.archTitle,
   intro: data.archIntro,
   label: data.diagramLabel,
   alt: data.diagramAlt,
   caption: data.diagramCaption,
   legend: data.legend,
   mermaidUrl: new URL(`/assets/architecture-${targetLang}.mmd`, location.origin).href,
   mermaidSource: diagram(targetLang)
  }),
  runtimes: () => data.runtimes.map((r, index) => ({
   index,
   name: r[0],
   category: r[1],
   description: r[2],
   tags: r[3],
   symbol: r[4]
  })),
  workflow: () => data.steps.map(([title, description], index) => ({step: index + 1, title, description})),
  deployment: () => data.deploy.map((d, index) => ({
   index,
   mode: DEPLOY_MODES[index],
   tab: data.deployTabs[index],
   eyebrow: d[0],
   title: d[1],
   description: d[2],
   pills: d[3]
  })),
  starter_prompt: () => ({
   prompt: data.bootstrapPrompt,
   note: data.bootstrapNote,
   guideUrl: new URL('/agents.md', location.origin).href,
   formatUrl: 'https://agents.md/'
  })
 };
 if (section === 'all') {
  return {
   language: targetLang,
   ...Object.fromEntries(Object.entries(builders).map(([key, build]) => [key, build()]))
  };
 }
 return {language: targetLang, [section]: builders[section]()};
}

function createWebMcpTools() {
 return [
  {
   name: 'get_blueprint',
   description: 'Get structured information from the Cognidamesh open-source AI agent team blueprint (overview, use cases, stack components, architecture Mermaid diagram, agent runtimes, workflow steps, deployment options, and starter prompt).',
   inputSchema: {
    type: 'object',
    properties: {
     language: {
      type: 'string',
      enum: ['en', 'fr'],
      description: 'Language code (defaults to the current page language).'
     },
     section: {
      type: 'string',
      enum: SECTIONS,
      description: 'Blueprint section to read (defaults to all).'
     }
    },
    additionalProperties: false
   },
   annotations: {readOnlyHint: true},
   execute: async (input = {}) => toolResult(serializeSection(resolveLanguage(input?.language), input?.section ?? 'all'))
  },
  {
   name: 'get_implementation_guide',
   description: 'Fetch the public Cognidamesh AGENTS.md infrastructure implementation guide in Markdown format.',
   inputSchema: {
    type: 'object',
    properties: {},
    additionalProperties: false
   },
   annotations: {readOnlyHint: true},
   execute: async () => {
    const res = await fetch('/agents.md');
    if (!res.ok) throw new Error(`Failed to fetch /agents.md (HTTP ${res.status}).`);
    return toolResult({
     url: new URL('/agents.md', location.origin).href,
     mediaType: 'text/markdown',
     markdown: await res.text()
    });
   }
  },
  {
   name: 'select_runtime',
   description: 'Select and display an agent runtime in the interactive Runtimes panel on the current page.',
   inputSchema: {
    type: 'object',
    properties: {
     runtime: {
      type: 'string',
      enum: c.runtimes.map((r) => r[0]),
      description: 'Name of the runtime to activate.'
     }
    },
    required: ['runtime'],
    additionalProperties: false
   },
   annotations: {readOnlyHint: false},
   execute: async (input = {}) => {
    const query = typeof input?.runtime === 'string' ? input.runtime.trim().toLowerCase() : '';
    const index = c.runtimes.findIndex((r) => r[0].trim().toLowerCase() === query);
    if (index === -1) {
     throw new Error(`Unknown runtime "${input?.runtime ?? ''}". Available: ${c.runtimes.map((r) => r[0]).join(', ')}.`);
    }
    activateRuntime(index);
    const r = c.runtimes[index];
    return toolResult({
     selected: {index, name: r[0], category: r[1], description: r[2], tags: r[3], symbol: r[4]}
    });
   }
  },
  {
   name: 'select_deployment',
   description: 'Select and display a deployment option in the interactive Deployment panel on the current page.',
   inputSchema: {
    type: 'object',
    properties: {
     mode: {
      type: 'string',
      enum: DEPLOY_MODES,
      description: 'Deployment mode to activate.'
     }
    },
    required: ['mode'],
    additionalProperties: false
   },
   annotations: {readOnlyHint: false},
   execute: async (input = {}) => {
    const query = typeof input?.mode === 'string' ? input.mode.trim().toLowerCase() : '';
    const index = DEPLOY_MODES.findIndex((mode, i) => mode === query || c.deployTabs[i].trim().toLowerCase() === query);
    if (index === -1) {
     throw new Error(`Unknown deployment mode "${input?.mode ?? ''}". Available: ${DEPLOY_MODES.join(', ')}.`);
    }
    activateDeploy(index);
    const d = c.deploy[index];
    return toolResult({
     selected: {index, mode: DEPLOY_MODES[index], tab: c.deployTabs[index], eyebrow: d[0], title: d[1], description: d[2], pills: d[3]}
    });
   }
  },
  {
   name: 'copy_starter_prompt',
   description: 'Copy the Cognidamesh starter prompt to the clipboard (or select it in the page if clipboard access is unavailable) and return the prompt text and implementation guide URL.',
   inputSchema: {
    type: 'object',
    properties: {},
    additionalProperties: false
   },
   annotations: {readOnlyHint: false},
   execute: async () => toolResult(await copyStarterPrompt())
  }
 ];
}

async function registerWebMcp(modelContext) {
 const tools = createWebMcpTools();
 if (typeof modelContext?.registerTool === 'function') {
  for (const tool of tools) {
   try {
    await modelContext.registerTool(tool);
   } catch {
    // Keep remaining tools and normal page interactivity working if registration fails.
   }
  }
  return;
 }
 if (typeof modelContext?.provideContext === 'function') {
  try {
   await modelContext.provideContext({tools});
  } catch {
   // Keep normal page interactivity working if WebMCP registration is rejected.
  }
 }
}

const modelContext = navigator.modelContext || document.modelContext;
if (modelContext) void registerWebMcp(modelContext);
