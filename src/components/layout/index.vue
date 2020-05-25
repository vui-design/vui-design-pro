<template>
	<vui-layout class="vui-design-pro">
		<vui-sider class="vui-design-pro-sider" theme="dark" collapsible v-bind:width="220" v-bind:collapsed="collapsed">
			<h1 class="vui-design-pro-sider-logo" :class="collapsed ? 'collapsed' : ''">
				<router-link to="/">
					<img src="/static/images/logo.svg" />
					<span>Vui Design Pro</span>
				</router-link>
			</h1>
			<vui-menu mode="inline" theme="dark" v-bind:collapsed="collapsed" v-bind:openNames="openNames" v-bind:selectedName="$route.name">
				<template v-for="first in menu">
					<vui-submenu v-if="first.children" v-bind:key="first.name" v-bind:name="first.name" v-bind:icon="first.meta.icon" v-bind:title="first.meta.title">
						<template v-for="second in first.children">
							<vui-submenu v-if="second.children" v-bind:key="second.name" v-bind:name="second.name" v-bind:title="second.meta.title">
								<vui-menu-item v-for="third in second.children" v-bind:key="third.name" v-bind:name="third.name" v-bind:title="third.meta.title" v-bind:to="third.path" />
							</vui-submenu>
							<vui-menu-item v-else v-bind:key="second.name" v-bind:name="second.name" v-bind:title="second.meta.title" v-bind:to="second.path" />
						</template>
					</vui-submenu>
					<vui-menu-item v-else v-bind:key="first.name" v-bind:name="first.name" v-bind:title="first.meta.title" v-bind:to="first.path" />
				</template>
			</vui-menu>
		</vui-sider>

		<vui-layout class="vui-design-pro-main" v-bind:class="collapsed ? 'vui-design-pro-main-collapsed' : ''">
			<vui-header class="vui-design-pro-header" theme="light">
				<vui-button class="btn-trigger" type="primary" size="small" v-bind:icon="collapsed ? 'menu-unfold' : 'menu-fold'" v-on:click="handleCollapse" />
				<vui-breadcrumb class="breadcrumb">
					<vui-breadcrumb-item v-for="item in breadcrumb" v-bind:key="item.name" v-bind:to="item.path">{{item.meta && item.meta.title}}</vui-breadcrumb-item>
				</vui-breadcrumb>
				<div class="navbar">
					<div class="navbar-item">
						<a href="javascript:;" class="link">
							<vui-badge v-bind:count="10" v-bind:offset="[3, 3]">
								<vui-icon type="notification" />
							</vui-badge>
						</a>
					</div>
					<div class="navbar-item">
						<a href="javascript:;" class="link">
							<vui-tooltip content="切换语言">
								<vui-icon type="global" />
							</vui-tooltip>
						</a>
					</div>
					<div class="navbar-item">
						<a href="javascript:;" class="link">
							<vui-tooltip class="navbar-item" content="帮助文档">
								<vui-icon type="help" />
							</vui-tooltip>
						</a>
					</div>
					<vui-dropdown class="navbar-item" placement="bottom-end">
						<div class="user">
							<span>kiwi</span>
							<vui-avatar size="small" style="background-color: #2d8cf0;">丁</vui-avatar>
							<vui-icon type="chevron-down" />
						</div>
						<vui-dropdown-menu slot="menu" class="layout-header-navigation" v-on:click="handleUserMenuClick">
							<template v-for="(item, index) in link.data">
								<vui-dropdown-menu-divider v-if="item.divider" v-bind:key="index" />
								<vui-dropdown-menu-item v-else-if="item.path" v-bind:key="index" v-bind:name="item.name" v-bind:icon="item.icon" v-bind:title="item.title" v-bind:to="item.path" target="_blank" />
								<vui-dropdown-menu-item v-else v-bind:key="index" v-bind:name="item.name" v-bind:icon="item.icon" v-bind:title="item.title" />
							</template>
						</vui-dropdown-menu>
					</vui-dropdown>
				</div>
			</vui-header>
			<vui-content class="vui-design-pro-body">
				<router-view v-bind:key="$route.fullPath" />
			</vui-content>
			<vui-footer class="vui-design-pro-footer">
				<div class="link-default text-center">
					<router-link to="/">首页</router-link>
					<vui-divider type="vertical" v-bind:margin="20" />
					<a href="javascript:;">帮助文档</a>
				</div>
				<div class="margin-top-10 text-center">Copyright © {{year}} 杭州电魂网络科技股份有限公司</div>
			</vui-footer>
		</vui-layout>
	</vui-layout>
