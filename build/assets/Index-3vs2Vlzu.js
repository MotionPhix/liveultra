import{f as u,a as i,g as f,w as h,b as e,e as m,j as _,r as x,o as y,c,d as p,F as g,A as j,Z as v}from"./app-DmIf2hag.js";import{_ as k}from"./AppLayout.vue_vue_type_script_setup_true_lang-CTWMi0qk.js";import{g as l,S as w}from"./ScrollTrigger-aLfjG8Xb.js";import"./Footnote-3dU8ZebM.js";import"./createVueComponent-Da9bORDl.js";import"./toast-5mgLi9pE.js";import"./index-CykH1wNr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=["src"],z=e("div",{class:"absolute transition opacity-0 bottom-1 end-1 group-hover:opacity-100"},[e("div",{class:"flex items-center px-2 py-1 text-gray-800 bg-white border border-gray-200 rounded-lg gap-x-1 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"},[e("svg",{class:"shrink-0 size-3",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"11",cy:"11",r:"8"}),e("path",{d:"m21 21-4.3-4.3"})]),e("span",{class:"text-xs"},"View")])],-1),B=u({__name:"Card",props:{project:{}},setup(d){return(o,n)=>(i(),f(m(_),{class:"relative block w-full overflow-hidden rounded-lg group",href:o.route("projects.show",o.project.pid)},{default:h(()=>{var r,s,t,a;return[e("img",{loading:"lazy",decoding:"async","data-nimg":"1",class:"object-cover w-full bg-gray-100 rounded-lg size-40 dark:bg-neutral-800",src:(s=(r=o.project)==null?void 0:r.media)!=null&&s.length?(a=(t=o.project)==null?void 0:t.media[0])==null?void 0:a.original_url:"",alt:"Project image"},null,8,b),z]}),_:1},8,["href"]))}}),C={ref:"headerRef",class:"max-w-2xl"},A=e("h1",{class:"text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100"}," Things I've made trying to put my dent in the universe. ",-1),I=e("p",{class:"mt-6 text-lg text-zinc-600 dark:text-zinc-400"}," I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Enjoy! ",-1),L=[A,I],R={class:"mt-16 sm:mt-20"},S={role:"list",class:"grid grid-cols-2 gap-2 lg:grid-cols-3"},W=u({layout:k,__name:"Index",props:{projects:{}},setup(d){l.registerPlugin(w);const o=d,n=x(null);return y(()=>{var s;const r=n.value;l.from(r,{opacity:0,y:50,duration:.8,scrollTrigger:{trigger:r,start:"top bottom-=100",toggleActions:"play none none reverse"}}),(s=o.projects)!=null&&s.length&&l.utils.toArray(".project-card").forEach((t,a)=>{l.from(t,{opacity:0,y:30,duration:.6,delay:a*.1,scrollTrigger:{trigger:t,start:"top bottom-=50",toggleActions:"play none none reverse"}})})}),(r,s)=>(i(),c(g,null,[p(m(v),{title:"Projects"}),e("div",{class:"w-full max-w-2xl px-8 mx-auto mt-16 lg:px-12",ref_key:"projectListRef",ref:n},[e("header",C,L,512),e("div",R,[e("ul",S,[(i(!0),c(g,null,j(r.projects,(t,a)=>(i(),c("li",{key:t.pid,class:"relative flex flex-col items-start project-card",ref_for:!0,ref:"el => projectsRef.value[index] = el"},[p(B,{project:t},null,8,["project"])]))),128))])])],512)],64))}});export{W as default};
