<template>
  <vui-layout class="vui-design-pro-login">
    <vui-content class="vui-design-pro-login-body">
      <div class="vui-design-pro-login-logo">
        <router-link to="/">
          <img src="images/logo.svg" />
          <span>Vui Design Pro</span>
        </router-link>
      </div>
      <div class="vui-design-pro-login-slogan">小人物，小欲望，小满足，大幸福 — Vui Design Pro</div>
      <div class="vui-design-pro-login-form">
        <vui-tabs v-model="tabs.activeKey" size="large">
          <vui-tab-panel key="pw" title="密码登录" />
          <vui-tab-panel key="sms" title="短信登录" />
        </vui-tabs>
        <vui-form layout="vertical" v-bind:model="form">
          <vui-form-item v-if="tabs.activeKey === 'pw'" prop="account">
            <vui-input v-model="form.account" ref="account" size="large" prefix="user" placeholder="请输入账号" />
          </vui-form-item>
          <vui-form-item v-if="tabs.activeKey === 'pw'" prop="password">
            <vui-input v-model="form.password" ref="password" type="password" size="large" prefix="lock" placeholder="请输入密码" />
          </vui-form-item>
          <vui-form-item v-if="tabs.activeKey === 'sms'" prop="phone">
            <vui-input v-model="form.phone" ref="phone" size="large" prefix="smartphone" placeholder="请输入手机号" />
          </vui-form-item>
          <vui-form-item v-if="tabs.activeKey === 'sms'" prop="captcha">
            <vui-input-group compact size="large">
              <vui-input ref="captcha" prefix="mail" style="width: 239px;" placeholder="请输入验证码" />
              <vui-button>获取验证码</vui-button>
            </vui-input-group>
          </vui-form-item>
          <vui-form-item prop="autoLogin">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <vui-checkbox v-model="form.autoLogin" label="自动登录" />
              <vui-space divider>
                <a href="javasctip:;" class="link-default">忘记密码</a>
                <a href="javasctip:;" class="link-default">立即注册</a>
              </vui-space>
            </div>
          </vui-form-item>
          <vui-form-item>
            <vui-button type="primary" size="large" block v-on:click="handleLogin">立即登录</vui-button>
          </vui-form-item>
        </vui-form>
        <div class="vui-social-login">
          <h4 class="vui-social-login-header">社交账号登录</h4>
          <div class="vui-social-login-body">
            <a href="javascript:;" class="vui-social-login-button vui-social-login-button-wechat">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="18" height="18">
                <path d="M12,0.8C5.4,0.8,0,5.6,0,11.5c0,2.2,0.8,4.3,2.1,6c-0.3,1-1.8,5.7-1.8,5.7c0,0,5.1-2.2,5.7-2.5c9.6,4.2,18-2.3,18-9.3C24,5.6,18.6,0.8,12,0.8z M7.4,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C8.9,10.9,8.2,11.6,7.4,11.6z M16.5,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C18,10.9,17.3,11.6,16.5,11.6z" />
              </svg>
            </a>
            <a href="javascript:;" class="vui-social-login-button vui-social-login-button-qq">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="18" height="18">
                <path class="st0" d="M12,0C9.2,0,4.2,1.6,4.2,8.8v1.4c0,0-2.7,5.3-2.7,8.3c0,0.8,0.2,1.2,0.3,1.2C2,19.8,3,19.2,4,17.3c0,0-0.2,2.6,2.4,4.8c0,0-2.2,0.6-2.2,1.4c0,0.8,5.1,0.5,7.8,0c2.8,0.5,7.8,0.8,7.8,0c0-0.8-2.2-1.4-2.2-1.4c2.6-2.1,2.4-4.8,2.4-4.8c1,1.9,2,2.5,2.2,2.5c0.1,0,0.4-0.4,0.4-1.2c0-3-2.7-8.3-2.7-8.3V8.8C19.8,1.6,14.8,0,12,0z" />
              </svg>
            </a>
            <a href="javascript:;" class="vui-social-login-button vui-social-login-button-sina">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="18" height="18">
                <path d="M15.8,2.1c0,0-0.9,0.7,0,1.9c0,0,6.9-1.3,6.2,7.1c0,0,1.1,1.3,1.8-0.3C23.9,10.7,25.5,1.1,15.8,2.1z M5.3,16.7c0,0,0,2.9,3.6,2.9c4,0,4-3.3,4-3.3s0.2-3.5-3.5-3.5C5.3,12.6,5.3,16.7,5.3,16.7z M8.1,17.8c-0.7,0-1.3-0.5-1.3-1.1c0-0.6,0.6-1.1,1.3-1.1c0.7,0,1.3,0.5,1.3,1.1C9.4,17.3,8.8,17.8,8.1,17.8L8.1,17.8z M4.7,7C-2.8,13.5,1,18.5,1,18.5c0.6,1.1,3.7,3.5,9.4,3.5c5.7,0,10.2-4,10.2-7.2c0-3.1-3.2-3-3.2-3c1.1-1.7,0.2-3,0.2-3c-1.8-2.4-5.9-0.2-5.9-0.2c0.8-1.9,0.1-3.1,0.1-3.1C9.7,2.7,4.7,7,4.7,7z M16.1,15.7c0,0-0.5,4.6-7,4.6c-6.3,0-6.3-3.7-6.4-4.1c0,0-0.1-4.9,7.2-5.2C16.4,10.8,16.1,15.7,16.1,15.7L16.1,15.7z M20.3,9.8c0,0,1.1-4.9-4.2-4.3c0,0-0.7,0.6,0.1,1.5c0,0,2.8-0.6,2.6,2.9C18.8,10,19.6,11,20.3,9.8L20.3,9.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </vui-content>
    <vui-footer class="vui-design-pro-login-footer">
      <vui-space divider size="large">
        <vui-link block to="https://github.com/vui-design/vui-design" target="_blank">Vui Design</vui-link>
        <vui-link block to="https://github.com/vui-design/vui-design-doc" target="_blank">Vui Design Doc</vui-link>
        <vui-link block to="https://github.com/vui-design/vui-design-pro" target="_blank">Vui Design Pro</vui-link>
        <vui-link block to="/" target="_blank">Other Link</vui-link>
        <vui-link block to="/" target="_blank">Other Link</vui-link>
      </vui-space>
      <p>Copyright © {{year}} Coding by kiwi</p>
    </vui-footer>
  </vui-layout>
