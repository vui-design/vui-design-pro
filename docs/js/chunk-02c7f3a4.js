(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-02c7f3a4"],{"793e":function(t,i,s){"use strict";s("a8ff")},"9ed6":function(t,i,s){"use strict";s.r(i);s("ac1f"),s("5319");var a=s("f121"),o={data:function(){return{tabs:{activeKey:"pw"},form:{account:"admin",password:"123456",phone:"",captcha:"",autoLogin:!0},year:(new Date).getFullYear()}},methods:{handleLogin:function(){var t=this;if("pw"===this.tabs.activeKey){if(!this.form.account)return this.$refs.account.focus();if(!this.form.password)return this.$refs.password.focus()}else{if(!this.form.phone)return this.$refs.phone.focus();if(!this.form.captcha)return this.$refs.captcha.focus()}var i={autoLogin:this.form.autoLogin};"pw"===this.tabs.activeKey?(i.account=this.form.account,i.password=this.form.password):(i.phone=this.form.phone,i.captcha=this.form.captcha),this.$store.dispatch("user/login",i).then((function(i){t.$router.replace(a.a.rootRoute)}))}}},e=(s("793e"),s("2877")),r=Object(e.a)(o,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("vui-layout",{staticClass:"vui-design-pro-login"},[s("vui-content",{staticClass:"vui-design-pro-login-body"},[s("div",{staticClass:"vui-design-pro-login-logo"},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:"images/logo.svg"}}),s("span",[t._v("Vui Design Pro")])])],1),s("div",{staticClass:"vui-design-pro-login-slogan"},[t._v("小人物，小欲望，小满足，大幸福 — Vui Design Pro")]),s("div",{staticClass:"vui-design-pro-login-form"},[s("vui-tabs",{attrs:{size:"large"},model:{value:t.tabs.activeKey,callback:function(i){t.$set(t.tabs,"activeKey",i)},expression:"tabs.activeKey"}},[s("vui-tab-panel",{key:"pw",attrs:{title:"密码登录"}}),s("vui-tab-panel",{key:"sms",attrs:{title:"短信登录"}})],1),s("vui-form",{attrs:{layout:"vertical",model:t.form}},["pw"===t.tabs.activeKey?s("vui-form-item",{attrs:{prop:"account"}},[s("vui-input",{ref:"account",attrs:{size:"large",prefix:"user",placeholder:"请输入账号"},model:{value:t.form.account,callback:function(i){t.$set(t.form,"account",i)},expression:"form.account"}})],1):t._e(),"pw"===t.tabs.activeKey?s("vui-form-item",{attrs:{prop:"password"}},[s("vui-input",{ref:"password",attrs:{type:"password",size:"large",prefix:"lock",placeholder:"请输入密码"},model:{value:t.form.password,callback:function(i){t.$set(t.form,"password",i)},expression:"form.password"}})],1):t._e(),"sms"===t.tabs.activeKey?s("vui-form-item",{attrs:{prop:"phone"}},[s("vui-input",{ref:"phone",attrs:{size:"large",prefix:"smartphone",placeholder:"请输入手机号"},model:{value:t.form.phone,callback:function(i){t.$set(t.form,"phone",i)},expression:"form.phone"}})],1):t._e(),"sms"===t.tabs.activeKey?s("vui-form-item",{attrs:{prop:"captcha"}},[s("vui-input-group",{attrs:{compact:"",size:"large"}},[s("vui-input",{ref:"captcha",staticStyle:{width:"239px"},attrs:{prefix:"mail",placeholder:"请输入验证码"}}),s("vui-button",[t._v("获取验证码")])],1)],1):t._e(),s("vui-form-item",{attrs:{prop:"autoLogin"}},[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("vui-checkbox",{attrs:{label:"自动登录"},model:{value:t.form.autoLogin,callback:function(i){t.$set(t.form,"autoLogin",i)},expression:"form.autoLogin"}}),s("vui-space",{attrs:{divider:""}},[s("a",{staticClass:"link-default",attrs:{href:"javasctip:;"}},[t._v("忘记密码")]),s("a",{staticClass:"link-default",attrs:{href:"javasctip:;"}},[t._v("立即注册")])])],1)]),s("vui-form-item",[s("vui-button",{attrs:{type:"primary",size:"large",block:""},on:{click:t.handleLogin}},[t._v("立即登录")])],1)],1),s("div",{staticClass:"vui-social-login"},[s("h4",{staticClass:"vui-social-login-header"},[t._v("社交账号登录")]),s("div",{staticClass:"vui-social-login-body"},[s("a",{staticClass:"vui-social-login-button vui-social-login-button-wechat",attrs:{href:"javascript:;"}},[s("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",width:"18",height:"18"}},[s("path",{attrs:{d:"M12,0.8C5.4,0.8,0,5.6,0,11.5c0,2.2,0.8,4.3,2.1,6c-0.3,1-1.8,5.7-1.8,5.7c0,0,5.1-2.2,5.7-2.5c9.6,4.2,18-2.3,18-9.3C24,5.6,18.6,0.8,12,0.8z M7.4,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C8.9,10.9,8.2,11.6,7.4,11.6z M16.5,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C18,10.9,17.3,11.6,16.5,11.6z"}})])]),s("a",{staticClass:"vui-social-login-button vui-social-login-button-qq",attrs:{href:"javascript:;"}},[s("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",width:"18",height:"18"}},[s("path",{staticClass:"st0",attrs:{d:"M12,0C9.2,0,4.2,1.6,4.2,8.8v1.4c0,0-2.7,5.3-2.7,8.3c0,0.8,0.2,1.2,0.3,1.2C2,19.8,3,19.2,4,17.3c0,0-0.2,2.6,2.4,4.8c0,0-2.2,0.6-2.2,1.4c0,0.8,5.1,0.5,7.8,0c2.8,0.5,7.8,0.8,7.8,0c0-0.8-2.2-1.4-2.2-1.4c2.6-2.1,2.4-4.8,2.4-4.8c1,1.9,2,2.5,2.2,2.5c0.1,0,0.4-0.4,0.4-1.2c0-3-2.7-8.3-2.7-8.3V8.8C19.8,1.6,14.8,0,12,0z"}})])]),s("a",{staticClass:"vui-social-login-button vui-social-login-button-sina",attrs:{href:"javascript:;"}},[s("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",width:"18",height:"18"}},[s("path",{attrs:{d:"M15.8,2.1c0,0-0.9,0.7,0,1.9c0,0,6.9-1.3,6.2,7.1c0,0,1.1,1.3,1.8-0.3C23.9,10.7,25.5,1.1,15.8,2.1z M5.3,16.7c0,0,0,2.9,3.6,2.9c4,0,4-3.3,4-3.3s0.2-3.5-3.5-3.5C5.3,12.6,5.3,16.7,5.3,16.7z M8.1,17.8c-0.7,0-1.3-0.5-1.3-1.1c0-0.6,0.6-1.1,1.3-1.1c0.7,0,1.3,0.5,1.3,1.1C9.4,17.3,8.8,17.8,8.1,17.8L8.1,17.8z M4.7,7C-2.8,13.5,1,18.5,1,18.5c0.6,1.1,3.7,3.5,9.4,3.5c5.7,0,10.2-4,10.2-7.2c0-3.1-3.2-3-3.2-3c1.1-1.7,0.2-3,0.2-3c-1.8-2.4-5.9-0.2-5.9-0.2c0.8-1.9,0.1-3.1,0.1-3.1C9.7,2.7,4.7,7,4.7,7z M16.1,15.7c0,0-0.5,4.6-7,4.6c-6.3,0-6.3-3.7-6.4-4.1c0,0-0.1-4.9,7.2-5.2C16.4,10.8,16.1,15.7,16.1,15.7L16.1,15.7z M20.3,9.8c0,0,1.1-4.9-4.2-4.3c0,0-0.7,0.6,0.1,1.5c0,0,2.8-0.6,2.6,2.9C18.8,10,19.6,11,20.3,9.8L20.3,9.8z"}})])])])])],1)]),s("vui-footer",{staticClass:"vui-design-pro-login-footer"},[s("vui-space",{attrs:{divider:"",size:"large"}},[s("vui-link",{attrs:{block:"",to:"https://github.com/vui-design/vui-design",target:"_blank"}},[t._v("Vui Design")]),s("vui-link",{attrs:{block:"",to:"https://github.com/vui-design/vui-design-doc",target:"_blank"}},[t._v("Vui Design Doc")]),s("vui-link",{attrs:{block:"",to:"https://github.com/vui-design/vui-design-pro",target:"_blank"}},[t._v("Vui Design Pro")]),s("vui-link",{attrs:{block:"",to:"/",target:"_blank"}},[t._v("Other Link")]),s("vui-link",{attrs:{block:"",to:"/",target:"_blank"}},[t._v("Other Link")])],1),s("p",[t._v("Copyright © "+t._s(t.year)+" Coding by Ding Wei")])],1)],1)}),[],!1,null,null,null);i.default=r.exports},a8ff:function(t,i,s){}}]);