!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1),n(2),n(3)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var o=document.querySelector("#requestForm"),r=function(e){return e.checkValidity()?(e.nextElementSibling.textContent="",!0):(e.nextElementSibling.textContent=e.validationMessage,!1)};document.querySelector("#btnSubmit").addEventListener("click",function(e){var t,n;e.preventDefault,t=o,n=!0,console.log(t.elements),r(t.elements.name)||(n=!1),r(t.elements.email)||(n=!1),n&&console.log("ok")})}]);