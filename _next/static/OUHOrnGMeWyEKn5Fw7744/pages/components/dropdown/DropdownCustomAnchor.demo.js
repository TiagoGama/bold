(window.webpackJsonp=window.webpackJsonp||[]).push([["32c1"],{AIdd:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dropdown/DropdownCustomAnchor.demo",function(){var e=n("k45s");return{page:e.default||e}}])},k45s:function(e,t,n){"use strict";n.r(t);var o=n("hDBU"),a=n("mXGw"),c=n.n(a),r=n("c2a7");t.default=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!1),n=Object(o.default)(t,2),l=n[0],m=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{ref:e,onClick:function(){return m(!0)}},"Custom achor element"),c.a.createElement(r.h,{anchorRef:e,open:l,onClose:function(){return m(!1)},popperProps:{placement:"right-start"}},c.a.createElement(r.k,{onClick:console.log},"Item #1"),c.a.createElement(r.H,{text:"Disabled item"},c.a.createElement(r.k,{onClick:console.log,disabled:!0},"Item #2")),c.a.createElement(r.j,null),c.a.createElement(r.k,{component:"a",href:"/"},"Link item"),c.a.createElement(r.k,{type:"danger",onClick:console.log},"Item #3")))}}},[["AIdd","5d41","9da1"]]]);