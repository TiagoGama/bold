(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"3BQx":function(n,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dropdown/DropdownExample.demo",function(){return e("n7nP")}])},n7nP:function(n,o,e){"use strict";e.r(o),e.d(o,"default",function(){return p});var t=e("mXGw"),r=e.n(t),i=e("c2a7"),c=r.a.createElement;function p(){var n=Object(t.useRef)(),o=Object(t.useState)(!1),e=o[0],p=o[1];return c(r.a.Fragment,null,c(i.Button,{innerRef:n,onClick:function(){return p(!0)},size:"small",kind:"primary",skin:"outline"},"Options"),c(i.Dropdown,{anchorRef:n,open:e,onClose:function(){p(!1),n.current.focus()},popperProps:{placement:"right-start"}},c(i.DropdownItem,{onClick:console.log},"Item #1"),c(i.Tooltip,{text:"Disabled item"},c(i.DropdownItem,{onClick:console.log,disabled:!0},"Item #2")),c(i.DropdownDivider,null),c(i.DropdownItem,{component:"a",href:"/"},"Link item"),c(i.DropdownItem,{type:"danger",onClick:console.log},"Item #3")))}}},[["3BQx",1,0]]]);