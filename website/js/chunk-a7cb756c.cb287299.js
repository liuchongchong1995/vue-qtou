(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7cb756c"],{"580c":function(t,e,n){"use strict";n("7073")},7073:function(t,e,n){},"9ed6":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-cont"},[n("div",{staticClass:"login-form"},[n("div",{staticClass:"m-login-styleType"},[n("a",{staticClass:"m-login-bindBtn",attrs:{href:"javascript:;"},on:{click:t.submitDataHandle}},[t._v("登录")])])])])])},i=[],s=n("60b5"),a=(n("05e4"),n("63ba"),n("6a61"),{name:"Login",components:{},data:function(){return{browserLayer:!0,noticeLayer:!0,phone:"",password:"",otherQuery:""}},methods:{submitDataHandle:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loginPath("user/login");case 1:case"end":return e.stop()}}),e)})))()},loginPath:function(t){this.otherQuery=this.getOtherQuery(),this.$store.dispatch(t),this.$router.push({path:"/",query:this.otherQuery})},getOtherQuery:function(){var t=this,e=this.$route.query;return e?Object.keys(e).reduce((function(n,r){return"redirect"!==r?n[r]=e[r]:t.redirect=e[r],n}),{}):{}}}}),c=a,o=(n("580c"),n("5d22")),u=Object(o["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports}}]);