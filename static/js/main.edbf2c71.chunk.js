(this["webpackJsonpproject2-react"]=this["webpackJsonpproject2-react"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(15),i=n.n(r),s=(n(22),n(23),n(24),n(7)),o=n(0),j=function(){return Object(o.jsx)("header",{children:Object(o.jsxs)("nav",{children:[Object(o.jsx)(s.b,{to:"/rick-and-morty-universe",children:Object(o.jsx)("h1",{children:"Home"})}),Object(o.jsx)(s.b,{to:"/rick-and-morty-universe/locations",children:Object(o.jsx)("h1",{children:"Locations"})}),Object(o.jsx)(s.b,{to:"/rick-and-morty-universe/Characters",children:Object(o.jsx)("h1",{children:"Characters"})})]})})},a=(n(31),n(2)),u=n(8),h=(n(32),n(33),function(e){var t="";return console.log(e),e.character&&(t=e.character.name),Object(o.jsxs)("div",{className:"character",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("img",{src:e.character.image,alt:t})]})}),d=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i="https://rickandmortyapi.com/api/character/".concat(Math.ceil(671*Math.random())),j=function(){fetch(i).then((function(e){return e.json()})).then((function(e){r(e)}))};Object(c.useEffect)((function(){j()}),[]);return Object(o.jsx)(s.b,{to:"/",children:Object(o.jsxs)("div",{id:"home",children:[Object(o.jsx)("h2",{children:"Choose Your Rick and Morty Character"}),n&&Object(o.jsx)(h,{character:n}),Object(o.jsx)("button",{onClick:function(){j()},children:"get me next"})]})})},b=(n(34),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)}))};Object(c.useEffect)((function(){i("https://rickandmortyapi.com/api/location")}),[]);var j=[];n.results&&(j=n.results.map((function(e){return Object(o.jsx)("div",{className:"location",children:Object(o.jsx)(s.b,{to:"/rick-and-morty-universe/locations/"+e.id,children:Object(o.jsx)("p",{children:e.name.toUpperCase()})})},e.id)})));return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"Explore Different Locations"}),Object(o.jsx)("div",{id:"locations",children:j}),Object(o.jsxs)("div",{children:[n.info&&n.info.prev&&Object(o.jsx)("button",{onClick:function(){i(n.info.prev)},children:"prev"}),n.info&&n.info.next&&Object(o.jsx)("button",{onClick:function(){i(n.info.next)},children:"next"})]})]})}),l=(n(35),n(36),function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],i=n[1],s=[],j=[];return Object(c.useEffect)((function(){var t=0;e.residentsUrl.every((function(e){return t++,fetch(e).then((function(e){return e.json()})).then((function(e){return s.push(e)})),6!==t})),i(s)}),[e.residentsUrl]),r&&(j=r.map((function(e){return Object(o.jsx)(h,{character:e},e.name)}))),console.log("jsx",j),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{children:["Residents : ",e.residentsUrl.length]}),Object(o.jsx)("div",{id:"residents",children:j})]})}),O=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.e)().id,s=Object(c.useState)([]),j=Object(u.a)(s,2),h=(j[0],j[1],null);return Object(c.useEffect)((function(){fetch("https://rickandmortyapi.com/api/location/".concat(i)).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[i]),n&&(h=Object(o.jsx)(l,{residentsUrl:n.residents})),n&&Object(o.jsxs)("div",{className:"location-info",children:[Object(o.jsx)("h1",{children:"Location"}),Object(o.jsx)("p",{children:n.name}),Object(o.jsxs)("p",{children:["Type: ",n.type]}),Object(o.jsxs)("p",{children:["Dimension: ",n.dimension]}),h]})},f=(n(37),function(){return Object(o.jsx)("h1",{children:"Existence is pain"})}),x=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(a.a,{path:"/rick-and-morty-universe",exact:!0,component:d}),Object(o.jsxs)("div",{id:"location-grid",children:[Object(o.jsx)("aside",{children:Object(o.jsx)(a.a,{path:"/rick-and-morty-universe/locations/:id",component:O})}),Object(o.jsx)("section",{children:Object(o.jsx)(a.a,{path:"/rick-and-morty-universe/locations",component:b})})]}),Object(o.jsx)(f,{})]})},p=(n(38),function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"\xa9 All rights reserved: ME"})]})});var m=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(x,{}),Object(o.jsx)(p,{})]})};i.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.edbf2c71.chunk.js.map