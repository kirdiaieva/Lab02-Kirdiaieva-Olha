!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r,o,i,u;n(1);function c(t){i="<span class='category'>"+t+"</span>",document.getElementById("categories-list").innerHTML+=i}function l(t){u="<div class='product-card'><img class='product-image' src='"+t+"'></div>",document.getElementById("product-list").innerHTML+=u}$.ajax({url:"http://nit.tron.net.ua/api/category/list"}).then(function(t){r=t;for(var e=0;e<r.length;e++)c(r[e].name)}),$.ajax({url:"http://nit.tron.net.ua/api/product/list"}).then(function(t){o=t;for(var e=0;e<o.length;e++)l(o[e].image_url)}),$("#categories-button").click(function(){s?(a.style.display="none",s=!1):(a.style.display="block",s=!0)}),$("#basket-button").click(function(){f?(d.style.display="none",f=!1):(d.style.display="block",f=!0)});var a=document.getElementById("categories-list"),s=!1;var d=document.getElementById("basket-window"),f=!1},function(t,e,n){}]);