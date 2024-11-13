import{c as t}from"./createVueComponent-Da9bORDl.js";import{f as s,a as r,c as d,b as a,d as l,e as o,g as n,w as h,j as i,h as c}from"./app-DmIf2hag.js";/**
 * @license @tabler/icons-vue v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=t("outline","alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]);/**
 * @license @tabler/icons-vue v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var g=t("outline","photo-down","IconPhotoDown",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4",key:"svg-2"}],["path",{d:"M14 14l1 -1c.653 -.629 1.413 -.815 2.13 -.559",key:"svg-3"}],["path",{d:"M19 16v6",key:"svg-4"}],["path",{d:"M22 19l-3 3l-3 -3",key:"svg-5"}]]);/**
 * @license @tabler/icons-vue v3.14.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var u=t("filled","trash-filled","IconTrashFilled",[["path",{d:"M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z",key:"svg-0"}],["path",{d:"M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z",key:"svg-1"}]]);const p={class:"relative group"},v=["href"],k=["src","alt"],y={class:"absolute transition opacity-0 bottom-1 end-1 group-hover:opacity-100"},b={class:"flex items-center px-2 py-1 text-gray-800 bg-white border border-gray-200 rounded-lg gap-x-1 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"},f=a("span",{class:"text-xs"},"Download",-1),F=s({__name:"LogoCard",props:{logoFile:{}},setup(m){return(e,_)=>(r(),d("div",p,[a("a",{class:"relative block w-full overflow-hidden rounded-lg group",href:e.route("auth.downloads.show",e.logoFile.lid)},[a("img",{class:"object-cover w-full bg-gray-100 rounded-lg size-40 dark:bg-neutral-800",src:e.logoFile.poster_url,alt:e.logoFile.brand},null,8,k),a("div",y,[a("div",b,[l(o(g),{class:"shrink-0 size-3"}),f])])],8,v),e.$page.url.startsWith("/auth")?(r(),n(o(i),{key:0,class:"absolute items-center justify-center hidden text-gray-800 bg-white border border-gray-200 rounded-lg group-hover:flex left-1 bottom-1 size-6 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200",href:e.route("auth.downloads.destroy",e.logoFile.lid),method:"delete",as:"button"},{default:h(()=>[l(o(u),{class:"size-4"})]),_:1},8,["href"])):c("",!0)]))}});export{C as I,F as _};
