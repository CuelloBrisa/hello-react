(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),r=n(16),s=n.n(r),i=n(17),l=n(3),u=n(5),j=n.n(u),b=function(e){var t=e.title;return Object(a.jsx)("nav",{className:"justify-content-center navbar navbar-expand-lg navbar-dark bg-dark",children:Object(a.jsx)("a",{className:"navbar-brand",href:"/#",children:t})})},d=function(e){var t=e.id,n=e.initialTitle,o=e.initialText,r=e.removeNote,s=e.updateNote,i=Object(c.useState)(n),u=Object(l.a)(i,2),j=u[0],b=u[1],d=Object(c.useState)(o),x=Object(l.a)(d,2),f=x[0],m=x[1],h=Object(c.useState)(!1),O=Object(l.a)(h,2),v=O[0],p=O[1];return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("input",{style:{backgroudColor:"transparent",border:"none",fontSize:"1rem",marginBottom:"1rem"},spellCheck:!1,disabled:!v,value:j,onChange:function(e){return b(e.target.value)}}),Object(a.jsx)("textarea",{rows:5,style:{backgroudColor:"transparent",border:"none"},spellCheck:!1,disabled:!v,value:f,onChange:function(e){return m(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"btn",hidden:v,onClick:function(){return p(!v)},children:Object(a.jsx)("i",{className:"text-primary fa fa-pencil fa-lg"})}),Object(a.jsx)("button",{className:"btn",hidden:!v,onClick:function(){s(t,j,f),p(!v)},children:Object(a.jsx)("i",{className:"text-secondary fa fa-save fa-lg"})}),Object(a.jsx)("button",{className:"btn",onClick:function(){return r(t)},children:Object(a.jsx)("i",{className:"text-danger fa fa-trash fa-lg"})})]})})},x=function(e){var t=e.notes,n=e.removeNote,c=e.updateNote;return Object(a.jsx)("div",{className:"card-columns",children:t.map((function(e){return Object(a.jsx)(d,{id:e._id,initialTitle:e.title,initialText:e.text,removeNote:n,updateNote:c},e._id)}))})},f=function(e){var t=e.addNote,n=Object(c.useState)(""),o=Object(l.a)(n,2),r=o[0],s=o[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),j=u[0],b=u[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:r,text:j}),s(""),b("")},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"T\xedtulo"}),Object(a.jsx)("input",{id:"title",className:"form-control",type:"text",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"text",children:"Texto"}),Object(a.jsx)("textarea",{id:"text",className:"form-control",value:j,rows:"4",onChange:function(e){return b(e.target.value)}})]}),Object(a.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Guardar"})]})},m=function(){return Object(a.jsxs)("div",{className:"text-center mb-3",children:[Object(a.jsx)("hr",{}),Object(a.jsx)("h4",{className:"text-muted",children:"Hello React"}),Object(a.jsx)("a",{href:"https://github.com/CuelloBrisa/hello-react",children:Object(a.jsx)("i",{className:"fa fa-github fa-3x text-dark"})})]})},h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){j.a.get("/api/notes").then((function(e){o(e.data.notes)}))}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{title:"App de Notas"}),Object(a.jsxs)("div",{className:"container mt-3",children:[Object(a.jsx)(f,{addNote:function(e){j.a.post("/api/notes",e).then((function(e){var t=[e.data].concat(Object(i.a)(n));o(t)}))}}),Object(a.jsx)("hr",{}),Object(a.jsx)(x,{notes:n,removeNote:function(e){j.a.delete("/api/notes/"+e).then((function(t){var a=n.filter((function(t){return t.id!==e}));o(a)}))},updateNote:function(e,t,a){console.log("esta funcion que esta en App"),console.log("recibi los siguientes argumentos"),console.log(e,t,a);var c={title:t,text:a};j.a.put("/api/notes/".concat(e),c).then((function(t){console.log(t.data);var a=n.map((function(t){return t._id===e?c:t}));console.log("Array viejo:",n),console.log("Array nuevo:",a),o(a)}))}})]}),Object(a.jsx)(m,{})]})};n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.3cf4d1ab.chunk.js.map