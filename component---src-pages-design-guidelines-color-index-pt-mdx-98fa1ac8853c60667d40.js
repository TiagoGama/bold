(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"11gL":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("LZ9u");t.a=function(e){var t=e.children;return o.a.createElement(r.a,null,t)}},EkhK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("11gL"),s=a("M7LX"),c=a("SAgo"),i={},l={_frontmatter:i},m=r.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(m,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"cores",style:{position:"relative"}},"Cores"),Object(o.b)(c.a,{items:[{title:"Paleta",href:"/design-guidelines/color"},{title:"Utilização",href:"/design-guidelines/color/usage"}],mdxType:"TabLinks"}),Object(o.b)("p",null,"No Bold, as cores são usadas para expressar a interatividade dos componentes, situação e enfatizar conteúdo visual e textual. Todas as paletas foram construídas de acordo com padrões de acessibilidade, cumprindo o contraste mínimo de elementos interativos e texto com o plano de fundo. As paletas também foram projetadas de forma temática e mantêm o contraste ideal de todos os componentes, além de funcionar em sentido inverso, no modo ",Object(o.b)("em",{parentName:"p"},"dark"),"."),Object(o.b)(s.a,{mdxType:"PalleteList"}))}d.isMDXComponent=!0},M7LX:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("8o4J"),o=a("3JHg"),r=a("kCIJ"),s=a("q1tI"),c=a.n(s);function i(e){var t=e.title,a=e.pallete,r=Object(n.db)(l),s=r.classes,i=r.css,m=Object.keys(a).map((function(e){return parseInt(e.substr(1),10)})).sort((function(e,t){return e<t?1:-1}));return c.a.createElement("div",{className:s.box},c.a.createElement("div",{className:i(s.item,s.title),style:{background:a.c40,color:o.gray.c100}},t),c.a.createElement("div",{className:s.item,style:{background:a.c40,color:o.gray.c100}},c.a.createElement("span",{className:s.shade},"40"),c.a.createElement("span",{className:s.hex},a.c40)),m.map((function(e){return c.a.createElement("div",{key:e,className:s.item,style:{background:a["c"+e],color:e<=60?o.gray.c100:o.gray.c20}},c.a.createElement("span",{className:s.shade},e),c.a.createElement("span",{className:s.hex},a["c"+e]))})))}var l=function(e){return{box:{display:"inline-block",width:240,fontSize:e.typography.sizes.text},title:{fontWeight:"bold"},item:{display:"flex",justifyContent:"space-between",padding:"0.75rem 1rem","&:first-of-type":{borderTopLeftRadius:4,borderTopRightRadius:4},"&:last-of-type":{borderBottomLeftRadius:4,borderBottomRightRadius:4}},shade:{fontWeight:"bold"},hex:{}}},m=function(){var e=Object(r.useIntl)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(n.o,{justifyContent:"flex-start",wrap:!0},Object.entries(o).map((function(t){var a=t[0],o=t[1];return c.a.createElement(n.e,{key:a},c.a.createElement(i,{title:e.formatMessage({id:"color-name-"+a}),pallete:o}))}))))}},SAgo:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("8o4J"),o=a("kCIJ"),r=a("q1tI"),s=a.n(r),c=a("6IVT"),i=function(e){var t=e.items,a=Object(n.db)(l).classes,r=Object(o.useIntl)(),i=function(e){return"undefined"!=typeof location&&(location.pathname===e.href||location.pathname==="/"+r.locale+e.href)};return s.a.createElement("div",{className:a.tabs},s.a.createElement(n.O,null,t.map((function(e){return s.a.createElement(n.H,{key:e.href,component:c.a,to:e.href,style:a.item,active:i(e)},e.title)}))))},l=function(e){return{tabs:{marginTop:"-0.75rem !important",marginBottom:"2rem"},item:{"a:focus":{boxShadow:"none !important"}}}}}}]);
//# sourceMappingURL=component---src-pages-design-guidelines-color-index-pt-mdx-98fa1ac8853c60667d40.js.map