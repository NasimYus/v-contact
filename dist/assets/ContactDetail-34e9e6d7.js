import{f as b,g as h,h as g,j as v,o as x,c as k,b as t,t as o,u as e,a as y,n as w,p as B,q as D,m as E}from"./index-f75a4183.js";import{u}from"./contacts-e6dba413.js";const N={class:"container pt-3"},R={class:"card w-50 shadow"},S={class:"card-body"},V={class:"d-flex justify-content-between"},j={class:"d-flex gap-2"},A={class:"text-muted m-0"},M=b({__name:"ContactDetail",setup(P){const p=B(),m=D(),f=h(+m.params.id);u().getContact(+f.value);const s=g(()=>u().selectedContact),C=v(()=>E(()=>import("./ContactUpdateModal-527ca291.js"),["assets/ContactUpdateModal-527ca291.js","assets/index-f75a4183.js","assets/index-af80516f.css","assets/contacts-e6dba413.js"]));return(q,a)=>{var n,c,r,d,l,i,_;return x(),k("div",N,[t("div",R,[t("div",S,[t("div",V,[t("h4",null,o((n=e(s))==null?void 0:n.fullName),1),t("div",j,[t("button",{class:"btn btn-light btn-sm",onClick:a[0]||(a[0]=z=>e(p).back())}," Назад "),y(e(C))])]),t("p",A,o((c=e(s))==null?void 0:c.phone)+", "+o((r=e(s))==null?void 0:r.email),1),t("span",{class:w(["badge rounded-pill",`bg-${(l=(d=e(s))==null?void 0:d.tag)==null?void 0:l.color}`])},o((_=(i=e(s))==null?void 0:i.tag)==null?void 0:_.label),3)])])])}}});export{M as default};