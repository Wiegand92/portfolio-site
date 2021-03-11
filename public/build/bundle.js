(()=>{"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function a(e){return 0===Object.keys(e).length}function l(e,n){e.appendChild(n)}function c(e,n,t){e.insertBefore(n,t||null)}function r(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function f(){return u(" ")}function h(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}let p;function v(e){p=e}new Set,new Set;const m=[],g=[],$=[],b=[],y=Promise.resolve();let w=!1;function k(e){$.push(e)}let _=!1;const x=new Set;function j(){if(!_){_=!0;do{for(let e=0;e<m.length;e+=1){const n=m[e];v(n),M(n.$$)}for(v(null),m.length=0;g.length;)g.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];x.has(n)||(x.add(n),n())}$.length=0}while(m.length);for(;b.length;)b.pop()();w=!1,_=!1,x.clear()}}function M(e){if(null!==e.fragment){e.update(),s(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(k)}}const S=new Set;let C;function T(e,n){e&&e.i&&(S.delete(e),e.i(n))}function A(e,n,t,s){if(e&&e.o){if(S.has(e))return;S.add(e),undefined.c.push((()=>{S.delete(e),s&&(t&&e.d(1),s())})),e.o(n)}}function E(e){e&&e.c()}function L(e,t,i,a){const{fragment:l,on_mount:c,on_destroy:r,after_update:d}=e.$$;l&&l.m(t,i),a||k((()=>{const t=c.map(n).filter(o);r?r.push(...t):s(t),e.$$.on_mount=[]})),d.forEach(k)}function H(e,n){const t=e.$$;null!==t.fragment&&(s(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function I(n,o,i,a,l,c,d=[-1]){const u=p;v(n);const f=n.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:t(),dirty:d,skip_bound:!1};let h=!1;if(f.ctx=i?i(n,o.props||{},((e,t,...s)=>{const o=s.length?s[0]:t;return f.ctx&&l(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),h&&function(e,n){-1===e.$$.dirty[0]&&(m.push(e),w||(w=!0,y.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}(n,e)),t})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!a&&a(f.ctx),o.target){if(o.hydrate){const e=(g=o.target,Array.from(g.childNodes));f.fragment&&f.fragment.l(e),e.forEach(r)}else f.fragment&&f.fragment.c();o.intro&&T(n.$$.fragment),L(n,o.target,o.anchor,o.customElement),j()}var g;v(u)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(n).filter(o);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,n,t){this[e]=t}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){H(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){this.$$set&&!a(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class N{$destroy(){H(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){this.$$set&&!a(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function O(n){let t;return{c(){t=d("section"),t.innerHTML='<h2>About Me</h2> \n  <div class="container container__biography-container svelte-3bz45n"><img src="./photos/profile.jpg" alt="Alex Wiegand" class="svelte-3bz45n"/> \n    <p class="svelte-3bz45n">Previously from the restaurant industry, hoping to transition into software development after the pandemic. \n      I have almost 15 years experience in the restaurant industry, most recently being the lead bartender at Bambara restaurant in Cambridge, MA.\n      <br/>\n      Currently I am learning to code to transition into an industry that has work from home availability. \n      My main focus has been in learning Javascript in the front end. \n      I have focused on learning vanilla javascript to be framework independent, and now that I am comfortable with it I am focusing on learning React.\n      <br/>\n      That being said, I have also been dabbling in many other languages. \n      I can at least work my way through documentation on the following: Bash, CSS/SCSS, Express, HTML, MySQL, Node.js, SQLite, Svelte, Redux.\n      <br/>\n      I look forward to seeing where the Tech industry leads me.</p></div>'},m(e,n){c(e,t,n)},p:e,i:e,o:e,d(e){e&&r(t)}}}const P=class extends N{constructor(e){super(),I(this,e,null,O,i,{})}};function q(n){let t;return{c(){t=d("section"),t.innerHTML='<h2>Contact Me</h2> \n  <address class="svelte-crsb46"><a href="mailto:wiegand.alex@gmail.com" class="svelte-crsb46"><i class="devicon-google-plain svelte-crsb46"></i></a> \n    <a href="https://www.linkedin.com/in/alex-wiegand-10691022" class="svelte-crsb46"><i class="devicon-linkedin-plain svelte-crsb46"></i></a> \n    <a href="https://github.com/Wiegand92" class="svelte-crsb46"><i class="devicon-github-original svelte-crsb46"></i></a></address>'},m(e,n){c(e,t,n)},p:e,i:e,o:e,d(e){e&&r(t)}}}const z=class extends N{constructor(e){super(),I(this,e,null,q,i,{})}};function B(n){let t;return{c(){t=d("section"),t.innerHTML='<h2>My Skills</h2> \n  <div class="container container__devicon-container svelte-1vf74fn"><i class="devicon devicon-javascript-plain svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-css3-plain svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-html5-plain svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-react-original svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-redux-original svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-webpack-plain svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-git-plain svelte-1vf74fn"></i> \n    <div class="background svelte-1vf74fn"></div> \n    <i class="devicon devicon-bash-plain svelte-1vf74fn"></i></div>',h(t,"class","svelte-1vf74fn")},m(e,n){c(e,t,n)},p:e,i:e,o:e,d(e){e&&r(t)}}}const W=class extends N{constructor(e){super(),I(this,e,null,B,i,{})}};function Q(n){let t;return{c(){t=d("section"),t.innerHTML='<a href="#projects" class="link link__projects svelte-fbpk5j">My Projects</a> \n  <h1 class="title svelte-fbpk5j">Alex Wiegand</h1>',h(t,"id","header"),h(t,"class","svelte-fbpk5j")},m(e,n){c(e,t,n)},p:e,i:e,o:e,d(e){e&&r(t)}}}const R=class extends N{constructor(e){super(),I(this,e,null,Q,i,{})}};function J(e,n,t){const s=e.slice();return s[1]=n[t],s}function D(n){let t,s,o,i,a,p,v,m,g,$,b=n[1].name+"";return{c(){t=d("div"),s=d("a"),o=d("img"),p=f(),v=d("h3"),m=u(b),$=f(),o.src!==(i=n[1].photo)&&h(o,"src",i),h(o,"alt",a=n[1].name),h(o,"class","svelte-stad1m"),h(v,"class","svelte-stad1m"),h(s,"href",g=n[1].url),h(s,"class","svelte-stad1m"),h(t,"class","project-card svelte-stad1m")},m(e,n){c(e,t,n),l(t,s),l(s,o),l(s,p),l(s,v),l(v,m),l(t,$)},p:e,d(e){e&&r(t)}}}function F(n){let t,s,o,i,a=n[0],u=[];for(let e=0;e<a.length;e+=1)u[e]=D(J(n,a,e));return{c(){t=d("section"),s=d("h2"),s.textContent="My Projects",o=f(),i=d("div");for(let e=0;e<u.length;e+=1)u[e].c();h(i,"class","container container__project-container svelte-stad1m"),h(t,"id","projects")},m(e,n){c(e,t,n),l(t,s),l(t,o),l(t,i);for(let e=0;e<u.length;e+=1)u[e].m(i,null)},p(e,[n]){if(1&n){let t;for(a=e[0],t=0;t<a.length;t+=1){const s=J(e,a,t);u[t]?u[t].p(s,n):(u[t]=D(s),u[t].c(),u[t].m(i,null))}for(;t<u.length;t+=1)u[t].d(1);u.length=a.length}},i:e,o:e,d(e){e&&r(t),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(u,e)}}}function G(e){return[[{name:"Hang Mouse",url:"https://hang-mouse.netlify.app/",photo:"./photos/hang-mouse.png"},{name:"Notes App",url:"https://notes-app-wiegand.netlify.app/",photo:"./photos/notes-app.png"},{name:"Todos App",url:"http://abrasive-bee.surge.sh",photo:"./photos/todos-app.png"}]]}const K=class extends N{constructor(e){super(),I(this,e,G,F,i,{})}};function U(n){let t,s,o,i,a,u,p,v,m,g,$,b;return s=new R({}),a=new P({}),p=new W({}),m=new K({}),$=new z({}),{c(){t=d("main"),E(s.$$.fragment),o=f(),i=d("div"),E(a.$$.fragment),u=f(),E(p.$$.fragment),v=f(),E(m.$$.fragment),g=f(),E($.$$.fragment),h(i,"id","content"),h(i,"class","svelte-1em3rdu"),h(t,"class","svelte-1em3rdu")},m(e,n){c(e,t,n),L(s,t,null),l(t,o),l(t,i),L(a,i,null),l(i,u),L(p,i,null),l(i,v),L(m,i,null),l(i,g),L($,i,null),b=!0},p:e,i(e){b||(T(s.$$.fragment,e),T(a.$$.fragment,e),T(p.$$.fragment,e),T(m.$$.fragment,e),T($.$$.fragment,e),b=!0)},o(e){A(s.$$.fragment,e),A(a.$$.fragment,e),A(p.$$.fragment,e),A(m.$$.fragment,e),A($.$$.fragment,e),b=!1},d(e){e&&r(t),H(s),H(a),H(p),H(m),H($)}}}new class extends N{constructor(e){super(),I(this,e,null,U,i,{})}}({target:document.body})})();