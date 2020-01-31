(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("2f39")},"2f39":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"commitInitialData",(function(){return O}));var r={};n.r(r),n.d(r,"initialData",(function(){return P}));var i={};n.r(i),n.d(i,"someMutation",(function(){return B}));var o={};n.r(o),n.d(o,"register",(function(){return H})),n.d(o,"login",(function(){return F})),n.d(o,"logout",(function(){return V})),n.d(o,"getList",(function(){return R}));var s={};n.r(s),n.d(s,"getName",(function(){return W})),n.d(s,"getTestConfig",(function(){return Y})),n.d(s,"getByID",(function(){return Z}));var u={};n.r(u),n.d(u,"setActivities",(function(){return tt}));var c={};n.r(c),n.d(c,"load",(function(){return et})),n.d(c,"add",(function(){return at}));var l=n("967e"),p=n.n(l),f=(n("a481"),n("96cf"),n("fa84")),d=n.n(f),m=(n("7d6e"),n("e54f"),n("0ca9"),n("5b0d"),n("2b0e")),h=n("36eb"),v=n("b05d"),b=n("2a19"),w=n("f508");m["a"].use(v["a"],{config:{notify:{},loading:{}},lang:h["a"],plugins:{Notify:b["a"],Loading:w["a"]}});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},g=[],x={name:"App"},k=x,y=n("2877"),_=Object(y["a"])(k,q,g,!1,null,null,null),Q=_.exports,D=n("2f62"),A={isAuth:!1,csrfToken:"",isAdmin:!1,user:{}},L=n("7e52");function O(t,e){t.isAuth=e.isAuth,t.csrfToken=e.csrfToken,t.isAdmin=e.isAdmin||!1,t.user=e.user||{}}var T=n("bc3a"),I=n.n(T),$=I.a.create({baseURL:"",withCredentials:!0});function P(t){return S.apply(this,arguments)}function S(){return S=d()(p.a.mark((function t(e){var n,a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.get("/initialData");case 2:n=t.sent,a=n.data,e.commit("commitInitialData",a),$.defaults.headers.common["X-CSRF-TOKEN"]=a.csrfToken;case 6:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}m["a"].prototype.$axios=$;var C={namespaced:!0,getters:L,mutations:a,actions:r,state:A},E={},j=n("6ca7");function B(){}function H(t,e){return N.apply(this,arguments)}function N(){return N=d()(p.a.mark((function t(e,n){var a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/user/register",n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),N.apply(this,arguments)}function F(t,e){return M.apply(this,arguments)}function M(){return M=d()(p.a.mark((function t(e,n){var a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/user/login",n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function V(t,e){return J.apply(this,arguments)}function J(){return J=d()(p.a.mark((function t(e,n){var a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/user/logout",n);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),J.apply(this,arguments)}function R(t,e){return K.apply(this,arguments)}function K(){return K=d()(p.a.mark((function t(e,n){var a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.get("/user/getList",n);case 2:return a=t.sent,t.abrupt("return",a.data.users);case 4:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}var U={namespaced:!0,getters:j,mutations:i,actions:o,state:E},X={types:[{label:"לימוד עצמי",value:1,showStartTime:!0,showEndTime:!0},{label:"שיעור הרב יזהר",value:2},{label:"שיעור הרב מלמד",value:3},{label:"מבחן חודשי",value:4,showTestsList:!0,showScore:!0},{label:"יחידות שקידה",value:5,showStartTime:!0,showEndTime:!0}],testsList:[{label:"ליקוטים א (חלק 1) - חודש 11",description:"עמודים ??? עד ???",value:1},{label:"זמנים (חלק 3) - חודש 12",value:2},{label:"ליקוטים א (חלק 2) - חודש 1",value:3},{label:"העם והארץ (חלק 1) - חודש 2",value:4},{label:"פסח (חלק 1) - חודש 3",value:5},{label:"פסח (חלק 2) - חודש 4",value:6},{label:"זמנים (חלק 1) - חודש 5",value:7},{label:"תפילה (חלק 1) - חודש 6",value:8},{label:"זמנים (חלק 2) - חודש 7",value:9},{label:"תפילה (חלק 2) - חודש 8",value:10}],activities:[],metadata:{},weeks:{},summary:{total:{}}},z=(n("7514"),n("2ef0")),G=n.n(z);function W(t){return function(e){var n=G.a.find(t.types,{value:e});return G.a.get(n,"label","[לא ידוע]")}}function Y(t){return function(e){return G.a.find(t.testsList,{value:e})}}function Z(t){return function(e){return t.activities[e]}}function tt(t,e){t.activities=e.activities,t.summary=e.summary,t.metadata=e.metadata,t.weeks=e.weeks}function et(t,e){return nt.apply(this,arguments)}function nt(){return nt=d()(p.a.mark((function t(e,n){var a,r;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},t.next=3,$.get("/activities/getSummary",a);case 3:return r=t.sent,e.commit("setActivities",r.data),t.abrupt("return",!0);case 6:case"end":return t.stop()}}),t)}))),nt.apply(this,arguments)}function at(t,e){return rt.apply(this,arguments)}function rt(){return rt=d()(p.a.mark((function t(e,n){var a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.post("/activities/add",n);case 2:return a=t.sent,window.console.log(a),t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t)}))),rt.apply(this,arguments)}var it={namespaced:!0,getters:s,mutations:u,actions:c,state:X};m["a"].use(D["a"]);var ot=function(){var t=new D["a"].Store({modules:{utilities:C,user:U,activities:it},strict:!1});return t},st=n("8c4f"),ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("שילובית")]),n("div",[t.isAdmin?n("q-btn",{attrs:{label:t.user.name,icon:"find_replace",flat:"",rounded:"",to:"/user/list"}}):n("q-btn",{attrs:{label:t.user.name,flat:"",rounded:"",to:"/"}})],1)],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("קישורים חשובים")]),n("q-item",{attrs:{clickable:"",tag:"a",to:"/"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"home"}})],1),n("q-item-section",[n("q-item-label",[t._v("דף הבית")]),n("q-item-label",{attrs:{caption:""}},[t._v("??? - ???")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",to:"/activities/list"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"list"}})],1),n("q-item-section",[n("q-item-label",[t._v("רשימת דיווחים")]),n("q-item-label",{attrs:{caption:""}},[t._v("??? - ???")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",to:"/activities/add"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"add"}})],1),n("q-item-section",[n("q-item-label",[t._v("הוספת דיווח")]),n("q-item-label",{attrs:{caption:""}},[t._v("??? - ???")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a"},on:{click:t.doLogout}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"logout"}})],1),n("q-item-section",[n("q-item-label",[t._v("התנתק")]),n("q-item-label",{attrs:{caption:""}},[t._v("ניתוק מהמערכת - צריך לעשות")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"picture_as_pdf"}})],1),n("q-item-section",[n("q-item-label",[t._v("נהלי התוכנית")]),n("q-item-label",{attrs:{caption:""}},[t._v("צריך להוסיף, עדיין לא נמצא")])],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},ct=[],lt={name:"AuthLayout",data:function(){return{leftDrawerOpen:!1}},computed:Object(D["b"])({isAuth:function(t){return t.utilities.isAuth},isAdmin:function(t){return t.utilities.isAdmin},user:function(t){return t.utilities.user}}),methods:{doLogout:function(){var t=d()(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("user/logout");case 3:location.reload(!0),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$q.notify("תקלה");case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=d()(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("utilities/initialData");case 2:this.isAuth||this.$router.push("/user/login");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},pt=lt,ft=n("eebe"),dt=n.n(ft),mt=n("4d5a"),ht=n("e359"),vt=n("65c6"),bt=n("9c40"),wt=n("6ac5"),qt=n("9404"),gt=n("1c1c"),xt=n("0170"),kt=n("66e5"),yt=n("4074"),_t=n("0016"),Qt=n("09e3"),Dt=Object(y["a"])(pt,ut,ct,!1,null,null,null),At=Dt.exports;dt()(Dt,"components",{QLayout:mt["a"],QHeader:ht["a"],QToolbar:vt["a"],QBtn:bt["a"],QToolbarTitle:wt["a"],QDrawer:qt["a"],QList:gt["a"],QItemLabel:xt["a"],QItem:kt["a"],QItemSection:yt["a"],QIcon:_t["a"],QPageContainer:Qt["a"]});var Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[t._v("שילובית")]),n("div",[n("q-btn",{attrs:{icon:"home",flat:"",rounded:"",to:"/user/login"}})],1)],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[t._v("קישורים חשובים")]),n("q-item",{attrs:{clickable:"",tag:"a",to:"/user/login"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"how_to_reg"}})],1),n("q-item-section",[n("q-item-label",[t._v("התחברות")]),n("q-item-label",{attrs:{caption:""}},[t._v("התחברות של תלמיד קיים")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",to:"/user/register"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"add"}})],1),n("q-item-section",[n("q-item-label",[t._v("הרשמה")]),n("q-item-label",{attrs:{caption:""}},[t._v("רישום של תלמיד חדש")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"picture_as_pdf"}})],1),n("q-item-section",[n("q-item-label",[t._v("נהלי התוכנית")]),n("q-item-label",{attrs:{caption:""}},[t._v("צריך להוסיף, עדיין לא נמצא")])],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},Ot=[],Tt={name:"NotAuthLayout",data:function(){return{leftDrawerOpen:!1}},computed:Object(D["b"])({isAuth:function(t){return t.utilities.isAuth}}),mounted:function(){var t=d()(p.a.mark((function t(){return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("utilities/initialData");case 2:this.isAuth&&this.$router.push("/");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},It=Tt,$t=Object(y["a"])(It,Lt,Ot,!1,null,null,null),Pt=$t.exports;dt()($t,"components",{QLayout:mt["a"],QHeader:ht["a"],QToolbar:vt["a"],QBtn:bt["a"],QToolbarTitle:wt["a"],QDrawer:qt["a"],QList:gt["a"],QItemLabel:xt["a"],QItem:kt["a"],QItemSection:yt["a"],QIcon:_t["a"],QPageContainer:Qt["a"]});var St=[{path:"/user",component:Pt,children:[{path:"login",component:function(){return Promise.all([n.e("vendor"),n.e("2d0a314a")]).then(n.bind(null,"013f"))}},{path:"register",component:function(){return Promise.all([n.e("vendor"),n.e("2d0c8f69")]).then(n.bind(null,"56b4"))}}]}],Ct=[{path:"/",component:At,children:[{path:"/",component:function(){return Promise.all([n.e("vendor"),n.e("2d0cc467")]).then(n.bind(null,"4cdf"))}}]},{path:"/user",component:At,children:[{path:"list",component:function(){return Promise.all([n.e("vendor"),n.e("2d2384ae")]).then(n.bind(null,"ff80"))}}]},{path:"/activities",component:At,children:[{path:"add",component:function(){return Promise.all([n.e("vendor"),n.e("2d0dd022")]).then(n.bind(null,"800d"))}},{path:"list",component:function(){return Promise.all([n.e("vendor"),n.e("2d0a3725")]).then(n.bind(null,"01e3"))}}]}],Et=[].concat(St,Ct,[{path:"/",component:At,children:[{path:"",component:function(){return Promise.all([n.e("vendor"),n.e("f73ee9c4")]).then(n.bind(null,"8b24"))}}]}]);Et.push({path:"*",component:function(){return n.e("7089f5c5").then(n.bind(null,"e51e"))}});var jt=Et;m["a"].use(st["a"]);var Bt=function(){var t=new st["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:jt,mode:"hash",base:""});return t},Ht=function(){return Nt.apply(this,arguments)};function Nt(){return Nt=d()(p.a.mark((function t(){var e,n,a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof ot){t.next=6;break}return t.next=3,ot({Vue:m["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=ot;case 7:if(e=t.t0,"function"!==typeof Bt){t.next=14;break}return t.next=11,Bt({Vue:m["a"],store:e});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=Bt;case 15:return n=t.t1,e.$router=n,a={el:"#q-app",router:n,store:e,render:function(t){return t(Q)}},t.abrupt("return",{app:a,store:e,router:n});case 19:case"end":return t.stop()}}),t)}))),Nt.apply(this,arguments)}function Ft(){return Mt.apply(this,arguments)}function Mt(){return Mt=d()(p.a.mark((function t(){var e,n,a,r,i,o,s,u,c;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ht();case 2:e=t.sent,n=e.app,a=e.store,r=e.router,i=!0,o=function(t){i=!1,window.location.href=t},s=window.location.href.replace(window.location.origin,""),u=[void 0],c=0;case 11:if(!(!0===i&&c<u.length)){t.next=29;break}if("function"===typeof u[c]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,u[c]({app:n,router:r,store:a,Vue:m["a"],ssrContext:null,redirect:o,urlPath:s});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:c++,t.next=11;break;case 29:if(!1!==i){t.next=31;break}return t.abrupt("return");case 31:new m["a"](n);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),Mt.apply(this,arguments)}Ft()},"5b0d":function(t,e,n){},"6ca7":function(t,e){},"7e52":function(t,e){}},[[0,"runtime","vendor"]]]);