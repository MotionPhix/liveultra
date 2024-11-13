import{f as g,Q as v,T as y,a as n,c as m,b as s,d as a,e,k as d,w as u,J as x,ag as k,h as _,M as h,i as V,j as b}from"./app-DmIf2hag.js";import{_ as f}from"./InputError.vue_vue_type_script_setup_true_lang-llwGMIzL.js";import{_ as c}from"./InputLabel.vue_vue_type_script_setup_true_lang-CVCT5VCK.js";import{P as w}from"./PrimaryButton-CiqiDfDA.js";import{_ as p}from"./TextInput.vue_vue_type_script_setup_true_lang-0ZQTCHT9.js";const N=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1),S={key:0},U={class:"mt-2 text-sm text-gray-800 dark:text-gray-200"},B={class:"mt-2 text-sm font-medium text-green-600 dark:text-green-400"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},M=g({__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{},status:{}},setup($){const o=v().props.auth.user,t=y({first_name:o.first_name,last_name:o.last_name,email:o.email});return(l,r)=>(n(),m("section",null,[N,s("form",{onSubmit:r[3]||(r[3]=V(i=>e(t).patch(l.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(c,{for:"first_name",value:"First Name"}),a(p,{id:"first_name",type:"text",class:"block w-full mt-1",modelValue:e(t).first_name,"onUpdate:modelValue":r[0]||(r[0]=i=>e(t).first_name=i),required:"",autofocus:""},null,8,["modelValue"]),a(f,{class:"mt-2",message:e(t).errors.first_name},null,8,["message"])]),s("div",null,[a(c,{for:"last_name",value:"Last Name"}),a(p,{id:"last_name",type:"text",class:"block w-full mt-1",modelValue:e(t).last_name,"onUpdate:modelValue":r[1]||(r[1]=i=>e(t).last_name=i),required:""},null,8,["modelValue"]),a(f,{class:"mt-2",message:e(t).errors.last_name},null,8,["message"])]),s("div",null,[a(c,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"block w-full mt-1",modelValue:e(t).email,"onUpdate:modelValue":r[2]||(r[2]=i=>e(t).email=i),required:""},null,8,["modelValue"]),a(f,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),l.mustVerifyEmail&&e(o).email_verified_at===null?(n(),m("div",S,[s("p",U,[d(" Your email address is unverified. "),a(e(b),{href:l.route("verification.send"),method:"post",as:"button",class:"text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:u(()=>[d(" Re-send the verification email. ")]),_:1},8,["href"])]),x(s("div",B," A new verification link has been sent to your email address. ",512),[[k,l.status==="verification-link-sent"]])])):_("",!0),s("div",E,[a(w,{disabled:e(t).processing},{default:u(()=>[d("Save")]),_:1},8,["disabled"]),a(h,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:u(()=>[e(t).recentlySuccessful?(n(),m("p",P,"Saved.")):_("",!0)]),_:1})])],32)]))}});export{M as _};
