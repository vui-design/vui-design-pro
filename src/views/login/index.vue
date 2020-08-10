<template>
	<vui-layout class="vui-pro-login">
		<vui-content class="vui-pro-login-body">
			<div class="vui-pro-login-logo">
				<router-link to="/">
					<img src="/static/images/layout/logo.svg" />
					<span>Vui Design Pro</span>
				</router-link>
			</div>
			<div class="vui-pro-login-slogan">小人物，小欲望，小满足，大幸福 — Vui Design Pro</div>
			<div class="vui-pro-login-form">
				<div class="vui-pro-login-tabs">
					<div class="vui-pro-login-tabs-header">
						<div class="vui-pro-login-tabs-trigger" :class="currentLoginType === 1 ? 'active' : ''" @click="handleChangeLoginType(1)">密码登录</div>
						<div class="vui-pro-login-tabs-trigger" :class="currentLoginType === 2 ? 'active' : ''" @click="handleChangeLoginType(2)">短信登录</div>
					</div>
					<div class="vui-pro-login-tabs-body">
						<div class="vui-pro-login-tabs-panel" :class="currentLoginType === 1 ? 'active' : ''">
							<vui-input prefix="user" size="large" class="margin-top-0" v-model="account" placeholder="请输入账号" />
							<vui-input type="password" prefix="lock" size="large" class="margin-top-25" v-model="password" placeholder="请输入密码" />
						</div>
						<div class="vui-pro-login-tabs-panel" :class="currentLoginType === 2 ? 'active' : ''">
							<vui-input prefix="smartphone" size="large" class="margin-top-0" placeholder="请输入手机号" />
							<vui-input-group compact size="large" class="margin-top-25">
								<vui-input prefix="mail" style="width: 239px;" placeholder="请输入验证码" />
								<vui-button>获取验证码</vui-button>
							</vui-input-group>
						</div>
					</div>
				</div>
				<div class="margin-top-25 clearfix">
					<vui-checkbox v-model="autoLogin" label="自动登录" />
					<vui-separator align="center" class="pull-right">
						<a href="javasctip:;" class="link-default">忘记密码</a>
						<a href="javasctip:;" class="link-default">立即注册</a>
					</vui-separator>
				</div>
				<vui-button type="primary" size="large" class="margin-top-25" style="width: 100%;" @click="handleLogin">立即登录</vui-button>
				<div class="socialLogin">
					<h4 class="socialLogin-header">社交账号登录</h4>
					<div class="socialLogin-body">
						<a href="javascript:;" class="socialLogin-button socialLogin-button-wechat">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="18" height="18">
								<path d="M12,0.8C5.4,0.8,0,5.6,0,11.5c0,2.2,0.8,4.3,2.1,6c-0.3,1-1.8,5.7-1.8,5.7c0,0,5.1-2.2,5.7-2.5c9.6,4.2,18-2.3,18-9.3C24,5.6,18.6,0.8,12,0.8z M7.4,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C8.9,10.9,8.2,11.6,7.4,11.6z M16.5,11.6c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C18,10.9,17.3,11.6,16.5,11.6z" />
							</svg>
						</a>
						<a href="javascript:;" class="socialLogin-button socialLogin-button-qq">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="18" height="18">
								<path class="st0" d="M12,0C9.2,0,4.2,1.6,4.2,8.8v1.4c0,0-2.7,5.3-2.7,8.3c0,0.8,0.2,1.2,0.3,1.2C2,19.8,3,19.2,4,17.3c0,0-0.2,2.6,2.4,4.8c0,0-2.2,0.6-2.2,1.4c0,0.8,5.1,0.5,7.8,0c2.8,0.5,7.8,0.8,7.8,0c0-0.8-2.2-1.4-2.2-1.4c2.6-2.1,2.4-4.8,2.4-4.8c1,1.9,2,2.5,2.2,2.5c0.1,0,0.4-0.4,0.4-1.2c0-3-2.7-8.3-2.7-8.3V8.8C19.8,1.6,14.8,0,12,0z" />
							</svg>
						</a>
						<a href="javascript:;" class="socialLogin-button socialLogin-button-sina">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" width="18" height="18">
								<path d="M15.8,2.1c0,0-0.9,0.7,0,1.9c0,0,6.9-1.3,6.2,7.1c0,0,1.1,1.3,1.8-0.3C23.9,10.7,25.5,1.1,15.8,2.1z M5.3,16.7c0,0,0,2.9,3.6,2.9c4,0,4-3.3,4-3.3s0.2-3.5-3.5-3.5C5.3,12.6,5.3,16.7,5.3,16.7z M8.1,17.8c-0.7,0-1.3-0.5-1.3-1.1c0-0.6,0.6-1.1,1.3-1.1c0.7,0,1.3,0.5,1.3,1.1C9.4,17.3,8.8,17.8,8.1,17.8L8.1,17.8z M4.7,7C-2.8,13.5,1,18.5,1,18.5c0.6,1.1,3.7,3.5,9.4,3.5c5.7,0,10.2-4,10.2-7.2c0-3.1-3.2-3-3.2-3c1.1-1.7,0.2-3,0.2-3c-1.8-2.4-5.9-0.2-5.9-0.2c0.8-1.9,0.1-3.1,0.1-3.1C9.7,2.7,4.7,7,4.7,7z M16.1,15.7c0,0-0.5,4.6-7,4.6c-6.3,0-6.3-3.7-6.4-4.1c0,0-0.1-4.9,7.2-5.2C16.4,10.8,16.1,15.7,16.1,15.7L16.1,15.7z M20.3,9.8c0,0,1.1-4.9-4.2-4.3c0,0-0.7,0.6,0.1,1.5c0,0,2.8-0.6,2.6,2.9C18.8,10,19.6,11,20.3,9.8L20.3,9.8z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</vui-content>
		<vui-footer class="vui-pro-login-footer">
			<vui-separator align="center" class="vui-pro-login-links">
				<a href="javascript:;" class="link-default">友情链接</a>
				<a href="javascript:;" class="link-default">友情链接</a>
				<a href="javascript:;" class="link-default">友情链接</a>
				<a href="javascript:;" class="link-default">友情链接</a>
				<a href="javascript:;" class="link-default">友情链接</a>
				<a href="javascript:;" class="link-default">友情链接</a>
			</vui-separator>
			<div class="vui-pro-login-copyright">Copyright © {{year}} 杭州电魂网络科技股份有限公司</div>
		</vui-footer>
	</vui-layout>
