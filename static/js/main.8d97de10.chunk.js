(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(30),i=a.n(c),o=(a(38),a(39),a(8)),r=a(2),l=(a(40),a(0));var p=function(){return Object(l.jsx)("div",{className:"about"})},m=a(11),h=a(15),b=a(18),j=a(31),d=a.n(j),u=a(32),g=a.n(u);a(70);var f=function(){var e={name:"",email:"",message:""},t=Object(s.useState)(e),a=Object(b.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(!1),o=Object(b.a)(i,2),r=o[0],p=o[1];function j(e){"email"===e.target.name&&p(!1),c(Object(h.a)(Object(h.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))}function u(t){var a;t.preventDefault(),a=n.email,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())?d.a.fire({title:"Submited!",icon:"success",confirmButtonColor:"#353535"}).then((function(){return g.a.post("".concat("https://52.14.252.153:3001","/sendemail"),{name:n.name,email:n.email,message:n.message})})).then((function(t){console.log(t.data),c(e)})).catch((function(e){console.error(e)})):p(!0)}return Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsx)("span",{className:"titleContact",children:"Contact"}),Object(l.jsxs)("form",{action:"",onSubmit:u,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Name "}),Object(l.jsx)("input",{type:"text",name:"name",value:n.name,onChange:j,required:!0})]}),Object(l.jsxs)("div",{className:"divEmailContact",children:[Object(l.jsx)("span",{children:"Email "}),Object(l.jsx)("input",{type:"text",name:"email",value:n.email,onChange:j,required:!0}),Object(l.jsx)("span",{className:r?"validEmailAlert":"validEmailAlertHide",children:"Insert a valid email"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:"Message "}),Object(l.jsx)("textarea",{type:"text",name:"message",value:n.message,onChange:j,required:!0})]}),Object(l.jsx)("input",{className:"submitContact",type:"submit",value:"Submit",onSubmit:u})]})]})};a(71);var v=function(){return Object(l.jsx)("div",{className:"home"})};a(72);var O=function(){return Object(l.jsxs)("div",{className:"navBar",children:[Object(l.jsx)(o.b,{className:"linksClass",to:"/",children:"Home"}),Object(l.jsx)("span",{className:"barNB",children:"|"}),Object(l.jsx)(o.b,{className:"linksClass",to:"/",children:"Projects"}),Object(l.jsx)("span",{className:"barNB",children:"|"}),Object(l.jsx)(o.b,{className:"linksClass",to:"/",children:"About"}),Object(l.jsx)("span",{className:"barNB",children:"|"}),Object(l.jsx)(o.b,{className:"linksClass",to:"/",children:"Contact"})]})};a(78);var x=function(){return Object(l.jsxs)("div",{className:"projects",children:[Object(l.jsx)("span",{className:"titleProjects",children:"Projects"}),Object(l.jsx)("div",{className:"contProjects",children:[{name:"Henry games",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/henrygames.jpg?alt=media&token=3ce9e560-597a-4d67-91bb-0e284f6347e4",desc:"Henry Games is a videgames gallery that uses the rawg api. Also have an option to create a videgame that is saved in a database.",link:"https://henry-games.vercel.app",github:"https://github.com/cristian-hr/VideogamesAPP"},{name:"Digital Art",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/digitalart.jpg?alt=media&token=0da462ba-f37b-48c6-8fe9-3c37092a1dc3",desc:"Digital Art is an e-commerse built from scratch using React, Redux, Express and Sequelize. It has authentication with Firebase and Google, two factor authentication with Authy, emails services with Sendgrid and payments methods with Paypal and Stripe.",link:"https://digitalart-front.vercel.app",github:"https://github.com/cristian-hr/Digital-Art-Ecommerce"},{name:"PostApp",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/postapp.jpg?alt=media&token=8d9ab899-7eae-41a0-a1ce-4c53c913b966",desc:"PostApp is a simple app that allows you to make a post, search for post and see all the post.",link:"https://post-app-front.vercel.app",github:"https://github.com/cristian-hr/PostAPP"},{name:"ChronoApp",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/chronoapp.jpg?alt=media&token=bfb35c42-73bb-4c54-b5ec-d8322bbf10dc",desc:"ChronoApp is a stopwatch app that allows you to records a time and also show all the times saved in the database. The project has unitary tests in the front-end and in the back-end. Also it has full Docker implementation.",link:" ",github:"https://github.com/cristian-hr/ChronoAPP"},{name:"ParkingLots App",image:"https://firebasestorage.googleapis.com/v0/b/devportfolio-8fb10.appspot.com/o/parkinglotsapp.jpg?alt=media&token=521ab115-e601-42c9-9768-ea9923062229",desc:"ParkingLots App is a searching app that looks for parking lots in the city that the user look for",link:"https://parking-lots-app.vercel.app/",github:"https://github.com/cristian-hr/ParkingLotsAPP"}].map((function(e,t){return Object(l.jsxs)("div",{className:"cardsProject",children:[Object(l.jsx)("span",{className:"nameProject",children:e.name}),Object(l.jsx)("img",{src:e.image,alt:""}),Object(l.jsx)("span",{className:"descProject",children:e.desc}),Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{href:e.link,children:"Link"}),Object(l.jsx)("a",{href:e.github,children:"Github"})]})]})}))})]})};var k=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(r.a,{path:"/",component:O}),Object(l.jsx)(r.a,{path:"/",component:v}),Object(l.jsx)(r.a,{path:"/",component:x}),Object(l.jsx)(r.a,{path:"/",component:p}),Object(l.jsx)(r.a,{path:"/",component:f})]})};var N=function(){return Object(l.jsx)("div",{className:"App",children:k()})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),P()}},[[79,1,2]]]);
//# sourceMappingURL=main.8d97de10.chunk.js.map