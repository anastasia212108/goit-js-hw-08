!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function O(e){return c=e,l=setTimeout(h,t),s?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,m&&o?b(e):(o=r=void 0,u)}function I(){var e=p(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return O(f);if(d)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),I.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},I.flush=function(){return void 0===l?u:w(p())},I}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})},console.log("hello");var O=document.querySelector(".feedback-form"),j=(document.querySelector("button"),"feedback-form-state");O.addEventListener("input",e(t)((function(e){var t={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem(j,JSON.stringify(t))}),500)),O.addEventListener("submit",(function(e){console.log(JSON.parse(localStorage.getItem(j))),e.preventDefault(),localStorage.removeItem(j),localStorage.getItem(j)?O.value=localStorage.getItem(j):(O.elements.email.value="",O.elements.message.value="")})),document.addEventListener("DOMContentLoaded",(function(e){localStorage.getItem(j)&&(O.elements.email.value=JSON.parse(localStorage.getItem(j)).email||"",O.elements.message.value=JSON.parse(localStorage.getItem(j)).message||"")})),console.log("we")}();
//# sourceMappingURL=03-feedback.2e6c9a28.js.map
