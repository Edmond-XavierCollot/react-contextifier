module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createContext=t.withContexts=t.withContext=t.Provide=void 0;var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"contexts",[]),c(this,"createContext",function(e,n){var o=(0,r.createContext)(n);t.contexts.push({name:e,Context:o,Consumer:o.Consumer,Provider:o.Provider})}),c(this,"getContext",function(e){return t.contexts.find(function(t){return t.name===e})}),c(this,"getContexts",function(e){return Object.entries(e).map(function(e){return i({},t.getContext(e[0]),{mapContext:e[1]})})})};t.Provide=function(e){var t=e.children,n=e.name,r=e.value,u=a.getContext(n).Provider;return o.default.createElement(u,{value:r},t)},t.withContext=function(e,t){return function(n){return function(r){var i=a.getContext(e).Consumer;return o.default.createElement(i,null,function(e){return o.default.createElement(n,u({},t(e),r))})}}},t.withContexts=function(e){return function(t){return function(n){return function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=t[0],a=c.Consumer;return t.length>1?o.default.createElement(a,null,function(o){return e(t.slice(1),n,i({},c.mapContext(o),r))}):o.default.createElement(a,null,function(e){return o.default.createElement(n,u({},c.mapContext(e),r))})}(a.getContexts(e),t,n)}}},t.createContext=a.createContext}]);