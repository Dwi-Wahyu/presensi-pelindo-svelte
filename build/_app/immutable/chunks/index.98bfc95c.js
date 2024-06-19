var B=Object.defineProperty;var j=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(j(e,typeof t!="symbol"?t+"":t,n),n);import{r as h,n as y,w,v as D,q as A,x as O,y as N,z as I,A as L,B as b,C as P,D as T,E as q}from"./scheduler.2505487f.js";let p=!1;function z(){p=!0}function H(){p=!1}function M(e,t,n,i){for(;e<t;){const a=e+(t-e>>1);n(a)<=i?e=a+1:t=a}return e}function F(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let a=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(a>0&&t[n[a]].claim_order<=s?a+1:M(1,a,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,a=Math.max(f,a)}const u=[],l=[];let c=t.length-1;for(let r=n[a]+1;r!=0;r=i[r-1]){for(u.push(t[r-1]);c>=r;c--)l.push(t[c]);c--}for(;c>=0;c--)l.push(t[c]);u.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<u.length&&l[r].claim_order>=u[s].claim_order;)s++;const o=s<u.length?u[s]:null;e.insertBefore(l[r],o)}}function G(e,t){if(p){for(F(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ie(e,t,n){p&&!n?G(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e){return document.createElement(e)}function V(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function re(){return x(" ")}function se(){return x("")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ae(e){return function(t){return t.preventDefault(),e.call(this,t)}}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const W=["width","height"];function ce(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?e[i]=t[i]:E(e,i,t[i])}function ue(e,t){for(const n in t)E(e,n,t[n])}function fe(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function S(e,t,n,i,a=!1){K(e);const u=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,a||(e.claim_info.last_index=l),c}}for(let l=e.claim_info.last_index-1;l>=0;l--){const c=e[l];if(t(c)){const r=n(c);return r===void 0?e.splice(l,1):e[l]=r,a?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function C(e,t,n,i){return S(e,a=>a.nodeName===t,a=>{const u=[];for(let l=0;l<a.attributes.length;l++){const c=a.attributes[l];n[c.name]||u.push(c.name)}u.forEach(l=>a.removeAttribute(l))},()=>i(t))}function oe(e,t,n){return C(e,t,n,U)}function _e(e,t,n){return C(e,t,n,V)}function Q(e,t){return S(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function de(e){return Q(e," ")}function me(e,t){t=""+t,e.data!==t&&(e.data=t)}function he(e,t){e.value=t??""}function pe(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function $e(e,t,n){e.classList.toggle(t,!!n)}function ye(e,t){return new e(t)}const m=new Set;let _;function xe(){_={r:0,c:[],p:_}}function ge(){_.r||h(_.c),_=_.p}function X(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ve(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function we(e){e&&e.c()}function Ne(e,t){e&&e.l(t)}function Y(e,t,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),N(()=>{const u=e.$$.on_mount.map(P).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...u):h(u),e.$$.on_mount=[]}),a.forEach(N)}function Z(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function k(e,t){e.$$.dirty[0]===-1&&(T.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,i,a,u,l=null,c=[-1]){const r=L;b(e);const s=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:a,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};l&&l(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(f,d,...g)=>{const v=g.length?g[0]:d;return s.ctx&&a(s.ctx[f],s.ctx[f]=v)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](v),o&&k(e,f)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){z();const f=J(t.target);s.fragment&&s.fragment.l(f),f.forEach(R)}else s.fragment&&s.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor),H(),D()}b(r)}class Ae{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){Z(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!O(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ee="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ee);export{ue as A,$e as B,fe as C,le as D,ce as E,he as F,ae as G,Ae as S,ie as a,ge as b,de as c,X as d,se as e,R as f,U as g,oe as h,be as i,J as j,E as k,pe as l,x as m,Q as n,me as o,xe as p,ye as q,we as r,re as s,ve as t,Ne as u,Y as v,Z as w,G as x,V as y,_e as z};