import{f as N,G as $,q as r,r as A,a as m,c as v,b as c,K as E,e as d,d as S,y as i,z as I,k as K,t as x,h as q,L as D,N as F}from"./app-DmIf2hag.js";/* empty css                    */function G({componentName:l,providedId:t}){return r(()=>{var a;return t??`${l}-${(a=F())==null?void 0:a.uid}`})}const L={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},M=c("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m4.5 12.75 6 6 9-13.5"},null,-1),O=[M];function P(l,t){return m(),v("svg",L,[...O])}const T={render:P},j=["for","aria-checked"],H=["id","checked","disabled","name"],J={class:"m-checkbox__text"},R=N({inheritAttrs:!1,__name:"MazCheckbox",props:{style:{default:void 0},class:{default:void 0},modelValue:{default:void 0},id:{default:void 0},color:{default:"primary"},value:{type:[String,Number,Boolean],default:void 0},name:{default:"m-checkbox"},size:{default:"md"},label:{default:void 0},disabled:{type:Boolean,default:!1},error:{type:Boolean},success:{type:Boolean},warning:{type:Boolean},hint:{}},emits:["update:model-value","change","blur","focus"],setup(l,{emit:t}){$(e=>({"637b9682":k.value,"7a7f3c21":y.value,"4af0fd68":z.value,"27d552aa":w.value}));const a=l,n=t,s=G({componentName:"MazCheckbox",providedId:a.id}),f=r(()=>typeof a.value!="boolean"&&Array.isArray(a.modelValue)?a.modelValue.includes(a.value):typeof a.modelValue=="boolean"?a.modelValue:!1),y=r(()=>{switch(a.size){case"xl":return"2.25rem";case"lg":return"2rem";case"sm":return"1.425rem";case"xs":return"1.325rem";case"mini":return"1.2rem";default:return"1.625rem"}}),g=r(()=>{switch(a.size){case"xl":return"maz-text-2xl";case"lg":return"maz-text-xl";case"sm":return"maz-text-base";case"xs":return"maz-text-sm";case"mini":return"maz-text-xs";default:return"maz-text-lg"}}),k=r(()=>`var(--maz-color-${a.color}-contrast)`),z=r(()=>`var(--maz-color-${a.color})`),w=r(()=>a.error?"var(--maz-color-danger)":a.warning?"var(--maz-color-warning)":a.success?"var(--maz-color-success)":["black","transparent"].includes(a.color)?"var(--maz-color-muted)":`var(--maz-color-${a.color}-alpha)`);function V(e){["Space"].includes(e.code)&&(e.preventDefault(),p(a.value??!a.modelValue))}function _(e){return typeof e=="boolean"&&(typeof a.modelValue=="boolean"||a.modelValue===void 0||a.modelValue===null)?!a.modelValue:Array.isArray(a.modelValue)&&typeof e!="boolean"?a.modelValue.includes(e)?a.modelValue.filter(o=>o!==e):[...a.modelValue,e]:[e]}function p(e){const o=_(e);n("update:model-value",o),n("change",o)}const u=A();function B(e){var o;(o=u.value)==null||o.dispatchEvent(new Event("blur")),n("blur",e)}function C(e){var o;(o=u.value)==null||o.dispatchEvent(new Event("focus")),n("focus",e)}return(e,o)=>(m(),v("label",{for:d(s),class:i(["m-checkbox",[{"--disabled":e.disabled,"--error":e.error,"--warning":e.warning,"--success":e.success},a.class]]),tabindex:"0",style:D(e.style),role:"checkbox","aria-checked":f.value,onKeydown:V,onBlur:B,onFocus:C},[c("input",E({id:d(s),ref_key:"inputRef",ref:u,checked:f.value},e.$attrs,{tabindex:"-1",disabled:e.disabled,name:e.name,type:"checkbox",onChange:o[0]||(o[0]=b=>{var h;return p(e.value??((h=b==null?void 0:b.target)==null?void 0:h.checked))})}),null,16,H),c("span",null,[S(d(T),{class:i(["check-icon",g.value])},null,8,["class"])]),c("div",J,[I(e.$slots,"default",{value:e.value},()=>[K(x(e.label),1)],!0),e.hint?(m(),v("span",{key:0,class:i(["m-checkbox__hint",{"--error":e.error,"--success":e.success,"--warning":e.warning}])},x(e.hint),3)):q("v-if",!0)])],46,j))}}),U=(l,t)=>{const a=l.__vccOpts||l;for(const[n,s]of t)a[n]=s;return a},X=U(R,[["__scopeId","data-v-a2b23999"]]);export{X as W};
