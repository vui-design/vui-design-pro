(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-79570636"],{"813c":function(t,e,a){},"937a":function(t,e,a){"use strict";a.r(e);var i=a("5530"),r=(a("ac1f"),a("5319"),{data:function(){return{page:{step:0,submitting:!1},form:{payer:"kiwi@dianhun.cn",type:"alipay",payee:"zhangsan@example.com",name:"Zhang San",amount:1e3,password:"888888"},controls:{amount:{min:0,max:2e5,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},rules:{payer:[{trigger:"change",required:!0,type:"string",message:"请选择付款账户"}],payee:[{trigger:"blur",required:!0,message:"请收入收款账户"}],name:[{trigger:"blur",required:!0,message:"请输入收款人姓名"}],amount:[{trigger:"change",required:!0,type:"number",message:"请输入转账金额"}],password:[{trigger:"blur",required:!0,type:"string",message:"请输入支付密码"}]},result:{}}},methods:{handleNextStep:function(){var t=this;this.$refs.form1.validate((function(e){if(!e)return t.$message.error("转账信息填写不正确");t.page.step++}))},handlePrevStep:function(){this.page.step--},handleSubmit:function(){var t=this;this.$refs.form2.validate((function(e){if(!e)return t.$message.error("转账信息填写不正确");var a=Object(i.a)({},t.form);t.page.submitting=!0,t.$store.dispatch("example/submitFormSteps",a).then((function(e){t.result=e,t.page.step++,t.page.submitting=!1})).catch((function(e){t.page.submitting=!1}))}))},handleAgain:function(){this.page.step=0,this.$refs.form1.reset(),this.$refs.form2.reset()}}}),s=(a("c90c"),a("2877")),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vui-design-pro-page"},[a("vui-page-header",{staticClass:"vui-design-pro-page-header",attrs:{ghost:!1}},[a("template",{slot:"title"},[t._v("分布表单")]),a("p",[t._v("将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成")])],2),a("div",{staticClass:"vui-design-pro-page-body"},[a("vui-card",{attrs:{bordered:!1,shadow:"always",bodyStyle:"padding: 40px;"}},[a("vui-steps",{staticStyle:{width:"800px",margin:"0 auto"},attrs:{step:t.page.step,type:"dot"}},[a("vui-step",{attrs:{title:"填写转账信息"}}),a("vui-step",{attrs:{title:"确认转账信息"}}),a("vui-step",{attrs:{title:"完成转账操作"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.page.step,expression:"page.step === 0"}],key:"step1",staticStyle:{"margin-top":"40px"}},[a("div",{staticStyle:{width:"640px",margin:"0 auto"}},[a("vui-form",{ref:"form1",attrs:{model:t.form,rules:t.rules,labelWidth:100}},[a("vui-form-item",{attrs:{prop:"payer",label:"付款账户"}},[a("vui-select",{staticStyle:{width:"50%"},attrs:{searchable:"",clearable:"",placeholder:"请选择付款账户"},model:{value:t.form.payer,callback:function(e){t.$set(t.form,"payer",e)},expression:"form.payer"}},[a("vui-option",{attrs:{value:"kiwi@dianhun.cn"}},[t._v("kiwi@dianhun.cn")]),a("vui-option",{attrs:{value:"dingwei@qq.com"}},[t._v("dingwei@qq.com")])],1)],1),a("vui-form-item",{attrs:{prop:"payee",label:"收款账户"}},[a("vui-input-group",{staticStyle:{width:"100%"},attrs:{compact:""}},[a("vui-select",{staticStyle:{width:"100px"},attrs:{searchable:"",placeholder:"账户类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("vui-option",{attrs:{value:"alipay"}},[t._v("支付宝")]),a("vui-option",{attrs:{value:"weixin"}},[t._v("微信")]),a("vui-option",{attrs:{value:"bank"}},[t._v("银行账户")])],1),a("vui-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{clearable:"",placeholder:"请输入收款账户"},model:{value:t.form.payee,callback:function(e){t.$set(t.form,"payee",e)},expression:"form.payee"}})],1)],1),a("vui-form-item",{attrs:{prop:"name",label:"收款人姓名"}},[a("vui-input",{staticStyle:{width:"50%"},attrs:{clearable:"",placeholder:"请输入收款人姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("vui-form-item",{attrs:{prop:"amount",label:"转账金额"}},[a("vui-input-number",t._b({staticStyle:{width:"50%"},attrs:{placeholder:"请输入转账金额"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}},"vui-input-number",t.controls.amount,!1))],1),a("vui-form-item",[a("vui-button",{attrs:{type:"primary",loading:t.page.submitting},on:{click:t.handleNextStep}},[t._v("下一步")])],1)],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.page.step,expression:"page.step === 1"}],key:"step2",staticStyle:{"margin-top":"40px"}},[a("div",{staticStyle:{width:"640px",margin:"0 auto"}},[a("vui-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"warning",showIcon:"",closable:""}},[[t._v("确认转账后，资金将直接打入对方账户，无法退回。")]],2),a("vui-form",{ref:"form2",attrs:{model:t.form,rules:t.rules,labelWidth:100}},[a("vui-form-item",{attrs:{label:"付款账户"}},[t._v(t._s(t.form.payer))]),a("vui-form-item",{attrs:{label:"支付方式"}},["alipay"===t.form.type?[t._v("支付宝")]:"weixin"===t.form.type?[t._v("微信")]:"bank"===t.form.type?[t._v("银行账户")]:t._e()],2),a("vui-form-item",{attrs:{label:"收款账户"}},[t._v(t._s(t.form.payee))]),a("vui-form-item",{attrs:{label:"收款人姓名"}},[t._v(t._s(t.form.name))]),a("vui-form-item",{attrs:{label:"转账金额"}},[a("vui-statistic",{attrs:{value:t.form.amount,precision:2,suffix:"元"}})],1),a("vui-form-item",{attrs:{prop:"password",label:"支付密码"}},[a("vui-input",{staticStyle:{width:"50%"},attrs:{type:"password",showPasswordToggler:"",placeholder:"请输入支付密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("vui-form-item",[a("vui-space",[a("vui-button",{attrs:{type:"primary",loading:t.page.submitting},on:{click:t.handleSubmit}},[t._v("提交")]),a("vui-button",{attrs:{disabled:t.page.submitting},on:{click:t.handlePrevStep}},[t._v("上一步")])],1)],1)],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.page.step,expression:"page.step === 2"}],key:"step3",staticStyle:{"margin-top":"40px"}},[a("vui-result",{staticStyle:{padding:"0"},attrs:{status:"success"}},[a("template",{slot:"title"},[t._v("操作成功")]),a("template",{slot:"description"},[t._v("转账成功，预计在两小时内到账")])],2),a("vui-descriptions",{staticStyle:{"margin-top":"40px"},attrs:{bordered:"",labelAlign:"right",columns:1,labelWidth:120}},[a("vui-description",{attrs:{label:"交易单号"}},[t._v(t._s(t.result.no))]),a("vui-description",{attrs:{label:"付款账户"}},[t._v(t._s(t.result.payer))]),a("vui-description",{attrs:{label:"支付方式"}},["alipay"===t.result.type?[t._v("支付宝")]:"weixin"===t.result.type?[t._v("微信")]:"bank"===t.result.type?[t._v("银行账户")]:t._e()],2),a("vui-description",{attrs:{label:"收款账户"}},[t._v(t._s(t.result.payee))]),a("vui-description",{attrs:{label:"收款人姓名"}},[t._v(t._s(t.result.name))]),a("vui-description",{attrs:{label:"转账金额"}},[a("vui-statistic",{attrs:{value:t.result.amount,precision:2,suffix:"元"}})],1),a("vui-description",{attrs:{label:"支付时间"}},[t._v(t._s(t._f("dateformatter")(t.result.createdAt,"yyyy-MM-dd HH:mm:ss")))])],1),a("div",{staticStyle:{"margin-top":"40px","text-align":"center"}},[a("vui-space",[a("vui-button",{attrs:{type:"primary"},on:{click:t.handleAgain}},[t._v("再转一笔")]),a("vui-button-group",[a("vui-button",[t._v("查看账单")]),a("vui-button",[t._v("打印")])],1)],1)],1)],1),a("div",{staticClass:"vui-form-steps-notice"},[a("h4",[t._v("注意事项")]),a("dl",[a("dt",[t._v("转账到支付宝账户")]),a("dd",[t._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])]),a("dl",[a("dt",[t._v("转账到微信")]),a("dd",[t._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])]),a("dl",[a("dt",[t._v("转账到银行账户")]),a("dd",[t._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},c90c:function(t,e,a){"use strict";a("813c")}}]);