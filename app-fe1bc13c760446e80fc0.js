!function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={1:0},o={1:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[];s[e]?t.push(s[e]):0!==s[e]&&{2:1,3:1,4:1}[e]&&t.push(s[e]=new Promise((function(t,a){for(var r=({0:"about",2:"contribute",3:"detail",4:"home",6:"vendors~contribute",7:"vendors~detail",8:"vendors~home"}[e]||e)+"-"+{0:"31d6cfe0d16ae931b73c",2:"416bdc7676760237297d",3:"7f4d9d5e807d7660fb65",4:"57cd2f130ef72ea0208c",6:"31d6cfe0d16ae931b73c",7:"31d6cfe0d16ae931b73c",8:"31d6cfe0d16ae931b73c"}[e]+".css",o=i.p+r,n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var c=(u=n[l]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){var u;if((c=(u=d[l]).getAttribute("data-href"))===r||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,n=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=r,delete s[e],m.parentNode.removeChild(m),a(n)},m.href=o,document.getElementsByTagName("head")[0].appendChild(m)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({0:"about",2:"contribute",3:"detail",4:"home",6:"vendors~contribute",7:"vendors~detail",8:"vendors~home"}[e]||e)+"-"+{0:"b8d671c48fc071d5f6f7",2:"2783b3658ad7baf13e03",3:"45ef01e1390871546e90",4:"319bbb4488e072281600",6:"aff7a228c2bde29fcf52",7:"795c2344cf4513decd9c",8:"bf2022d6593e4892745c"}[e]+".js"}(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}o[e]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;n.push([0,5]),a()}({"./.linaria-cache/src/components/layout/AppLayout.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/layout/Navbar.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/layout/SuspenseFallback.linaria.css":function(e,t,a){},"./src/assets/favicon.png":function(e,t,a){"use strict";t.a=a.p+"assets/favicon.8bc43364230544affdf79ddb012d2d71.png"},"./src/components/App.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/react-hot-loader/root.js"),o=a("./node_modules/react/index.js"),n=a.n(o),i=a("./node_modules/react-icons/lib/esm/index.js"),l=a("./node_modules/react-router-dom/esm/react-router-dom.js"),c=a("./src/components/layout/AppLayout.tsx"),d=a("./src/contexts/StickersContext.tsx"),u=a("./src/contexts/AppStateContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const m=()=>n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.b.Provider,{value:{className:"icon",style:{lineHeight:"1em",verticalAlign:"-0.125em",minHeight:"1em",minWidth:"1em"}}},n.a.createElement(u.a,null,n.a.createElement(d.a,null,n.a.createElement(l.BrowserRouter,null,n.a.createElement(c.a,null)))))),b=Object(s.hot)(m);var f,p;t.a=b,(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(m,"App","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx"),f.register(b,"default","/home/travis/build/signalstickers/signalstickers/src/components/App.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/general/ExternalLink.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/@babel/runtime/helpers/extends.js"),o=a.n(s),n=a("./node_modules/react/index.js"),i=a.n(n),l=a("./node_modules/ramda/es/omit.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c=i.a.memo(i.a.forwardRef((e,t)=>i.a.createElement("a",o()({target:"_blank",rel:"noreferrer noopener",ref:t},l.a(["children","ref"],e)),e.children)));c.displayName="ExternalLink";const d=c;var u,m;t.a=d,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(c,"ExternalLink","/home/travis/build/signalstickers/signalstickers/src/components/general/ExternalLink.tsx"),u.register(d,"default","/home/travis/build/signalstickers/signalstickers/src/components/general/ExternalLink.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/AppLayout.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/linaria/react.js"),o=a("./node_modules/p-throttle/index.js"),n=a.n(o),i=a("./node_modules/react/index.js"),l=a.n(i),c=a("./node_modules/react-router/esm/react-router.js"),d=a("./node_modules/react-scroll-percentage/react-scroll-percentage.esm.js"),u=a("./node_modules/use-async-effect/index.js"),m=a.n(u),b=a("./src/components/layout/Navbar.tsx"),f=a("./src/components/layout/SuspenseFallback.tsx"),p=a("./src/contexts/AppStateContext.tsx"),g=a("./src/etc/colors.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const v=l.a.lazy(async()=>Promise.all([a.e(8),a.e(4)]).then(a.bind(null,"./src/components/home/Home.tsx"))),k=l.a.lazy(async()=>Promise.all([a.e(7),a.e(3)]).then(a.bind(null,"./src/components/pack/StickerPackDetail.tsx"))),y=l.a.lazy(async()=>Promise.all([a.e(6),a.e(2)]).then(a.bind(null,"./src/components/contribute/Contribute.tsx"))),_=l.a.lazy(async()=>a.e(0).then(a.bind(null,"./src/components/about/About.tsx"))),L=Object(s.styled)("div")({name:"StyledContainer",class:"s1a46sws"}),x=()=>{const e=l.a.useContext(p.b),[t]=e("darkMode"),[a,r]=Object(d.a)();return l.a.useEffect(()=>{const e=document.querySelector("body");e&&(t?(e.classList.add("theme-dark"),e.classList.remove("theme-light")):(e.classList.add("theme-light"),e.classList.remove("theme-dark")))},[t]),m()(n()(()=>{const e=document.querySelector("body");e&&(e.style.backgroundColor=t?r<.5?g.a:"var(--dark)":r<.5?"var(--primary)":"var(--white)")},10,1e3),[r,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null),l.a.createElement(L,{ref:a},l.a.createElement("div",{className:"container d-flex flex-column flex-grow-1"},l.a.createElement(i.Suspense,{fallback:l.a.createElement(f.a,null)},l.a.createElement(c.g,null,l.a.createElement(c.d,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(c.d,{path:"/pack/:packId"},l.a.createElement(k,null)),l.a.createElement(c.d,{path:"/contribute"},l.a.createElement(y,null)),l.a.createElement(c.d,{path:"/about"},l.a.createElement(_,null)))))))};h(x,"useContext{useAppState}\nuseAppState{[darkMode]}\nuseScrollPercentage{[ref, percentage]}\nuseEffect{}\nuseAsyncEffect{}",()=>[d.a,m.a]);const E=x;var H,G;t.a=E,a("./.linaria-cache/src/components/layout/AppLayout.linaria.css"),(H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(H.register(v,"Home","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(k,"Pack","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(y,"Contribute","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(_,"About","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register("gyr61s6","globals","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(L,"StyledContainer","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(x,"AppLayout","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx"),H.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/AppLayout.tsx")),(G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&G(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/Navbar.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/linaria/react.js"),o=a("./node_modules/react/index.js"),n=a.n(o),i=a("./node_modules/react-icons/bs/index.esm.js"),l=a("./node_modules/react-icons/fa/index.esm.js"),c=a("./node_modules/react-icons/fi/index.esm.js"),d=a("./node_modules/react-router-dom/esm/react-router-dom.js"),u=a("./src/assets/favicon.png"),m=a("./src/components/general/ExternalLink.tsx"),b=a("./src/contexts/AppStateContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const p=Object(s.styled)("nav")({name:"StyledNav",class:"s1l3u8z6"}),g=()=>{const e=n.a.useContext(b.b),[t,a]=e("darkMode"),r=[{title:"Contribute",href:"/contribute"},{title:"About",href:"/about"},{title:"Twitter",href:"https://twitter.com/signalstickers",external:!0,children:n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-md-none"},"Twitter ",n.a.createElement(i.c,null)),n.a.createElement(l.c,{className:"d-none d-md-inline"}))},{title:"GitHub Repository",href:"https://github.com/signalstickers/signalstickers",external:!0,children:n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-md-none"},"GitHub ",n.a.createElement(i.c,null)),n.a.createElement(l.a,{className:"d-none d-md-inline"}))}],s=n.a.useCallback(()=>{a(!t)},[t]),o=n.a.useCallback(()=>{$("#navbar-toggle").collapse("hide")},[]);return n.a.createElement(p,{className:"navbar navbar-expand-md navbar-dark"},n.a.createElement("div",{className:"container"},n.a.createElement(d.Link,{to:"/",className:"navbar-brand",onClick:o},n.a.createElement("img",{src:u.a,alt:"Signal Stickers Logo"})," Signal Stickers"),n.a.createElement("button",{type:"button",className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbar-toggle","aria-controls":"navbar-toggle","aria-expanded":"false","aria-label":"Toggle Navigation"},n.a.createElement(i.g,{className:"menu-icon"})),n.a.createElement("div",{id:"navbar-toggle",className:"collapse navbar-collapse"},n.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-md-0 pb-xs-0"},r.map(e=>{var t,a;return n.a.createElement("li",{className:"nav-item",key:e.href},e.external?n.a.createElement(m.a,{href:e.href,title:e.title,className:"nav-link py-3 py-md-2"},null!==(t=e.children)&&void 0!==t?t:e.title):n.a.createElement(d.NavLink,{to:e.href,title:e.title,className:"nav-link py-3 py-md-2",activeClassName:"active",onClick:o},null!==(a=e.children)&&void 0!==a?a:e.title))}),n.a.createElement("li",{className:"nav-item"},n.a.createElement("button",{type:"button",className:"btn btn-link nav-link py-3 py-md-2",title:"Dark Mode",onClick:s},t?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-inline-block d-md-none mr-1"},"Light mode"),n.a.createElement(c.b,null)):n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"d-inline-block d-md-none mr-1"},"Dark mode"),n.a.createElement(c.a,null))))))))};f(g,"useContext{useAppState}\nuseAppState{[darkMode, setDarkMode]}\nuseCallback{toggleDarkMode}\nuseCallback{collapseNavigation}");const h=g;var v,k;t.a=h,a("./.linaria-cache/src/components/layout/Navbar.linaria.css"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(p,"StyledNav","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx"),v.register(g,"NavbarComponent","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx"),v.register(h,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/Navbar.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/layout/SuspenseFallback.tsx":function(e,t,a){"use strict";(function(e){var r,s=a("./node_modules/react/index.js"),o=a.n(s),n=a("./node_modules/linaria/react.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const l=Object(n.styled)("div")({name:"Spinner",class:"slpzcbs"}),c=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)(()=>{const e=setTimeout(()=>{t(!0)},2e3);return()=>{clearTimeout(e)}},[]),o.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-grow-1"},e&&o.a.createElement(l,{className:"spinner-border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))};i(c,"useState{[showSpinner, setShowSpinner](false)}\nuseEffect{}");const d=c;var u,m;t.a=d,a("./.linaria-cache/src/components/layout/SuspenseFallback.linaria.css"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(l,"Spinner","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx"),u.register(c,"SuspenseFallbackComponent","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx"),u.register(d,"default","/home/travis/build/signalstickers/signalstickers/src/components/layout/SuspenseFallback.tsx")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/contexts/AppStateContext.tsx":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return d}));var r,s=a("./node_modules/ramda/es/mapObjIndexed.js"),o=a("./node_modules/react/index.js"),n=a.n(o);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const l={darkMode:!1},c=n.a.createContext({}),d=e=>{const[t,a]=n.a.useReducer((e,t)=>{try{localStorage.setItem(String(t.key),JSON.stringify(t.value))}catch{}return{...e,[t.key]:t.value}},l,e=>s.a((e,t)=>{try{var a;return JSON.parse(null!==(a=localStorage.getItem(t))&&void 0!==a?a:e)}catch{return e}},e));return n.a.createElement(c.Provider,{value:function(e){return[t[e],t=>{a({key:e,value:t})}]}},e.children)};i(d,"useReducer{[state, dispatch](initialState)}");const u=c;var m,b;t.b=u,(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(l,"initialState","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx"),m.register(c,"Context","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx"),m.register(d,"Provider","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx"),m.register(u,"default","/home/travis/build/signalstickers/signalstickers/src/contexts/AppStateContext.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/contexts/StickersContext.tsx":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return f}));var r,s=a("./node_modules/ramda/es/path.js"),o=a("./node_modules/ramda/es/map.js"),n=a("./node_modules/react/index.js"),i=a.n(n),l=a("./node_modules/use-async-effect/index.js"),c=a.n(l),d=a("./src/lib/stickers.ts"),u=a("./src/lib/search/index.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const b=Object(n.createContext)({}),f=e=>{const[t,a]=i.a.useState(),[r,n]=i.a.useState(),[l,m]=i.a.useState(""),[f,p]=i.a.useState([]);return c()(async()=>{const e=await Object(d.d)();a(e),n(Object(u.a)({collection:e,identity:s.a(["meta","id"]),keys:{title:["manifest","title"],author:["manifest","author"],tag:["meta","tags"],nsfw:["meta","nsfw"],original:["meta","original"],animated:["meta","animated"]}}))},[]),i.a.useEffect(()=>{t&&r&&(0!==l.length?p(r.search(l)):p(o.a(e=>({item:e}),t)))},[t,r,l]),i.a.createElement(b.Provider,{value:{allStickerPacks:t,searcher:r,searchQuery:l,searchResults:f,setSearchQuery:m}},e.children)};m(f,"useState{[allStickerPacks, setAllStickerPacks]}\nuseState{[searcher, setSearcher]}\nuseState{[searchQuery, setSearchQuery]('')}\nuseState{[searchResults, setSearchResults]([])}\nuseAsyncEffect{}\nuseEffect{}",()=>[c.a]);const p=b;var g,h;t.b=p,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(b,"Context","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx"),g.register(f,"Provider","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx"),g.register(p,"default","/home/travis/build/signalstickers/signalstickers/src/contexts/StickersContext.tsx")),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&h(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/etc/colors.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var r,s=a("./node_modules/polished/dist/polished.esm.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o=Object(s.c)(.2,"#DC3545"),n=Object(s.a)(.1,"#6C757D"),i=Object(s.a)(.255,"#6C757D"),l=Object(s.b)(.18,"#6C757D"),c=Object(s.a)(.15,"#007BFF"),d=Object(s.b)(.2,"#007BFF"),u=Object(s.a)(.01,"#343A40");var m,b;(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(o,"DANGER_SATURATED","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(n,"GRAY_DARKER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(i,"GRAY_DARKER_2","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(l,"GRAY_LIGHTER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(c,"PRIMARY_DARKER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(d,"PRIMARY_LIGHTER","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts"),m.register(u,"DARK_THEME_BACKGROUND","/home/travis/build/signalstickers/signalstickers/src/etc/colors.ts")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/etc/constants.ts":function(e,t,a){"use strict";(function(e){var r;a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s={xs:0,sm:576,md:768,lg:992,xl:1200},o="s";var n,i;(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(n.register(s,"BOOTSTRAP_BREAKPOINTS","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts"),n.register(64,"NAVBAR_HEIGHT","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts"),n.register(o,"SEARCH_QUERY_PARAM","/home/travis/build/signalstickers/signalstickers/src/etc/constants.ts")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/index.css":function(e,t,a){},"./src/index.tsx":function(e,t,a){"use strict";a.r(t);var r=a("./node_modules/react/index.js"),s=a.n(r),o=a("./node_modules/react-dom/index.js"),n=a.n(o),i=a("./src/components/App.tsx"),l=a("./src/lib/utils.ts");a("./src/index.css"),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(l.b)(),Object(l.c)(),n.a.render(s.a.createElement(i.a,null),document.querySelector("#root"))},"./src/lib/convert-image.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return v}));var r,s=a("./node_modules/image-type/index.js"),o=a.n(s),n=a("./node_modules/p-queue/dist/index.js"),i=a.n(n),l=a("./node_modules/p-wait-for/index.js"),c=a.n(l),d=a("./node_modules/webp-hero/dist/index.js"),u=a("./node_modules/webp-hero/libwebp/dist/webp.js");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const m=new u.a;m.Module.doNotCaptureKeyboard=!0;const b=new d.a({webp:m,webpSupport:Object(d.c)(),detectWebpImage:d.b}),f=Object(d.c)(),p=new i.a({concurrency:1});function g(e){const t=o()(e);if(!t)throw new Error("[getImageMimeType] Unable to determine MIME type of image.");return t.mime}function h(e){let t="";for(const a of e)t+=String.fromCharCode(a);return btoa(t)}async function v(e){const t=g(e),a=await f;return"image/webp"!==t||a?`data:${t};base64,${h(e)}`:p.add(async()=>{try{return await c()(()=>!1===b.busy),await b.decode(e)}catch(e){throw console.error("[convertImage] Image conversion failed: "+e.message),e}})}var k,y;(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(m,"webp","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(b,"webpConverter","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(f,"hasWebpSupportPromise","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(p,"imageConversionQueue","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(g,"getImageMimeType","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(h,"uInt8ToBase64","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts"),k.register(v,"convertImage","/home/travis/build/signalstickers/signalstickers/src/lib/convert-image.ts")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/error.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return ErrorWithCode}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},reactHotLoader,leaveModule;class ErrorWithCode extends Error{constructor(e,t){super(t),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"code",void 0),this.code=null!=e?e:"UNKNOWN"}__reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(ErrorWithCode,"from",(e,t)=>{const a=new ErrorWithCode(e,t.message);return a.stack=t.stack,a}),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(ErrorWithCode,"ErrorWithCode","/home/travis/build/signalstickers/signalstickers/src/lib/error.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module))},"./src/lib/search/constants.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"e",(function(){return b}));var r,s=a("./node_modules/@babel/runtime/helpers/inherits.js"),o=a.n(s),n=(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),a("./node_modules/@babel/runtime/helpers/wrapNativeSuper.js")),i=a.n(n);function l(e,t){l=function(e,t){return new n(e,void 0,t)};var a=i()(RegExp),r=RegExp.prototype,s=new WeakMap;function n(e,t,r){var o=a.call(this,e,t);return s.set(o,r||s.get(e)),o}function c(e,t){var a=s.get(t);return Object.keys(a).reduce((function(t,r){return t[r]=e[a[r]],t}),Object.create(null))}return o()(n,a),n.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=c(t,this)),t},n.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var a=s.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+a[t]})))}if("function"==typeof t){var o=this;return r[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(c(e,o)),t.apply(this,e)}))}return r[Symbol.replace].call(this,e,t)},l.apply(this,arguments)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const c={includeScore:!0,ignoreLocation:!0,minMatchCharLength:2,shouldSort:!0,threshold:0},d=.05,u=Symbol("GENERAL"),m=l(/([\0-\x08\x0E-\x1F!#-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]+):"([\0-!#-9;-\uFFFF]+)"/g,{attribute:1,query:2}),b=l(/([\0-\x08\x0E-\x1F!#-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]+):([\0-\x08\x0E-\x1F!#-9;-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uFEFE\uFF00-\uFFFF]+)/g,{attribute:1,query:2});var f,p;(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(c,"BASE_CONFIG","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(d,"MAX_SCORE","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(u,"GENERAL_SEARCHER","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(m,"QUOTED_EXPRESSION_PATTERN","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts"),f.register(b,"UNQUOTED_EXPRESSION_PATTERN","/home/travis/build/signalstickers/signalstickers/src/lib/search/constants.ts")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/search/index.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return H}));var r,s=a("./node_modules/fuse.js/dist/fuse.esm.js"),o=a("./node_modules/ramda/es/path.js"),n=a("./node_modules/ramda/es/split.js"),i=a("./node_modules/ramda/es/type.js"),l=a("./node_modules/ramda/es/compose.js"),c=a("./node_modules/ramda/es/filter.js"),d=a("./node_modules/ramda/es/gte.js"),u=a("./node_modules/ramda/es/propOr.js"),m=a("./node_modules/ramda/es/uniqBy.js"),b=a("./node_modules/ramda/es/forEach.js"),f=a("./node_modules/ramda/es/toPairs.js"),p=a("./node_modules/ramda/es/values.js"),g=a("./node_modules/ramda/es/forEachObjIndexed.js"),h=a("./node_modules/ramda/es/join.js"),v=a("./node_modules/ramda/es/prepend.js"),k=a("./node_modules/ramda/es/memoizeWith.js"),y=a("./node_modules/ramda/es/identity.js"),_=a("./node_modules/ramda/es/innerJoin.js"),L=a("./src/lib/search/constants.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var x,E;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function H(e){const t=new Map,a=(e,t)=>{const a=o.a(Array.isArray(t)?t:n.a(".",t),e),r=i.a(a);switch(r){case"String":return String(a);case"Array":return a;case"Boolean":case"Number":return String(a);case"Null":case"Undefined":return"false";default:throw new Error(`[Search::getFn] Unable to parse value of type "${r}" at path "${String(t)}".`)}},r=e=>{let a=e;const r=[];return b.a(e=>{0!==a.length&&b.a(e=>{if(!e.groups)return;const s=e.groups.attribute.trim(),o=e.groups.query.trim();t.has(s)&&(a=a.replace(e[0],"").trim(),r.push({[s]:o}))},[...a.matchAll(e)])},[L.e,L.d]),{query:a.trim(),attributeQueries:r}},x=k.a(y.a,a=>{let s=[];const{query:o,attributeQueries:n}=r(a);if(b.a(g.a((a,r)=>{if(!a)return;const o=t.get(r);if(!o)return;const n=o.search(a);s=0===s.length?n:_.a((t,a)=>e.identity(t.item)===e.identity(a.item),s,n)}),null!=n?n:[]),o){const a=t.get(L.b);if(!a)throw new Error("[Search] Unable to find the generic searcher.");{const t=a.search(o);s=0===s.length?t:_.a((t,a)=>e.identity(t.item)===e.identity(a.item),s,t)}}return(t=>l.a(c.a(l.a(d.a(L.c),u.a(void 0,"score"))),m.a(t=>e.identity(t.item)))(t))(s)});var E,H;return E=e.collection,b.a(([e,r])=>{t.set(e,new s.a(E,{...L.a,getFn:a,keys:[r]}))},f.a(null!==(H=e.keys)&&void 0!==H?H:[])),t.set(L.b,new s.a(E,{...L.a,getFn:a,keys:p.a(e.keys)})),{search:x,parseQueryString:r,buildQueryString:e=>{var a;const r=[];return b.a(g.a((e,a)=>{if(!t.has(a))throw new Error(`[Search::buildQueryString] Unknown attribute: "${a}".`);const s=e.split(/\s+/g).length>1?`"${e}"`:e;r.push(`${a}:${s}`)}),null!==(a=e.attributeQueries)&&void 0!==a?a:[]),h.a(" ",v.a(e.query,r)).trim()}}}(x="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&x.register(H,"SearchFactory","/home/travis/build/signalstickers/signalstickers/src/lib/search/index.ts"),(E="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&E(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/stickers.ts":function(e,t,a){"use strict";(function(e){a.d(t,"d",(function(){return v})),a.d(t,"c",(function(){return k})),a.d(t,"a",(function(){return y}));var r=a("./node_modules/@signalstickers/stickers-client/dist/browser.js");a.d(t,"b",(function(){return r.getEmojiForSticker}));var s,o=a("./node_modules/axios/index.js"),n=a.n(o),i=a("./node_modules/localforage/dist/localforage.js"),l=a.n(i),c=a("./node_modules/ramda/es/prop.js"),d=a("./node_modules/ramda/es/find.js"),u=a("./node_modules/ramda/es/pathEq.js"),m=a("./src/lib/convert-image.ts"),b=a("./src/lib/error.ts"),f=a("./src/lib/utils.ts");(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&s(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;let p;const g=new Map,h=l.a.createInstance({name:"Signal Stickers",storeName:"Image Cache"});async function v(){return p||(p=n.a.request({method:"GET",url:"stickerData.json"}).then(c.a("data"))),p}async function k(e,t){const a=t?`${e}-${t}`:e;try{if(!g.has(a)){var s;const o=await v(),n=d.a(u.a(["meta","id"],e),o),i=null!==(s=null==n?void 0:n.meta.key)&&void 0!==s?s:t;if(!i)throw new b.a("NO_KEY_PROVIDED",`No key provided for unlisted pack: ${e}.`);const l=n?{...n.meta,unlisted:!1}:{id:e,key:i,unlisted:!0},c={meta:l,manifest:await Object(r.getStickerPackManifest)(e,i)};g.set(a,c)}return g.get(a)}catch(e){if(e.isAxiosError&&403===e.response.status)throw new b.a("MANIFEST_DECRYPT","[getStickerPack] "+e.stack);throw new b.a(e.code,"[getStickerPack] "+e.stack)}}async function y(e,t,a){let s="";try{const o=`${e}-${a}`;if(!await h.getItem(o)){const n=await Object(r.getStickerInPack)(e,t,a);return s=await Object(m.a)(n),await h.setItem(o,s),s}return await h.getItem(o)}catch(e){if(!Object(f.a)(e))throw new Error("[getConvertedStickerInPack] Error getting sticker: "+e.message)}return s}var _,L;(_="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(_.register(p,"stickerPackDirectoryPromise","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(g,"stickerPackCache","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(h,"stickerImageCache","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(v,"getStickerPackDirectory","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(k,"getStickerPack","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts"),_.register(y,"getConvertedStickerInPack","/home/travis/build/signalstickers/signalstickers/src/lib/stickers.ts")),(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&L(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/lib/utils.ts":function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m}));a("./node_modules/bytes/index.js");var r,s=a("./node_modules/ramda/es/find.js"),o=a("./node_modules/ramda/es/test.js"),n=a("./src/etc/constants.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i,l;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;async function c(){}function d(e,t="min"){const a=n.a[e];if(void 0===a)throw new Error("Invalid breakpoint: "+e);return`(${t}-width: ${"min"===t?a:a-1}px)`}function u(){try{navigator.sendBeacon("https://ping.signalstickers.com/ping","")}catch(e){console.log(e+". No worries, it's okay!")}}function m(e){const t=[/the quota has been exceeded/gi];return!!(null==e?void 0:e.message)&&Boolean(s.a(t=>o.a(t,e.message),t))}(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(c,"printStorageUsage","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),i.register(d,"bp","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),i.register(u,"sendBeacon","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts"),i.register(m,"isStorageUnavailableError","/home/travis/build/signalstickers/signalstickers/src/lib/utils.ts")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},0:function(e,t,a){a("./node_modules/core-js/stable/index.js"),a("./node_modules/regenerator-runtime/runtime.js"),a("./node_modules/react-hot-loader/patch.js"),e.exports=a("./src/index.tsx")}});
//# sourceMappingURL=app-fe1bc13c760446e80fc0.js.map