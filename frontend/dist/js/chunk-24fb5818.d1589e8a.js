(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24fb5818"],{"020e":function(t,e,a){"use strict";var s=a("b230"),n=a.n(s);n.a},"578a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loginFormContainer"},[a("div",{staticClass:"loginFormInner"},[a("form",{staticClass:"login",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("table",{staticClass:"table table-striped"},[a("tbody",[a("tr",[t._m(0),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{required:"",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("tr",[t._m(1),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._m(2)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("label",[t._v("Email")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("label",[t._v("Password")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td"),a("td",[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])])}],r=a("d017"),i={name:"Login",data:function(){return{email:"admin@localhost.com",password:"123456"}},methods:{login:function(){var t=this,e=this.email,a=this.password;this.$store.dispatch(r["c"],{email:e,password:a}).then((function(){t.$router.push("/")}))}}},o=i,l=(a("020e"),a("2877")),u=Object(l["a"])(o,s,n,!1,null,"fd34c4de",null);e["default"]=u.exports},b230:function(t,e,a){}}]);
//# sourceMappingURL=chunk-24fb5818.d1589e8a.js.map