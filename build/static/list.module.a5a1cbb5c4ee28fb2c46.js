(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{36:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n.n(c),o=n(2),u=n(5),a=n(68),l=n.n(a);function s(){var e=d(["\n  --margin-bottom: 3;\n"]);return s=function(){return e},e}function f(){var e=d(["\n  --margin-bottom: 0;\n"]);return f=function(){return e},e}function j(){var e=d(["\n  --margin-bottom: 1;\n  --font-size: -.3;\n  color: var(--color-text-light);\n"]);return j=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=Object(o.connect)(e=>{var{state:t,item:n}=e,{author:c}=t.frontity,i=new Date(n.date),o="".concat(i.getDate(),"-").concat(i.getMonth(),"-").concat(i.getFullYear()),a=n.excerpt.rendered.replace(/<\/?p>/g,"").replace("[&hellip;]","&hellip; "),s=l()("title-"),f=l()("readmore-");return Object(r.jsx)(v,null,Object(r.jsx)(u.a,{link:n.link},Object(r.jsx)(p,{id:s,dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(r.jsx)(O,null,"Por ",Object(r.jsx)(u.a,{link:c.link,rel:"me nofollow"}," ",c.name),"  el ",Object(r.jsx)("time",{dateTime:i.toLocaleDateString("en-US")},o)),Object(r.jsx)("p",null,Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:a}}),Object(r.jsx)(u.a,{link:n.link,id:f,ariaLabelledby:f+" "+s},"Leer más")))}),O=o.styled.p(j()),p=o.styled.h2(f()),v=o.styled.article(s());function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: inline-block;\n  margin-top: 16px;\n"]);return g=function(){return e},e}var x=Object(o.connect)(e=>{var{state:t,actions:n,libraries:i}=e,{totalPages:o}=t.source.get(t.router.link),{path:a,page:l,query:s}=i.source.parse(t.router.link),f=l<o,j=l>1,d=i.source.stringify({path:a,page:l+1,query:s}),b=i.source.stringify({path:a,page:l-1,query:s});return Object(c.useEffect)(()=>{f&&n.source.fetch(d)},[]),Object(r.jsx)("div",null,f&&Object(r.jsx)(u.a,{link:d},Object(r.jsx)(m,null,"← Older posts")),j&&f&&" - ",j&&Object(r.jsx)(u.a,{link:b},Object(r.jsx)(m,null,"Newer posts →")))}),m=o.styled.em(g()),y=n(6),h=n(8);function k(){var e=D(["\n    --padding-top: 0;\n    "," {\n        display: none;\n    }\n"]);return k=function(){return e},e}function _(){var e=D(["\n    width: var(--container-percentage);\n    max-width: var(--container-normal);\n    --padding-top: 1;\n    margin:0 auto;\n"]);return _=function(){return e},e}function w(){var e=D(["\n    --font-size: 3;\n    --margin-bottom: 1;\n    --line-height: 1.5;\n    max-width: 493px;\n"]);return w=function(){return e},e}function L(){var e=D(["\n    --padding-top: 0;\n    --padding-bottom: 2;\n    background-color: var(--background-brand-dark);\n    transition: background-color 500ms;\n"]);return L=function(){return e},e}function z(){var e=D(["\n    --font-size: .5;\n"]);return z=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var A=Object(o.connect)(e=>{var{state:t}=e,{hero:n}=t.frontity,{content:c,cta:i}=n;return Object(r.jsx)(S,null,Object(r.jsx)(H,null,Object(r.jsx)(I,null,Object(r.jsx)(u.a,{link:"/"},Object(r.jsx)(h.a,null))),Object(r.jsx)(P,null,c),Object(r.jsx)("p",null,Object(r.jsx)(E,{link:i.link,className:"link"},i.content))))}),E=Object(o.styled)(u.a)(z()),S=o.styled.section(L()),P=o.styled.h1(w()),H=o.styled.div(_()),I=o.styled.div(k(),y.a);t.default=Object(o.connect)(e=>{var{state:t}=e,n=t.source.get(t.router.link);return Object(r.jsx)(i.a.Fragment,null,n.isHome&&Object(r.jsx)(A,null),Object(r.jsx)("div",{className:"entry-content"},n.items.map(e=>{var{type:n,id:c}=e,i=t.source[n][c];return Object(r.jsx)(b,{key:i.id,item:i})})),Object(r.jsx)(x,null))})},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,c=(r=n(1))&&"object"==typeof r&&"default"in r?r.default:r,i="id",o=0;function u(e){return o++,"".concat(e||i).concat(o)}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,c=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){c=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(c)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e,t){for(var n=[],r=0;r<e;r++)n.push(u(t));return n};t.default=u,t.resetId=function(){o=0},t.setPrefix=function(e){i=e},t.useId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=a(c.useState(function(){return l(e,t)}),2),i=r[0],o=r[1],u=function(){var e=c.useRef(!1);return c.useEffect(function(){e.current=!0},[]),e.current}();return c.useEffect(function(){u&&o(l(e,t))},n),i}}}]);