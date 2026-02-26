const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./eCWUrYma.js","./8nSM80wL.js","./oB5EelJY.js","./BwyBNU8S.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./Dp1pzeXC.js";const b="https://elastotool-pdf-server-126717118048.europe-west3.run.app",x={format:"A4",margin:{top:"20mm",bottom:"20mm",left:"15mm",right:"15mm"},printBackground:!0,displayHeaderFooter:!1,landscape:!1,scale:1};function f(r){const n=document.createElement("div");n.innerHTML=r;const t=[];return n.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((e,c)=>{var m;const s=parseInt(e.tagName.charAt(1)),l=((m=e.textContent)==null?void 0:m.trim())||"";let a=e.id;a||(a=`heading-${c+1}`,e.id=a),l&&t.push({id:a,text:l,level:s,originalTag:e.tagName.toLowerCase()})}),n.innerHTML="",t}function v(r,n="Inhaltsverzeichnis"){if(r.length===0)return"";let t=`<div class="table-of-contents">
    <h2 class="toc-title">${n}</h2>
    <nav class="toc-nav">`,o=0;r.forEach((e,c)=>{if(e.level>o)for(let l=o;l<e.level;l++)t+='<ul class="toc-list">';else if(e.level<o)for(let l=e.level;l<o;l++)t+="</ul>";const s=e.pageNumber!==void 0?e.pageNumber.toString():"...";t+=`<li class="toc-item toc-level-${e.level}">
      <a href="#${e.id}" class="toc-link">
        <span class="toc-text">${e.text}</span>
        <span class="toc-dots"></span>
        <span class="toc-page-number">${s}</span>
      </a>
    </li>`,o=e.level});for(let e=0;e<o;e++)t+="</ul>";return t+="</nav></div>",t}function y(){const r=[];for(const n of Array.from(document.styleSheets))try{const t=n.cssRules||n.rules;t&&Array.from(t).forEach(o=>o.cssText&&r.push(o.cssText))}catch{n.href&&r.push(`@import url("${n.href}");`)}return document.querySelectorAll("style").forEach(n=>n.textContent&&r.push(n.textContent)),r.join(`
`)}async function T(r,n={}){const t=document.createElement("div");t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.visibility="hidden",document.body.appendChild(t);try{const{mount:o,unmount:e}=await h(async()=>{const{mount:i,unmount:u}=await import("./eCWUrYma.js");return{mount:i,unmount:u}},__vite__mapDeps([0,1,2,3]),import.meta.url);await document.fonts.ready;const c=o(r,{target:t,props:n});await new Promise(i=>setTimeout(i,100));let s="",l=0;const a=20;for(let i=0;i<a;i++){const u=t.innerHTML;if(u===s){if(l++,l>=3)break}else l=0;s=u,await new Promise(g=>setTimeout(g,200))}const m=t.querySelectorAll("img");m.length>0&&await Promise.all(Array.from(m).map(i=>i.complete?Promise.resolve():new Promise(u=>{i.addEventListener("load",u),i.addEventListener("error",u),setTimeout(u,3e3)})));const d=t.innerHTML;if(e(c),!d.trim())throw new Error("Component rendered empty HTML");const p=y();return{html:d,styles:p}}finally{t.remove()}}async function w(r){const n=[];let t="",o="";for(const[e,c]of r.entries()){const{component:s,props:l={},title:a=`Page ${e+1}`}=c,{html:m,styles:d}=await T(s,l),p=a?`<div class="pdf-page">
           <h1 class="page-title" id="page-${e+1}">${a}</h1>
           ${m}
         </div>`:`<div class="pdf-page" id="page-${e+1}">${m}</div>`;n.push({title:a,html:p}),t+=p,e===0&&(o=d)}return{html:t,styles:o,pageInfo:n}}function E(r){const n=window.location.origin;let t=r.replace(/url\(['"]?\/(fonts\/[^'"()]+)['"]?\)/g,`url('${n}/$1')`);return t+=`
    /* Fallback font rules for PDF generation */
    body, html, * {
      font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }
  `,t}function $(r,n,t="Report",o={}){const e=o.calculationReportSubtitle||"Berechnungsbericht",c=E(n);let s=r,l="";if(o.includeTableOfContents){const a=o.customTocEntries||f(r);if(a.length>0&&(l=v(a,o.tocTitle),!o.customTocEntries)){const m=document.createElement("div");m.innerHTML=r,a.forEach(d=>{const p=m.querySelector(`#${d.id}`);p&&!p.id&&(p.id=d.id)}),s=m.innerHTML}}return`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>${t}</title>
  <style>
    ${c}
    html, body { margin:0; padding:0; width:100%; background:white; }
    .pdf-header { text-align:center; margin-bottom:20px; }
    .pdf-content { width:100%; margin:8px; }
    button { display:none; }

    .table-of-contents {
      margin: 30px 0;
      padding: 20px 0;
      page-break-after: always;
    }

    .toc-title {
      margin: 0 0 20px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #333;
      font-size: 1.5em;
      color: #333;
    }

    .toc-nav {
      margin: 0;
    }

    .toc-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .toc-item {
      margin: 8px 0;
      line-height: 1.4;
    }

    .toc-link {
      display: flex;
      text-decoration: none;
      color: #333;
      padding: 4px 0;
      align-items: baseline;
    }

    .toc-link:hover {
      color: #0066cc;
    }

    .toc-text {
      flex-shrink: 0;
      margin-right: 8px;
    }

    .toc-dots {
      flex-grow: 1;
      border-bottom: 1px dotted #666;
      margin: 0 8px;
      height: 1px;
      margin-bottom: 4px;
    }

    .toc-page-number {
      flex-shrink: 0;
      font-style: italic;
      color: #666;
      min-width: 30px;
      text-align: right;
      font-weight: 500;
    }

    .toc-level-1 { margin-left: 0; }
    .toc-level-2 { margin-left: 20px; }
    .toc-level-3 { margin-left: 40px; }
    .toc-level-4 { margin-left: 60px; }
    .toc-level-5 { margin-left: 80px; }
    .toc-level-6 { margin-left: 100px; }

    .toc-level-2 .toc-text { font-size: 0.95em; }
    .toc-level-3 .toc-text { font-size: 0.9em; }
    .toc-level-4 .toc-text { font-size: 0.85em; }
    .toc-level-5 .toc-text { font-size: 0.8em; }
    .toc-level-6 .toc-text { font-size: 0.75em; }

    .pdf-page {
      page-break-before: always;
      margin-bottom: 30px;
      width: 100%;
    }

    .pdf-page:first-child {
      page-break-before: auto;
    }

    .page-title {
      margin-top: 0;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #333;
      color: #333;
      font-size: 1.8em;
    }
  </style>
