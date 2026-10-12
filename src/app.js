import {content} from './content.mjs';
const lang=document.documentElement.lang;
const c=content[lang]||content.en;
const runtimePanel=document.querySelector('#runtime-panel');
const deployPanel=document.querySelector('#deploy-panel');
function setRuntime(index){
 const r=c.runtimes[index];
 runtimePanel.querySelector('.runtime-symbol').textContent=r[4];
 runtimePanel.querySelector('.eyebrow').textContent=r[1];
 runtimePanel.querySelector('h3').textContent=r[0];
 runtimePanel.querySelector('p').textContent=r[2];
 runtimePanel.querySelector('code').textContent=r[3];
 runtimePanel.setAttribute('aria-labelledby',`runtime-${index}`);
}
function setDeploy(index){
 const d=c.deploy[index];
 deployPanel.querySelector('.eyebrow').textContent=d[0];
 deployPanel.querySelector('h3').textContent=d[1];
 deployPanel.querySelector('p').textContent=d[2];
 deployPanel.querySelectorAll('.pills span').forEach((el,i)=>el.textContent=d[3][i]);
 deployPanel.setAttribute('aria-labelledby',`deploy-${index}`);
}
function tabs(selector,render){
 const buttons=[...document.querySelectorAll(selector)];
 function activate(i){buttons.forEach((b,j)=>{b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1;});render(i);}
 buttons.forEach((b,i)=>{b.addEventListener('click',()=>activate(i));b.addEventListener('keydown',e=>{let n=i;if(['ArrowRight','ArrowDown'].includes(e.key))n=(i+1)%buttons.length;else if(['ArrowLeft','ArrowUp'].includes(e.key))n=(i-1+buttons.length)%buttons.length;else if(e.key==='Home')n=0;else if(e.key==='End')n=buttons.length-1;else return;e.preventDefault();activate(n);buttons[n].focus();});});
}
tabs('.runtime-tab',setRuntime);tabs('.deploy-controls button',setDeploy);
