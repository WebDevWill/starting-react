(this["webpackJsonpstarting-react"]=this["webpackJsonpstarting-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),o=n.n(l),c=(n(9),n(1)),i=(n(10),function(e){var t=e.pokemon,n=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name.english),r.a.createElement("td",null,t.type.join(", ")),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return n(t)}},"More Information"))))}),u=function(e){var t=e.name.english,n=e.base;return r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("table",null,r.a.createElement("tbody",null,Object.keys(n).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",null,n[e]))})))))};var m=function(){var e=r.a.useState(""),t=Object(c.a)(e,2),n=t[0],a=t[1],l=r.a.useState(null),o=Object(c.a)(l,2),m=o[0],s=o[1],d=r.a.useState(null),E=Object(c.a)(d,2),f=E[0],h=E[1];return r.a.useEffect((function(){fetch("/starting-react/pokemon.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),m?r.a.createElement("div",{style:{margin:"auto",width:800,paddingTop:"1em"}},r.a.createElement("h1",{className:"title"},"Pokemon Search"),r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"80% 20%",gridColumnGap:"1rem"}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)}}),r.a.createElement("table",{width:"100%"},r.a.createElement("tbody",null,m.filter((function(e){return e.name.english.toLocaleLowerCase().includes(n.toLocaleLowerCase())})).slice(0,20).map((function(e){return r.a.createElement(i,{pokemon:e,onClick:function(e){return h(e)}})}))))),f&&r.a.createElement(u,f))):r.a.createElement("div",null,"Loading data")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c61fccc9.chunk.js.map