</template>

<script>
  import config from "src/config";

  export default {
    data() {
      return {
        tabs: {
          activeKey: "pw"
        },
        form: {
          account: "admin",
          password: "123456",
          phone: "",
          captcha: "",
          autoLogin: true,
        },
        year: new Date().getFullYear()
      };
    },
    methods: {
      handleLogin() {
        if (this.tabs.activeKey === "pw") {
          if (!this.form.account) {
            return this.$refs.account.focus();
          }

          if (!this.form.password) {
            return this.$refs.password.focus();
          }
        }
        else {
          if (!this.form.phone) {
            return this.$refs.phone.focus();
          }

          if (!this.form.captcha) {
            return this.$refs.captcha.focus();
          }
        }

        let payload = {
          autoLogin: this.form.autoLogin
        };

        if (this.tabs.activeKey === "pw") {
          payload.account = this.form.account;
          payload.password = this.form.password;
        }
        else {
          payload.phone = this.form.phone;
          payload.captcha = this.form.captcha;
        }

        this.$store.dispatch("user/login", payload).then(response => {
          this.$router.replace(config.rootRoute);
        });
      }
    }
  };
</script>

<style>
  /* vui-design-pro-login */
  .vui-design-pro-login { background:url("/images/bg.png") repeat 50% 0; }

  /* vui-design-pro-login-body */
  .vui-design-pro-login-body { min-height:calc(100vh - 96px); padding:48px 0; }

  .vui-design-pro-login-logo { position:relative; width:360px; margin:0 auto; text-align:center; }
  .vui-design-pro-login-logo a { display:inline-block; vertical-align:middle; line-height:1; }
  .vui-design-pro-login-logo img { display:inline-block; height:40px; vertical-align:middle; }
  .vui-design-pro-login-logo span { display:inline-block; margin-left:10px; vertical-align:middle; line-height:40px; color:#09192a; font-size:30px; font-weight:700; font-stretch:condensed; }

  .vui-design-pro-login-slogan { margin-top:24px; margin-bottom:48px; color:#8c8c8c; text-align:center; }

  .vui-design-pro-login-form { width:360px; margin:0 auto; }
  .vui-design-pro-login-form .vui-tabs .vui-tabs-header { margin-bottom:24px; }
  .vui-design-pro-login-form .vui-tabs .vui-tabs-header .vui-tabs-header-content { justify-content:center; }
  .vui-design-pro-login-form .vui-tabs .vui-tabs-header .vui-tabs-tab + .vui-tabs-tab { margin-left:32px; }

  .vui-social-login { margin-top:24px; }
  .vui-social-login .vui-social-login-header { color:#8c8c8c; text-align:center; }
  .vui-social-login .vui-social-login-body { margin-top:16px; text-align:center; }
  .vui-social-login .vui-social-login-body .vui-social-login-button { display:inline-block; width:40px; height:40px; border-radius:40px; background-color:#dddddd; margin:0 12px; vertical-align:middle; font-size:0; text-align:center; line-height:40px; transition:all 0.2s; }
  .vui-social-login .vui-social-login-body .vui-social-login-button svg { display:inline-block; vertical-align:middle; fill:#ffffff; }
  .vui-social-login .vui-social-login-body .vui-social-login-button:hover {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button:hover svg {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-wechat {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-wechat svg {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-wechat:hover { background-color:#44b549; }
  .vui-social-login .vui-social-login-body .vui-social-login-button-wechat:hover svg {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-qq {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-qq svg {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-qq:hover { background-color:#12b7f5; }
  .vui-social-login .vui-social-login-body .vui-social-login-button-qq:hover svg {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-sina {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-sina svg {  }
  .vui-social-login .vui-social-login-body .vui-social-login-button-sina:hover { background-color:#ff8500; }
  .vui-social-login .vui-social-login-body .vui-social-login-button-sina:hover svg {  }

  /* vui-design-pro-login-footer */
  .vui-design-pro-login-footer { padding:24px 0; text-align:center; }
  .vui-design-pro-login-footer p {  margin-top:8px; }
</style>