</template>

<script>
	import { mapState, mapGetters, mapMutations } from "vuex";
	import authorization from "src/utils/authorization";

	export default {
		data() {
			return {
				collapsed: false,
				openNames: ["dashboard"],
				year: new Date().getFullYear(),
				link: {
					data: [
						{ name: "admin", icon: "settings", path: "/admin", title: "管理后台" },
						{ divider: true },
						{ name: "logout", icon: "logout", title: "退出登录" }
					]
				}
			};
		},
		computed: {
			...mapState({
				breadcrumb: state => state.app.breadcrumb
			}),
			...mapGetters({
				menu: "app/menu"
			})
		},
		methods: {
			handleCollapse() {
				this.collapsed = !this.collapsed;

				// 手动触发 window 的 reize 事件
				// 目的是为了在收缩左侧菜单栏时，内容板块的图表宽度可能不会自动适应父容器宽度变更
				window.dispatchEvent(new Event("resize"));
			},
			handleUserMenuClick(name) {
				if (name == "logout") {
					this.$store.dispatch("user/logout").then(to => {
						authorization.amsLogout(to, this.$route.fullPath);
					});
				}
			}
		}
	};
</script>

<style>
	/* vui-design-pro */
	.vui-design-pro { position:relative; z-index:1; min-height:100vh; }

	/* vui-design-pro-sider */
	.vui-design-pro-sider { position:fixed; top:0; left:0; z-index:2; height:100%; box-shadow:2px 0 8px 0 rgba(0,0,0,0.05); }

	.vui-design-pro-sider-logo { position:relative; height:64px; margin-bottom:10px; padding:0 20px; overflow:hidden; line-height:64px; }
	.vui-design-pro-sider-logo a { display:block; }
	.vui-design-pro-sider-logo img { display:inline-block; width:32px; vertical-align:middle; transition:width 0.2s; }
	.vui-design-pro-sider-logo span { display:inline-block; margin-left:10px; vertical-align:middle; line-height:1; color:#fff; font-size:18px; font-weight:600; }
	.vui-design-pro-sider-logo.collapsed {  }
	.vui-design-pro-sider-logo.collapsed a {  }
	.vui-design-pro-sider-logo.collapsed img { display:inline-block; width:40px; vertical-align:middle; }
	.vui-design-pro-sider-logo.collapsed span { display:none; }

	/* vui-design-pro-main */
	.vui-design-pro-main { position:relative; z-index:1; min-height:100%; padding-left:220px; transition:all 0.2s; }
	.vui-design-pro-main-collapsed { padding-left:80px; }

	/* vui-design-pro-header */
	.vui-design-pro-header { position:relative; z-index:2; box-shadow:0 1px 0 #f3f3f3; padding:0 10px 0 20px; }
	.vui-design-pro-header .btn-trigger { float:left; margin:20px 0; }
	.vui-design-pro-header .breadcrumb { float:left; height:20px; margin:22px 0 22px 20px; line-height:20px; }
	.vui-design-pro-header .navbar { float:right; }
	.vui-design-pro-header .navbar .navbar-item { float:left; cursor:pointer; height:100%; color:#595959; }
	.vui-design-pro-header .link { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 10px; color:#595959; transition:all 0.2s; }
	.vui-design-pro-header .link:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
	.vui-design-pro-header .user { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 10px; color:#595959; transition:all 0.2s; }
	.vui-design-pro-header .user .vui-avatar { margin:0 4px; }
	.vui-design-pro-header .user .vui-icon { font-size:12px; }
	.vui-design-pro-header .user:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
	.vui-design-pro-header .user:hover .vui-avatar {  }
	.vui-design-pro-header .user:hover .vui-icon {  }

	/* vui-design-pro-body */
	.vui-design-pro-body { position:relative; z-index:1; }
	.vui-design-pro-body .btn-backtop { position:fixed; bottom:20px; right:20px; z-index:2; background-color:#fff; box-shadow:0 1px 8px rgba(0,0,0,0.15); }

	/* vui-design-pro-footer */
	.vui-design-pro-footer {  }
</style>