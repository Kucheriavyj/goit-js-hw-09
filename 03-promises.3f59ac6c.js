!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i={delayEl:document.querySelector('[name="delay"]'),stepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]'),formEl:document.querySelector(".form")};function l(e,n){(function(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))})(e,n).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))}))}i.formEl.addEventListener("submit",(function(e){e.preventDefault(),function(e,n,o){for(var t=1,r=e;t<=o;t+=1,r+=n)l(t,r)}(Number(i.delayEl.value),Number(i.stepEl.value),Number(i.amountEl.value))}))}();
//# sourceMappingURL=03-promises.3f59ac6c.js.map
