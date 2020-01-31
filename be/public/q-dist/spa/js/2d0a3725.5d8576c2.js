(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a3725"],{"01e3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"flex flex-center"},[i("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"100%"}},[i("h1",{staticClass:"text-h4 text-center q-ma-none q-pb-lg"},[t._v("רשימת דיווחים לפי סינון")]),i("h2",{staticClass:"text-h6 q-ma-none q-pb-lg"},[t._v("סינון לפי: "+t._s(t.filterExplain))]),Object.values(t.allActivities).length?i("q-table",{attrs:{__title:"Treats",data:t.activities,columns:t.columns,"row-key":"id",__grid:t.$q.screen.xs,dense:t.$q.screen.xs,pagination:t.pagination,"hide-bottom":1===t.activities.length},on:{"row-click":t.editRow,"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"header-cell",fn:function(e){return[i("q-th",{staticStyle:{"text-align":"center"},attrs:{props:e}},[t._v("\n          "+t._s(e.col.label)+"\n        ")])]}},{key:"body-cell-details",fn:function(e){return[i("q-td",{attrs:{props:e}},[1===e.row.type_id||5===e.row.type_id?i("div",[t._v("\n            התחלה: "+t._s(t.formatHHMM(e.row.time_start))+"\n            "),i("br"),t._v("\n            סיום: "+t._s(t.formatHHMM(e.row.time_end))+"\n            "),i("br"),e.row.time_end&&e.row.time_start?i("span",[t._v("\n              זמן: "+t._s(t.diffInMinute(e.row.time_end,e.row.time_start))+" דקות\n            ")]):t._e()]):4===e.row.type_id?i("div",[t._v("\n            מבחן: "+t._s(t.getTestName(t._.get(e.row,"options.testId")))+"\n            "),i("br"),t._v("\n            ציון: "+t._s(t._.get(e.row,"options.score","לא ידוע"))+"\n          ")]):t._e()])]}}],null,!1,789916900)}):t._e(),t.query.id&&1===t.activities.length?i("div",{staticClass:"flex justify-center q-ma-lg"},[i("q-btn",{attrs:{label:"מחיקה",color:"red",icon:"delete"},on:{click:t.deleteCurrActivity}})],1):t._e()],1)])},r=[],a=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("967e")),s=i.n(a),o=(i("96cf"),i("fa84")),c=i.n(o),u=i("c47a"),l=i.n(u),d=i("2ef0"),f=i.n(d),p=i("bd4c"),h=i("2f62");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){l()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var b=function(t,e){return e&&t?p["b"].getDateDiff(t,e,"minutes"):"-"},v={name:"PageActivitiesList",data:function(){return{loading:!1,pagination:{rowsPerPage:25},columns:[{name:"type_name",align:"right",label:"סוג",field:"type_name",sortable:!0},{name:"date",align:"right",label:"תאריך",field:function(t){return p["b"].formatDate(t.time_start,"YYYY-MM-DD")},sortable:!0},{name:"details",align:"left",label:"פרטים"},{name:"comment",align:"left",label:"הערות",field:"comment"}]}},computed:g({_:function(){return f.a},diffInMinute:function(){return b},query:function(){return this.$route.query},filterExplain:function(){if(this.query.id)return"דיווח יחיד";var t=this.$store.getters["activities/getName"](this.query.type);return this.query.total?t+" שנתי":t+" בשבוע"},allActivities:function(){return this.$store.state.activities.activities}},Object(h["b"])("activities",["summary"]),{activities:function(){var t=this,e=[];this.query.total?e=e.concat(["total"]):this.query.week&&(e=e.concat(["weeks",this.query.week])),e=e.concat([this.query.type,"items"]);var i=f.a.get(this.summary,e,[]);if(i=i.map((function(e){return g({},e,{},f.a.get(t.allActivities,e.id,{}))})),this.query.id){var n=f.a.toInteger(this.query.id);i=i.filter((function(t){return t.id===n}))}return i}}),methods:{formatHHMM:function(t){return t?p["b"].formatDate(t,"HH:mm"):"חסר"},getTestName:function(t){var e=this.$store.getters["activities/getTestConfig"](t);return f.a.get(e,"label","????")},editRow:function(t,e){var i={total:!0,type:e.type_id,id:e.id};this.$router.push({path:"/activities/list",query:i})},deleteCurrActivity:function(){var t=c()(s.a.mark((function t(){var e,i,n;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=f.a.toInteger(this.query.id),e>0){t.next=4;break}return window.alert("חסר מזהה דיווח, אם הבעייה ממשיכה פנו לתמיכה."),t.abrupt("return");case 4:if(i=window.confirm("האם למחוק דיווח זה?"),i){t.next=7;break}return t.abrupt("return");case 7:return this.$q.loading.show({delay:400}),t.prev=8,t.next=11,this.$store.dispatch("activities/deleteRow",{id:e});case 11:t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](8),n=f.a.get(t.t0,"response.data.message","תקלה לא ידועה"),this.$q.notify({message:n,position:"center"});case 17:return t.next=19,this.$store.dispatch("activities/load",{});case 19:this.$q.loading.hide(),this.$router.back();case 21:case"end":return t.stop()}}),t,this,[[8,13]])})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){var t=c()(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$store.dispatch("activities/load",{});case 3:this.loading=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},y=v,w=i("2877"),_=i("eebe"),q=i.n(_),x=i("9989"),O=i("eaac"),k=i("357e"),j=i("db86"),$=i("9c40"),P=Object(w["a"])(y,n,r,!1,null,null,null);e["default"]=P.exports;q()(P,"components",{QPage:x["a"],QTable:O["a"],QTh:k["a"],QTd:j["a"],QBtn:$["a"]})}}]);