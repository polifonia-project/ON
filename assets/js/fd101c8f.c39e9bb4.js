"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||r;return n?i.createElement(d,a(a({ref:t},u),{},{components:n})):i.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},a="Introduction",s={unversionedId:"music-projection/intro",id:"music-projection/intro",title:"Introduction",description:"Describing the content of a musical composition is a very difficult task. Providing the definition of a musical concept, when possible, requires a meticoulus that is very hard even for experts of that field. For instance a chord is a musical concept that is generally well known to experts as well as novices. Despite its popularity, an unambigous definition for chord is still distiputed and on going research is focused in finding such definition.",source:"@site/docs/music-projection/intro.md",sourceDirName:"music-projection",slug:"/music-projection/intro",permalink:"/ontology-network/docs/music-projection/intro",draft:!1,editUrl:"ahttps://github.com/polifonia-project/ontology-network/tree/main/website/docs/music-projection/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Music Representation",permalink:"/ontology-network/docs/category/music-representation-1"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Describing the content of a musical composition is a very difficult task. Providing the definition of a musical concept, when possible, requires a meticoulus that is very hard even for experts of that field. For instance a ",(0,o.kt)("em",{parentName:"p"},"chord")," is a musical concept that is generally well known to experts as well as novices. Despite its popularity, an unambigous definition for ",(0,o.kt)("em",{parentName:"p"},"chord")," is still distiputed and on going research is focused in finding such definition.\nThe issue however is not on the concept itself, a ",(0,o.kt)("em",{parentName:"p"},"chord"),", but on its inherent ambiguity.\nMusic evolves hand in hand with humans and the definition of musical concepts drifts at the same pace. It is inherently impossibile to find a uniquely and objectively correct definition of ",(0,o.kt)("em",{parentName:"p"},"chord")," since it is deeply rooted in the context in which such ",(0,o.kt)("em",{parentName:"p"},"chord")," will be used in the first place."),(0,o.kt)("p",null,"While currently we might refer to a ",(0,o.kt)("em",{parentName:"p"},"chord")," as a stack of notes played at the same time, the same definition does not apply when one wants to study music from the Renaissance. The term ",(0,o.kt)("em",{parentName:"p"},"chord")," might refer to the same conceptual idea, but the semantics of the term changes depending on the context.\nThe inverse can also be true. When talking about rhythm in electronic music, we might refer to a rhythmic figure as ",(0,o.kt)("em",{parentName:"p"},"four-on-the-floor"),". It is unlikely to use such term when describing a rhythmic figure from Baroque music, even though they are perceptually the same exact rhythm. "),(0,o.kt)("p",null,"The underlying intuition is that musical concepts are strictly related to human perception and are thus uniquely identifiable and classifiable. Depending on the context within which they are used, their synctactical and semantical definition can change. We refer to this phenomena as a projection of a musical entity.\nThe Music Projection Ontology allows the definition of ",(0,o.kt)("strong",{parentName:"p"},"foundational music concepts")," that are recognised as stable concepts in history by musicologists.\nThe aim of the Music Projection Ontology is hence to provide a suitable vocabulary that can be used by experts to formulate their own definition of a musical concept. By relying on a common vocabulary, it is possible to ultimately analyse a musical composition by means of different projections of the same concept.\nRelying on the Music Projection Ontology enables expert to seamleassly ",(0,o.kt)("strong",{parentName:"p"},"integrate")," together different theories and explore combinations of those theories that would otherwise require a deep understanding of a particular domain."))}m.isMDXComponent=!0}}]);