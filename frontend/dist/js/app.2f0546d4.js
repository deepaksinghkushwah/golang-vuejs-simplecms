(function(t){function e(e){for(var n,r,i=e[0],c=e[1],u=e[2],l=0,g=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(g.length)g.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"75709428","chunk-090ce600":"70aacb5c","chunk-24fb5818":"d1589e8a","chunk-67822541":"809e985b"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-090ce600":1,"chunk-24fb5818":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-090ce600":"209b7d1b","chunk-24fb5818":"945ee13d","chunk-67822541":"31d6cfe0"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var g=document.getElementsByTagName("style");for(i=0;i<g.length;i++){u=g[i],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],d.parentNode.removeChild(d),a(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var g=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;g.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",g.name="ChunkLoadError",g.type=n,g.request=r,a[1](g)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var g=0;g<u.length;g++)e(u[g]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("ac1f"),a("5319"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"container"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("CMS")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),a("Categories")],1),a("ul",{staticClass:"navbar-nav"},[0==t.$store.getters.isAuthenticated?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1):t._e(),1==t.$store.getters.isAuthenticated?a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/page-create"}},[t._v("Create Page")])],1):t._e(),1==t.$store.getters.isAuthenticated?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"javascript:void(0)"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])]):t._e()])])],1),t.loading?a("div",{staticClass:"loadingContainer"},[a("div",{staticClass:"loadingItem"},[t._v("Loading....")])]):t._e(),a("router-view")],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Fragment",t._l(t.categories,(function(e){return a("li",{key:e.ID,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Category",params:{alias:e.Alias}}}},[t._v(t._s(e.Title))])],1)})),0)},i=[],c=a("3f08"),u={components:{Fragment:c["a"]},computed:{categories:function(){return this.$store.state.category.categories}}},l=u,g=a("2877"),d=Object(g["a"])(l,s,i,!1,null,"1e7fc8a8",null),p=d.exports,f=a("d017"),h={name:"Home",components:{Categories:p},methods:{logout:function(){var t=this;this.$store.dispatch(f["b"]).then((function(){t.$router.push("/login")}))}},computed:{loading:function(){return this.$store.state.isLoading},token:function(){return this.$store.state.auth.token}},mounted:function(){console.log("Authenticated: ",this.$store.getters.isAuthenticated),this.$store.dispatch("getCategories")}},m=h,v=(a("034f"),Object(g["a"])(m,r,o,!1,null,null,null)),b=v.exports,C=(a("d3b7"),a("8c4f")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._v(" This is home page ")])},k=[],y={name:"Home"},P=y,O=Object(g["a"])(P,_,k,!1,null,null,null),S=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category"},[a("Pages",{attrs:{alias:t.alias}})],1)},w=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"jumbotron"},[a("h1",{staticClass:"card-title"},[t._v("Pages")]),t._v(" Category: "),a("strong",[t._v(t._s(t._f("capital")(t.alias)))]),a("p"),t.pageList.length<=0?a("div",[t._v("No record found")]):t._e(),a("ul",t._l(t.pageList,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"Page",params:{category:t.alias,page:e.Alias}}}},[t._v(t._s(t._f("short")(e.Title,100)))])],1)})),0)])])])},A=[],L={props:["alias"],computed:{pageList:function(){return this.$store.state.page.pages}}},E=L,T=Object(g["a"])(E,$,A,!1,null,null,null),U=T.exports,x={name:"Category",data:function(){return{alias:""}},components:{Pages:U},mounted:function(){this.alias=this.$route.params.alias},created:function(){this.$store.dispatch("getPagesForCategory",{alias:this.$route.params.alias})},watch:{"$route.params.alias":function(t){this.$store.dispatch("getPagesForCategory",{alias:t})}}},H=x,I=Object(g["a"])(H,j,w,!1,null,null,null),F=I.exports;n["a"].use(C["a"]);var N,D,M=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/category/:alias",name:"Category",component:F},{path:"/pages/:category/:page",name:"Page",component:function(){return a.e("chunk-090ce600").then(a.bind(null,"9973"))}},{path:"/login",name:"Login",component:function(){return a.e("chunk-24fb5818").then(a.bind(null,"578a"))}},{path:"/page-create",name:"PageCreate",component:function(){return a.e("chunk-67822541").then(a.bind(null,"4986"))}}],R=new C["a"]({mode:"history",base:"/",routes:M}),B=R,q=a("2f62"),J=(a("99af"),a("ade3")),z=a("bc3a"),G=a.n(z),K={token:localStorage.getItem("user-token")||"",status:"",hasLoadedOnce:!1},Q={isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},V=(N={},Object(J["a"])(N,f["c"],(function(t,e){var a=t.commit,n=t.rootState,r=localStorage.getItem("user-token");r?a(f["d"],r):""!=e.email&&G.a.post(n.baseUrl.concat("login"),{email:e.email,password:e.password}).then((function(t){localStorage.setItem("user-token",t.data.token),a(f["d"],t.data.token)}))})),Object(J["a"])(N,f["b"],(function(t){var e=t.commit;return new Promise((function(t){e(f["b"]),localStorage.removeItem("user-token"),t()}))})),N),W=(D={},Object(J["a"])(D,f["c"],(function(t){t.status="loading"})),Object(J["a"])(D,f["d"],(function(t,e){t.status="success",t.token=e,t.hasLoadedOnce=!0})),Object(J["a"])(D,f["a"],(function(t){t.status="error",t.hasLoadedOnce=!0})),Object(J["a"])(D,f["b"],(function(t){t.token=""})),D),X={state:K,getters:Q,actions:V,mutations:W},Y=G.a.create({baseURL:"http://127.0.0.1:8081/v1/"});Y.defaults.headers.common["Authorization"]="Bearer"+localStorage.getItem("user-token");var Z=Y,tt={pages:[],page:null},et={getPagesForCategory:function(t,e){var a=t.commit,n=t.rootState;a("updateProgress",!0);var r=n.baseUrl.concat("pages/"+e.alias);G.a.get(r).then((function(t){a("updatePages",t.data.result),a("updateProgress",!1)}))},getPage:function(t,e){var a=t.commit,n=t.rootState;a("updateProgress",!0);var r=n.baseUrl.concat("pages/"+e.category+"/"+e.page);G.a.get(r).then((function(t){a("updatePage",t.data),a("updateProgress",!1)}))},createPage:function(t,e){var a=t.rootState;return new Promise((function(t,n){a.baseUrl.concat("member/create-page");var r={Title:e.title,Content:e.content,Alias:e.alias,catID:e.cat_id};Z.post("member/create-page",r).then((function(e){t(e)})).then((function(t){n(t)}))}))}},at={updatePages:function(t,e){t.pages=e},updatePage:function(t,e){t.page=e},updateProgress:function(t,e){t.isLoading=e}},nt={state:tt,actions:et,mutations:at},rt={categories:[]},ot={getCategories:function(t){var e=t.commit,a=t.rootState,n=a.baseUrl.concat("categories");e("updateProgress",!0),G.a.get(n).then((function(t){e("updateCategories",t.data.result),e("updateProgress",!1)}))}},st={updateCategories:function(t,e){t.categories=e}},it={state:rt,actions:ot,mutations:st};n["a"].use(q["a"]);var ct=new q["a"].Store({state:{baseUrl:"http://127.0.0.1:8081/v1/",isLoading:!1},getters:{},setters:{},mutations:{updateProgress:function(t,e){t.isLoading=e}},modules:{auth:X,page:nt,category:it}});n["a"].filter("nl2br",(function(t){return t.replace(/(?:\r\n|\r|\n)/g,"<br>")})),n["a"].filter("capital",(function(t){return t.toUpperCase()})),n["a"].filter("short",(function(t,e){return t.length>e?t.substr(0,e)+"...":t.substr(0,e)})),n["a"].config.productionTip=!1,new n["a"]({router:B,store:ct,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,a){},d017:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s}));var n="AUTH_REQUEST",r="AUTH_SUCCESS",o="AUTH_ERROR",s="AUTH_LOGOUT"}});
//# sourceMappingURL=app.2f0546d4.js.map