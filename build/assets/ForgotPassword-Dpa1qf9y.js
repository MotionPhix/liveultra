import{f as d,T as u,a as l,g as c,w as m,d as a,e as s,Z as p,c as f,t as _,h as w,b as t,k as g,y,i as k}from"./app-DmIf2hag.js";import{_ as b}from"./GuestLayout.vue_vue_type_script_setup_true_lang-BpSUjFOV.js";import{_ as x}from"./InputError.vue_vue_type_script_setup_true_lang-llwGMIzL.js";import{_ as h}from"./InputLabel.vue_vue_type_script_setup_true_lang-CVCT5VCK.js";import{P as V}from"./PrimaryButton-CiqiDfDA.js";import{_ as v}from"./TextInput.vue_vue_type_script_setup_true_lang-0ZQTCHT9.js";import"./index-CykH1wNr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B=t("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},P={class:"flex items-center justify-end mt-4"},D=d({__name:"ForgotPassword",props:{status:{}},setup(C){const e=u({email:""}),i=()=>{e.post(route("password.email"))};return(o,r)=>(l(),c(b,null,{default:m(()=>[a(s(p),{title:"Forgot Password"}),B,o.status?(l(),f("div",N,_(o.status),1)):w("",!0),t("form",{onSubmit:k(i,["prevent"])},[t("div",null,[a(h,{for:"email",value:"Email"}),a(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",P,[a(V,{class:y({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[g(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}});export{D as default};
