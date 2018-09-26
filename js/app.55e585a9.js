(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/chakadai-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),i=n.n(r);i.a},2420:function(t,e,n){"use strict";var r=n("ca41"),i=n.n(r);i.a},3448:function(t,e,n){"use strict";var r=n("f61c"),i=n.n(r);i.a},4374:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o=(n("4374"),{}),s=o,u=(n("034f"),n("2877")),l=Object(u["a"])(s,i,a,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("editor",{attrs:{editing:t.getEditingReport},on:{changed:t.saveEditingReport,add:function(e){t.addReport(e)}}}),n("downloader",{attrs:{reports:t.reports}}),n("viewer",{attrs:{reports:t.reports}})],1)},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),n("inputter",{attrs:{title:"内容の要約"},on:{input:t.changed},model:{value:t.summary,callback:function(e){t.summary=e},expression:"summary"}}),n("inputter",{attrs:{title:"筆者の意図"},on:{input:t.changed},model:{value:t.intention,callback:function(e){t.intention=e},expression:"intention"}}),n("inputter",{attrs:{title:"自分の意見"},on:{input:t.changed},model:{value:t.opinion,callback:function(e){t.opinion=e},expression:"opinion"}}),n("button",{on:{click:function(e){t.addReport()}}},[t._v("追加")])],1)},h=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-block"},[n("div",{staticClass:"label"},[t._v(t._s(t.title))]),n("content-progress",{staticClass:"content-progress",attrs:{value:t.value.length}}),n("textarea",{staticClass:"input",domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),n("span",{staticClass:"count",class:{"length-below":t.isBelow,"length-satisfied":t.isSatisfied,"length-above":t.isAbove}},[t._v(t._s(t.value.length))])],1)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("span",{staticClass:"base-below"}),n("span",{staticClass:"base-satisfied"}),n("span",{staticClass:"main",class:{below:t.isBelow,satisfied:t.isSatisfied,above:t.isAbove},style:t.progress}),n("span",{staticClass:"above-gradient",style:t.progress})])},_=[],y={name:"ContentProgress",props:["value"],data:function(){return{}},computed:{progress:function(){return{"--progress":this.value/200}},isBelow:function(){return this.value<50},isSatisfied:function(){return 50<=this.value&&this.value<=200},isAbove:function(){return 200<this.value}}},w=y,S=(n("71fb"),Object(u["a"])(w,b,_,!1,null,"30561d36",null));S.options.__file="ContentProgress.vue";var O=S.exports,C={name:"Inputter",props:["title","value"],data:function(){return{}},methods:{},computed:{isBelow:function(){return this.value.length<50},isSatisfied:function(){return 50<=this.value.length&&this.value.length<=200},isAbove:function(){return 200<this.value.length}},components:{ContentProgress:O}},k=C,j=(n("74fd"),Object(u["a"])(k,g,m,!1,null,"ed18b724",null));j.options.__file="Inputter.vue";var x=j.exports;function R(t){var e=new Date(t),n=String(e.getMonth()+1),r=String(e.getDate()),i=e.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[i,n,r].join("-")}var E={name:"Editor",props:["editing"],data:function(){return{date:R(new Date),summary:this.editing.summary,intention:this.editing.intention,opinion:this.editing.opinion}},methods:{addReport:function(){this.$emit("add",{date:this.date,summary:this.summary,intention:this.intention,opinion:this.opinion})},changed:function(){this.$emit("changed",{date:this.date,summary:this.summary,intention:this.intention,opinion:this.opinion})}},components:{Inputter:x}},A=E,I=(n("3448"),Object(u["a"])(A,v,h,!1,null,"f24b5500",null));I.options.__file="Editor.vue";var P=I.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.fileURL,download:t.filename}},[t._v("バックアップをダウンロード")])},J=[],N={name:"Root",props:["reports"],methods:{},computed:{fileURL:function(){return window.URL.createObjectURL(new Blob([JSON.stringify(this.reports)],{type:"application/json"}))},filename:function(){return"chakadai-app_backup-".concat((new Date).toISOString(),".json")}}},M=N,D=(n("2420"),Object(u["a"])(M,$,J,!1,null,"a5108c74",null));D.options.__file="Downloader.vue";var B=D.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"report-viewer"},t._l(t.reversedReports,function(t){return n("report",{key:t.id,staticClass:"report",attrs:{report:t}})}))},U=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"date"},[t._v("\n    "+t._s(t.report.date)+"\n  ")]),t._l(t.paragraphs,function(e){return n("div",{key:e.label,staticClass:"paragraphs"},[n("div",{staticClass:"info"},[n("div",{staticClass:"label"},[t._v("\n        "+t._s(e.label)+"\n      ")]),n("div",{staticClass:"details"},[n("content-progress",{staticClass:"content-progress",attrs:{value:e.content.length}}),n("div",{staticClass:"count"},[t._v("\n          "+t._s(e.content.length)+"\n        ")])],1)]),n("div",{staticClass:"content"},[t._v("\n      "+t._s(e.content)+"\n    ")])])})],2)},V=[],q={name:"Report",props:["report"],data:function(){return{}},computed:{paragraphs:function(){return[{label:"内容の要約",content:this.report.summary},{label:"筆者の意図",content:this.report.intention},{label:"自分の意見",content:this.report.opinion}]}},components:{ContentProgress:O}},z=q,F=(n("9dbb"),Object(u["a"])(z,T,V,!1,null,"18389630",null));F.options.__file="Report.vue";var Y=F.exports,G={name:"Viewer",props:["reports"],computed:{reversedReports:function(){return this.reports.slice().reverse()}},components:{Report:Y}},H=G,K=(n("6267"),Object(u["a"])(H,L,U,!1,null,"2f4c9b2a",null));K.options.__file="Viewer.vue";var Q=K.exports;function W(t){for(var e=t,n="abcdefghijklmnopqrstuvwxyz0123456789",r=n.length,i="",a=0;a<e;a++)i+=n[Math.floor(Math.random()*r)];return i}"undefined"===typeof sessionStorage&&window.alert("このブラウザでは使えません!"),null===localStorage.getItem("chakadaiApp-reports")&&localStorage.setItem("chakadaiApp-reports","[]"),null===localStorage.getItem("chakadaiApp-editing")&&localStorage.setItem("chakadaiApp-editing",JSON.stringify({date:"",summary:"",intention:"",opinion:""}));var X={name:"Root",data:function(){return{reports:JSON.parse(localStorage.getItem("chakadaiApp-reports"))}},methods:{addReport:function(t){t.id=W(8);var e=JSON.parse(localStorage.getItem("chakadaiApp-reports"));e.push(t),localStorage.setItem("chakadaiApp-reports",JSON.stringify(e)),this.reports.push(t)},saveEditingReport:function(t){t.id=W(8),localStorage.setItem("chakadaiApp-editing",JSON.stringify(t))}},computed:{getEditingReport:function(){return JSON.parse(localStorage.getItem("chakadaiApp-editing"))}},components:{Editor:P,Downloader:B,Viewer:Q}},Z=X,tt=(n("74c2"),Object(u["a"])(Z,d,f,!1,null,"efd612ec",null));tt.options.__file="Root.vue";var et=tt.exports;r["a"].use(p["a"]);var nt=new p["a"]({mode:"history",base:"/chakadai-app/",routes:[{path:"/",name:"root",component:et}]});r["a"].config.productionTip=!1,new r["a"]({router:nt,render:function(t){return t(c)}}).$mount("#app")},"5a2e":function(t,e,n){},6267:function(t,e,n){"use strict";var r=n("d661"),i=n.n(r);i.a},"71fb":function(t,e,n){"use strict";var r=n("5a2e"),i=n.n(r);i.a},"74c2":function(t,e,n){"use strict";var r=n("7f42"),i=n.n(r);i.a},"74fd":function(t,e,n){"use strict";var r=n("fb36"),i=n.n(r);i.a},"7f42":function(t,e,n){},"9dbb":function(t,e,n){"use strict";var r=n("be54"),i=n.n(r);i.a},be54:function(t,e,n){},c21b:function(t,e,n){},ca41:function(t,e,n){},d661:function(t,e,n){},f61c:function(t,e,n){},fb36:function(t,e,n){}});
//# sourceMappingURL=app.55e585a9.js.map