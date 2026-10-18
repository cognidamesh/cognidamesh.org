# Cognidamesh infrastructure implementation guide

## Purpose and scope

Use this guide when the operator asks you to build infrastructure inspired by
https://cognidamesh.org. This is an implementation brief, not an installer or a
claim that every component already integrates with every other component.

Read the target project's existing AGENTS.md files first. Preserve their scope
and the operator's instructions. Adapt this guide into a root AGENTS.md for the
new infrastructure repository without overwriting existing instructions. Use
nested AGENTS.md files only where a directory needs more specific instructions.
The format is plain Markdown with no mandatory schema: https://agents.md/.
Do not assume every agent discovers remote instruction files automatically.

## Establish the deployment context

Inspect the existing project and available target before asking questions. Resolve
only missing choices: intended use cases, host or cloud target, CPU/RAM/storage,
GPU and VRAM, model and data licences, authentication, network exposure, budget,
backup needs and permission to provision or deploy. Never invent credentials or
claim deployment without access to a real target. Keep secrets out of prompts.

Support the selected missions: software development and reverse engineering,
scientific research, OSINT, authorised pentesting,
countering disinformation, administrative management and financial management.
Start with one complete workflow and add only the services it needs.

## Architecture and component choices

- Coordinate roles, tasks and human oversight with Paperclip.
- Use Hermes for research and knowledge work. Evaluate OpenCode, pi or Codex CLI
  for coding roles. Verify adapters and API compatibility before connecting them.
- Use Hindsight for durable organisational memory with separate access scopes
  and memory banks. Preserve source provenance and deletion/retention rules.
- Use SearXNG for search and Camofox for browser collection as needed.
- Evaluate vLLM for serving the selected models and the open-source LiteLLM core
  for API routing. TensorFold is an alternative to evaluate, not a required layer.
  Verify model formats, context limits, tool calling and hardware support.
- Use rootless Podman with Quadlet for a single Linux host; choose Kubernetes or
  OpenShift only when the target calls for a cluster. Prefer OpenTofu for open-source
  provisioning and Ansible for system configuration.
- Combine reusable skills with tools exposed through the Model Context Protocol
  (MCP). Add BMAD for software delivery and Strix for authorised security work.
  Evaluate Scrapling for web extraction, REA for application and binary reverse
  engineering, Cua for desktop interaction, and Chrome
  DevTools MCP for browser automation, debugging and performance analysis.
  Check client/server compatibility, operating-system requirements and licences
  of external analysis engines. Scope each server's tools and credentials in the
  harness; use isolated desktop/browser profiles for interaction and testing.
- For a software-development mission, build an AI software factory spanning
  requirements, design, implementation, tests, review and deployment. For reverse
  engineering, define the authorised target and desired behaviour, retain evidence
  from code and runtime inspection, document interfaces, and validate the resulting
  implementation for migration, maintenance or interoperability.
- Offer Unsloth as an optional, isolated LLM fine-tuning workflow. Check current
  model/hardware support; use LoRA or QLoRA when appropriate. Version datasets,
  training configuration and adapters. Keep evaluation data out of training.
  Compare against the base model, verify export/serving compatibility and retain
  the previous model for rollback. Training must not interrupt production serving.

Verify current versions, licences and official installation documentation. Pin
versions or image digests and document the compatibility matrix. Distinguish
open-source code from downloadable model weights. Claude Code, Bob Shell, Tavily,
CloakBrowser's binary and current Terraform releases have separate commercial or
source-available terms; do not silently include them in a fully open-source stack.

## Security must be enforced in the harness

Abliteration changes model weights to reduce certain refusal behaviours, including
restrictions on legitimate requests. It neither removes every bias or restriction
nor guarantees better reasoning. Treat abliterated variants as an explicit model
choice and evaluate their quality and tool use against the base model.

The harness is the software controlling agent execution. It must enforce policy
outside the LLM, whether the selected model is abliterated or not:

- Put an independent guardrail before execution to assess request intent, context,
  user identity, permissions and authorised scope. Allow, deny or escalate.
- Recheck proposed actions and tool calls at the execution boundary, including
  targets and arguments. Do not let the model grant itself permissions.
