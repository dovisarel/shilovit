(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c8f69"],{"56b4":function(r,e,a){"use strict";a.r(e);var t=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[a("h1",{staticClass:"text-h3 text-center q-ma-none q-pb-lg"},[r._v("הרשמה")]),a("q-form",{staticClass:"q-gutter-md",on:{submit:r.doRegister}},[a("q-input",{attrs:{filled:"",label:"תעודת זהות","lazy-rules":"",rules:[function(r){return!!r||"ערך חובה"},function(r){return[8,9].includes(r.trim().length)||"קצר מידי"},function(r){return!/\D+/.test(r.trim())||"יש תווים לא תקינים"}],error:r.errors.id_card&&r.errors.id_card.length>0,"error-message":r.errors.id_card&&r.errors.id_card[0]},model:{value:r.idCard,callback:function(e){r.idCard=e},expression:"idCard"}}),a("q-input",{attrs:{filled:"",label:"שם",hint:"שם מלא בעברית","lazy-rules":"",rules:[function(r){return r&&r.length>5||"קצר מידי"}],error:r.errors.name&&r.errors.name.length>0,"error-message":r.errors.name&&r.errors.name[0]},model:{value:r.name,callback:function(e){r.name=e},expression:"name"}}),a("q-input",{attrs:{filled:"",label:"מייל",hint:"כתובת מייל","lazy-rules":"",rules:[function(r){return r&&r.length>6||"קצר מידי"},function(r){return/\S+@\S+\.\S+/.test(r.trim())||"מייל לא תקין"}],error:r.errors.email&&r.errors.email.length>0,"error-message":r.errors.email&&r.errors.email[0]},model:{value:r.email,callback:function(e){r.email=e},expression:"email"}}),a("q-input",{attrs:{filled:"",type:"password",label:"ססמה","lazy-rules":"",rules:[function(r){return r&&r.trim().length>=6||"הססמה קצרה מידי"}],error:r.errors.password&&r.errors.password.length>0,"error-message":r.errors.password&&r.errors.password[0]},model:{value:r.password,callback:function(e){r.password=e},expression:"password"}}),a("div",[a("q-btn",{attrs:{type:"sumbit",label:"הרשמה",color:"primary"}})],1)],1)],1)])},s=[],n=a("967e"),i=a.n(n),o=(a("7f7f"),a("96cf"),a("fa84")),l=a.n(o),u={name:"PageRegister",data:function(){return{idCard:"123456789",name:"aaaaaa",email:"aa@aa.aa",password:"123456789",errors:{}}},methods:{doRegister:function(){var r=l()(i.a.mark((function r(){var e;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e={id_card:this.idCard,name:this.name,email:this.email,password:this.password},r.prev=1,r.next=4,this.$store.dispatch("user/register",e);case 4:this.$router.push("/user/login"),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),r.t0.response&&r.t0.response.data&&r.t0.response.data.errors?this.errors=r.t0.response.data.errors:this.$q.notify("תקלה ביצירת המשתמש");case 10:case"end":return r.stop()}}),r,this,[[1,7]])})));function e(){return r.apply(this,arguments)}return e}()}},c=u,d=a("2877"),p=a("eebe"),m=a.n(p),f=a("9989"),h=a("0378"),g=a("27f9"),w=a("9564"),b=a("9c40"),v=Object(d["a"])(c,t,s,!1,null,null,null);e["default"]=v.exports;m()(v,"components",{QPage:f["a"],QForm:h["a"],QInput:g["a"],QToggle:w["a"],QBtn:b["a"]})}}]);