</template>

<script>
	import { rootRoute } from "src/config";

	export default {
		data() {
			return {
				currentLoginType: 1,
				autoLogin: true,
				account: "admin",
				password: "123456",
				year: new Date().getFullYear()
			};
		},
		methods: {
			handleChangeLoginType(type) {
				this.currentLoginType = type;
			},
			handleLogin() {
				let payload = {
					account: this.account,
					password: this.password
				};

				this.$store.dispatch("user/login", payload).then(response => {
					this.$router.replace(rootRoute);
				});
			}
		}
	};
</script>

<style>
	.vui-pro-login { height:100%; background:url("/static/images/layout/body.png") repeat 50% 0; overflow:auto; }

	/* body */
	.vui-pro-login-body { padding:50px 0; }

	.vui-pro-login-logo { position:relative; width:360px; margin:0 auto; text-align:center; }
	.vui-pro-login-logo a { display:inline-block; vertical-align:middle; line-height:1; }
	.vui-pro-login-logo img { display:inline-block; height:40px; vertical-align:middle; }
	.vui-pro-login-logo span { display:inline-block; margin-left:10px; vertical-align:middle; line-height:40px; color:#09192a; font-size:30px; font-weight:700; font-stretch:condensed; }

	.vui-pro-login-slogan { margin-top:20px; margin-bottom:50px; color:#8c8c8c; text-align:center; }

	.vui-pro-login-form { width:360px; margin:0 auto; }

	.vui-pro-login-tabs {  }
	.vui-pro-login-tabs .vui-pro-login-tabs-header { font-size:0; text-align:center; }
	.vui-pro-login-tabs .vui-pro-login-tabs-header .vui-pro-login-tabs-trigger { cursor:pointer; display:inline-block; width:90px; border-bottom:2px solid transparent; margin:0 15px; padding-bottom:10px; color:#595959; font-size:14px; text-align:center; transition:all 0.2s; }
	.vui-pro-login-tabs .vui-pro-login-tabs-header .vui-pro-login-tabs-trigger.active { border-bottom-color:#2d8cf0; color:#2d8cf0; }
	.vui-pro-login-tabs .vui-pro-login-tabs-body { margin-top:25px; }
	.vui-pro-login-tabs .vui-pro-login-tabs-body .vui-pro-login-tabs-panel { display:none; }
	.vui-pro-login-tabs .vui-pro-login-tabs-body .vui-pro-login-tabs-panel.active { display:block; }

	.socialLogin { margin-top:25px; }
	.socialLogin .socialLogin-header { color:#8c8c8c; text-align:center; }
	.socialLogin .socialLogin-body { margin-top:15px; text-align:center; }
	.socialLogin .socialLogin-body .socialLogin-button { display:inline-block; width:40px; height:40px; border-radius:40px; background-color:#dddddd; margin:0 10px; vertical-align:middle; font-size:0; text-align:center; line-height:40px; transition:all 0.2s; }
	.socialLogin .socialLogin-body .socialLogin-button svg { display:inline-block; vertical-align:middle; fill:#ffffff; }
	.socialLogin .socialLogin-body .socialLogin-button:hover {  }
	.socialLogin .socialLogin-body .socialLogin-button:hover svg {  }
	.socialLogin .socialLogin-body .socialLogin-button-wechat {  }
	.socialLogin .socialLogin-body .socialLogin-button-wechat svg {  }
	.socialLogin .socialLogin-body .socialLogin-button-wechat:hover { background-color:#44b549; }
	.socialLogin .socialLogin-body .socialLogin-button-wechat:hover svg {  }
	.socialLogin .socialLogin-body .socialLogin-button-qq {  }
	.socialLogin .socialLogin-body .socialLogin-button-qq svg {  }
	.socialLogin .socialLogin-body .socialLogin-button-qq:hover { background-color:#12b7f5; }
	.socialLogin .socialLogin-body .socialLogin-button-qq:hover svg {  }
	.socialLogin .socialLogin-body .socialLogin-button-sina {  }
	.socialLogin .socialLogin-body .socialLogin-button-sina svg {  }
	.socialLogin .socialLogin-body .socialLogin-button-sina:hover { background-color:#ff8500; }
	.socialLogin .socialLogin-body .socialLogin-button-sina:hover svg {  }

	/* footer */
	.vui-pro-login-footer { padding:25px 0; }

	.vui-pro-login-links { color:#8c8c8c; text-align:center; line-height:2; }
	.vui-pro-login-copyright { margin-top:8px; color:#8c8c8c; text-align:center; line-height:2; }
</style>