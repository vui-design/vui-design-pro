(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-79570636"],{"813c":function(t,e,i){},"937a":function(t,e,i){"use strict";i.r(e);i("ac1f"),i("5319");var a={inject:["refresh"],data:function(){return{step:0,submitting:!1,form:{payer:"kiwi@dianhun.cn",type:"alipay",payee:"zhangsan@example.com",name:"Zhang San",amount:1e3,password:"888888"},controls:{amount:{min:0,max:2e5,formatter:function(t){return("$ "+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},parser:function(t){return t.replace(/\$\s?|(,*)/g,"")}}},rules:{payer:[{trigger:"change",required:!0,type:"string",message:"请选择付款账户"}],payee:[{trigger:"blur",required:!0,message:"请收入收款账户"}],name:[{trigger:"blur",required:!0,message:"请输入收款人姓名"}],amount:[{trigger:"change",required:!0,type:"number",message:"请输入转账金额"}],password:[{trigger:"blur",required:!0,type:"string",message:"请输入支付密码"}]},details:{}}},methods:{handleNextStep:function(){var t=this;this.$refs.stepForm1.validate((function(e){if(!e)return t.$message.error("转账信息填写不正确");t.step++}))},handlePrevStep:function(){this.step--},handleSubmit:function(){var t=this;this.$refs.stepForm2.validate((function(e){if(!e)return t.$message.error("转账信息填写不正确");t.submitting=!0,t.$store.dispatch("example/submitFormSteps",t.form).then((function(e){t.details=e,t.step++,t.submitting=!1})).catch((function(e){t.submitting=!1}))}))},handleAgain:function(){this.refresh()}}},r=(i("c90c"),i("2877")),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vui-pro-page"},[i("vui-page-header",{staticClass:"vui-pro-page-header",attrs:{ghost:!1}},[i("template",{slot:"title"},[t._v("分布表单")]),i("p",[t._v("将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成")])],2),i("div",{staticClass:"vui-pro-page-body"},[i("vui-card",{attrs:{bordered:!1,shadow:"always",bodyStyle:"padding: 40px;"}},[i("vui-steps",{staticStyle:{width:"800px",margin:"0 auto"},attrs:{step:t.step,type:"dot"}},[i("vui-step",{attrs:{title:"填写转账信息"}}),i("vui-step",{attrs:{title:"确认转账信息"}}),i("vui-step",{attrs:{title:"完成"}})],1),0==t.step?i("div",{key:"step1",staticClass:"margin-top-40"},[i("div",{staticStyle:{width:"600px",margin:"0 auto"}},[i("vui-form",{ref:"stepForm1",attrs:{model:t.form,rules:t.rules,labelWidth:100}},[i("vui-form-item",{attrs:{prop:"payer",label:"付款账户"}},[i("vui-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择付款账户"},model:{value:t.form.payer,callback:function(e){t.$set(t.form,"payer",e)},expression:"form.payer"}},[i("vui-option",{attrs:{value:"kiwi@dianhun.cn"}},[t._v("kiwi@dianhun.cn")]),i("vui-option",{attrs:{value:"dingwei@qq.com"}},[t._v("dingwei@qq.com")])],1)],1),i("vui-form-item",{attrs:{prop:"payee",label:"收款账户"}},[i("vui-input-group",{staticStyle:{width:"100%"},attrs:{compact:""}},[i("vui-select",{staticStyle:{width:"100px"},attrs:{placeholder:"账户类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[i("vui-option",{attrs:{value:"alipay"}},[t._v("支付宝")]),i("vui-option",{attrs:{value:"weixin"}},[t._v("微信")]),i("vui-option",{attrs:{value:"bank"}},[t._v("银行账户")])],1),i("vui-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{placeholder:"请输入收款账户"},model:{value:t.form.payee,callback:function(e){t.$set(t.form,"payee",e)},expression:"form.payee"}})],1)],1),i("vui-form-item",{attrs:{prop:"name",label:"收款人姓名"}},[i("vui-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入收款人姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("vui-form-item",{attrs:{prop:"amount",label:"转账金额"}},[i("vui-input-number",t._b({staticStyle:{width:"50%"},attrs:{placeholder:"请输入转账金额"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}},"vui-input-number",t.controls.amount,!1))],1),i("vui-form-item",[i("vui-button",{attrs:{type:"primary",loading:t.submitting},on:{click:t.handleNextStep}},[t._v("下一步")])],1)],1)],1),i("vui-divider",{attrs:{dashed:"",gutter:40}}),i("vui-alert",{attrs:{type:"warning",showIcon:"",message:"注意事项"}},[i("div",{staticClass:"vui-pro-form-steps-alert-description",attrs:{slot:"description"},slot:"description"},[i("ul",[i("li",[i("h4",[t._v("转账到支付宝账户")]),i("p",[t._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])]),i("li",[i("h4",[t._v("转账到微信")]),i("p",[t._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])]),i("li",[i("h4",[t._v("转账到银行账户")]),i("p",[t._v("如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。")])])])])])],1):1==t.step?i("div",{key:"step2",staticClass:"margin-top-40"},[i("div",{staticStyle:{width:"600px",margin:"0 auto"}},[i("vui-alert",{staticClass:"margin-bottom-30",attrs:{type:"warning",closable:"",showIcon:""}},[t._v("确认转账后，资金将直接打入对方账户，无法退回。")]),i("vui-form",{ref:"stepForm2",staticStyle:{width:"600px",margin:"0 auto"},attrs:{model:t.form,rules:t.rules,labelWidth:100}},[i("vui-form-item",{attrs:{label:"付款账户"}},[t._v(t._s(t.form.payer))]),i("vui-form-item",{attrs:{label:"支付方式"}},["alipay"==t.form.type?[t._v("支付宝")]:"weixin"==t.form.type?[t._v("微信")]:"bank"==t.form.type?[t._v("银行账户")]:t._e()],2),i("vui-form-item",{attrs:{label:"收款账户"}},[t._v(t._s(t.form.payee))]),i("vui-form-item",{attrs:{label:"收款人姓名"}},[t._v(t._s(t.form.name))]),i("vui-form-item",{attrs:{label:"转账金额"}},[i("em",{staticStyle:{"margin-right":"4px",color:"#2d8cf0","font-weight":"600"}},[t._v(t._s(t._f("numerical")(t.form.amount)))]),t._v("元 ")]),i("vui-form-item",{attrs:{prop:"password",label:"支付密码"}},[i("vui-input",{staticStyle:{width:"50%"},attrs:{type:"password",showPasswordToggler:"",placeholder:"请输入支付密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),i("vui-form-item",[i("vui-button",{attrs:{type:"primary",loading:t.submitting},on:{click:t.handleSubmit}},[t._v("提交")]),i("vui-button",{staticClass:"margin-left-20",attrs:{disabled:t.submitting},on:{click:t.handlePrevStep}},[t._v("上一步")])],1)],1)],1)]):2==t.step?i("div",{key:"step3",staticClass:"margin-top-40"},[i("vui-result",{staticStyle:{padding:"0"},attrs:{status:"success",title:"提交成功",description:"转账成功，预计在两小时内到账"}},[i("vui-descriptions",{attrs:{slot:"content",bordered:"",columns:1,labelWidth:120},slot:"content"},[i("vui-description",{attrs:{label:"交易单号"}},[t._v(t._s(t.details.no))]),i("vui-description",{attrs:{label:"付款账户"}},[t._v(t._s(t.details.payer))]),i("vui-description",{attrs:{label:"支付方式"}},["alipay"==t.details.type?[t._v("支付宝")]:"weixin"==t.details.type?[t._v("微信")]:"bank"==t.details.type?[t._v("银行账户")]:t._e()],2),i("vui-description",{attrs:{label:"收款账户"}},[t._v(t._s(t.details.payee))]),i("vui-description",{attrs:{label:"收款人姓名"}},[t._v(t._s(t.details.name))]),i("vui-description",{attrs:{label:"转账金额"}},[i("em",{staticStyle:{"margin-right":"4px",color:"#2d8cf0","font-weight":"600"}},[t._v(t._s(t._f("numerical")(t.details.amount)))]),t._v("元 ")]),i("vui-description",{attrs:{label:"支付时间"}},[t._v(t._s(t._f("dateformatter")(t.details.createdAt,"yyyy-MM-dd HH:mm:ss")))])],1),i("template",{slot:"extra"},[i("vui-button",{attrs:{type:"primary"},on:{click:t.handleAgain}},[t._v("再转一笔")]),i("vui-button",[t._v("查看账单")]),i("vui-button",[t._v("打印")])],1)],2)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports},c90c:function(t,e,i){"use strict";i("813c")}}]);