const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bp3S_cmE.js","./DYYdghhO.js","./pNGmwNJS.js","./DE0wMDYD.js"])))=>i.map(i=>d[i]);
import{ag as b,C as x,B as y,k as T}from"./DYYdghhO.js";import{l as w}from"./DE0wMDYD.js";import{_ as E}from"./Ct5FWWRu.js";function U(e,n,t=n){var a=b();w(e,"input",o=>{var l=o?e.defaultValue:e.value;if(l=p(e)?g(l):l,t(l),a&&l!==(l=n())){var i=e.selectionStart,r=e.selectionEnd;e.value=l??"",r!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(r,e.value.length))}}),(T&&e.defaultValue!==e.value||x(n)==null&&e.value)&&t(p(e)?g(e.value):e.value),y(()=>{var o=n();p(e)&&o===g(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function p(e){var n=e.type;return n==="number"||n==="range"}function g(e){return e===""?null:+e}const $="http://localhost:8000",L={format:"A4",margin:{top:"20mm",bottom:"20mm",left:"15mm",right:"15mm"},printBackground:!0,displayHeaderFooter:!1,landscape:!1,scale:1};function h(e){const n=document.createElement("div");n.innerHTML=e;const t=[];return n.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((o,l)=>{const i=parseInt(o.tagName.charAt(1)),r=o.textContent?.trim()||"";let s=o.id;s||(s=`heading-${l+1}`,o.id=s),r&&t.push({id:s,text:r,level:i,originalTag:o.tagName.toLowerCase()})}),n.innerHTML="",t}function P(e,n="Inhaltsverzeichnis"){if(e.length===0)return"";let t=`<div class="table-of-contents">
    <h2 class="toc-title">${n}</h2>
    <nav class="toc-nav">`,a=0;e.forEach((o,l)=>{if(o.level>a)for(let r=a;r<o.level;r++)t+='<ul class="toc-list">';else if(o.level<a)for(let r=o.level;r<a;r++)t+="</ul>";const i=o.pageNumber!==void 0?o.pageNumber.toString():"...";t+=`<li class="toc-item toc-level-${o.level}">
      <a href="#${o.id}" class="toc-link">
        <span class="toc-text">${o.text}</span>
        <span class="toc-dots"></span>
        <span class="toc-page-number">${i}</span>
      </a>
    </li>`,a=o.level});for(let o=0;o<a;o++)t+="</ul>";return t+="</nav></div>",t}function S(){const e=[];for(const n of Array.from(document.styleSheets))try{const t=n.cssRules||n.rules;t&&Array.from(t).forEach(a=>a.cssText&&e.push(a.cssText))}catch{n.href&&e.push(`@import url("${n.href}");`)}return document.querySelectorAll("style").forEach(n=>n.textContent&&e.push(n.textContent)),e.join(`
`)}async function H(e,n={}){const t=document.createElement("div");t.style.position="absolute",t.style.left="-9999px",t.style.top="-9999px",t.style.visibility="hidden",document.body.appendChild(t);try{const{mount:a,unmount:o}=await E(async()=>{const{mount:f,unmount:u}=await import("./Bp3S_cmE.js");return{mount:f,unmount:u}},__vite__mapDeps([0,1,2,3]),import.meta.url);await document.fonts.ready;const l=a(e,{target:t,props:n});await new Promise(f=>setTimeout(f,100));let i="",r=0;const s=20;for(let f=0;f<s;f++){const u=t.innerHTML;if(u===i){if(r++,r>=3)break}else r=0;i=u,await new Promise(v=>setTimeout(v,200))}const m=t.querySelectorAll("img");m.length>0&&await Promise.all(Array.from(m).map(f=>f.complete?Promise.resolve():new Promise(u=>{f.addEventListener("load",u),f.addEventListener("error",u),setTimeout(u,3e3)})));const c=t.innerHTML;if(o(l),!c.trim())throw new Error("Component rendered empty HTML");const d=S();return{html:c,styles:d}}finally{t.remove()}}async function _(e){const n=[];let t="",a="";for(const[o,l]of e.entries()){const{component:i,props:r={},title:s=`Page ${o+1}`}=l,{html:m,styles:c}=await H(i,r),d=s?`<div class="pdf-page">
           <h1 class="page-title" id="page-${o+1}">${s}</h1>
           ${m}
         </div>`:`<div class="pdf-page" id="page-${o+1}">${m}</div>`;n.push({title:s,html:d}),t+=d,o===0&&(a=c)}return{html:t,styles:a,pageInfo:n}}function C(e){const n=window.location.origin;let t=e.replace(/url\(['"]?\/(fonts\/[^'"()]+)['"]?\)/g,`url('${n}/$1')`);return t+=`
    /* Fallback font rules for PDF generation */
    body, html, * {
      font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
    }
  `,t}function k(e,n,t="Report",a={}){const o=a.calculationReportSubtitle||"Berechnungsbericht",l=C(n);let i=e,r="";if(a.includeTableOfContents){const s=a.customTocEntries||h(e);if(s.length>0&&(r=P(s,a.tocTitle),!a.customTocEntries)){const m=document.createElement("div");m.innerHTML=e,s.forEach(c=>{const d=m.querySelector(`#${c.id}`);d&&!d.id&&(d.id=c.id)}),i=m.innerHTML}}return`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>${t}</title>
  <style>
    ${l}
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
    ${a.headerHTML||`<h1>${t}</h1>
    <p>${o}</p>
    <p>Generiert am: ${new Date().toLocaleString("de-DE")}</p>`}
  </div>
  ${r}
  <div class="pdf-content">${i}</div>
</body>
</html>`}async function M(e,n={},t="report.pdf"){const a=await fetch(`${$}/generate-pdf`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({html:e,options:{...L,...n}})});if(!a.ok){const l=await a.text();throw new Error(`PDF generation failed: ${a.statusText} - ${l}`)}const o=await a.blob();if(!o.size)throw new Error("PDF returned empty file");return o}function R(e,n){const t=URL.createObjectURL(e),a=document.createElement("a");a.href=t,a.download=n,document.body.appendChild(a),a.click(),URL.revokeObjectURL(t),a.remove()}function D(e,n,t="Brückenlager-Eingabeparameter",a="Berechnete Elastomer-Parameter"){const o=[];return e.forEach((l,i)=>{const r=n[i],s=i+2;o.push({id:`page-${i+1}`,text:l.title||`Component ${i+1}`,level:1,originalTag:"h1",pageNumber:s}),(l.component.name==="PDFElastoParams"||l.title?.includes("Elastomer-Parameter")||l.title?.includes("Elastomer Parameters"))&&(o.push({id:"input-params",text:t,level:2,originalTag:"h3",pageNumber:s}),o.push({id:"calculated-params",text:a,level:2,originalTag:"h3",pageNumber:s})),h(r.html).forEach(c=>{c.level>1&&c.id!=="input-params"&&c.id!=="calculated-params"&&o.push({id:`page-${i+1}-${c.id}`,text:c.text,level:Math.min(c.level+1,6),originalTag:c.originalTag,pageNumber:s})})}),o}async function z(e,n="multi-report",t={},a="statiqs Multi-Component Report",o,l=!0){const{html:i,styles:r,pageInfo:s}=await _(e);let m;t.includeTableOfContents&&(m=D(e,s,t.inputParamsSectionTitle,t.calculatedParamsSectionTitle));const c=k(i,r,a,{includeTableOfContents:t.includeTableOfContents,tocTitle:t.tocTitle||"Inhaltsverzeichnis",customTocEntries:m,headerHTML:o,calculationReportSubtitle:t.calculationReportSubtitle}),d=await M(c,t,`${n}.pdf`),f=URL.createObjectURL(d);return l&&R(d,`${n}.pdf`),{pdfBlob:d,pdfUrl:f}}export{$ as P,U as b,z as c};
