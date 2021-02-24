(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"11gL":function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),a=n("LZ9u");t.a=function(e){var t=e.children;return o.a.createElement(a.a,null,t)}},"9vWr":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return h}));var i=n("zLVn"),o=n("q1tI"),a=n.n(o),s=n("7ljp"),r=n("11gL"),c=n("8o4J");function l(e){var t=e.icon,n=e.children,i=Object(c.cb)(b).classes;return a.a.createElement("div",{className:i.card},a.a.createElement(c.p,{alignItems:"center",hSpacing:.25},a.a.createElement(c.e,null,a.a.createElement(c.r,{icon:t,fill:"primary",size:3})),a.a.createElement(c.e,null,a.a.createElement(c.P,{component:"p",fontSize:1.15,color:"primary"},n))))}var b=function(e){return{card:{color:e.pallete.gray.c10,backgroundColor:e.pallete.primary.c90,borderRadius:4,maxWidth:"850px",margin:"1rem 0",padding:"0.75rem",border:"1px solid "+e.pallete.primary.c40}}},p={},d={_frontmatter:p},m=r.a;function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)(m,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"accessibility",style:{position:"relative"}},"Accessibility"),Object(s.b)("p",null,"Web accessibility is gaining more and more space in the context of software development. Given the\ncollaborative nature of the web and its importance in the process of facilitating communication, we must\nensure access to information and ",Object(s.b)("strong",{parentName:"p"},"provide the same experience to all users"),", regardless of their physical\nand cognitive abilities or the platform and technologies used."),Object(s.b)("blockquote",{cite:"World Health Organization"},Object(s.b)("p",null,"Disability is not just a health problem. It is a complex phenomenon, reflecting the interaction between the characteristics of a person's body and the characteristics of the society in which they live.")),Object(s.b)("h2",{id:"not-convinced-yet",style:{position:"relative"}},"Not convinced yet?"),Object(s.b)("p",null,"According to data from the ",Object(s.b)("a",{parentName:"p",href:"https://www.who.int/disabilities/world_report/2011/report.pdf"},"World Disability Report 2011")," ",Object(s.b)("strong",{parentName:"p"},"one billion people worldwide live with some form of disability")," (representing 10% of the world population). In the Brazilian scenario, access to information is a right of every citizen guaranteed by the Federal Constitution. Besides that, the last ",Object(s.b)("a",{parentName:"p",href:"https://censo2010.ibge.gov.br/resultados/resumo.html"},"Census")," presents data indicating that ",Object(s.b)("strong",{parentName:"p"},"45.6 million people")," (23.9% of the total population) have some kind of disability."),Object(s.b)(l,{icon:"heartOutline",mdxType:"Card"},"Our goal is to build inclusive digital products to enhance the experience of all users. Accessibility means making people independent and ensuring they can complete their tasks in a similar effort and time as someone that does not have a disability."),Object(s.b)("h2",{id:"accessible-components",style:{position:"relative"}},"Accessible components"),Object(s.b)("p",null,"Bold components were built following the specifications of WCAG, conforming to AA level. Bold design\nsystem enables accessible development by providing semantically correct components, each with an\nappropriate ARIA markup so that they can be correctly identified by assistive technologies. However, it is\nimportant to keep in mind that the design system is only the foundation for the development of affordable\napplications. We recommend that you review and test your applications to ensure they conform to\n",Object(s.b)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/#conformance"},"WCAG standards at the AA level."),"."),Object(s.b)("h2",{id:"best-practices",style:{position:"relative"}},"Best practices"),Object(s.b)("h3",{id:"color",style:{position:"relative"}},"Color"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Color should not be used as the only visual means of conveying information, indicating an action, prompting a\nresponse, or distinguishing a visual element."),Object(s.b)("li",{parentName:"ul"},"Limit the use of reds and greens, because it is easily confused with the more common type of color blindness."),Object(s.b)("li",{parentName:"ul"},"Plugin ",Object(s.b)("a",{parentName:"li",href:"https://www.getstark.co/"},"Stark")," for Sketch, make possible to see how the mock-ups are seen by different\ntypes of color blindness.")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/image/accessibility-color.png",alt:"Do/Don`t: Do: Use icons to indicate error states. Don`t: Use only color to convey information"})),Object(s.b)("h2",{id:"contrast",style:{position:"relative"}},"Contrast"),Object(s.b)("p",null,"In general, text and images must meet an optimal 4.5: 1 minimum contrast (for fonts equal to or less than 14pt), except for:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Large texts (18.6px or 14pt) should maintain the contrast of at least 3: 1."),Object(s.b)("li",{parentName:"ul"},"Decorative text /image and disabled states don’t have contrast requirements."),Object(s.b)("li",{parentName:"ul"},"Logo or text that makes up a mark need not be within the ratio of contrast.")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/image/accessibility-contrast.png",alt:"Do/Don't: Contrast test on tags and buttons"})),Object(s.b)("h3",{id:"focus",style:{position:"relative"}},"Focus"),Object(s.b)("p",null,"The component focused by the keyboard must be clearly marked, and the selection area must be clickable. By default,\nlinks and form elements already display the highlighted border when they receive focus from the keyboard. This border\ncan be modified via CSS to enhance highlighting, but should ",Object(s.b)("strong",{parentName:"p"},"not")," be removed."),Object(s.b)("p",null,"We use and recommend that the minimum edge thickness should be 2 px."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/image/accessibility-focus.png",alt:"Focus on button and checkbox"})),Object(s.b)("h2",{id:"assistive-technologies",style:{position:"relative"}},"Assistive technologies"),Object(s.b)("p",null,"When people start to develop with accessibility in mind, it’s a common error add focus to every element on the page,\nincluding text and titles. This difficult the navigation of users who can see and can hinder who depends on a screen reader,\nbecause these technologies already provide focus to these elements."),Object(s.b)("p",null,"Titles, text blocks, and disabled fields should ",Object(s.b)("strong",{parentName:"p"},"not")," receive focus."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/image/accessibility-assistivetech.png",alt:"Disabled field and button"})))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-design-guidelines-accessibility-index-mdx-0b3f8c2c773353a9a7ff.js.map