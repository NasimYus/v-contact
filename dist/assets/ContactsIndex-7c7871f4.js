import{f as v,g as y,h as x,i as w,j as h,r as E,o as s,c as o,b as t,a as d,u as a,F as N,k as V,t as n,w as D,l as F,n as A,m as p}from"./index-f75a4183.js";import{u as l}from"./contacts-e6dba413.js";const B={class:"container pt-3"},I={class:"mb-3 d-flex justify-content-between"},L=t("h2",null,"Контакты",-1),O={class:"mb-3"},P={class:"card shadow"},S={key:0},T={key:1,class:"table mb-0"},j=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"ФИО"),t("th",{scope:"col"},"Номер телефона"),t("th",{scope:"col"},"Email адрес"),t("th",{scope:"col"},"Теги"),t("th",{scope:"col"},"Действия")])],-1),R={scope:"row"},$=["onClick"],z={key:1},J=t("td",{colspan:"6",class:"text-muted text-center"},"Нет данных",-1),M=[J],U=v({__name:"ContactsIndex",setup(q){const c=y(!1);let r=l().contacts;const m=x(()=>JSON.stringify(l().filteredContacts)),f=l().deleteContact;w(m,()=>{c.value=!0,r=l().filteredContacts,c.value=!1});function C(i){f(i)}const b=h(()=>p(()=>import("./ContactsCreateModal-ff502b3e.js"),["assets/ContactsCreateModal-ff502b3e.js","assets/index-f75a4183.js","assets/index-af80516f.css","assets/contacts-e6dba413.js"])),k=h(()=>p(()=>import("./ContactsFilters-dd280bdb.js"),["assets/ContactsFilters-dd280bdb.js","assets/index-f75a4183.js","assets/index-af80516f.css","assets/contacts-e6dba413.js"]));return(i,G)=>{const g=E("router-link");return s(),o("div",B,[t("section",I,[L,d(a(b))]),t("section",O,[d(a(k))]),t("section",P,[c.value?(s(),o("div",S,"загрузка...")):(s(),o("table",T,[j,t("tbody",null,[a(r).length?(s(!0),o(N,{key:0},V(a(r),e=>{var _,u;return s(),o("tr",{key:e.id},[t("th",R,n(e.id),1),t("td",null,[d(g,{class:"text-decoration-none",to:{name:"contact-detail",params:{id:e.id}}},{default:D(()=>[F(n(e.fullName),1)]),_:2},1032,["to"])]),t("td",null,n(e.phone),1),t("td",null,n(e.email),1),t("td",null,[t("span",{class:A(["badge rounded-pill",`bg-${(_=e.tag)==null?void 0:_.color}`])},n((u=e.tag)==null?void 0:u.label),3)]),t("td",null,[t("button",{class:"btn btn-danger btn-sm",onClick:H=>C(e.id?e.id:0)}," Удалить ",8,$)])])}),128)):(s(),o("tr",z,M))])]))])])}}});export{U as default};