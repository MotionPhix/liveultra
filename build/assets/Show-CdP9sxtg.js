import{f as z,a as n,c as d,d as s,e as a,w as o,b as e,L as j,t as l,F as w,A as C,Z as T,j as i,k as c,i as L,M as N,y as I}from"./app-DmIf2hag.js";import{_ as S,N as A,S as P,M as V,b as M,g as B}from"./Navheader-BbVXWxoX.js";import{I as X}from"./IconApps-CKFl6vTu.js";import{I as D}from"./IconArrowLeft-DyKuVz5g.js";import{a as E,I as F}from"./IconPhotoX-DSux_TWu.js";import{I as H}from"./IconPencil-eAZyNvau.js";import{c as $}from"./createVueComponent-Da9bORDl.js";import"./index-CykH1wNr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Footnote-3dU8ZebM.js";import"./toast-5mgLi9pE.js";/**
 * @license @tabler/icons-vue v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z=$("outline","trash-x","IconTrashX",[["path",{d:"M4 7h16",key:"svg-0"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-1"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-2"}],["path",{d:"M10 12l4 4m0 -4l-4 4",key:"svg-3"}]]);const q={class:"flex items-center w-full gap-6 dark:text-white dark:border-gray-700"},G=e("span",{class:"group-hover:font-bold"},"All",-1),J=e("span",{class:"flex-1"},null,-1),K=e("span",null,"Edit",-1),O={class:"relative w-full max-w-2xl px-4 mx-auto mt-8 mb-10 sm:mb-14 sm:px-8 sm:mt-16 lg:px-8"},Q={class:"max-w-2xl mb-12"},R={class:"text-4xl font-bold tracking-tight prose sm:text-5xl dark:prose-invert"},U={class:"my-12 prose prose-md dark:prose-invert"},W=["innerHTML"],Y={class:"grid grid-cols-2 gap-6 mt-4"},ee={class:"flex flex-col gap-2"},te=e("dt",null,[e("span",{class:"text-gray-500 dark:text-neutral-500"}," Client ")],-1),se={class:"pt-2 border-t border-gray-300 dark:border-neutral-500"},ae={class:"font-bold text-gray-800 dark:text-neutral-200"},oe={class:"text-sm text-gray-800 dark:text-neutral-200"},re={class:"flex flex-col gap-2"},le=e("dt",null,[e("span",{class:"text-gray-500 dark:text-neutral-500"}," Completed ")],-1),ie={class:"pt-2 border-t border-gray-300 dark:border-neutral-500"},ne={class:"text-gray-800 dark:text-neutral-200"},de=["src","alt"],ce={class:"absolute top-1.5 right-1.5"},ue={class:"px-1 py-1"},we=z({layout:S,__name:"Show",props:{project:{}},setup(me){return(t,u)=>{var m,p,h,f,g,v,_,x,b;return n(),d(w,null,[s(a(T),{title:t.project.name},null,8,["title"]),s(A,null,{default:o(()=>[e("nav",q,[s(a(i),{as:"button",href:t.route("auth.projects.index"),class:"flex items-center gap-2 text-2xl text-blue-600 transition-all duration-300 ease-in-out transform group dark:text-blue-400 hover:-translate-x-1 hover:text-blue-800 dark:hover:text-blue-600"},{default:o(()=>[s(a(D),{class:"hidden size-8 group-hover:inline-block"}),s(a(X),{class:"inline-block size-8 group-hover:hidden"}),G]),_:1},8,["href"]),J,s(a(i),{as:"button",href:t.route("auth.projects.edit",t.project.pid),class:"flex text-2xl items-center gap-2 py-0.5 font-semibold transition duration-300 hover:opacity-70"},{default:o(()=>[s(a(H),{class:"w-8 stroke-current"}),c(),K]),_:1},8,["href"])])]),_:1}),e("article",O,[e("div",{class:"w-full h-full max-w-full my-10 bg-center bg-cover min-h-80 rounded-xl",style:j({backgroundImage:`url(${(m=t.project.media)!=null&&m.length?t.project.media[0].original_url:""})`})},null,4),e("header",Q,[e("h1",R,l(t.project.name),1),e("section",U,[e("div",{innerHTML:t.project.description},null,8,W)]),e("div",Y,[e("dl",ee,[te,e("dd",se,[e("ul",null,[e("li",ae,l(((h=(p=t.project)==null?void 0:p.customer)==null?void 0:h.first_name)+" "+((g=(f=t.project)==null?void 0:f.customer)==null?void 0:g.last_name)),1),e("li",oe,l((_=(v=t.project)==null?void 0:v.customer)==null?void 0:_.company_name),1)])])]),e("dl",re,[le,e("dd",ie,[e("ul",null,[e("li",ne,l((x=t.project)==null?void 0:x.completion_date),1)])])])])]),e("div",{class:"gap-4 space-y-4 columns-2 sm:columns-3",style:j(t.project.media&&((b=t.project.media)==null?void 0:b.length)>3?"direction: ltr;":"rtl")},[(n(!0),d(w,null,C(t.project.media,(y,k)=>(n(),d("div",{key:k,class:"relative break-inside-avoid group"},[e("img",{loading:"lazy",decoding:"async","data-nimg":"1",src:y.original_url,onContextmenu:u[0]||(u[0]=L(()=>{},["prevent"])),alt:"Project image "+k+1,class:"w-full rounded-lg shadow-lg"},null,40,de),e("div",ce,[s(a(B),{as:"div",class:"relative z-40 hidden text-left group-hover:inline-block"},{default:o(()=>[e("div",null,[s(a(P),{class:"inline-flex justify-center w-full p-1 text-sm font-medium text-white rounded-md bg-black/20 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"},{default:o(()=>[s(a(E),{class:"size-6 text-violet-200 hover:text-violet-100","aria-hidden":"true"})]),_:1})]),s(N,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:o(()=>[s(a(V),{class:"absolute right-0 -mt-8 origin-bottom-right bg-white divide-y divide-gray-100 rounded-md shadow-lg w-28 ring-1 ring-black/5 focus:outline-none",style:{direction:"ltr"}},{default:o(()=>[e("div",ue,[s(a(M),null,{default:o(({active:r})=>[s(a(i),{as:"button",method:"delete",class:I([r?"bg-violet-500 text-white":"text-gray-900","flex w-full items-center rounded-md p-2 text-sm"]),href:t.route("auth.projects.destroy",t.project.pid)},{default:o(()=>[s(a(Z),{active:r,class:"mr-2 shrink-0 size-6 text-violet-400","aria-hidden":"true"},null,8,["active"]),c(" Project ")]),_:2},1032,["class","href"])]),_:1}),s(a(M),null,{default:o(({active:r})=>[s(a(i),{as:"button",method:"delete",class:I([r?"bg-violet-500 text-white":"text-gray-900","flex w-full items-center rounded-md p-2 text-sm"]),href:t.route("auth.projects.destroy",{project:t.project.pid,image:y})},{default:o(()=>[s(a(F),{active:r,class:"mr-2 shrink-0 size-6 text-violet-400","aria-hidden":"true"},null,8,["active"]),c(" Image ")]),_:2},1032,["class","href"])]),_:2},1024)])]),_:2},1024)]),_:2},1024)]),_:2},1024)])]))),128))],4)])],64)}}});export{we as default};
