var app=function(){"use strict";function n(){}const t=n=>n;function e(n){return n()}function c(){return Object.create(null)}function r(n){n.forEach(e)}function o(n){return"function"==typeof n}function s(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}const i="undefined"!=typeof window;let l=i?()=>window.performance.now():()=>Date.now(),u=i?n=>requestAnimationFrame(n):n;const a=new Set;function d(n){a.forEach(t=>{t.c(n)||(a.delete(t),t.f())}),0!==a.size&&u(d)}function f(n,t){n.appendChild(t)}function p(n,t,e){n.insertBefore(t,e||null)}function m(n){n.parentNode.removeChild(n)}function h(n){return document.createElement(n)}function $(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function g(n){return document.createTextNode(n)}function v(){return g(" ")}function w(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function y(n,t,e){n.classList[e?"add":"remove"](t)}function k(n,t){const e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,t),e}const x=new Set;let _,b=0;function C(n,t,e,c,r,o,s,i=0){const l=16.666/c;let u="{\n";for(let n=0;n<=1;n+=l){const c=t+(e-t)*o(n);u+=100*n+`%{${s(c,1-c)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}(a)}_${i}`,f=n.ownerDocument;x.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(h("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const $=n.style.animation||"";return n.style.animation=`${$?$+", ":""}${d} ${c}ms linear ${r}ms 1 both`,b+=1,d}function z(n,t){const e=(n.style.animation||"").split(", "),c=e.filter(t?n=>n.indexOf(t)<0:n=>-1===n.indexOf("__svelte")),r=e.length-c.length;r&&(n.style.animation=c.join(", "),b-=r,b||u(()=>{b||(x.forEach(n=>{const t=n.__svelte_stylesheet;let e=t.cssRules.length;for(;e--;)t.deleteRule(e);n.__svelte_rules={}}),x.clear())}))}function M(n){_=n}function L(){const n=function(){if(!_)throw new Error("Function called outside component initialization");return _}();return(t,e)=>{const c=n.$$.callbacks[t];if(c){const r=k(t,e);c.slice().forEach(t=>{t.call(n,r)})}}}const E=[],j=[],S=[],H=[],A=Promise.resolve();let F=!1;function N(n){S.push(n)}let O=!1;const P=new Set;function R(){if(!O){O=!0;do{for(let n=0;n<E.length;n+=1){const t=E[n];M(t),q(t.$$)}for(E.length=0;j.length;)j.pop()();for(let n=0;n<S.length;n+=1){const t=S[n];P.has(t)||(P.add(t),t())}S.length=0}while(E.length);for(;H.length;)H.pop()();F=!1,O=!1,P.clear()}}function q(n){if(null!==n.fragment){n.update(),r(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(N)}}let I;function T(n,t,e){n.dispatchEvent(k(`${t?"intro":"outro"}${e}`))}const V=new Set;let B;function D(){B={r:0,c:[],p:B}}function W(){B.r||r(B.c),B=B.p}function G(n,t){n&&n.i&&(V.delete(n),n.i(t))}function J(n,t,e,c){if(n&&n.o){if(V.has(n))return;V.add(n),B.c.push(()=>{V.delete(n),c&&(e&&n.d(1),c())}),n.o(t)}}const K={duration:0};function Q(e,c,s,i){let f=c(e,s),p=i?0:1,m=null,h=null,$=null;function g(){$&&z(e,$)}function v(n,t){const e=n.b-p;return t*=Math.abs(e),{a:p,b:n.b,d:e,duration:t,start:n.start,end:n.start+t,group:n.group}}function w(c){const{delay:o=0,duration:s=300,easing:i=t,tick:w=n,css:y}=f||K,k={start:l()+o,b:c};c||(k.group=B,B.r+=1),m?h=k:(y&&(g(),$=C(e,p,c,s,o,i,y)),c&&w(0,1),m=v(k,s),N(()=>T(e,c,"start")),function(n){let t;0===a.size&&u(d),new Promise(e=>{a.add(t={c:n,f:e})})}(n=>{if(h&&n>h.start&&(m=v(h,s),h=null,T(e,m.b,"start"),y&&(g(),$=C(e,p,m.b,m.duration,0,i,f.css))),m)if(n>=m.end)w(p=m.b,1-p),T(e,m.b,"end"),h||(m.b?g():--m.group.r||r(m.group.c)),m=null;else if(n>=m.start){const t=n-m.start;p=m.a+m.d*i(t/m.duration),w(p,1-p)}return!(!m&&!h)}))}return{run(n){o(f)?(I||(I=Promise.resolve(),I.then(()=>{I=null})),I).then(()=>{f=f(),w(n)}):w(n)},end(){g(),m=h=null}}}function U(n){n&&n.c()}function X(n,t,c){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=n.$$;s&&s.m(t,c),N(()=>{const t=i.map(e).filter(o);l?l.push(...t):r(t),n.$$.on_mount=[]}),u.forEach(N)}function Y(n,t){const e=n.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(n,t){-1===n.$$.dirty[0]&&(E.push(n),F||(F=!0,A.then(R)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function nn(t,e,o,s,i,l,u=[-1]){const a=_;M(t);const d=e.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:i,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:c(),dirty:u};let p=!1;if(f.ctx=o?o(t,d,(n,e,...c)=>{const r=c.length?c[0]:e;return f.ctx&&i(f.ctx[n],f.ctx[n]=r)&&(f.bound[n]&&f.bound[n](r),p&&Z(t,n)),e}):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);f.fragment&&f.fragment.l(n),n.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&G(t.$$.fragment),X(t,e.target,e.anchor),R()}M(a)}class tn{$destroy(){Y(this,1),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}function en(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function cn(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}function rn(n,{delay:e=0,duration:c=400,easing:r=t}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:c,easing:r,css:n=>"opacity: "+n*o}}function on(n,{delay:t=0,speed:e,duration:c,easing:r=en}){const o=n.getTotalLength();return void 0===c?c=void 0===e?800:o/e:"function"==typeof c&&(c=c(o)),{delay:t,duration:c,easing:r,css:(n,t)=>`stroke-dasharray: ${n*o} ${t*o}`}}function sn(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M164.3,79.6c-4.3-9.3-9.5-17.1-15.7-23.4S135.2,45.1,127,41.8s-17.3-4.9-27.4-4.9c-15.2,0-28.3,3.7-39.3,11.1\n      S40.9,66.1,35.2,80.2c-3.3,8.5-5.8,18.7-7.3,30.5c-1.6,11.8-2.3,25.1-2.3,39.8c0,11.4,0.7,22,2.1,31.9c1.4,9.8,3.6,18.8,6.7,26.9\n      c6,14.8,14.8,26.5,26.6,34.9s25.1,12.6,39.9,12.6c12.9,0,24.6-3.1,35.2-9.4s19.1-15.1,25.8-26.7c5.3-9.4,8.9-19.8,10.8-31.3\n      c2-11.5,2.9-25.3,2.9-41.3C175.4,118.6,171.7,95.8,164.3,79.6z\n      M132.2,190.8c-2.1,11.6-5.6,20.6-10.7,26.8\n      c-5.1,6.3-12.1,9.4-21.1,9.4c-8.7,0-15.6-3-20.7-9s-8.7-14.9-10.8-26.6s-3.2-26.8-3.2-45.1c0-27,2.5-47.1,7.5-60.1\n      s14-19.5,26.9-19.5c9,0,16,2.9,21.1,8.7s8.7,14.4,10.8,25.8s3.2,26,3.2,43.9C135.3,164,134.3,179.2,132.2,190.8L132.2,190.8z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function ln(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M166.4,99.3c-3.6-13.3-8.8-24.3-15.5-33c-6.7-8.7-15-15.4-24.9-20c-9.9-4.6-21.1-6.9-33.7-6.9\n      c-10.9,0-20.9,1.9-30,5.6c-9,3.7-16.8,8.9-23.4,15.5C32.4,67.1,27.4,75,23.9,84c-3.5,9-5.3,18.6-5.3,28.6c0,9.4,1.6,18.3,4.7,26.9\n      c3.1,8.5,7.6,16,13.4,22.4c5.8,6.4,12.7,11.4,20.7,14.9c8,3.6,16.5,5.3,25.7,5.3c9.7,0,18.5-1.9,26.4-5.8c8-3.9,15.2-9.6,21.6-17.2\n      c-1.4,26.5-5.6,44.9-12.6,55.4c-3.5,5.2-7.8,9.2-12.7,12c-5,2.8-10.3,4.2-15.8,4.2c-6.3,0-11.9-1.8-16.8-5.3\n      c-5-3.6-8.5-8.3-10.7-14.1c-1.8-4.8-4.3-8.4-7.8-10.8c-3.4-2.4-7.3-3.6-11.6-3.6c-4.7,0-8.5,1.6-11.6,4.8c-3,3.2-4.5,6.9-4.5,11\n      c0,6.6,2.4,13.5,7.3,20.7c4.9,7.2,12,13.2,21.4,18s20.4,7.3,33.1,7.3c12.9,0,24.4-2.4,34.6-7.1c10.2-4.7,18.9-12,26.1-21.7\n      c7.3-9.7,12.8-21.7,16.6-36c3.8-14.3,5.7-30.8,5.7-49.6C171.8,127.6,170,112.6,166.4,99.3L166.4,99.3z\n      M122.5,135.8\n      c-3.5,6.1-8,10.7-13.5,13.8c-5.5,3.2-11.3,4.8-17.4,4.8c-9.9,0-18-3.9-24.5-11.6c-6.4-7.7-9.7-18.1-9.7-31.1\n      c0-13.1,3.2-23.6,9.7-31.6c6.4-8,14.3-11.9,23.6-11.9c5.4,0,10.3,1.2,14.9,3.5s8.4,5.6,11.7,9.7c3.3,4.1,5.8,9,7.6,14.6\n      c1.8,5.6,2.7,11.7,2.7,18.4C127.7,122.6,126,129.7,122.5,135.8z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function un(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M170,170.4c-2.8-6.9-6.9-12.9-12.4-18.2c-5.5-5.2-12.4-9.4-20.7-12.7c9.8-4.8,17.1-10.9,22-18.5\n      c4.9-7.5,7.4-16.1,7.4-25.6c0-7.5-1.4-14.6-4.2-21.3c-2.8-6.7-7.2-12.7-13-18c-5.9-5.3-13.2-9.5-22-12.5c-8.8-3-19-4.5-30.6-4.5\n      c-13.8,0-25.8,2.6-36.1,7.8C50.1,52.1,42.3,59,37,67.6c-5.3,8.6-8,17.8-8,27.6c0,20.2,10,35,30,44.4c-24.8,9.8-37.2,27.8-37.2,54.1\n      c0,12.3,2.9,23.4,8.8,33.3c5.9,9.9,14.6,17.7,26.1,23.4c11.5,5.7,25.4,8.5,41.6,8.5c15.6,0,29.2-2.8,40.7-8.5\n      c11.5-5.7,20.3-13.5,26.2-23.5c6-10,8.9-21.2,8.9-33.5C174.2,185,172.8,177.3,170,170.4L170,170.4z\n      M75.2,75.7\n      c5.6-5.7,13-8.6,22.2-8.6c6.1,0,11.4,1.3,16.1,4s8.3,6.3,10.9,10.8c2.6,4.6,3.9,9.8,3.9,15.5c0,4.3-0.7,8.2-2.2,11.8\n      c-1.5,3.6-3.5,6.6-6.2,9.2c-2.7,2.6-5.9,4.6-9.7,6.1c-3.8,1.5-7.9,2.2-12.5,2.2c-9.1,0-16.5-2.8-22.3-8.3\n      c-5.8-5.5-8.6-12.4-8.6-20.7C66.8,88.7,69.6,81.4,75.2,75.7L75.2,75.7z\n      M129.4,212.4c-3.1,5.9-7.4,10.4-12.9,13.6\n      c-5.5,3.2-11.6,4.8-18.5,4.8c-6.7,0-12.8-1.6-18.3-4.8c-5.5-3.2-9.8-7.7-13-13.5c-3.2-5.8-4.8-12.5-4.8-20.1\n      c0-11.9,3.4-21.2,10.1-27.8c6.7-6.6,15.1-10,25-10c7,0,13.4,1.5,19,4.5c5.7,3,10.1,7.4,13.2,13c3.1,5.7,4.7,12.3,4.7,19.9\n      S132.5,206.6,129.4,212.4L129.4,212.4z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function an(n){let t,e,c,r;return{c(){t=$("path"),c=g("\n    />"),w(t,"d","M173.6,47.2c-4.2-2.9-11-4.4-20.4-4.4H55.7c-7.7,0-13.7,1-18,2.9c-4.3,2-6.4,6.3-6.4,13c0,6.3,2,11,6.1,14\n      c4.1,3,10.2,4.5,18.4,4.5H134c-12.3,15.6-22.9,31.3-31.9,47.1c-8.9,15.8-16.4,31.2-22.3,46.1c-6,15-10.3,27.9-12.9,38.6\n      c-2.6,10.7-4,19.2-4,25.5c0,8.1,1.8,14.2,5.4,18.4c3.6,4.1,8.4,6.2,14.4,6.2c6.2,0,11.3-1.9,15-5.8c3.8-3.9,6.7-10.8,8.7-20.7\n      c0.9-4.3,1.9-10.5,3.1-18.6c1.2-8.1,2.2-14.7,3.2-19.8c1-5.1,2.6-11.5,5-19.2c5.6-17.5,11.7-32.3,18.4-44.4\n      c6.7-12.1,13.2-22.2,19.5-30.4c6.3-8.2,11.9-15.6,16.8-22.3c4.9-6.7,7.4-12.2,7.4-16.3C179.9,54.9,177.8,50.1,173.6,47.2\n      L173.6,47.2z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),p(n,c,e),r=!0},i(c){r||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),r=!0)},o(c){e||(e=Q(t,on,n[1],!1)),e.run(0),r=!1},d(n){n&&m(t),n&&e&&e.end(),n&&m(c)}}}function dn(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M171.2,158.7c-3.2-8.7-7.8-16.2-13.7-22.6c-5.9-6.4-12.8-11.3-20.7-14.8c-7.9-3.5-16.4-5.2-25.7-5.2\n      c-9.7,0-18.4,1.9-26.2,5.7c-7.8,3.8-15,9.7-21.7,17.6c1.3-26.6,5.5-45,12.6-55.4c3.5-5.1,7.8-9.1,13-12.1c5.1-3,10.3-4.5,15.5-4.5\n      c6.4,0,12.1,1.8,17,5.3c4.9,3.6,8.4,8.3,10.7,14.1c1.7,4.6,4.2,8.2,7.8,10.8c3.5,2.6,7.3,3.9,11.4,3.9c4.7,0,8.5-1.6,11.6-4.9\n      c3-3.3,4.5-6.9,4.5-10.9c0-6.6-2.4-13.6-7.3-20.8c-4.8-7.2-12-13.3-21.5-18.2c-9.5-4.9-20.5-7.3-33-7.3c-13,0-24.6,2.4-34.7,7.3\n      C60.6,51.6,52,58.8,44.8,68.4c-7.1,9.6-12.6,21.6-16.4,36.2c-3.8,14.6-5.7,31.1-5.7,49.5c0,22.7,3.1,41.8,9.4,57.5\n      s15.4,27.5,27.3,35.5c11.9,8,26.1,12,42.5,12c14.3,0,27-3.1,38.3-9.4s20.1-15.1,26.4-26.3c6.3-11.2,9.4-23.7,9.4-37.5\n      C176.1,176.4,174.5,167.3,171.2,158.7L171.2,158.7z\n      M127.3,218.2c-6.4,8.1-14.6,12.1-24.5,12.1c-10.4,0-18.9-4.4-25.8-13.2\n      c-6.8-8.8-10.3-19.8-10.3-33c0-8.2,1.7-15.4,5.1-21.5c3.4-6.1,7.8-10.8,13.3-14c5.5-3.2,11.3-4.8,17.4-4.8c6.3,0,12.2,1.7,17.4,5.1\n      s9.4,8.3,12.5,14.6c3,6.4,4.5,14,4.5,22.9C137,199.6,133.7,210.1,127.3,218.2L127.3,218.2z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function fn(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M170.5,155.1c-3.5-8.5-8.4-15.8-14.5-22c-6.2-6.2-13.3-11.1-21.5-14.6c-8.2-3.5-16.9-5.3-26.3-5.3\n      c-11.7,0-24.5,3.7-38.4,11.1l8.4-47.5h69.6c7.2,0,12.7-1.6,16.4-4.7c3.7-3.1,5.6-7.2,5.6-12.3c0-11.6-7.6-17.4-22.9-17.4H69.6\n      c-8.4,0-14.5,1.9-18.2,5.7c-3.7,3.8-6.3,9.9-7.6,18.3l-12.3,70.2c-1.1,6.2-1.6,9.5-1.6,10c0,4.4,1.9,8.3,5.6,11.8\n      c3.7,3.5,8,5.2,12.7,5.2c4.4,0,10-2.6,16.8-7.7c6.8-5.1,12-8.7,15.6-10.8c3.6-2.1,9.6-3.1,18-3.1c6.8,0,13,1.6,18.6,4.9\n      c5.6,3.3,10,8.2,13.3,14.9c3.3,6.6,5,14.6,5,24c0,8.7-1.5,16.5-4.6,23.3c-3.1,6.8-7.4,12.2-13.1,16.1c-5.7,3.9-12.3,5.9-19.8,5.9\n      c-8.2,0-15.6-2.4-22.3-7.3c-6.6-4.8-11.9-11.6-15.8-20.3c-4-9.5-10.1-14.2-18.3-14.2c-4.8,0-8.8,1.7-11.9,5.1\n      c-3.2,3.4-4.8,7-4.8,10.8c0,6.3,2.3,13.5,6.8,21.9S44,243,54.9,249.5c10.9,6.4,25.1,9.7,42.6,9.7c15.6,0,29.4-3.4,41.4-10.3\n      c12-6.8,21.1-16.1,27.5-27.7c6.3-11.6,9.5-24.5,9.5-38.7C175.8,172.8,174,163.6,170.5,155.1L170.5,155.1z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function pn(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M175,179.9c-4.5-2.1-10.6-3.1-18.1-3.1h-6.3V63.4c0-17-7.4-25.5-22.3-25.5c-4.6,0-8.5,1.5-11.8,4.6\n      c-3.3,3.1-7.4,8-12.5,14.9L26.4,161.3c-2.1,2.8-4,5.2-5.4,7.2c-1.5,2-2.9,4-4.2,6.1c-1.4,2.1-2.4,4.1-3.1,6c-0.7,1.9-1,3.8-1,5.6\n      c0,7.2,2.3,12.9,7,17.1c4.6,4.2,11.6,6.3,20.9,6.3H114v27.2c0,7.3,1.7,12.9,5.1,16.6s7.8,5.6,13.3,5.6c5.6,0,10-1.8,13.3-5.5\n      c3.3-3.7,5-9.3,5-16.8v-27.2h8.9c7.4,0,13-1.3,16.7-3.9c3.7-2.6,5.6-6.7,5.6-12.4C181.8,186.4,179.5,181.9,175,179.9L175,179.9z\n      M114,176.8H51l63-85.1V176.8z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function mn(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M169.6,169.7c-2.6-6.4-6.6-12.2-11.8-17.5c-5.2-5.3-11.6-10-19.3-14.1c7.9-6.6,14-13.5,18.2-20.4\n      c4.2-7,6.4-15.4,6.4-25.1c0-7.4-1.5-14.4-4.4-20.8s-7.3-12.1-13-17c-5.8-4.9-12.5-8.6-20.4-11.2c-7.8-2.6-16.5-3.9-25.9-3.9\n      c-10.8,0-20.7,1.5-29.4,4.6s-16.1,7.2-22,12.2c-5.9,5.1-10.4,10.4-13.5,16c-3.1,5.6-4.6,11-4.6,16c0,5.3,1.6,9.5,4.9,12.7\n      c3.3,3.2,6.9,4.8,10.8,4.8c3.3,0,6.2-0.6,8.8-1.8c2.5-1.2,4.3-2.8,5.3-4.8c1.7-3.8,3.5-7.9,5.5-12.2c2-4.3,4.1-7.8,6.4-10.5\n      c2.2-2.7,5.3-4.9,9.2-6.6c3.9-1.7,8.8-2.5,14.7-2.5c8.8,0,15.8,2.7,20.9,8.1c5.2,5.4,7.8,11.9,7.8,19.4c0,9.9-3.2,17.4-9.7,22.7\n      c-6.5,5.3-14.2,7.9-23.2,7.9h-6c-6.9,0-12.2,1.4-15.7,4.3c-3.5,2.9-5.3,6.7-5.3,11.4c0,4.8,1.5,8.5,4.4,11.2c2.9,2.7,7.1,4,12.5,4\n      c1.2,0,3.8-0.2,7.9-0.6c4.1-0.4,7.1-0.6,9.1-0.6c11.1,0,19.8,3.2,26.1,9.7c6.2,6.5,9.4,15.5,9.4,26.9c0,7.7-1.8,14.5-5.5,20.4\n      s-8.3,10.3-13.9,13.3c-5.6,3-11.5,4.5-17.5,4.5c-10.5,0-18.7-3.3-24.5-9.9c-5.8-6.6-11.3-16.7-16.3-30.2c-0.8-2.2-2.4-4.2-5-5.8\n      c-2.5-1.6-5.2-2.4-7.9-2.4c-5.5,0-10,1.7-13.7,5.2c-3.7,3.5-5.5,8-5.5,13.7c0,4.4,1.5,10,4.6,16.7s7.6,13.3,13.6,19.6\n      s13.6,11.5,22.9,15.7c9.3,4.2,19.8,6.3,31.5,6.3c11.5,0,22-1.8,31.6-5.5s17.7-8.7,24.7-15.2c6.9-6.5,12.2-13.9,15.7-22.2\n      c3.6-8.3,5.3-16.9,5.3-25.8C173.6,183,172.3,176.1,169.6,169.7L169.6,169.7z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function hn(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M169.8,225.6c-4-3.1-9.8-4.7-17.4-4.7H75.9c2.4-3.7,4.8-6.9,7.2-9.5c5.5-6.6,15.6-16,30.2-28\n      c14.7-12,25.2-20.8,31.4-26.4c6.2-5.6,12.4-13.4,18.4-23.3c6-9.9,9-20.9,9-33c0-7.7-1.4-15.2-4.3-22.3c-2.9-7.2-6.9-13.5-12.1-19\n      c-5.2-5.5-11.2-9.8-18-12.9c-10.5-4.7-23.3-7-38.2-7c-12.4,0-23.2,1.8-32.4,5.5s-16.8,8.5-22.9,14.4c-6,6-10.5,12.6-13.6,19.9\n      c-3,7.3-4.5,14.4-4.5,21.1c0,5.6,1.6,10,4.8,13.2s7.3,4.8,12.2,4.8c5.6,0,9.8-1.8,12.7-5.3c2.9-3.5,5.5-8.5,7.8-15.1\n      c2.3-6.5,3.9-10.5,4.9-12c7.3-11.2,17.4-16.8,30.2-16.8c6.1,0,11.6,1.4,16.8,4.1c5.1,2.7,9.2,6.6,12.2,11.5\n      c3,4.9,4.5,10.5,4.5,16.8c0,5.8-1.4,11.6-4.2,17.7s-6.8,11.9-12.2,17.6c-5.3,5.7-12,11.4-20,17.1c-4.5,3-12,9.4-22.4,19\n      c-10.5,9.6-22.2,21.2-35.2,34.6c-3.1,3.3-6,7.9-8.6,13.7c-2.6,5.8-4,10.5-4,14c0,5.5,2.1,10.2,6.2,14.3c4.1,4.1,9.8,6.1,17.1,6.1\n      h107.8c6.4,0,11.3-1.7,14.4-5c3.2-3.3,4.8-7.4,4.8-12.2C175.8,233,173.8,228.7,169.8,225.6L169.8,225.6z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function $n(n){let t,e,c;return{c(){t=$("path"),w(t,"d","M128.8,45.4c-3.1-4-7.3-6-12.5-6c-4.6,0-7.7,0.9-9.4,2.6c-1.7,1.8-5.2,6.4-10.7,14.1\n      c-5.5,7.6-11.7,14.5-18.8,20.7c-7.1,6.2-16.5,12-28.3,17.6c-7.9,3.7-13.4,6.7-16.6,9.1c-3.1,2.3-4.7,6-4.7,11\n      c0,4.3,1.6,8.1,4.8,11.4c3.2,3.3,6.8,4.9,10.9,4.9c8.6,0,25.3-9.5,50.1-28.6v133.3c0,7.8,1.8,13.7,5.4,17.7c3.6,4,8.4,6,14.4,6\n      c13.4,0,20.1-9.8,20.1-29.4V62C133.5,54.9,131.9,49.4,128.8,45.4z"),w(t,"fill","none"),w(t,"stroke","white"),w(t,"stroke-width","5px"),w(t,"stroke-linejoin","round")},m(n,e){p(n,t,e),c=!0},i(r){c||(N(()=>{e||(e=Q(t,on,n[1],!0)),e.run(1)}),c=!0)},o(r){e||(e=Q(t,on,n[1],!1)),e.run(0),c=!1},d(n){n&&m(t),n&&e&&e.end()}}}function gn(n){let t,e,c,r;const o=[$n,hn,mn,pn,fn,dn,an,un,ln,sn],s=[];function i(n,t){return 1===n[0]?0:2===n[0]?1:3===n[0]?2:4===n[0]?3:5===n[0]?4:6===n[0]?5:7===n[0]?6:8===n[0]?7:9===n[0]?8:0===n[0]?9:-1}return~(e=i(n))&&(c=s[e]=o[e](n)),{c(){var n,e,r;t=$("svg"),c&&c.c(),w(t,"version","1.1"),w(t,"xmlns","http://www.w3.org/2000/svg"),w(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),w(t,"x","0px"),w(t,"y","0px"),w(t,"viewBox","0 0 206.2 296.2"),n="enable-background",e="new 0 0 206.2 296.2",t.style.setProperty(n,e,r?"important":""),w(t,"xml:space","preserve")},m(n,c){p(n,t,c),~e&&s[e].m(t,null),r=!0},p(n,[r]){let l=e;e=i(n),e!==l&&(c&&(D(),J(s[l],1,1,()=>{s[l]=null}),W()),~e?(c=s[e],c||(c=s[e]=o[e](n),c.c()),G(c,1),c.m(t,null)):c=null)},i(n){r||(G(c),r=!0)},o(n){J(c),r=!1},d(n){n&&m(t),~e&&s[e].d()}}}function vn(n,t,e){let{value:c=0}=t;const r={duration:1e3,delay:0,easing:cn};return n.$set=n=>{"value"in n&&e(0,c=n.value)},[c,r]}class wn extends tn{constructor(n){super(),nn(this,n,vn,gn,s,{value:0})}}function yn(n){let t,e,c,r,o,s,i,l,u,a,d,$,g,y,k;const x=new wn({props:{value:n[3]}}),_=new wn({props:{value:n[2]}}),b=new wn({props:{value:n[1]}}),C=new wn({props:{value:n[0]}});return{c(){t=h("section"),e=h("div"),c=h("div"),U(x.$$.fragment),r=v(),o=h("div"),U(_.$$.fragment),s=v(),i=h("span"),i.textContent="min",l=v(),u=h("div"),a=h("div"),U(b.$$.fragment),d=v(),$=h("div"),U(C.$$.fragment),g=v(),y=h("span"),y.textContent="sec",w(c,"class","number svelte-169dt91"),w(o,"class","number svelte-169dt91"),w(i,"class","unit svelte-169dt91"),w(e,"class","time-wrapper svelte-169dt91"),w(a,"class","number svelte-169dt91"),w($,"class","number svelte-169dt91"),w(y,"class","unit svelte-169dt91"),w(u,"class","time-wrapper svelte-169dt91"),w(t,"class","svelte-169dt91")},m(n,m){p(n,t,m),f(t,e),f(e,c),X(x,c,null),f(e,r),f(e,o),X(_,o,null),f(e,s),f(e,i),f(t,l),f(t,u),f(u,a),X(b,a,null),f(u,d),f(u,$),X(C,$,null),f(u,g),f(u,y),k=!0},p(n,[t]){const e={};8&t&&(e.value=n[3]),x.$set(e);const c={};4&t&&(c.value=n[2]),_.$set(c);const r={};2&t&&(r.value=n[1]),b.$set(r);const o={};1&t&&(o.value=n[0]),C.$set(o)},i(n){k||(G(x.$$.fragment,n),G(_.$$.fragment,n),G(b.$$.fragment,n),G(C.$$.fragment,n),k=!0)},o(n){J(x.$$.fragment,n),J(_.$$.fragment,n),J(b.$$.fragment,n),J(C.$$.fragment,n),k=!1},d(n){n&&m(t),Y(x),Y(_),Y(b),Y(C)}}}function kn(n,t,e){let{time:c=0}=t,r=0,o=0,s=0,i=0;return n.$set=n=>{"time"in n&&e(4,c=n.time)},n.$$.update=()=>{if(26&n.$$.dirty){let n=Math.floor(c/60),t=c%60;e(1,o=Math.floor(t/10)),e(0,r=t-10*o),e(3,i=Math.floor(n/10)),e(2,s=n-10*i)}},[r,o,s,i,c]}class xn extends tn{constructor(n){super(),nn(this,n,kn,yn,s,{time:4})}}function _n(t){let e,c,r;return{c(){e=h("button"),e.textContent=""+bn,w(e,"class","svelte-uqiigb")},m(n,o){var s,i,l,u;p(n,e,o),c||(s=e,i="click",l=t[0],s.addEventListener(i,l,u),r=()=>s.removeEventListener(i,l,u),c=!0)},p:n,i:n,o:n,d(n){n&&m(e),c=!1,r()}}}let bn="Start";function Cn(n){const t=L();return[function(){t("start",{})}]}class zn extends tn{constructor(n){super(),nn(this,n,Cn,_n,s,{})}}function Mn(t){let e;return{c(){e=h("footer"),e.innerHTML='<div>\n    Icons made by\n    <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">\n      Alfredo Hernandez\n    </a>\n    from\n    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',w(e,"class","svelte-12rgwfn")},m(n,t){p(n,e,t)},p:n,i:n,o:n,d(n){n&&m(e)}}}class Ln extends tn{constructor(n){super(),nn(this,n,null,Mn,s,{})}}function En(t){let e;return{c(){e=h("h1"),e.textContent="Fancy Stop Watch",w(e,"class","svelte-1kackgz")},m(n,t){p(n,e,t)},p:n,i:n,o:n,d(n){n&&m(e)}}}class jn extends tn{constructor(n){super(),nn(this,n,null,En,s,{})}}function Sn(t){let e;const c=new zn({});return c.$on("start",t[3]),{c(){U(c.$$.fragment)},m(n,t){X(c,n,t),e=!0},p:n,i(n){e||(G(c.$$.fragment,n),e=!0)},o(n){J(c.$$.fragment,n),e=!1},d(n){Y(c,n)}}}function Hn(n){let t,e,c;const r=new xn({props:{time:n[0]}});return{c(){t=h("div"),U(r.$$.fragment)},m(n,e){p(n,t,e),X(r,t,null),c=!0},p(n,t){const e={};1&t&&(e.time=n[0]),r.$set(e)},i(n){c||(G(r.$$.fragment,n),N(()=>{e||(e=Q(t,rn,{duration:500},!0)),e.run(1)}),c=!0)},o(n){J(r.$$.fragment,n),e||(e=Q(t,rn,{duration:500},!1)),e.run(0),c=!1},d(n){n&&m(t),Y(r),n&&e&&e.end()}}}function An(n){let t,e,c,r,o,s,i;const l=new jn({}),u=[Hn,Sn],a=[];function d(n,t){return null!==n[1]?0:1}r=d(n),o=a[r]=u[r](n);const $=new Ln({});return{c(){t=h("main"),e=h("section"),U(l.$$.fragment),c=v(),o.c(),s=v(),U($.$$.fragment),w(e,"class","svelte-180pv9g"),w(t,"class","svelte-180pv9g"),y(t,"done",n[2])},m(n,o){p(n,t,o),f(t,e),X(l,e,null),f(e,c),a[r].m(e,null),p(n,s,o),X($,n,o),i=!0},p(n,[c]){let s=r;r=d(n),r===s?a[r].p(n,c):(D(),J(a[s],1,1,()=>{a[s]=null}),W(),o=a[r],o||(o=a[r]=u[r](n),o.c()),G(o,1),o.m(e,null)),4&c&&y(t,"done",n[2])},i(n){i||(G(l.$$.fragment,n),G(o),G($.$$.fragment,n),i=!0)},o(n){J(l.$$.fragment,n),J(o),J($.$$.fragment,n),i=!1},d(n){n&&m(t),Y(l),a[r].d(),n&&m(s),Y($,n)}}}function Fn(n,t,e){let c=240,r=null,o=!1;function s(){e(0,c-=1),0===c&&(clearInterval(r),e(2,o=!0))}return[c,r,o,function(){null===r&&e(1,r=setInterval(s,1e3))}]}return new class extends tn{constructor(n){super(),nn(this,n,Fn,An,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
