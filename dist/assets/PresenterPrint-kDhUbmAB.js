import{d as _,u as d,a as p,c as m,b as u,r as h,o as a,e as n,f as t,t as o,g as i,F as f,h as g,n as v,i as x,j as y,k as b,l as k,m as N,_ as P}from"./index-g5JgVNY3.js";import{N as w}from"./NoteDisplay-qC88nHdF.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},j={class:"font-bold flex gap-2"},B={class:"opacity-50"},C=t("div",{class:"flex-auto"},null,-1),H={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const r=u(()=>h.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(a(),n("div",{id:"page-root",style:v(i(x))},[t("div",V,[t("div",D,[t("h1",L,o(i(m).title),1),t("div",S,o(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(r.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",j,[t("div",B,o(e==null?void 0:e.no)+"/"+o(i(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),C])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<r.value.length-1?(a(),n("hr",H)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","C:/Users/jlf/Desktop/xueyixiao.github.io/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.32_typescript@5.3.3_vite@5.0.10/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
