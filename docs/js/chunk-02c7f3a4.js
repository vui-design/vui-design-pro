(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-02c7f3a4"],{"793e":function(t,a,s){"use strict";s("a8ff")},"9ed6":function(t,a,s){"use strict";s.r(a);s("ac1f"),s("5319");var i=s("f121"),c={data:function(){return{currentLoginType:1,autoLogin:!0,account:"admin",password:"123456",year:(new Date).getFullYear()}},methods:{handleChangeLoginType:function(t){this.currentLoginType=t},handleLogin:function(){var t=this,a={account:this.account,password:this.password};this.$store.dispatch("user/login",a).then((function(a){t.$router.replace(i.b)}))}}},o=(s("793e"),s("2877")),r=Object(o.a)(c,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("vui-layout",{staticClass:"vui-pro-login"},[i("vui-content",{staticClass:"vui-pro-login-body"},[i("div",{staticClass:"vui-pro-login-logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:s("e347")}}),i("span",[t._v("Vui Design Pro")])])],1),i("div",{staticClass:"vui-pro-login-slogan"},[t._v("小人物，小欲望，小满足，大幸福 — Vui Design Pro")]),i("div",{staticClass:"vui-pro-login-form"},[i("div",{staticClass:"vui-pro-login-tabs"},[i("div",{staticClass:"vui-pro-login-tabs-header"},[i("div",{staticClass:"vui-pro-login-tabs-trigger",class:1===t.currentLoginType?"active":"",on:{click:function(a){return t.handleChangeLoginType(1)}}},[t._v("密码登录")]),i("div",{staticClass:"vui-pro-login-tabs-trigger",class:2===t.currentLoginType?"active":"",on:{click:function(a){return t.handleChangeLoginType(2)}}},[t._v("短信登录")])]),i("div",{staticClass:"vui-pro-login-tabs-body"},[i("div",{staticClass:"vui-pro-login-tabs-panel",class:1===t.currentLoginType?"active":""},[i("vui-input",{staticClass:"margin-top-0",attrs:{prefix:"user",size:"large",placeholder:"请输入账号"},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}}),i("vui-input",{staticClass:"margin-top-25",attrs:{type:"password",prefix:"lock",size:"large",placeholder:"请输入密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),i("div",{staticClass:"vui-pro-login-tabs-panel",class:2===t.currentLoginType?"active":""},[i("vui-input",{staticClass:"margin-top-0",attrs:{prefix:"smartphone",size:"large",placeholder:"请输入手机号"}}),i("vui-input-group",{staticClass:"margin-top-25",attrs:{compact:"",size:"large"}},[i("vui-input",{staticStyle:{width:"239px"},attrs:{prefix:"mail",placeholder:"请输入验证码"}}),i("vui-button",[t._v("获取验证码")])],1)],1)])]),i("div",{staticClass:"margin-top-25 clearfix"},[i("vui-checkbox",{staticClass:"pull-left",attrs:{label:"自动登录"},model:{value:t.autoLogin,callback:function(a){t.autoLogin=a},expression:"autoLogin"}}),i("vui-space",{staticClass:"pull-right",attrs:{divider:""}},[i("a",{staticClass:"link-default",attrs:{href:"javasctip:;"}},[t._v("忘记密码")]),i("a",{staticClass:"link-default",attrs:{href:"javasctip:;"}},[t._v("立即注册")])])],1),i("vui-button",{staticClass:"margin-top-25",staticStyle:{width:"100%"},attrs:{type:"primary",size:"large"},on:{click:t.handleLogin}},[t._v("立即登录")]),i("div",{staticClass:"socialLogin"},[i("h4",{staticClass:"socialLogin-header"},[t._v("社交账号登录")]),i("div",{staticClass:"socialLogin-body"},[i("a",{staticClass:"socialLogin-button socialLogin-button-wechat",attrs:{href:"javascript:;"}},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",width:"18",height:"18"}},[i("path",{attrs:{d:"M12,0.8C5.4,0.8,0,5.6,0,11.5c0,2.2,0.8,4.3,2.1,6c-0.3,1-1.8,5.7-1.8,5.7c0,0,5.1-2.2,5.7-2.5c9.6,4.2,18-2.3,18-9.3C24,5.6,18.6,0.8,12,0.8z M7.4,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C8.9,10.9,8.2,11.6,7.4,11.6z M16.5,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C18,10.9,17.3,11.6,16.5,11.6z"}})])]),i("a",{staticClass:"socialLogin-button socialLogin-button-qq",attrs:{href:"javascript:;"}},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",width:"18",height:"18"}},[i("path",{staticClass:"st0",attrs:{d:"M12,0C9.2,0,4.2,1.6,4.2,8.8v1.4c0,0-2.7,5.3-2.7,8.3c0,0.8,0.2,1.2,0.3,1.2C2,19.8,3,19.2,4,17.3c0,0-0.2,2.6,2.4,4.8c0,0-2.2,0.6-2.2,1.4c0,0.8,5.1,0.5,7.8,0c2.8,0.5,7.8,0.8,7.8,0c0-0.8-2.2-1.4-2.2-1.4c2.6-2.1,2.4-4.8,2.4-4.8c1,1.9,2,2.5,2.2,2.5c0.1,0,0.4-0.4,0.4-1.2c0-3-2.7-8.3-2.7-8.3V8.8C19.8,1.6,14.8,0,12,0z"}})])]),i("a",{staticClass:"socialLogin-button socialLogin-button-sina",attrs:{href:"javascript:;"}},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",width:"18",height:"18"}},[i("path",{attrs:{d:"M15.8,2.1c0,0-0.9,0.7,0,1.9c0,0,6.9-1.3,6.2,7.1c0,0,1.1,1.3,1.8-0.3C23.9,10.7,25.5,1.1,15.8,2.1z M5.3,16.7c0,0,0,2.9,3.6,2.9c4,0,4-3.3,4-3.3s0.2-3.5-3.5-3.5C5.3,12.6,5.3,16.7,5.3,16.7z M8.1,17.8c-0.7,0-1.3-0.5-1.3-1.1c0-0.6,0.6-1.1,1.3-1.1c0.7,0,1.3,0.5,1.3,1.1C9.4,17.3,8.8,17.8,8.1,17.8L8.1,17.8z M4.7,7C-2.8,13.5,1,18.5,1,18.5c0.6,1.1,3.7,3.5,9.4,3.5c5.7,0,10.2-4,10.2-7.2c0-3.1-3.2-3-3.2-3c1.1-1.7,0.2-3,0.2-3c-1.8-2.4-5.9-0.2-5.9-0.2c0.8-1.9,0.1-3.1,0.1-3.1C9.7,2.7,4.7,7,4.7,7z M16.1,15.7c0,0-0.5,4.6-7,4.6c-6.3,0-6.3-3.7-6.4-4.1c0,0-0.1-4.9,7.2-5.2C16.4,10.8,16.1,15.7,16.1,15.7L16.1,15.7z M20.3,9.8c0,0,1.1-4.9-4.2-4.3c0,0-0.7,0.6,0.1,1.5c0,0,2.8-0.6,2.6,2.9C18.8,10,19.6,11,20.3,9.8L20.3,9.8z"}})])])])])],1)]),i("vui-footer",{staticClass:"vui-pro-login-footer"},[i("div",{staticClass:"vui-pro-login-links"},[i("vui-space",{attrs:{divider:""}},[i("a",{staticClass:"link-default",attrs:{href:"javascript:;"}},[t._v("友情链接")]),i("a",{staticClass:"link-default",attrs:{href:"javascript:;"}},[t._v("友情链接")]),i("a",{staticClass:"link-default",attrs:{href:"javascript:;"}},[t._v("友情链接")]),i("a",{staticClass:"link-default",attrs:{href:"javascript:;"}},[t._v("友情链接")]),i("a",{staticClass:"link-default",attrs:{href:"javascript:;"}},[t._v("友情链接")]),i("a",{staticClass:"link-default",attrs:{href:"javascript:;"}},[t._v("友情链接")])])],1),i("div",{staticClass:"vui-pro-login-copyright"},[t._v("Copyright © "+t._s(t.year)+" 杭州电魂网络科技股份有限公司")])])],1)}),[],!1,null,null,null);a.default=r.exports},a8ff:function(t,a,s){}}]);