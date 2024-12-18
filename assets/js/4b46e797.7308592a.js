"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5423],{3666:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"id/stack","title":"Teknologi","description":"Arsitektur","source":"@site/docs/id/stack.md","sourceDirName":"id","slug":"/id/stack","permalink":"/d-panel-doc/docs/id/stack","draft":false,"unlisted":false,"editUrl":"https://github.com/devetek/d-panel-doc/tree/main/docs/id/stack.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Persyaratan","permalink":"/d-panel-doc/docs/id/requirements"},"next":{"title":"IDCloudHost","permalink":"/d-panel-doc/docs/id/installation/IDCloudHost"}}');var r=a(4848),t=a(8453);const s={sidebar_position:1},d="Teknologi",l={},o=[{value:"Arsitektur",id:"arsitektur",level:2},{value:"Komponen",id:"komponen",level:2},{value:"Manager",id:"manager",level:3},{value:"Creator",id:"creator",level:3},{value:"Agent",id:"agent",level:3}];function g(n){const e={em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"teknologi",children:"Teknologi"})}),"\n",(0,r.jsx)(e.h2,{id:"arsitektur",children:"Arsitektur"}),"\n",(0,r.jsx)(e.p,{children:"dPanel dibangun menggunakan teknologi yang membuat ekosistemnya menjadi fleksibel dan dapat ditingkatkan di kemudian hari. Dibangun di atas 4 stack utama berikut:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"PostgreSQL"}),"\n",(0,r.jsx)(e.li,{children:"Golang"}),"\n",(0,r.jsx)(e.li,{children:"React.js"}),"\n",(0,r.jsx)(e.li,{children:"Ansible"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Yang sudah teruji digunakan oleh perusahaan teknologi besar seperti Google, Meta, Bytedance untuk melayani jutaan pelanggan."}),"\n",(0,r.jsx)(e.p,{children:"Terdapat 3 komponen utama dalam ekosistem dPanel yang masing-masing memiliki peranan yang akan dijelaskan di bawah ini:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"dPanel Manager"}),"\n",(0,r.jsx)(e.li,{children:"dPanel Creator"}),"\n",(0,r.jsx)(e.li,{children:"dPanel Agent"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"komponen",children:"Komponen"}),"\n",(0,r.jsx)(e.h3,{id:"manager",children:"Manager"}),"\n",(0,r.jsx)(e.p,{children:"Manager adalah dPanel backend yang dibuat dengan bahasa pemrograman Golang dan PostgreSQL sebagai data storage. Komponen ini memiliki 2 fungsi utama yakni sebagai authentication service dan state management. Dimana informasi tentang server hingga aplikasi dikelola oleh dPanel Manager dan dapat diakses secara terbatas oleh user yang diperbolehkan."}),"\n",(0,r.jsx)(e.h3,{id:"creator",children:"Creator"}),"\n",(0,r.jsx)(e.p,{children:"Creator adalah kumpulan configuration management yang dibangun dengan Ansible sebagai backbone. Dimana creator adalah engine yang bertanggung jawab melakukan komunikasi antara manager dan resource yang digunakan. Sebagai gambaran di bawah ini akan menunjukkan fungsi-fungsi yang terdapat di dalam Creator."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Creator Diagram",src:a(9041).A+"",width:"2945",height:"1357"})}),"\n",(0,r.jsx)(e.h3,{id:"agent",children:"Agent"}),"\n",(0,r.jsx)(e.p,{children:'Agent adalah aplikasi yang berjalan di cloud provider yang bertanggung jawab untuk berkomunikasi dengan manager untuk mengirimkan informasi yang dibutuhkan oleh manager. Ada 3 jenis agent untuk mengelola "managed server / container":'}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Single Instance"}),"\n",(0,r.jsxs)(e.li,{children:["Group Instance - ",(0,r.jsx)(e.em,{children:"on progress"})]}),"\n",(0,r.jsxs)(e.li,{children:["Container Orchestrator - ",(0,r.jsx)(e.em,{children:"backlog"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:'Untuk "non managed server / container (serverless)" agent tidak diperlukan untuk berlajan secara berkelanjutan. Manager hanya berkomunikasi menggunakan "Creator" dan mengelola state yang dikembalikan oleh Cloud Provider.'})]})}function c(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(g,{...n})}):g(n)}},9041:(n,e,a)=>{a.d(e,{A:()=>i});const i=a.p+"assets/images/creator-diagram-d4247a60e1ac18435b5796e8f85ae389.jpg"},8453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>d});var i=a(6540);const r={},t=i.createContext(r);function s(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);