(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/chakadai-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"053a":function(t,e,n){},2018:function(t,e,n){"use strict";var r=n("053a"),o=n.n(r);o.a},2420:function(t,e,n){"use strict";var r=n("ca41"),o=n.n(r);o.a},"2dc0":function(t,e,n){},"2f04":function(t,e,n){"use strict";var r=n("2dc0"),o=n.n(r);o.a},4374:function(t,e,n){},"4ba2":function(t,e,n){"use strict";var r=n("8750"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("4374"),{}),s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("editor",{attrs:{value:this.editingReport},on:{changed:t.saveEditingReport,add:function(e){t.addReport()}}}),n("downloader",{attrs:{reports:t.reports}}),n("viewer",{attrs:{reports:t.reports}})],1)},d=[],v=n("c93e"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("input",{attrs:{type:"date"},domProps:{value:t.value.date},on:{input:function(e){t.changed("date",e.target.value)}}}),n("inputter",{attrs:{title:"内容の要約",value:t.value.summary},on:{input:function(e){t.changed("summary",e)}}}),n("inputter",{attrs:{title:"筆者の意図",value:t.value.intention},on:{input:function(e){t.changed("intention",e)}}}),n("inputter",{attrs:{title:"自分の意見",value:t.value.opinion},on:{input:function(e){t.changed("opinion",e)}}}),n("button",{on:{click:function(e){t.addReport()}}},[t._v("追加")])],1)},g=[],b=n("a322"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-block"},[n("div",{staticClass:"label"},[t._v(t._s(t.title))]),n("content-progress",{staticClass:"content-progress",attrs:{value:t.value.length}}),n("textarea",{staticClass:"input",domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),n("span",{staticClass:"count",class:{"length-below":t.isBelow,"length-satisfied":t.isSatisfied,"length-above":t.isAbove}},[t._v(t._s(t.value.length))])],1)},_=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("span",{staticClass:"base-below"}),n("span",{staticClass:"base-satisfied"}),n("span",{staticClass:"main",class:{below:t.isBelow,satisfied:t.isSatisfied,above:t.isAbove},style:t.progress}),n("span",{staticClass:"above-gradient",style:t.progress})])},y=[],O={name:"ContentProgress",props:["value"],data:function(){return{}},computed:{progress:function(){return{"--progress":this.value/200}},isBelow:function(){return this.value<50},isSatisfied:function(){return 50<=this.value&&this.value<=200},isAbove:function(){return 200<this.value}}},C=O,R=(n("71fb"),Object(u["a"])(C,w,y,!1,null,"30561d36",null));R.options.__file="ContentProgress.vue";var j=R.exports,S={name:"Inputter",props:["title","value"],data:function(){return{}},methods:{},computed:{isBelow:function(){return this.value.length<50},isSatisfied:function(){return 50<=this.value.length&&this.value.length<=200},isAbove:function(){return 200<this.value.length}},components:{ContentProgress:j}},x=S,k=(n("74fd"),Object(u["a"])(x,m,_,!1,null,"ed18b724",null));k.options.__file="Inputter.vue";var E=k.exports,P={name:"Editor",props:["value"],methods:{addReport:function(){this.$emit("add")},changed:function(t,e){this.$emit("changed",Object(v["a"])({},this.value,Object(b["a"])({},t,e)))}},components:{Inputter:E}},$=P,A=(n("2018"),Object(u["a"])($,h,g,!1,null,"8fb23728",null));A.options.__file="Editor.vue";var I=A.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.fileURL,download:t.filename}},[t._v("バックアップをダウンロード")])},J=[],M={name:"Root",props:["reports"],methods:{},computed:{fileURL:function(){return window.URL.createObjectURL(new Blob([JSON.stringify(this.reports)],{type:"application/json"}))},filename:function(){return"chakadai-app_backup-".concat((new Date).toISOString(),".json")}}},B=M,N=(n("2420"),Object(u["a"])(B,D,J,!1,null,"a5108c74",null));N.options.__file="Downloader.vue";var L=N.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"report-viewer"},t._l(t.reversedReports,function(t){return n("report",{key:t.id,staticClass:"report",attrs:{report:t}})}))},T=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"date"},[t._v("\n    "+t._s(t.report.date)+"\n  ")]),t._l(t.paragraphs,function(e){return n("div",{key:e.label,staticClass:"paragraphs"},[n("div",{staticClass:"info"},[n("div",{staticClass:"label"},[t._v("\n        "+t._s(e.label)+"\n      ")]),n("div",{staticClass:"details"},[n("content-progress",{staticClass:"content-progress",attrs:{value:e.content.length}}),n("div",{staticClass:"count"},[t._v("\n          "+t._s(e.content.length)+"\n        ")])],1)]),n("div",{staticClass:"content",domProps:{textContent:t._s(e.content)}})])})],2)},q=[],z={name:"Report",props:["report"],data:function(){return{}},computed:{paragraphs:function(){return[{label:"内容の要約",content:this.report.summary},{label:"筆者の意図",content:this.report.intention},{label:"自分の意見",content:this.report.opinion}]}},components:{ContentProgress:j}},F=z,Y=(n("2f04"),Object(u["a"])(F,V,q,!1,null,"4bd8f49e",null));Y.options.__file="Report.vue";var G=Y.exports,H={name:"Viewer",props:["reports"],computed:{reversedReports:function(){return this.reports.slice().reverse()}},components:{Report:G}},K=H,Q=(n("6267"),Object(u["a"])(K,U,T,!1,null,"2f4c9b2a",null));Q.options.__file="Viewer.vue";var W=Q.exports;function X(t){var e=new Date(t),n=String(e.getMonth()+1),r=String(e.getDate()),o=e.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[o,n,r].join("-")}function Z(t){for(var e=t,n="abcdefghijklmnopqrstuvwxyz0123456789",r=n.length,o="",a=0;a<e;a++)o+=n[Math.floor(Math.random()*r)];return o}"undefined"===typeof sessionStorage&&window.alert("このブラウザでは使えません!");var tt={name:"Root",data:function(){return{editingReport:{date:X(new Date),summary:"",intention:"",opinion:""},reports:[]}},methods:{addReport:function(){this.reports.push(Object(v["a"])({},this.editingReport,{id:Z(8)})),this.editingReport={date:X(new Date),summary:"",intention:"",opinion:""}},saveEditingReport:function(t){this.editingReport=t}},mounted:function(){this.editingReport=Object(v["a"])({},this.editingReport,JSON.parse(localStorage.getItem("chakadaiApp-editing"))),this.reports=JSON.parse(localStorage.getItem("chakadaiApp-reports"))||[]},watch:{editingReport:function(t){localStorage.setItem("chakadaiApp-editing",JSON.stringify(t))},reports:function(t){localStorage.setItem("chakadaiApp-reports",JSON.stringify(t))}},components:{Editor:I,Downloader:L,Viewer:W}},et=tt,nt=(n("4ba2"),Object(u["a"])(et,f,d,!1,null,"7c78a538",null));nt.options.__file="Root.vue";var rt=nt.exports;r["a"].use(p["a"]);var ot=new p["a"]({mode:"history",base:"/chakadai-app/",routes:[{path:"/",name:"root",component:rt}]});r["a"].config.productionTip=!1,new r["a"]({router:ot,render:function(t){return t(l)}}).$mount("#app")},"5a2e":function(t,e,n){},6267:function(t,e,n){"use strict";var r=n("d661"),o=n.n(r);o.a},"71fb":function(t,e,n){"use strict";var r=n("5a2e"),o=n.n(r);o.a},"74fd":function(t,e,n){"use strict";var r=n("fb36"),o=n.n(r);o.a},8750:function(t,e,n){},c21b:function(t,e,n){},ca41:function(t,e,n){},d661:function(t,e,n){},fb36:function(t,e,n){}});
//# sourceMappingURL=app.65981838.js.map