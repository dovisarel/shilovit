(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("2f39")},"2f39":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"commitInitialData",(function(){return O}));var r={};n.r(r),n.d(r,"initialData",(function(){return I}));var i={};n.r(i),n.d(i,"someMutation",(function(){return E}));var o={};n.r(o),n.d(o,"register",(function(){return H})),n.d(o,"login",(function(){return F})),n.d(o,"logout",(function(){return N})),n.d(o,"getList",(function(){return J}));var s={};n.r(s),n.d(s,"setActivities",(function(){return z}));var c={};n.r(c),n.d(c,"load",(function(){return G})),n.d(c,"add",(function(){return Y}));var u=n("967e"),l=n.n(u),p=(n("a481"),n("96cf"),n("fa84")),f=n.n(p),d=(n("7d6e"),n("e54f"),n("0ca9"),n("5b0d"),n("2b0e")),m=n("36eb"),h=n("b05d"),v=n("2a19"),b=n("f508");d["a"].use(h["a"],{config:{notify:{},loading:{}},lang:m["a"],plugins:{Notify:v["a"],Loading:b["a"]}});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},q=[],g={name:"App"},x=g,k=n("2877"),y=Object(k["a"])(x,w,q,!1,null,null,null),_=y.exports,Q=n("2f62"),A={isAuth:!1,csrfToken:"",isAdmin:!1,user:{}},D=n("7e52");function O(t,e){t.isAuth=e.isAuth,t.csrfToken=e.csrfToken,t.isAdmin=e.isAdmin||!1,t.user=e.user||{}}var L=n("bc3a"),T=n.n(L);window.console.log("production");var $=T.a.create({baseURL:"",withCredentials:!0});function I(t){return P.apply(this,arguments)}function P(){return P=f()(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.get("/initialData");case 2:n=t.sent,a=n.data,e.commit("commitInitialData",a),$.defaults.headers.common["X-CSRF-TOKEN"]=a.csrfToken;case 6:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}d["a"].prototype.$axios=$;var j={namespaced:!0,getters:D,mutations:a,actions:r,state:A},C={},S=n("6ca7");function E(){}function H(t,e){return B.apply(this,arguments)}function B(){return B=f()(l.a.mark((function t(e,n){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/user/register",n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function F(t,e){return M.apply(this,arguments)}function M(){return M=f()(l.a.mark((function t(e,n){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/user/login",n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function N(t,e){return V.apply(this,arguments)}function V(){return V=f()(l.a.mark((function t(e,n){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/user/logout",n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}function J(t,e){return R.apply(this,arguments)}function R(){return R=f()(l.a.mark((function t(e,n){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.get("/user/getList",n);case 2:return a=t.sent,t.abrupt("return",a.data.users);case 4:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}var K={namespaced:!0,getters:S,mutations:i,actions:o,state:C},U={activities:[],metadata:{},weeks:{},summary:{total:{}}},X=n("77ec");function z(t,e){t.activities=e.activities,t.summary=e.summary,t.metadata=e.metadata,t.weeks=e.weeks}function G(t,e){return W.apply(this,arguments)}function W(){return W=f()(l.a.mark((function t(e,n){var a,r;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},t.next=3,$.get("/activities/getSummary",a);case 3:return r=t.sent,e.commit("setActivities",r.data),t.abrupt("return",!0);case 6:case"end":return t.stop()}}),t)}))),W.apply(this,arguments)}function Y(t,e){return Z.apply(this,arguments)}function Z(){return Z=f()(l.a.mark((function t(e,n){var a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/activities/add",n);case 2:return a=t.sent,window.console.log(a),t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}var tt={namespaced:!0,getters:X,mutations:s,actions:c,state:U};d["a"].use(Q["a"]);var et=function(){var t=new Q["a"].Store({modules:{utilities:j,user:K,activities:tt},strict:!1});return t},nt=n("8c4f"),at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("שילובית")]),n("div",[t.isAdmin?n("q-btn",{attrs:{label:t.user.name,icon:"find_replace",flat:"",rounded:"",to:"/user/list"}}):n("q-btn",{attrs:{label:t.user.name,flat:"",rounded:"",to:"/"}})],1)],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("קישורים חשובים")]),n("q-item",{attrs:{clickable:"",tag:"a",to:"/"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"home"}})],1),n("q-item-section",[n("q-item-label",[t._v("דף הבית")]),n("q-item-label",{attrs:{caption:""}},[t._v("??? - ???")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",to:"/activities/list"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"list"}})],1),n("q-item-section",[n("q-item-label",[t._v("רשימת דיווחים")]),n("q-item-label",{attrs:{caption:""}},[t._v("??? - ???")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",to:"/activities/add"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"add"}})],1),n("q-item-section",[n("q-item-label",[t._v("הוספת דיווח")]),n("q-item-label",{attrs:{caption:""}},[t._v("??? - ???")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a"},on:{click:t.doLogout}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"logout"}})],1),n("q-item-section",[n("q-item-label",[t._v("התנתק")]),n("q-item-label",{attrs:{caption:""}},[t._v("ניתוק מהמערכת - צריך לעשות")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"picture_as_pdf"}})],1),n("q-item-section",[n("q-item-label",[t._v("נהלי התוכנית")]),n("q-item-label",{attrs:{caption:""}},[t._v("צריך להוסיף, עדיין לא נמצא")])],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},rt=[],it={name:"AuthLayout",data:function(){return{leftDrawerOpen:!1}},computed:Object(Q["b"])({isAuth:function(t){return t.utilities.isAuth},isAdmin:function(t){return t.utilities.isAdmin},user:function(t){return t.utilities.user}}),methods:{doLogout:function(){var t=f()(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("user/logout");case 3:location.reload(!0),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$q.notify("תקלה");case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=f()(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("utilities/initialData");case 2:this.isAuth||this.$router.push("/user/login");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},ot=it,st=n("eebe"),ct=n.n(st),ut=n("4d5a"),lt=n("e359"),pt=n("65c6"),ft=n("9c40"),dt=n("6ac5"),mt=n("9404"),ht=n("1c1c"),vt=n("0170"),bt=n("66e5"),wt=n("4074"),qt=n("0016"),gt=n("09e3"),xt=Object(k["a"])(ot,at,rt,!1,null,null,null),kt=xt.exports;ct()(xt,"components",{QLayout:ut["a"],QHeader:lt["a"],QToolbar:pt["a"],QBtn:ft["a"],QToolbarTitle:dt["a"],QDrawer:mt["a"],QList:ht["a"],QItemLabel:vt["a"],QItem:bt["a"],QItemSection:wt["a"],QIcon:qt["a"],QPageContainer:gt["a"]});var yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("שילובית")]),n("div",[n("q-btn",{attrs:{icon:"home",flat:"",rounded:"",to:"/user/login"}})],1)],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("קישורים חשובים")]),n("q-item",{attrs:{clickable:"",tag:"a",to:"/user/login"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"how_to_reg"}})],1),n("q-item-section",[n("q-item-label",[t._v("התחברות")]),n("q-item-label",{attrs:{caption:""}},[t._v("התחברות של תלמיד קיים")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",to:"/user/register"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"add"}})],1),n("q-item-section",[n("q-item-label",[t._v("הרשמה")]),n("q-item-label",{attrs:{caption:""}},[t._v("רישום של תלמיד חדש")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"picture_as_pdf"}})],1),n("q-item-section",[n("q-item-label",[t._v("נהלי התוכנית")]),n("q-item-label",{attrs:{caption:""}},[t._v("צריך להוסיף, עדיין לא נמצא")])],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},_t=[],Qt={name:"NotAuthLayout",data:function(){return{leftDrawerOpen:!1}},computed:Object(Q["b"])({isAuth:function(t){return t.utilities.isAuth}}),mounted:function(){var t=f()(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("utilities/initialData");case 2:this.isAuth&&this.$router.push("/");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},At=Qt,Dt=Object(k["a"])(At,yt,_t,!1,null,null,null),Ot=Dt.exports;ct()(Dt,"components",{QLayout:ut["a"],QHeader:lt["a"],QToolbar:pt["a"],QBtn:ft["a"],QToolbarTitle:dt["a"],QDrawer:mt["a"],QList:ht["a"],QItemLabel:vt["a"],QItem:bt["a"],QItemSection:wt["a"],QIcon:qt["a"],QPageContainer:gt["a"]});var Lt=[{path:"/user",component:Ot,children:[{path:"login",component:function(){return Promise.all([n.e("vendor"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}},{path:"register",component:function(){return Promise.all([n.e("vendor"),n.e("2d0c8f69")]).then(n.bind(null,"56b4"))}}]}],Tt=[{path:"/",component:kt,children:[{path:"/",component:function(){return Promise.all([n.e("vendor"),n.e("2d0cc467")]).then(n.bind(null,"4cdf"))}}]},{path:"/user",component:kt,children:[{path:"list",component:function(){return Promise.all([n.e("vendor"),n.e("2d2384ae")]).then(n.bind(null,"ff80"))}}]},{path:"/activities",component:kt,children:[{path:"add",component:function(){return Promise.all([n.e("vendor"),n.e("2d0dd022")]).then(n.bind(null,"800d"))}},{path:"list",component:function(){return Promise.all([n.e("vendor"),n.e("2d0a3725")]).then(n.bind(null,"01e3"))}}]}],$t=[].concat(Lt,Tt,[{path:"/",component:kt,children:[{path:"",component:function(){return Promise.all([n.e("vendor"),n.e("f73ee9c4")]).then(n.bind(null,"8b24"))}}]}]);$t.push({path:"*",component:function(){return n.e("7089f5c5").then(n.bind(null,"e51e"))}});var It=$t;d["a"].use(nt["a"]);var Pt=function(){var t=new nt["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:It,mode:"hash",base:""});return t},jt=function(){return Ct.apply(this,arguments)};function Ct(){return Ct=f()(l.a.mark((function t(){var e,n,a;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof et){t.next=6;break}return t.next=3,et({Vue:d["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=et;case 7:if(e=t.t0,"function"!==typeof Pt){t.next=14;break}return t.next=11,Pt({Vue:d["a"],store:e});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=Pt;case 15:return n=t.t1,e.$router=n,a={el:"#q-app",router:n,store:e,render:function(t){return t(_)}},t.abrupt("return",{app:a,store:e,router:n});case 19:case"end":return t.stop()}}),t)}))),Ct.apply(this,arguments)}function St(){return Et.apply(this,arguments)}function Et(){return Et=f()(l.a.mark((function t(){var e,n,a,r,i,o,s,c,u;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,jt();case 2:e=t.sent,n=e.app,a=e.store,r=e.router,i=!0,o=function(t){i=!1,window.location.href=t},s=window.location.href.replace(window.location.origin,""),c=[void 0],u=0;case 11:if(!(!0===i&&u<c.length)){t.next=29;break}if("function"===typeof c[u]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,c[u]({app:n,router:r,store:a,Vue:d["a"],ssrContext:null,redirect:o,urlPath:s});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:u++,t.next=11;break;case 29:if(!1!==i){t.next=31;break}return t.abrupt("return");case 31:new d["a"](n);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),Et.apply(this,arguments)}St()},"5b0d":function(t,e,n){},"6ca7":function(t,e){},"77ec":function(t,e){},"7e52":function(t,e){}},[[0,"runtime","vendor"]]]);