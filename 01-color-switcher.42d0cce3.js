!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;function r(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.setAttribute("disabled","true"),o=setInterval(r,1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(o),o=null}))}();
//# sourceMappingURL=01-color-switcher.42d0cce3.js.map
