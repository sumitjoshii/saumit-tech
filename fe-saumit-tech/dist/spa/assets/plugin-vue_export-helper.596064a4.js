import{g as c,c as i}from"./QBtn.4e959f12.js";const u=[Element,String],s=[null,document,document.body,document.scrollingElement,document.documentElement];function f(t,o){let e=c(o);if(e===void 0){if(t==null)return window;e=t.closest(".scroll,.scroll-y,.overflow-auto")}return s.includes(e)?window:e}function a(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function w(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let l;function p(){if(l!==void 0)return l;const t=document.createElement("p"),o=document.createElement("div");i(t,{width:"100%",height:"200px"}),i(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(t),document.body.appendChild(o);const e=t.offsetWidth;o.style.overflow="scroll";let n=t.offsetWidth;return e===n&&(n=o.clientWidth),o.remove(),l=e-n,l}var m=(t,o)=>{const e=t.__vccOpts||t;for(const[n,r]of o)e[n]=r;return e};export{m as _,a,w as b,p as c,f as g,u as s};