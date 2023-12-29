import{o as i,e as _,f as e,d as L,b as k,p as C,q as h,s as $,_ as A,v as y,w as I,x as R,c as N,a as U,y as E,z as M,A as j,B as q,C as O,D as W,E as Z,G,H as X,I as J,J as K,K as Q,L as Y,M as ee,g as t,N as te,l as o,t as se,n as v,i as V,O as P,S as B,m as b,P as oe,Q as H,R as T,T as ne,j as le,U as S,V as ae,W as ie,F as re,X as ce,Y as ue,Z as de,$ as D,a0 as _e,a1 as pe,a2 as me,a3 as ve}from"./index-_QhnfEXi.js";import{N as he}from"./NoteDisplay-qwrI_seN.js";import fe from"./DrawingControls-OotAjlQA.js";const ge={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),ye=[xe,we];function be(l,r){return i(),_("svg",ge,[...ye])}const Se={name:"carbon-zoom-out",render:be},ke={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ce=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4z"},null,-1),$e=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),ze=[Ce,$e];function Ne(l,r){return i(),_("svg",ke,[...ze])}const Me={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Be=[Pe];function He(l,r){return i(),_("svg",Ve,[...Be])}const Te={name:"carbon-renew",render:He},De={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Le=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1),Ae=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01z"},null,-1),Fe=[Le,Ae];function Ie(l,r){return i(),_("svg",De,[...Fe])}const Re={name:"carbon-time",render:Ie},Ue="/assets/logo-title-horizontal-XSaaVPPu.png",Ee=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=k(()=>{var c,u,n;return(n=(u=(c=C.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=k(()=>{var c,u,n;return(n=(u=(c=C.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),h(he,{class:$(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),je=A(Ee,[["__file","C:/Users/jlf/Desktop/bmap/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.32_typescript@5.3.3_vite@5.0.10/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(me("data-v-e5baf2b3"),l=l(),ve(),l),qe={class:"bg-main h-full slidev-presenter"},Oe={class:"grid-section top flex"},We=f(()=>e("img",{src:Ue,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ze=f(()=>e("div",{class:"flex-auto"},null,-1)),Ge={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Xe=f(()=>e("div",{class:"context"}," current ",-1)),Je=f(()=>e("div",{class:"context"}," next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Qe={class:"border-t border-main py-1 px-2 text-sm"},Ye={class:"grid-section bottom"},et={class:"progress-bar"},tt=L({__name:"Presenter",setup(l){const r=y();I(),R(r);const g=N.titleTemplate.replace("%s",N.title||"Slidev");U({title:`Presenter - ${g}`}),y(!1);const{timer:x,resetTimer:c}=E(),u=y([]),n=k(()=>M.value<j.value?{route:C.value,clicks:M.value+1}:q.value?{route:O.value,clicks:0}:null);return W(),Z(()=>{const z=r.value.querySelector("#slide-content"),s=G(X()),w=J();K(()=>{if(!w.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),p=(s.x-d.left)/d.width*100,m=(s.y-d.top)/d.height*100;if(!(p<0||p>100||m<0||m>100))return{x:p,y:m}},d=>{Q.cursor=d})}),(z,s)=>{const w=Re,d=Te,p=Me,m=Se;return i(),_(re,null,[e("div",qe,[e("div",{class:$(["grid-container",`layout${t(te)}`])},[e("div",Oe,[We,Ze,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Ge,se(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:v(t(V))},[o(B,{key:"main",class:"h-full w-full"},{default:P(()=>[o(ce,{"render-context":"presenter"})]),_:1}),Xe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:v(t(V))},[n.value?(i(),h(B,{key:"next",class:"h-full w-full"},{default:P(()=>{var a;return[o(t(de),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=F=>u.value=F),clicks:n.value.clicks,"clicks-disabled":!1,class:$(t(ue)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):b("v-if",!0),Je],4),b(" Notes "),(i(),_("div",Ke,[(i(),h(je,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:v({fontSize:`${t(oe)}em`})},null,8,["style"])),e("div",Qe,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(H)&&t(H)(...a))},[o(D,{text:"Increase font size"}),o(p)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(T)&&t(T)(...a))},[o(D,{text:"Decrease font size"}),o(m)]),b("v-if",!0)])])),e("div",Ye,[o(_e,{persist:!0})]),(i(),h(fe,{key:2}))],2),e("div",et,[e("div",{class:"progress h-2px bg-primary transition-all",style:v({width:`${(t(ne)-1)/(t(le)-1)*100}%`})},null,4)])]),o(pe),o(ie,{modelValue:t(S),"onUpdate:modelValue":s[5]||(s[5]=a=>ae(S)?S.value=a:null)},null,8,["modelValue"])],64)}}}),lt=A(tt,[["__scopeId","data-v-e5baf2b3"],["__file","C:/Users/jlf/Desktop/bmap/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.32_typescript@5.3.3_vite@5.0.10/node_modules/@slidev/client/internals/Presenter.vue"]]);export{lt as default};
