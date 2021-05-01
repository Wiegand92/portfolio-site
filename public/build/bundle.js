(()=>{"use strict";function e(){}const t=e=>e;function n(e){return e()}function o(){return Object.create(null)}function s(e){e.forEach(n)}function i(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function r(e){return 0===Object.keys(e).length}function l(e){return null==e?"":e}const c="undefined"!=typeof window;let d=c?()=>window.performance.now():()=>Date.now(),u=c?e=>requestAnimationFrame(e):e;const p=new Set;function f(e){p.forEach((t=>{t.c(e)||(p.delete(t),t.f())})),0!==p.size&&u(f)}function h(e){let t;return 0===p.size&&u(f),{promise:new Promise((n=>{p.add(t={c:e,f:n})})),abort(){p.delete(t)}}}function g(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function b(){return y(" ")}function w(){return y("")}function k(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const j=new Set;let z,M=0;function E(e,t,n,o,s,i,a,r=0){const l=16.666/o;let c="{\n";for(let e=0;e<=1;e+=l){const o=t+(n-t)*i(e);c+=100*e+`%{${a(o,1-o)}}\n`}const d=c+`100% {${a(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${r}`,p=e.ownerDocument;j.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild($("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[u]||(h[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${u} ${o}ms linear ${s}ms 1 both`,M+=1,u}function T(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),s=n.length-o.length;s&&(e.style.animation=o.join(", "),M-=s,M||u((()=>{M||(j.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),j.clear())})))}function A(e){z=e}const C=[],I=[],S=[],L=[],q=Promise.resolve();let R=!1;function F(e){S.push(e)}let H=!1;const N=new Set;function O(){if(!H){H=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];A(t),P(t.$$)}for(A(null),C.length=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const t=S[e];N.has(t)||(N.add(t),t())}S.length=0}while(C.length);for(;L.length;)L.pop()();R=!1,H=!1,N.clear()}}function P(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}let W;function B(){return W||(W=Promise.resolve(),W.then((()=>{W=null}))),W}function D(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const J=new Set;let U;function X(){U={r:0,c:[],p:U}}function G(){U.r||s(U.c),U=U.p}function K(e,t){e&&e.i&&(J.delete(e),e.i(t))}function Q(e,t,n,o){if(e&&e.o){if(J.has(e))return;J.add(e),U.c.push((()=>{J.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const V={duration:0};function Y(n,o,s){let a,r,l=o(n,s),c=!1,u=0;function p(){a&&T(n,a)}function f(){const{delay:o=0,duration:s=300,easing:i=t,tick:f=e,css:g}=l||V;g&&(a=E(n,0,1,s,o,i,g,u++)),f(0,1);const m=d()+o,v=m+s;r&&r.abort(),c=!0,F((()=>D(n,!0,"start"))),r=h((e=>{if(c){if(e>=v)return f(1,0),D(n,!0,"end"),p(),c=!1;if(e>=m){const t=i((e-m)/s);f(t,1-t)}}return c}))}let g=!1;return{start(){g||(T(n),i(l)?(l=l(),B().then(f)):f())},invalidate(){g=!1},end(){c&&(p(),c=!1)}}}function Z(n,o,a){let r,l=o(n,a),c=!0;const u=U;function p(){const{delay:o=0,duration:i=300,easing:a=t,tick:p=e,css:f}=l||V;f&&(r=E(n,1,0,i,o,a,f));const g=d()+o,m=g+i;F((()=>D(n,!1,"start"))),h((e=>{if(c){if(e>=m)return p(0,1),D(n,!1,"end"),--u.r||s(u.c),!1;if(e>=g){const t=a((e-g)/i);p(1-t,t)}}return c}))}return u.r+=1,i(l)?B().then((()=>{l=l(),p()})):p(),{end(e){e&&l.tick&&l.tick(1,0),c&&(r&&T(n,r),c=!1)}}}function ee(e,t){Q(e,1,1,(()=>{t.delete(e.key)}))}let te;function ne(e){e&&e.c()}function oe(e,t,o,a){const{fragment:r,on_mount:l,on_destroy:c,after_update:d}=e.$$;r&&r.m(t,o),a||F((()=>{const t=l.map(n).filter(i);c?c.push(...t):s(t),e.$$.on_mount=[]})),d.forEach(F)}function se(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(t,n,i,a,r,l,c=[-1]){const d=z;A(t);const u=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:r,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:o(),dirty:c,skip_bound:!1};let p=!1;if(u.ctx=i?i(t,n.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return u.ctx&&r(u.ctx[e],u.ctx[e]=s)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(C.push(e),R||(R=!0,q.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],u.update(),p=!0,s(u.before_update),u.fragment=!!a&&a(u.ctx),n.target){if(n.hydrate){const e=(f=n.target,Array.from(f.childNodes));u.fragment&&u.fragment.l(e),e.forEach(v)}else u.fragment&&u.fragment.c();n.intro&&K(t.$$.fragment),oe(t,n.target,n.anchor,n.customElement),O()}var f;A(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(te=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(n).filter(i);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){se(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class ae{$destroy(){se(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function re(t){let n;return{c(){n=$("section"),n.innerHTML='<h2>About Me</h2> \n  <div class="container container__biography-container svelte-o8p2bj"><img src="./photos/profile.jpg" alt="Alex Wiegand" class="svelte-o8p2bj"/> \n\n    <h3>Biography</h3> \n    <p class="svelte-o8p2bj">A veteran of the restaurant industry for over 14 years, I have experience working as part of a team in a fast paced, ever changing environment. I also have practical experience in designing, developing, and launching a product. I am seeking to leverage this experience to enter the tech industry.\n    <br/>\n      I specialize in Web/UI/UX design with JavaScript frameworks such as React and Svelte, as well as developing full stack web applications with the PERN/MERN stacks.</p></div>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}const le=class extends ae{constructor(e){super(),ie(this,e,null,re,a,{})}};function ce(t){let n;return{c(){n=$("section"),n.innerHTML='<h2>Contact Me</h2> \n  <address class="svelte-11irfz1"><a href="mailto:wiegand.alex@gmail.com" class="svelte-11irfz1"><i class="devicon-google-plain svelte-11irfz1" title="email for alex wiegand"></i></a> \n    <a href="https://www.linkedin.com/in/alex-wiegand-10691022" class="svelte-11irfz1"><i class="devicon-linkedin-plain svelte-11irfz1" title="linkedin for alex wiegand"></i></a> \n    <a href="https://github.com/Wiegand92" class="svelte-11irfz1"><i class="devicon-github-original svelte-11irfz1" title="github for alex wiegand"></i></a></address>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}const de=class extends ae{constructor(e){super(),ie(this,e,null,ce,a,{})}};function ue(t){let n;return{c(){n=$("section"),n.innerHTML='<h2>My Skills</h2> \n  <div class="container container__devicon-container svelte-l3nzaf"><i class="devicon devicon-javascript-plain svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-css3-plain svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-html5-plain svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-react-original svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-redux-original svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-webpack-plain svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-git-plain svelte-l3nzaf"></i> \n    <div class="background svelte-l3nzaf"></div> \n    <i class="devicon devicon-bash-plain svelte-l3nzaf"></i></div>'},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}const pe=class extends ae{constructor(e){super(),ie(this,e,null,ue,a,{})}};function fe(t){let n;return{c(){n=$("section"),n.innerHTML='<a href="#projects" class="link link__projects svelte-159528q">My Projects</a> \n  <a href="/photos/Resume.pdf" class="svelte-159528q">My Resume</a> \n  <h1 class="title svelte-159528q">Alex Wiegand</h1>',_(n,"id","header"),_(n,"class","svelte-159528q")},m(e,t){m(e,n,t)},p:e,i:e,o:e,d(e){e&&v(n)}}}const he=class extends ae{constructor(e){super(),ie(this,e,null,fe,a,{})}},ge=[{name:"Hitchhiker's Cocktails",url:"https://hitchhikers-cocktails.netlify.app",photo:"./photos/hitchhikers-cocktails.png",description:"This is my site for cocktails. It includes a menu builder to automate some repetitive tasks of writing a menu, and a cost calculator that calculates the price per drink and percentage of the drink.",hover:!1},{name:"Hang Mouse",url:"https://hang-mouse.netlify.app/",photo:"./photos/hang-mouse.png",description:"This is a hangman game that I developed along with the Andrew Mead javascript bootcamp. It was originally querying an api for words, but I wanted categories, so I made a Javascript file to hold them.",hover:!1},{name:"Notes App",url:"https://notes-app-wiegand.netlify.app/",photo:"./photos/notes-app.png",description:"This is a notes app I built along with the Andrew Mead bootcamp. I learned how to use third party packages with this project, as well as began to learn webpack.",hover:!1},{name:"Todos App",url:"http://abrasive-bee.surge.sh",photo:"./photos/todos-app.png",description:"This is a simple todos app that I built along with the Andrew Mead bootcamp. I learned how to use localStorage in this project, as well as conditional rendering and sorting.",hover:!1}];function me(e){const t=e-1;return t*t*t+1}function ve(e,{delay:t=0,duration:n=400,easing:o=me}={}){const s=getComputedStyle(e),i=+s.opacity,a=parseFloat(s.height),r=parseFloat(s.paddingTop),l=parseFloat(s.paddingBottom),c=parseFloat(s.marginTop),d=parseFloat(s.marginBottom),u=parseFloat(s.borderTopWidth),p=parseFloat(s.borderBottomWidth);return{delay:t,duration:n,easing:o,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*i};height: ${e*a}px;padding-top: ${e*r}px;padding-bottom: ${e*l}px;margin-top: ${e*c}px;margin-bottom: ${e*d}px;border-top-width: ${e*u}px;border-bottom-width: ${e*p}px;`}}function $e(t){let n,o,s=t[1],i=be(t);return{c(){i.c(),n=w()},m(e,t){i.m(e,t),m(e,n,t),o=!0},p(t,o){2&o&&a(s,s=t[1])?(X(),Q(i,1,1,e),G(),i=be(t),i.c(),K(i),i.m(n.parentNode,n)):i.p(t,o)},i(e){o||(K(i),o=!0)},o(e){Q(i),o=!1},d(e){e&&v(n),i.d(e)}}}function ye(t){let n,o,s=t[1],i=we(t);return{c(){i.c(),n=w()},m(e,t){i.m(e,t),m(e,n,t),o=!0},p(t,o){2&o&&a(s,s=t[1])?(X(),Q(i,1,1,e),G(),i=we(t),i.c(),K(i),i.m(n.parentNode,n)):i.p(t,o)},i(e){o||(K(i),o=!0)},o(e){Q(i),o=!1},d(e){e&&v(n),i.d(e)}}}function be(e){let t,n,o,s,i,a;return{c(){t=$("div"),_(t,"class","project-photo svelte-hjncyi"),_(t,"style",n=`background: no-repeat url(${e[0].photo}); background-size: contain`),_(t,"alt",o=e[0].name)},m(e,n){m(e,t,n),a=!0},p(e,s){(!a||1&s&&n!==(n=`background: no-repeat url(${e[0].photo}); background-size: contain`))&&_(t,"style",n),(!a||1&s&&o!==(o=e[0].name))&&_(t,"alt",o)},i(e){a||(F((()=>{i&&i.end(1),s||(s=Y(t,ve,{delay:220})),s.start()})),a=!0)},o(e){s&&s.invalidate(),i=Z(t,ve,{delay:0,duration:200}),a=!1},d(e){e&&v(t),e&&i&&i.end()}}}function we(e){let t,n,o,s,i,a,r=e[0].description+"";return{c(){t=$("div"),n=$("p"),o=y(r),_(n,"class","svelte-hjncyi"),_(t,"class","description svelte-hjncyi")},m(e,s){m(e,t,s),g(t,n),g(n,o),a=!0},p(e,t){(!a||1&t)&&r!==(r=e[0].description+"")&&x(o,r)},i(e){a||(F((()=>{i&&i.end(1),s||(s=Y(t,ve,{delay:220})),s.start()})),a=!0)},o(e){s&&s.invalidate(),i=Z(t,ve,{delay:0,duration:200}),a=!1},d(e){e&&v(t),e&&i&&i.end()}}}function ke(e){let t,n,o,i,a,r,c,d,u,p,f,h,w,j=e[0].name+"";const z=[ye,$e],M=[];function E(e,t){return e[1]?0:1}return i=E(e),a=M[i]=z[i](e),{c(){t=$("div"),n=$("a"),o=$("div"),a.c(),r=b(),c=$("p"),d=y(j),_(c,"class",u=l(e[1]?"title hover":"title")+" svelte-hjncyi"),_(n,"href",p=e[0].url),_(n,"class","svelte-hjncyi"),_(t,"class","project-card svelte-hjncyi")},m(s,a){m(s,t,a),g(t,n),g(n,o),M[i].m(o,null),g(n,r),g(n,c),g(c,d),f=!0,h||(w=[k(t,"pointerover",e[2]),k(t,"pointerout",e[3])],h=!0)},p(e,[t]){let s=i;i=E(e),i===s?M[i].p(e,t):(X(),Q(M[s],1,1,(()=>{M[s]=null})),G(),a=M[i],a?a.p(e,t):(a=M[i]=z[i](e),a.c()),K(a,1),a.m(o,null)),(!f||1&t)&&j!==(j=e[0].name+"")&&x(d,j),(!f||2&t&&u!==(u=l(e[1]?"title hover":"title")+" svelte-hjncyi"))&&_(c,"class",u),(!f||1&t&&p!==(p=e[0].url))&&_(n,"href",p)},i(e){f||(K(a),f=!0)},o(e){Q(a),f=!1},d(e){e&&v(t),M[i].d(),h=!1,s(w)}}}function _e(e,t,n){let{project:o}=t,s=!1;return e.$$set=e=>{"project"in e&&n(0,o=e.project)},[o,s,e=>{e.target.classList.contains("project-photo")&&!1===s&&n(1,s=!0)},e=>{e.target.classList.contains("description")&&s&&n(1,s=!1)}]}const xe=class extends ae{constructor(e){super(),ie(this,e,_e,ke,a,{project:0})}};function je(e,t,n){const o=e.slice();return o[0]=t[n],o}function ze(e,t){let n,o,s;return o=new xe({props:{project:t[0]}}),{key:e,first:null,c(){n=w(),ne(o.$$.fragment),this.first=n},m(e,t){m(e,n,t),oe(o,e,t),s=!0},p(e,n){t=e},i(e){s||(K(o.$$.fragment,e),s=!0)},o(e){Q(o.$$.fragment,e),s=!1},d(e){e&&v(n),se(o,e)}}}function Me(e){let t,n,o,s,i,a,r=[],l=new Map,c=ge;const d=e=>e[0].name;for(let t=0;t<c.length;t+=1){let n=je(e,c,t),o=d(n);l.set(o,r[t]=ze(o,n))}return{c(){t=$("section"),n=$("h2"),n.textContent="My Projects",o=b(),s=$("div"),i=$("div");for(let e=0;e<r.length;e+=1)r[e].c();_(i,"class","container svelte-exfkys"),_(s,"class","outer-box svelte-exfkys")},m(e,l){m(e,t,l),g(t,n),g(t,o),g(t,s),g(s,i);for(let e=0;e<r.length;e+=1)r[e].m(i,null);a=!0},p(e,[t]){0&t&&(c=ge,X(),r=function(e,t,n,o,s,i,a,r,l,c,d,u){let p=e.length,f=i.length,h=p;const g={};for(;h--;)g[e[h].key]=h;const m=[],v=new Map,$=new Map;for(h=f;h--;){const e=u(s,i,h),o=n(e);let r=a.get(o);r?r.p(e,t):(r=c(o,e),r.c()),v.set(o,m[h]=r),o in g&&$.set(o,Math.abs(h-g[o]))}const y=new Set,b=new Set;function w(e){K(e,1),e.m(r,d),a.set(e.key,e),d=e.first,f--}for(;p&&f;){const t=m[f-1],n=e[p-1],o=t.key,s=n.key;t===n?(d=t.first,p--,f--):v.has(s)?!a.has(o)||y.has(o)?w(t):b.has(s)?p--:$.get(o)>$.get(s)?(b.add(o),w(t)):(y.add(s),p--):(l(n,a),p--)}for(;p--;){const t=e[p];v.has(t.key)||l(t,a)}for(;f;)w(m[f-1]);return m}(r,t,d,0,e,c,l,i,ee,ze,null,je),G())},i(e){if(!a){for(let e=0;e<c.length;e+=1)K(r[e]);a=!0}},o(e){for(let e=0;e<r.length;e+=1)Q(r[e]);a=!1},d(e){e&&v(t);for(let e=0;e<r.length;e+=1)r[e].d()}}}const Ee=class extends ae{constructor(e){super(),ie(this,e,null,Me,a,{})}};function Te(t){let n,o,s,i,a,r,l,c,d,u,p,f,h;return s=new he({}),r=new le({}),c=new pe({}),u=new Ee({}),f=new de({}),{c(){n=$("main"),o=$("div"),ne(s.$$.fragment),i=b(),a=$("div"),ne(r.$$.fragment),l=b(),ne(c.$$.fragment),d=b(),ne(u.$$.fragment),p=b(),ne(f.$$.fragment),_(o,"class","header svelte-45kbj1"),_(a,"class","body svelte-45kbj1"),_(n,"class","svelte-45kbj1")},m(e,t){m(e,n,t),g(n,o),oe(s,o,null),g(n,i),g(n,a),oe(r,a,null),g(a,l),oe(c,a,null),g(a,d),oe(u,a,null),g(a,p),oe(f,a,null),h=!0},p:e,i(e){h||(K(s.$$.fragment,e),K(r.$$.fragment,e),K(c.$$.fragment,e),K(u.$$.fragment,e),K(f.$$.fragment,e),h=!0)},o(e){Q(s.$$.fragment,e),Q(r.$$.fragment,e),Q(c.$$.fragment,e),Q(u.$$.fragment,e),Q(f.$$.fragment,e),h=!1},d(e){e&&v(n),se(s),se(r),se(c),se(u),se(f)}}}new class extends ae{constructor(e){super(),ie(this,e,null,Te,a,{})}}({target:document.body})})();