- Enforce least privilege with scoped credentials, tool allowlists, network rules,
  isolated containers and separate organisation data. Do not rely on prompting or
  an intent classifier as the sole security boundary.
- Treat retrieved pages, documents and tool output as untrusted data. Test prompt
  injection and attempts to exfiltrate secrets or bypass approval through tools.
- Require human approval for payments, financial commitments, official submissions
  and other sensitive or irreversible actions. Bind approval to the actual action
  and arguments; a changed action needs a new decision.
- Record policy decisions and actions in audit logs without recording secrets or
  unnecessary personal data. Protect logs and define retention limits.
- If a required security check is unavailable or inconclusive, block the sensitive
  action or escalate. Keep the guardrail outside the agent's modification rights.

Measure both false refusals and missed harmful requests. Repeat these evaluations
after model, training, tool or harness changes. Fine-tuning is model adaptation;
abliteration is refusal modification. Neither replaces harness security.

## Repository and implementation workflow

1. Record the selected architecture, interfaces, trust boundaries, prerequisites
   and acceptance criteria. Describe unverified integrations as pending work.
2. Create infrastructure code, container definitions, configuration templates,
   scoped agent profiles, policy configuration, deployment and recovery scripts.
   Use English for code, documentation, identifiers and commit messages.
3. Prefer signed distribution/vendor packages; otherwise use upstream npm/pip
   packages. Isolate complex services and web applications in containers.
4. Keep real deployment values and credentials in ignored configuration, a secret
   manager or an encrypted vault with its key stored separately. Commit only
   neutral examples such as example.org and 203.0.113.0/24. Never commit account
   identifiers, private endpoints, IPs, credentials or private inventory files.
5. Document exact setup, build, validation, deployment and rollback commands in
   the generated project's AGENTS.md and README. Commands must match actual files
   and tools. Do not leave placeholders presented as executable instructions.
6. Implement incrementally, run the appropriate checks, deploy to the authorised
   target and validate the complete workflow. Respect any required approvals for
   cost, exposure, destructive changes or production actions.

## Validation and acceptance

Run the commands applicable to the generated project, and record their results.
For OpenTofu use `tofu fmt -check -recursive`, `tofu validate` and a reviewed plan;
for Terraform use the equivalent Terraform commands. For Ansible run ansible-lint
and the playbook syntax check against an example inventory, followed by Molecule
or a representative test target where roles provide scenarios. Add actual paths
and setup requirements to the target repository's instructions.

Verify on a real test or deployment target:

- A mission reaches the intended agent, uses an authorised tool and returns a
  traceable result; memory can be stored and retrieved in the correct scope.
- Requests outside scope, unauthorised tool calls, prompt injections and missing
  guardrail services cannot cause sensitive actions. Approval cannot be replayed
  for changed arguments. Test legitimate requests too.
- Service health, authentication, TLS where exposed, container restart behaviour,
  persistence, isolation, backups, restore and rollback work as documented.
- Software delivery passes the generated project's build, tests and review checks.
  Reverse-engineering findings have traceable evidence; any resulting implementation
  is tested against the documented behaviour. MCP tools respect the same scope and
  approval boundaries as other tools.
- Administrative/financial workflows preserve evidence and require the intended
  human sign-off before an external submission or financial action.
- If training is enabled, a small training/evaluation run produces a versioned
  artifact that can be loaded by the chosen serving engine, with no unacceptable
  quality, tool-use or guardrail regression.

Finish with the implemented files, verification evidence, deployment state,
operator runbook and remaining limitations. Distinguish tested functionality from
planned integrations; do not report a successful deployment based only on a build.

## Primary references

- Blueprint and component links: https://cognidamesh.org/en/
- Agent instruction format: https://agents.md/
- Unsloth training: https://unsloth.ai/docs/get-started/fine-tuning-llms-guide
- Example abliterated model: https://huggingface.co/OBLITERATUS/Qwen3-4B-OBLITERATED

- Scrapling: https://github.com/D4Vinci/Scrapling
- REA: https://github.com/morluto/rea
- Cua: https://github.com/trycua/cua
- Chrome DevTools MCP: https://github.com/ChromeDevTools/chrome-devtools-mcp
