(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22bd71"],{f14d:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{submitting:!1,form:{name:"",email:"",city:void 0,age:void 0,birthday:"",gender:"male",hobby:[],message:!0,introduction:""},controls:{age:{min:15,max:60},introduction:{autosize:{minRows:4,maxRows:8},maxLength:200}},rules:{name:[{trigger:"blur",required:!0,message:"姓名不允许为空"}],email:[{trigger:"blur",required:!0,message:"邮箱地址不允许为空"},{trigger:"blur",type:"email",message:"邮箱地址格式不正确"}],city:[{trigger:"change",required:!0,message:"所在城市不允许为空"}],age:[{trigger:"change",required:!0,type:"number",message:"年龄不允许为空"}],birthday:[{trigger:"blur",required:!0,message:"出生日期不允许为空"}],hobby:[{trigger:"change",required:!0,type:"array",min:1,message:"至少选择一项兴趣爱好"},{trigger:"change",type:"array",max:2,message:"最多选择两项兴趣爱好"}],introduction:[{trigger:"blur",required:!0,message:"个人简介不允许为空"},{trigger:"blur",type:"string",min:20,message:"个人简介不少于20个字符"}]}}},methods:{handleSubmit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return e.$message.error("个人信息填写不正确");console.log(JSON.parse(JSON.stringify(e.form))),e.submitting=!0,e.$store.dispatch("example/submitFormBasic",e.form).then((function(t){e.submitting=!1,e.$message.success("提交成功")})).catch((function(t){e.submitting=!1}))}))},handleReset:function(){this.$refs.form.reset()},handleBack:function(){this.$router.back()}}},i=r("2877"),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vui-pro-page"},[r("vui-page-header",{staticClass:"vui-pro-page-header",attrs:{ghost:!1}},[r("template",{slot:"title"},[e._v("基础表单")]),r("p",[e._v("表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景")])],2),r("div",{staticClass:"vui-pro-page-body"},[r("vui-card",{attrs:{bordered:!1,shadow:"always",bodyStyle:"padding: 40px 20%;"}},[r("vui-form",{ref:"form",attrs:{model:e.form,rules:e.rules,labelWidth:86}},[r("vui-form-item",{attrs:{prop:"name",label:"姓名"}},[r("vui-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入您的姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("vui-form-item",{attrs:{prop:"email",label:"电子邮箱"}},[r("vui-input",{attrs:{placeholder:"请输入您的电子邮箱地址"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("vui-form-item",{attrs:{prop:"city",label:"城市"}},[r("vui-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择所在城市"},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}},[r("vui-option",{attrs:{value:"beijing"}},[e._v("北京")]),r("vui-option",{attrs:{value:"shanghai"}},[e._v("上海")]),r("vui-option",{attrs:{value:"guangzhou"}},[e._v("广州")]),r("vui-option",{attrs:{value:"shenzhen"}},[e._v("深圳")]),r("vui-option",{attrs:{value:"hangzhou"}},[e._v("杭州")])],1)],1),r("vui-form-item",{attrs:{prop:"age",label:"年龄"}},[r("vui-input-number",e._b({staticStyle:{width:"140px"},attrs:{placeholder:"请输入您的年龄"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}},"vui-input-number",e.controls.age,!1))],1),r("vui-form-item",{attrs:{prop:"birthday",label:"出生日期"}},[r("vui-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的出生日期"},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),r("vui-form-item",{attrs:{prop:"gender",label:"性别"}},[r("vui-radio-group",{model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}},[r("vui-radio",{attrs:{value:"male"}},[e._v("男")]),r("vui-radio",{attrs:{value:"female"}},[e._v("女")])],1)],1),r("vui-form-item",{attrs:{prop:"hobby",label:"兴趣爱好"}},[r("vui-checkbox-group",{model:{value:e.form.hobby,callback:function(t){e.$set(e.form,"hobby",t)},expression:"form.hobby"}},[r("vui-checkbox",{attrs:{value:"eat"}},[e._v("吃")]),r("vui-checkbox",{attrs:{value:"sleep"}},[e._v("睡")]),r("vui-checkbox",{attrs:{value:"run"}},[e._v("跑步")]),r("vui-checkbox",{attrs:{value:"movie"}},[e._v("电影")])],1)],1),r("vui-form-item",{attrs:{prop:"message",label:"短信提醒"}},[r("vui-switch",{model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}},[r("template",{slot:"checked"},[e._v("开")]),r("template",{slot:"unchecked"},[e._v("关")])],2)],1),r("vui-form-item",{attrs:{prop:"introduction",label:"个人简介"}},[r("vui-textarea",e._b({attrs:{placeholder:"请输入您的个人简介"},model:{value:e.form.introduction,callback:function(t){e.$set(e.form,"introduction",t)},expression:"form.introduction"}},"vui-textarea",e.controls.introduction,!1))],1),r("vui-form-item",[r("vui-button",{attrs:{type:"primary",loading:e.submitting},on:{click:e.handleSubmit}},[e._v("提交")]),r("vui-button-group",{staticClass:"margin-left-20",attrs:{disabled:e.submitting}},[r("vui-button",{on:{click:e.handleReset}},[e._v("重置")]),r("vui-button",{on:{click:e.handleBack}},[e._v("取消")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);