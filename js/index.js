!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);!function(){const e=document.querySelector(".moonshine-card__button"),t=document.querySelector(".moonshine-menu");e.addEventListener("click",()=>{t.classList.add("moonshine-menu_active")})}(),function(){const e=document.querySelector(".moonshine-menu__closebtn"),t=document.querySelector(".moonshine-menu");e.addEventListener("click",()=>{t.classList.remove("moonshine-menu_active")})}(),function(){const e=document.querySelector(".recipes-card__button"),t=document.querySelector(".recipes-menu");e.addEventListener("click",()=>{t.classList.add("recipes-menu_active")})}(),function(){const e=document.querySelector(".recipes-menu__closebtn"),t=document.querySelector(".recipes-menu");e.addEventListener("click",()=>{t.classList.remove("recipes-menu_active")})}(),document.querySelector(".header").addEventListener("mousemove",(function(e){document.querySelector(".header__background").style.transform="translateX("+e.clientX/150+"px) translateY("+e.clientY/150+"px)"})),document.querySelector(".header").addEventListener("mousemove",(function(e){document.querySelector(".header__title.title").style.transform="translateX("+e.clientX/-150+"px) translateY("+e.clientY/-150+"px)"})),window.addEventListener("scroll",(function(){document.querySelector(".moonshine-card__title").style.textShadow=pageYOffset/100+"px "+pageYOffset/100+"px "+pageYOffset/200+"px hsl(0, 0%, 50%)"})),window.addEventListener("scroll",(function(){let e=document.querySelector(".recipes-card__title");e.style.textShadow=pageYOffset/100+"px "+pageYOffset/100+"px "+pageYOffset/200+"px hsl(0, 0%, 50%)",e.style.marginTop=300-pageYOffset/5+"px"})),window.addEventListener("scroll",(function(){const e=document.querySelector(".moonshine-card"),t=document.querySelector(".recipes-card"),n=document.documentElement.clientHeight,o=e.getBoundingClientRect(),r=t.getBoundingClientRect();n-o.top>200&&(document.querySelector(".moonshine-card__header").style.left="0",document.querySelector(".moonshine-card__button").style.bottom="0"),n-r.top>200&&(document.querySelector(".recipes-card__header").style.right="0",document.querySelector(".recipes-card__autor").style.right="0",document.querySelector(".recipes-card__button").style.bottom="0")})),setInterval((function(){document.querySelector(".size").innerHTML=window.innerWidth+"px"+document.documentElement.clientHeight+"px"}),20)},function(e,t,n){}]);