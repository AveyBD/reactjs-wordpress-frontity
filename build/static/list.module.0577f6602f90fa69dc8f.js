(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),u=n.n(c),i=n(2),a=n(8),o=n(24),l=n(72),s=n.n(l);function f(){var e=b(["\n  --margin-bottom: 3;\n"]);return f=function(){return e},e}function j(){var e=b(["\n  --margin-bottom: 0;\n"]);return j=function(){return e},e}function d(){var e=b(["\n  --margin-bottom: 1;\n"]);return d=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=Object(i.connect)(e=>{var{state:t,item:n}=e,{author:c}=t.frontity,u=new Date(n.date),i=("".concat(u.getDate()," / ").concat(u.getMonth()," / ").concat(u.getFullYear()),n.excerpt.rendered.replace(/<\/?p>/g,"").replace("[&hellip;]","&hellip; ")),l=s()("title-"),f=s()("readmore-");return Object(r.jsx)(g,null,Object(r.jsx)(a.a,{link:n.link},Object(r.jsx)(v,{id:l,dangerouslySetInnerHTML:{__html:n.title.rendered}})),Object(r.jsx)(p,null,Object(r.jsx)(o.a,{date:n.date})),Object(r.jsx)("p",null,Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:i}}),Object(r.jsx)(a.a,{link:n.link,id:f,ariaLabelledby:f+" "+l},"Leer más")))}),p=i.styled.p(d()),v=i.styled.h2(j()),g=i.styled.article(f());function y(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  display: inline-block;\n  margin-top: 16px;\n"]);return y=function(){return e},e}var x=Object(i.connect)(e=>{var{state:t,actions:n,libraries:u}=e,{totalPages:i}=t.source.get(t.router.link),{path:o,page:l,query:s}=u.source.parse(t.router.link),f=l<i,j=l>1,d=u.source.stringify({path:o,page:l+1,query:s}),b=u.source.stringify({path:o,page:l-1,query:s});return Object(c.useEffect)(()=>{f&&n.source.fetch(d)},[]),Object(r.jsx)("div",null,f&&Object(r.jsx)(a.a,{link:d},Object(r.jsx)(m,null,"← Older posts")),j&&f&&" - ",j&&Object(r.jsx)(a.a,{link:b},Object(r.jsx)(m,null,"Newer posts →")))}),m=i.styled.em(y()),h=n(5),k=n(7);function _(){var e=D(["\n    --padding-top: 0;\n    "," {\n        display: none;\n    }\n"]);return _=function(){return e},e}function w(){var e=D(["\n    width: var(--container-percentage);\n    max-width: var(--container-normal);\n    --padding-top: 1;\n    margin:0 auto;\n"]);return w=function(){return e},e}function L(){var e=D(["\n    --font-size: 3;\n    --margin-bottom: 1;\n    --line-height: 1.5;\n    max-width: 493px;\n"]);return L=function(){return e},e}function z(){var e=D(["\n    --padding-top: 0;\n    --padding-bottom: 2;\n    background-color: var(--background-brand-dark);\n    transition: background-color 500ms;\n"]);return z=function(){return e},e}function A(){var e=D(["\n    --font-size: .5;\n"]);return A=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var E=Object(i.connect)(e=>{var{state:t}=e,{hero:n}=t.frontity,{content:c,cta:u}=n;return Object(r.jsx)(S,null,Object(r.jsx)(I,null,Object(r.jsx)(N,null,Object(r.jsx)(a.a,{link:"/"},Object(r.jsx)(k.a,null))),Object(r.jsx)(H,null,c),Object(r.jsx)("p",null,Object(r.jsx)(P,{link:u.link,className:"link"},u.content))))}),P=Object(i.styled)(a.a)(A()),S=i.styled.section(z()),H=i.styled.h1(L()),I=i.styled.div(w()),N=i.styled.div(_(),h.a);t.default=Object(i.connect)(e=>{var{state:t}=e,n=t.source.get(t.router.link);return Object(r.jsx)(u.a.Fragment,null,n.isHome&&Object(r.jsx)(E,null),Object(r.jsx)("div",{className:"entry-content"},n.items.map(e=>{var{type:n,id:c}=e,u=t.source[n][c];return Object(r.jsx)(O,{key:u.id,item:u})})),Object(r.jsx)(x,null))})},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,c=(r=n(1))&&"object"==typeof r&&"default"in r?r.default:r,u="id",i=0;function a(e){return i++,"".concat(e||u).concat(i)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,c=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){c=!0,u=e}finally{try{r||null==a.return||a.return()}finally{if(c)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e,t){for(var n=[],r=0;r<e;r++)n.push(a(t));return n};t.default=a,t.resetId=function(){i=0},t.setPrefix=function(e){u=e},t.useId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=o(c.useState(function(){return l(e,t)}),2),u=r[0],i=r[1],a=function(){var e=c.useRef(!1);return c.useEffect(function(){e.current=!0},[]),e.current}();return c.useEffect(function(){a&&i(l(e,t))},n),u}}}]);