</head>
<body>
  <div class="pdf-header">
    ${o.headerHTML||`<h1>${t}</h1>
    <p>${e}</p>
    <p>Generiert am: ${new Date().toLocaleString("de-DE")}</p>`}
  </div>
  ${l}
  <div class="pdf-content">${s}</div>
</body>
</html>`}async function L(r,n={},t="report.pdf"){const o=await fetch(`${b}/generate-pdf`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({html:r,options:{...x,...n}})});if(!o.ok){const c=await o.text();throw new Error(`PDF generation failed: ${o.statusText} - ${c}`)}const e=await o.blob();if(!e.size)throw new Error("PDF returned empty file");return e}function P(r,n){const t=URL.createObjectURL(r),o=document.createElement("a");o.href=t,o.download=n,document.body.appendChild(o),o.click(),URL.revokeObjectURL(t),o.remove()}function H(r,n,t="Brückenlager-Eingabeparameter",o="Berechnete Elastomer-Parameter"){const e=[];return r.forEach((c,s)=>{var d,p;const l=n[s],a=s+2;e.push({id:`page-${s+1}`,text:c.title||`Component ${s+1}`,level:1,originalTag:"h1",pageNumber:a}),(c.component.name==="PDFElastoParams"||(d=c.title)!=null&&d.includes("Elastomer-Parameter")||(p=c.title)!=null&&p.includes("Elastomer Parameters"))&&(e.push({id:"input-params",text:t,level:2,originalTag:"h3",pageNumber:a}),e.push({id:"calculated-params",text:o,level:2,originalTag:"h3",pageNumber:a})),f(l.html).forEach(i=>{i.level>1&&i.id!=="input-params"&&i.id!=="calculated-params"&&e.push({id:`page-${s+1}-${i.id}`,text:i.text,level:Math.min(i.level+1,6),originalTag:i.originalTag,pageNumber:a})})}),e}async function C(r,n="multi-report",t={},o="statiqs Multi-Component Report",e,c=!0){const{html:s,styles:l,pageInfo:a}=await w(r);let m;t.includeTableOfContents&&(m=H(r,a,t.inputParamsSectionTitle,t.calculatedParamsSectionTitle));const d=$(s,l,o,{includeTableOfContents:t.includeTableOfContents,tocTitle:t.tocTitle||"Inhaltsverzeichnis",customTocEntries:m,headerHTML:e,calculationReportSubtitle:t.calculationReportSubtitle}),p=await L(d,t,`${n}.pdf`),i=URL.createObjectURL(p);return c&&P(p,`${n}.pdf`),{pdfBlob:p,pdfUrl:i}}export{b as P,C as c};
