(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e8a9e78"],{"19f2":function(t,s,e){},ab55:function(t,s,e){"use strict";e("19f2")},c517:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{status:"success",title:"提交成功",description:"提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。",steps:[{title:"创建项目",status:"finish",operator:"张三丰",operatedAt:"2020-02-02 12:00:00"},{title:"部门初审",status:"process",operator:"张无忌",operatedAt:""},{title:"财务复核",status:"wait",operator:"",operatedAt:""},{title:"完成",status:"wait",operator:"",operatedAt:""}]}}},i=(e("ab55"),e("2877")),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("vui-card",{attrs:{bordered:!1,shadow:"always",bodyStyle:"padding: 0;"}},[e("div",{staticClass:"vui-pro-result-success"},[e("vui-result",{attrs:{status:t.status,title:t.title,description:t.description}},[e("div",{staticClass:"vui-pro-result-success-content",attrs:{slot:"content"},slot:"content"},[e("vui-steps",{attrs:{type:"dot"}},t._l(t.steps,(function(s,a){return e("vui-step",{key:a,attrs:{status:s.status,title:s.title}},["wait"!==s.status?e("div",{attrs:{slot:"description"},slot:"description"},[e("div",[t._v(t._s(s.operator)),"process"===s.status?e("a",{staticClass:"margin-left-5",attrs:{href:"javascript:;"}},[t._v("催一下")]):t._e()]),s.operatedAt?e("div",[t._v(t._s(s.operatedAt))]):t._e()]):t._e()])})),1),e("vui-descriptions",{staticClass:"margin-top-40",attrs:{bordered:"",equivalent:"",columns:2,labelWidth:160}},[e("vui-description",{attrs:{label:"项目名称"}},[t._v("这里是项目名称")]),e("vui-description",{attrs:{label:"项目类型"}},[t._v("自研产品")]),e("vui-description",{attrs:{label:"项目简介",span:2}},[e("ul",[e("li",[t._v("1、这里是项目简介")]),e("li",[t._v("2、劈里啪啦一顿疯狂介绍，QAQ~")])])]),e("vui-description",{attrs:{label:"创建者"}},[t._v("张三丰")]),e("vui-description",{attrs:{label:"创建时间"}},[t._v("2020-02-02 12:00:00")]),e("vui-description",{attrs:{label:"当前状态",span:2}},[e("vui-badge",{attrs:{status:"processing",text:"审核中"}})],1),e("vui-description",{attrs:{label:"项目预算"}},[t._v("$100,000.00")])],1)],1),e("vui-space",{attrs:{slot:"extra"},slot:"extra"},[e("vui-button",{attrs:{type:"primary",to:"/"}},[t._v("返回首页")]),e("vui-button",[t._v("查看详情")]),e("vui-button",[t._v("打印")])],1)],1)],1)])}),[],!1,null,null,null);s.default=r.exports}}]);