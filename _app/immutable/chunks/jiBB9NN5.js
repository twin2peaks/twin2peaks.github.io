const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DUmogDos.js","./CBi1G5YP.js","./gCvhFB-D.js","./Bzhh2M_8.js"])))=>i.map(i=>d[i]);
import{_ as h}from"./Ct5FWWRu.js";const b="https://elastotool-pdf-server-126717118048.europe-west3.run.app",x={format:"A4",margin:{top:"20mm",bottom:"20mm",left:"15mm",right:"15mm"},printBackground:!0,displayHeaderFooter:!1,landscape:!1,scale:1};function f(r){const n=document.createElement("div");n.innerHTML=r;const t=[];return n.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((e,s)=>{const i=parseInt(e.tagName.charAt(1)),l=e.textContent?.trim()||"";let a=e.id;a||(a=`heading-${s+1}`,e.id=a),l&&t.push({id:a,text:l,level:i,originalTag:e.tagName.toLowerCase()})}),n.innerHTML="",t}function v(r,n="Inhaltsverzeichnis"){if(r.length===0)return"";let t=`<div class="table-of-contents">
    <h2 class="toc-title">${n}</h2>
    <nav class="toc-nav">`,o=0;r.forEach((e,s)=>{if(e.level>o)for(let l=o;l<e.level;l++)t+='<ul class="toc-list">';else if(e.level<o)for(let l=e.level;l<o;l++)t+="</ul>";const i=e.pageNumber!==void 0?e.pageNumber.toString():"...";t+=`<li class="toc-item toc-level-${e.level}">
      <a href="#${e.id}" class="toc-link">
        <span class="toc-text">${e.text}</span>
        <span class="toc-dots"></span>
        <span class="toc-page-number">${i}</span>
      </a>
    </li>`,o=e.level});for(let e=0;e<o;e++)t+="</ul>";return t+="</nav></div>",t}function y(){const r=[];for(const n of Array.from(document.styleSheets))try{const t=n.cssRules||n.rules;t&&Array.from(t).forEach(o=>o.cssText&&r.push(o.cssText))}catch{n.href&&r.push(`@import url("${n.href}");`)}return document.querySelectorAll("style").forEach(n=>n.textContent&&r.push(n.textContent)),r.join(`
`)}async function T(r,n={}){const t=document.createElement("div");t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.visibility="hidden",document.body.appendChild(t);try{const{mount:o,unmount:e}=await h(async()=>{const{mount:d,unmount:u}=await import("./DUmogDos.js");return{mount:d,unmount:u}},__vite__mapDeps([0,1,2,3]),import.meta.url);await document.fonts.ready;const s=o(r,{target:t,props:n});await new Promise(d=>setTimeout(d,100));let i="",l=0;const a=20;for(let d=0;d<a;d++){const u=t.innerHTML;if(u===i){if(l++,l>=3)break}else l=0;i=u,await new Promise(g=>setTimeout(g,200))}const m=t.querySelectorAll("img");m.length>0&&await Promise.all(Array.from(m).map(d=>d.complete?Promise.resolve():new Promise(u=>{d.addEventListener("load",u),d.addEventListener("error",u),setTimeout(u,3e3)})));const c=t.innerHTML;if(e(s),!c.trim())throw new Error("Component rendered empty HTML");const p=y();return{html:c,styles:p}}finally{t.remove()}}async function w(r){const n=[];let t="",o="";for(const[e,s]of r.entries()){const{component:i,props:l={},title:a=`Page ${e+1}`}=s,{html:m,styles:c}=await T(i,l),p=a?`<div class="pdf-page">
           <h1 class="page-title" id="page-${e+1}">${a}</h1>
           ${m}
         </div>`:`<div class="pdf-page" id="page-${e+1}">${m}</div>`;n.push({title:a,html:p}),t+=p,e===0&&(o=c)}return{html:t,styles:o,pageInfo:n}}function E(r){const n=window.location.origin;let t=r.replace(/url\(['"]?\/(fonts\/[^'"()]+)['"]?\)/g,`url('${n}/$1')`);return t+=`
    /* Fallback font rules for PDF generation */
    body, html, * {
      font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }
  `,t}function $(r,n,t="Report",o={}){const e=o.calculationReportSubtitle||"Berechnungsbericht",s=E(n);let i=r,l="";if(o.includeTableOfContents){const a=o.customTocEntries||f(r);if(a.length>0&&(l=v(a,o.tocTitle),!o.customTocEntries)){const m=document.createElement("div");m.innerHTML=r,a.forEach(c=>{const p=m.querySelector(`#${c.id}`);p&&!p.id&&(p.id=c.id)}),i=m.innerHTML}}return`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>${t}</title>
  <style>
    ${s}
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
  <div class="pdf-content">${i}</div>
</body>
</html>`}async function L(r,n={},t="report.pdf"){const o=await fetch(`${b}/generate-pdf`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({html:r,options:{...x,...n}})});if(!o.ok){const s=await o.text();throw new Error(`PDF generation failed: ${o.statusText} - ${s}`)}const e=await o.blob();if(!e.size)throw new Error("PDF returned empty file");return e}function P(r,n){const t=URL.createObjectURL(r),o=document.createElement("a");o.href=t,o.download=n,document.body.appendChild(o),o.click(),URL.revokeObjectURL(t),o.remove()}function H(r,n,t="Brückenlager-Eingabeparameter",o="Berechnete Elastomer-Parameter"){const e=[];return r.forEach((s,i)=>{const l=n[i],a=i+2;e.push({id:`page-${i+1}`,text:s.title||`Component ${i+1}`,level:1,originalTag:"h1",pageNumber:a}),(s.component.name==="PDFElastoParams"||s.title?.includes("Elastomer-Parameter")||s.title?.includes("Elastomer Parameters"))&&(e.push({id:"input-params",text:t,level:2,originalTag:"h3",pageNumber:a}),e.push({id:"calculated-params",text:o,level:2,originalTag:"h3",pageNumber:a})),f(l.html).forEach(c=>{c.level>1&&c.id!=="input-params"&&c.id!=="calculated-params"&&e.push({id:`page-${i+1}-${c.id}`,text:c.text,level:Math.min(c.level+1,6),originalTag:c.originalTag,pageNumber:a})})}),e}async function C(r,n="multi-report",t={},o="statiqs Multi-Component Report",e,s=!0){const{html:i,styles:l,pageInfo:a}=await w(r);let m;t.includeTableOfContents&&(m=H(r,a,t.inputParamsSectionTitle,t.calculatedParamsSectionTitle));const c=$(i,l,o,{includeTableOfContents:t.includeTableOfContents,tocTitle:t.tocTitle||"Inhaltsverzeichnis",customTocEntries:m,headerHTML:e,calculationReportSubtitle:t.calculationReportSubtitle}),p=await L(c,t,`${n}.pdf`),d=URL.createObjectURL(p);return s&&P(p,`${n}.pdf`),{pdfBlob:p,pdfUrl:d}}export{b as P,C as c};
