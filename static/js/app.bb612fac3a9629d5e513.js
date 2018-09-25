webpackJsonp([0],{"11wE":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=(n("c9Nr"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var s=n("VU/8")({name:"App"},i,!1,function(t){n("aW8c")},null,null).exports,r=n("/ocq"),o=n("mvHQ"),l=n.n(o),c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress"},[n("span",{staticClass:"base-below"}),t._v(" "),n("span",{staticClass:"base-satisfied"}),t._v(" "),n("span",{staticClass:"main",class:{below:t.isBelow,satisfied:t.isSatisfied,above:t.isAbove},style:t.progress}),t._v(" "),n("span",{staticClass:"above-gradient",style:t.progress})])},staticRenderFns:[]};var u=n("VU/8")({name:"ContentProgress",props:["value"],data:function(){return{}},computed:{progress:function(){return{"--progress":this.value/200}},isBelow:function(){return this.value<50},isSatisfied:function(){return 50<=this.value&&this.value<=200},isAbove:function(){return 200<this.value}}},c,!1,function(t){n("11wE")},"data-v-30561d36",null).exports,p={name:"Inputter",props:["title","value"],data:function(){return{}},methods:{},computed:{isBelow:function(){return this.value.length<50},isSatisfied:function(){return 50<=this.value.length&&this.value.length<=200},isAbove:function(){return 200<this.value.length}},components:{ContentProgress:u}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-block"},[n("div",{staticClass:"label"},[t._v(t._s(t.title))]),t._v(" "),n("content-progress",{staticClass:"content-progress",attrs:{value:t.value.length}}),t._v(" "),n("textarea",{staticClass:"input",domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),t._v(" "),n("span",{staticClass:"count",class:{"length-below":t.isBelow,"length-satisfied":t.isSatisfied,"length-above":t.isAbove}},[t._v(t._s(t.value.length))])],1)},staticRenderFns:[]};var v={name:"Editor",props:["editing"],data:function(){return{date:(t=new Date,e=new Date(t),n=String(e.getMonth()+1),a=String(e.getDate()),i=e.getFullYear(),n.length<2&&(n="0"+n),a.length<2&&(a="0"+a),[i,n,a].join("-")),summary:this.editing.summary,intention:this.editing.intention,opinion:this.editing.opinion};var t,e,n,a,i},methods:{addReport:function(){this.$emit("add",{date:this.date,summary:this.summary,intention:this.intention,opinion:this.opinion})},changed:function(){this.$emit("changed",{date:this.date,summary:this.summary,intention:this.intention,opinion:this.opinion})}},components:{Inputter:n("VU/8")(p,d,!1,function(t){n("h3P+")},"data-v-ed18b724",null).exports}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),n("inputter",{attrs:{title:"内容の要約"},on:{input:t.changed},model:{value:t.summary,callback:function(e){t.summary=e},expression:"summary"}}),t._v(" "),n("inputter",{attrs:{title:"筆者の意図"},on:{input:t.changed},model:{value:t.intention,callback:function(e){t.intention=e},expression:"intention"}}),t._v(" "),n("inputter",{attrs:{title:"自分の意見"},on:{input:t.changed},model:{value:t.opinion,callback:function(e){t.opinion=e},expression:"opinion"}}),t._v(" "),n("button",{on:{click:function(e){t.addReport()}}},[t._v("追加")])],1)},staticRenderFns:[]};var m=n("VU/8")(v,h,!1,function(t){n("Punz")},"data-v-f24b5500",null).exports,g={name:"Report",props:["report"],data:function(){return{}},computed:{paragraphs:function(){return[{label:"内容の要約",content:this.report.summary},{label:"筆者の意図",content:this.report.intention},{label:"自分の意見",content:this.report.opinion}]}},components:{ContentProgress:u}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"date"},[t._v("\n    "+t._s(t.report.date)+"\n  ")]),t._v(" "),t._l(t.paragraphs,function(e){return n("div",{key:e.label,staticClass:"paragraphs"},[n("div",{staticClass:"info"},[n("div",{staticClass:"label"},[t._v("\n        "+t._s(e.label)+"\n      ")]),t._v(" "),n("div",{staticClass:"details"},[n("content-progress",{staticClass:"content-progress",attrs:{value:e.content.length}}),t._v(" "),n("div",{staticClass:"count"},[t._v("\n          "+t._s(e.content.length)+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n      "+t._s(e.content)+"\n    ")])])})],2)},staticRenderFns:[]};var _={name:"Viewer",props:["reports"],computed:{reversedReports:function(){return this.reports.slice().reverse()}},components:{Report:n("VU/8")(g,f,!1,function(t){n("T7Yl")},"data-v-18389630",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"report-viewer"},this._l(this.reversedReports,function(t){return e("report",{key:t.id,staticClass:"report",attrs:{report:t}})}))},staticRenderFns:[]};var C=n("VU/8")(_,b,!1,function(t){n("rQv1")},"data-v-2f4c9b2a",null).exports;function w(t){for(var e=t,n="abcdefghijklmnopqrstuvwxyz0123456789",a=n.length,i="",s=0;s<e;s++)i+=n[Math.floor(Math.random()*a)];return i}"undefined"==typeof sessionStorage&&window.alert("このブラウザでは使えません!"),null===localStorage.getItem("chakadaiApp-reports")&&localStorage.setItem("chakadaiApp-reports","[]"),null===localStorage.getItem("chakadaiApp-editing")&&localStorage.setItem("chakadaiApp-editing",l()({date:"",summary:"",intention:"",opinion:""}));var R={name:"Root",data:function(){return{reports:JSON.parse(localStorage.getItem("chakadaiApp-reports"))}},methods:{addReport:function(t){t.id=w(8);var e=JSON.parse(localStorage.getItem("chakadaiApp-reports"));e.push(t),localStorage.setItem("chakadaiApp-reports",l()(e)),this.reports.push(t)},saveEditingReport:function(t){t.id=w(8),localStorage.setItem("chakadaiApp-editing",l()(t))}},computed:{getEditingReport:function(){return JSON.parse(localStorage.getItem("chakadaiApp-editing"))}},components:{Editor:m,Viewer:C}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("editor",{attrs:{editing:t.getEditingReport},on:{changed:t.saveEditingReport,add:function(e){t.addReport(e)}}}),t._v(" "),n("viewer",{attrs:{reports:t.reports}})],1)},staticRenderFns:[]};var S=n("VU/8")(R,y,!1,function(t){n("lU2z")},"data-v-c1eaea0a",null).exports;a.a.use(r.a);var k=new r.a({routes:[{path:"/",name:"Root",component:S}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:k,components:{App:s},template:"<App/>"})},Punz:function(t,e){},T7Yl:function(t,e){},aW8c:function(t,e){},c9Nr:function(t,e){},"h3P+":function(t,e){},lU2z:function(t,e){},rQv1:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bb612fac3a9629d5e513.js.map