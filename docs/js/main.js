!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var r,o,i;e(1);function a(t){i="<span class='category'>"+t+"</span>",document.getElementById("categories-list").innerHTML+=i}function c(){"<div class='product-card'></div>",document.getElementById("product-list").innerHTML+="<div class='product-card'></div>"}$.ajax({url:"http://nit.tron.net.ua/api/category/list"}).then(function(t){r=t;for(var n=0;n<r.length;n++)a(r[n].name)}),$.ajax({url:"http://nit.tron.net.ua/api/product/list"}).then(function(t){o=t;for(var n=0;n<o.length;n++)c(),e=n,r=o[n].image_url,u[e].innerHTML+="<div class='image-container'><img class='product-image' src='"+r+"'></div>",s(n,o[n].name),l(n,o[n].price,o[n].special_price),d(n);var e,r}),$("#categories-button").click(function(){f?(p.style.display="none",f=!1):(p.style.display="block",f=!0)}),$("#basket-button").click(function(){m?(y.style.display="none",m=!1):(y.style.display="block",m=!0)});var u=document.getElementsByClassName("product-card");function s(t,n){u[t].innerHTML+="<span class='product-name'>"+n+"</span>"}function l(t,n,e){null!==e?(u[t].innerHTML+="<span class='product-price'>"+e+" UAH</span>",u[t].innerHTML+="<span class='old-product-price'>"+n+" UAH</span>"):u[t].innerHTML+="<span class='product-price'>"+n+" UAH</span>"}function d(t){u[t].innerHTML+="<div class='add-to-cart-button'> Add to basket </div>"}var p=document.getElementById("categories-list"),f=!1;var y=document.getElementById("basket-window"),m=!1},function(t,n,e){}]);