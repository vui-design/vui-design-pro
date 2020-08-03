<template>
	<vui-layout class="vui-pro-layout">
		<vui-sider class="vui-pro-layout-sider" theme="dark" collapsible v-bind:width="220" v-bind:collapsed="collapsed">
			<h1 class="logo" v-bind:class="collapsed ? 'collapsed' : ''">
				<router-link to="/">
					<img src="/static/images/logo.svg" />
					<label>Vui Design Pro</label>
				</router-link>
			</h1>
			<vui-menu mode="inline" theme="dark" v-bind:collapsed="collapsed" v-bind:openNames="openedSubmenus" v-bind:selectedName="selectedMenuItem">
				<template v-for="(first, firstIndex) in menu">
					<vui-submenu v-if="first.children" v-bind:key="first.path" v-bind:name="first.path" v-bind:icon="first.meta && first.meta.icon" v-bind:title="first.meta && first.meta.title">
						<template v-for="(second, secondIndex) in first.children">
							<vui-submenu v-if="second.children" v-bind:key="second.path" v-bind:name="second.path" v-bind:title="second.meta && second.meta.title">
								<template v-for="(third, thirdIndex) in second.children">
									<vui-menu-item v-bind:key="third.path" v-bind:to="third.path" v-bind:name="third.path" v-bind:title="third.meta && third.meta.title" />
								</template>
							</vui-submenu>
							<vui-menu-item v-else v-bind:key="second.path" v-bind:to="second.path" v-bind:name="second.path" v-bind:title="second.meta && second.meta.title" />
						</template>
					</vui-submenu>
					<vui-menu-item v-else v-bind:key="first.path" v-bind:to="first.path" v-bind:name="first.path" v-bind:icon="first.meta && first.meta.icon" v-bind:title="first.meta && first.meta.title" />
				</template>
			</vui-menu>
		</vui-sider>
		<vui-layout class="vui-pro-layout-main" v-bind:class="collapsed ? 'collapsed' : ''">
			<vui-header class="vui-pro-layout-main-header" theme="light">
				<vui-button class="btn-trigger" type="primary" size="small" v-bind:icon="collapsed ? 'menu-unfold' : 'menu-fold'" v-on:click="handleSiderCollapse" />
				<vui-breadcrumb class="breadcrumb">
					<vui-breadcrumb-item v-for="item in breadcrumb" v-bind:key="item.name" v-bind:to="item.path">{{item.meta && item.meta.title}}</vui-breadcrumb-item>
				</vui-breadcrumb>
				<div class="navbar">
					<vui-dropdown v-model="broadcast.visible" class="navbar-item" placement="bottom-end" trigger="click">
						<a href="javascript:;" class="link" v-bind:class="broadcast.visible ? 'active' : ''">
							<vui-badge v-bind:count="notice.count + message.count + todo.count" v-bind:offset="[3, 3]">
								<vui-icon type="notification" />
							</vui-badge>
						</a>
						<vui-tabs slot="menu" class="vui-pro-layout-main-tabs">
							<vui-tab-panel name="notice">
								<template slot="title">通知 ({{notice.count}})</template>
								<vui-empty v-if="notice.data.length == 0" style="padding:42px 0px;" description="暂无通知" />
								<div v-else class="vui-pro-layout-main-broadcast">
									<div class="vui-pro-layout-main-broadcast-body">
										<vui-list class="vui-pro-layout-main-notice-list">
											<vui-list-item v-for="(item, index) in notice.data" v-bind:key="item.id" v-bind:class="item.readed ? 'opacity-sixty' : ''" v-on:click.native="handleNoticeClick(item, index)">
												<vui-list-item-meta v-bind:avatar="item.icon" v-bind:title="item.title">
													<template slot="description">
														<vui-time v-bind:time="item.createdAt" />
													</template>
												</vui-list-item-meta>
											</vui-list-item>
										</vui-list>
									</div>
									<div class="vui-pro-layout-main-broadcast-footer">
										<a href="javascript:;" class="link-default" v-on:click="handleNoticeClean">清空通知</a>
										<a href="javascript:;" class="link-default">查看更多</a>
									</div>
								</div>
							</vui-tab-panel>
							<vui-tab-panel name="message">
								<template slot="title">消息 ({{message.count}})</template>
								<vui-empty v-if="message.data.length == 0" style="padding:42px 0px;" description="暂无消息" />
								<div v-else class="vui-pro-layout-main-broadcast">
									<div class="vui-pro-layout-main-broadcast-body">
										<vui-list class="vui-pro-layout-main-message-list">
											<vui-list-item v-for="(item, index) in message.data" v-bind:key="item.id" v-bind:class="item.readed ? 'opacity-sixty' : ''" v-on:click.native="handleMessageClick(item, index)">
												<vui-list-item-meta v-bind:avatar="item.icon" v-bind:title="item.title">
													<template slot="description">
														<div style="margin-bottom: 4px;">{{item.description}}</div>
														<vui-time v-bind:time="item.createdAt" />
													</template>
												</vui-list-item-meta>
											</vui-list-item>
										</vui-list>
									</div>
									<div class="vui-pro-layout-main-broadcast-footer">
										<a href="javascript:;" class="link-default" v-on:click="handleMessageClean">清空消息</a>
										<a href="javascript:;" class="link-default">查看更多</a>
									</div>
								</div>
							</vui-tab-panel>
							<vui-tab-panel name="todo">
								<template slot="title">待办 ({{todo.count}})</template>
								<vui-empty v-if="todo.data.length == 0" style="padding:42px 0px;" description="暂无待办" />
								<div v-else class="vui-pro-layout-main-broadcast">
									<div class="vui-pro-layout-main-broadcast-body">
										<vui-list class="vui-pro-layout-main-todo-list">
											<vui-list-item v-for="(item, index) in todo.data" v-bind:key="item.id" v-bind:class="item.readed ? 'opacity-sixty' : ''" v-on:click.native="handleTodoClick(item, index)">
												<vui-list-item-meta v-bind:avatar="item.icon">
													<template slot="title">
														<div class="title">{{item.title}}</div>
														<vui-tag v-if="item.status == 1">{{item.statusText}}</vui-tag>
														<vui-tag v-else-if="item.status == 2" color="blue">{{item.statusText}}</vui-tag>
														<vui-tag v-else-if="item.status == 3" color="gold">{{item.statusText}}</vui-tag>
														<vui-tag v-else-if="item.status == 4" color="red">{{item.statusText}}</vui-tag>
													</template>
													<template slot="description">
														<div style="margin-bottom: 0px;">{{item.description}}</div>
													</template>
												</vui-list-item-meta>
											</vui-list-item>
										</vui-list>
									</div>
									<div class="vui-pro-layout-main-broadcast-footer">
										<a href="javascript:;" class="link-default" v-on:click="handleTodoClean">清空待办</a>
										<a href="javascript:;" class="link-default">查看更多</a>
									</div>
								</div>
							</vui-tab-panel>
						</vui-tabs>
					</vui-dropdown>
					<vui-tooltip class="navbar-item" content="切换语言">
						<a href="javascript:;" class="link">
							<vui-icon type="global" />
						</a>
					</vui-tooltip>
					<vui-tooltip class="navbar-item" content="帮助文档">
						<a href="javascript:;" class="link">
							<vui-icon type="help" />
						</a>
					</vui-tooltip>
					<vui-dropdown v-model="usermenu.visible" class="navbar-item" placement="bottom-end" trigger="click">
						<div class="user" v-bind:class="usermenu.visible ? 'active' : ''">
							<label>kiwi</label>
							<vui-avatar size="small" src="/static/images/avatar.svg" />
							<vui-icon type="chevron-down" />
						</div>
						<vui-dropdown-menu slot="menu" v-on:click="handleUsermenuClick">
							<template v-for="(item, index) in usermenu.data">
								<vui-dropdown-menu-divider v-if="item.divider" v-bind:key="index" />
								<vui-dropdown-menu-item v-else-if="item.path" v-bind:key="index" v-bind:name="item.name" v-bind:icon="item.icon" v-bind:title="item.title" v-bind:to="item.path" />
								<vui-dropdown-menu-item v-else v-bind:key="index" v-bind:name="item.name" v-bind:icon="item.icon" v-bind:title="item.title" />
							</template>
						</vui-dropdown-menu>
					</vui-dropdown>
				</div>
			</vui-header>
			<vui-content class="vui-pro-layout-main-body">
				<router-view v-bind:key="$route.fullPath" />
			</vui-content>
			<vui-footer class="vui-pro-layout-main-footer">
				<vui-action-group align="center" v-bind:gutter="20">
					<a href="https://github.com/vui-design/vui-design" target="_blank" class="link-default">Vui Design</a>
					<a href="https://github.com/vui-design/vui-design-pro" target="_blank" class="link-default">Vui Design Pro</a>
				</vui-action-group>
				<div>Copyright © {{year}} 杭州电魂网络科技股份有限公司</div>
			</vui-footer>
		</vui-layout>
	</vui-layout>
</template>

<script>
	import { mapState } from "vuex";
	import routes from "src/routes";
	import config from "src/config";
	import utils from "src/utils";
	import authorization from "src/utils/authorization";

	export default {
		data() {
			return {
				collapsed: false,
				openedSubmenus: ["/dashboard"],
				broadcast: {
					visible: false
				},
				notice: {
					count: 5,
					data: [
						{
							id: 5,
							icon: "/static/images/notice-icons/1.png",
							title: "你收到了 20 分新的周报",
							createdAt: "2020-08-02 12:00:00",
							readed: false
						},
						{
							id: 4,
							icon: "/static/images/notice-icons/4.png",
							title: "点击后设为已读状态",
							createdAt: "2020-08-02 06:00:00",
							readed: false
						},
						{
							id: 3,
							icon: "/static/images/notice-icons/3.png",
							title: "你推荐的 张三丰 已通过第三轮面试",
							createdAt: "2020-08-02 00:00:00",
							readed: false
						},
						{
							id: 2,
							icon: "/static/images/notice-icons/2.png",
							title: "左侧图标用于区分不同类型",
							createdAt: "2020-07-20 00:00:00",
							readed: false
						},
						{
							id: 1,
							icon: "/static/images/notice-icons/1.png",
							title: "标题文本不易过长，超出部分将被自动截断",
							createdAt: "2020-02-02 00:00:00",
							readed: false
						}
					]
				},
				message: {
					count: 3,
					data: [
						{
							id: 3,
							icon: "/static/images/avatar.svg",
							title: "张三丰 评论了你",
							description: "哇塞，你好厉害~",
							createdAt: "2020-08-02 00:00:00",
							readed: false
						},
						{
							id: 2,
							icon: "/static/images/avatar.svg",
							title: "张无忌 回复了你",
							description: "这种模板用于提醒谁与你发生了互动，左侧放互动人员头像",
							createdAt: "2020-07-20 00:00:00",
							readed: false
						},
						{
							id: 1,
							icon: "/static/images/avatar.svg",
							title: "标题文本不易过长，超出部分将被自动截断",
							description: "这种模板用于提醒谁与你发生了互动，左侧放互动人员头像",
							createdAt: "2020-02-02 00:00:00",
							readed: false
						}
					]
				},
				todo: {
					count: 4,
					data: [
						{
							id: 4,
							title: "任务名称",
							description: "任务需要在 2020-12-30 12:00:00 前启动",
							status: 1,
							statusText: "未开始",
							readed: false
						},
						{
							id: 3,
							title: "第三方紧急代码变更",
							description: "张三丰提交于 2020-08-02，需在 2020-08-04 前完成代码变更任务",
							status: 4,
							statusText: "马上到期",
							readed: false
						},
						{
							id: 2,
							title: "信息安全考试",
							description: "描述内容描述内容描述内容",
							status: 3,
							statusText: "已耗时 8 天",
							readed: false
						},
						{
							id: 1,
							title: "ABCD 版本发布",
							description: "这种模板用于提醒用户最新待办事项，详细内容点击进行查看...",
							status: 2,
							statusText: "进行中",
							readed: false
						}
					]
				},
				usermenu: {
					visible: false,
					data: [
						{ name: "profile", icon: "user", path: "/user/profile", title: "个人中心" },
						{ name: "settings", icon: "settings", path: "/user/settings", title: "个人设置" },
						{ divider: true },
						{ name: "logout", icon: "logout", title: "退出登录" }
					]
				},
				year: new Date().getFullYear()
			};
		},
		computed: {
			...mapState({
				user: state => state.user
			}),
			menu() {
				return utils.getMenuFromRoutes(routes, this.user.permissions);
			},
			breadcrumb() {
				const route = this.$route;
				const rootRoute = utils.getRouteByPath(routes, config.rootRoute);
				const items = utils.getBreadcrumbByRoute(route, rootRoute);

				return items;
			},
			selectedMenuItem() {
				const route = this.$route;
				const items = utils.flatten(this.menu, "children", true);
				let target;

				items.forEach(item => {
					const { path, meta } = item;

					if (meta && meta.addToMenu === false) {
						return;
					}

					if (route.path.indexOf(path) === -1) {
						return;
					}

					target = item;
				});

				return target ? target.path : "";
			}
		},
		methods: {
			handleSiderCollapse() {
				this.collapsed = !this.collapsed;
				utils.dispatchResize();
			},
			handleNoticeClick(item, index) {
				if (item.readed) {
					return;
				}

				item.readed = true;
				this.notice.count -= 1;
			},
			handleNoticeClean(item, index) {
				this.notice.count = 0;
				this.notice.data = [];
			},
			handleMessageClick(item, index) {
				if (item.readed) {
					return;
				}

				item.readed = true;
				this.message.count -= 1;
			},
			handleMessageClean(item, index) {
				this.message.count = 0;
				this.message.data = [];
			},
			handleTodoClick(item, index) {
				if (item.readed) {
					return;
				}

				item.readed = true;
				this.todo.count -= 1;
			},
			handleTodoClean(item, index) {
				this.todo.count = 0;
				this.todo.data = [];
			},
			handleUsermenuClick(name) {
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
	/* vui-pro-layout */
	.vui-pro-layout { position:relative; z-index:1; min-height:100vh; }

	/* vui-pro-layout-sider */
	.vui-pro-layout-sider { position:fixed; top:0; left:0; z-index:2; height:100%; box-shadow:0 0 6px rgba(0,0,0,0.06); }

	.vui-pro-layout-sider .logo { position:relative; height:64px; margin-bottom:10px; padding:0 20px; overflow:hidden; }
	.vui-pro-layout-sider .logo a { display:flex; align-items:center; height:100%; }
	.vui-pro-layout-sider .logo img { display:block; width:32px; transition:width 0.2s; }
	.vui-pro-layout-sider .logo label { flex:1; cursor:inherit; display:block; margin-left:10px; overflow:hidden; color:#fff; font-size:18px; font-weight:600; line-height:2; white-space:nowrap; text-overflow:ellipsis; }
	.vui-pro-layout-sider .logo.collapsed {  }
	.vui-pro-layout-sider .logo.collapsed a {  }
	.vui-pro-layout-sider .logo.collapsed img { width:40px; }
	.vui-pro-layout-sider .logo.collapsed label { display:none; }

	/* vui-pro-layout-main */
	.vui-pro-layout-main { position:relative; z-index:1; min-height:100%; padding-left:220px; transition:all 0.2s; }
	.vui-pro-layout-main.collapsed { padding-left:80px; }

	.vui-pro-layout-main-header { position:relative; z-index:2; box-shadow:0 0 6px rgba(0,0,0,0.06); padding:0 10px 0 20px; }
	.vui-pro-layout-main-header .btn-trigger { float:left; margin:20px 0; }
	.vui-pro-layout-main-header .breadcrumb { float:left; height:24px; margin:20px 0 20px 20px; line-height:24px; }
	.vui-pro-layout-main-header .navbar { float:right; }
	.vui-pro-layout-main-header .navbar .navbar-item { float:left; height:64px; }
	.vui-pro-layout-main-header .link { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 10px; color:#595959; transition:all 0.2s; }
	.vui-pro-layout-main-header .link:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
	.vui-pro-layout-main-header .link.active { background-color:rgba(0,0,0,0.02); color:#4298f2; }
	.vui-pro-layout-main-header .user { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 10px; color:#595959; transition:all 0.2s; }
	.vui-pro-layout-main-header .user label { cursor:pointer; }
	.vui-pro-layout-main-header .user .vui-avatar { margin:0 4px; }
	.vui-pro-layout-main-header .user .vui-icon { font-size:12px; }
	.vui-pro-layout-main-header .user:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
	.vui-pro-layout-main-header .user:hover label { cursor:pointer; }
	.vui-pro-layout-main-header .user:hover .vui-avatar {  }
	.vui-pro-layout-main-header .user:hover .vui-icon {  }
	.vui-pro-layout-main-header .user.active { background-color:rgba(0,0,0,0.02); color:#4298f2; }
	.vui-pro-layout-main-header .user.active label { cursor:pointer; }
	.vui-pro-layout-main-header .user.active .vui-avatar {  }
	.vui-pro-layout-main-header .user.active .vui-icon {  }

	.vui-pro-layout-main-body { position:relative; z-index:1; padding:20px; }

	.vui-pro-layout-main-footer { padding:20px; text-align:center; }
	.vui-pro-layout-main-footer .vui-action-group { margin-bottom:10px; }

	.vui-pro-layout-main-tabs { width:340px; border-radius:2px; background-color:#fff; box-shadow:0 1px 6px rgba(0,0,0,0.1); }
	.vui-pro-layout-main-tabs .vui-tabs-header { margin-bottom:0; }
	.vui-pro-layout-main-tabs .vui-tabs-header-content { justify-content:center; }
	.vui-pro-layout-main-tabs .vui-tab-trigger { margin:0 10px; }

	.vui-pro-layout-main-broadcast {  }
	.vui-pro-layout-main-broadcast-body {  }
	.vui-pro-layout-main-broadcast-footer { display:flex; justify-content:center; align-items:center; height:46px; border-top:1px solid #f0f0f0; }
	.vui-pro-layout-main-broadcast-footer a { flex:1; display:block; text-align:center; line-height:46px; }
	.vui-pro-layout-main-broadcast-footer a:first-child {  }
	.vui-pro-layout-main-broadcast-footer a:last-child { border-left:1px solid #f0f0f0; }

	.vui-pro-layout-main-notice-list {  }
	.vui-pro-layout-main-notice-list .vui-list-item { cursor:pointer; padding:16px 20px; transition:all 0.2s; }
	.vui-pro-layout-main-notice-list .vui-list-item .vui-list-item-meta-content { width:0; }
	.vui-pro-layout-main-notice-list .vui-list-item .vui-list-item-meta-title { display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
	.vui-pro-layout-main-notice-list .vui-list-item .vui-list-item-meta-description { font-size:12px; }
	.vui-pro-layout-main-notice-list .vui-list-item:hover { background-color:#fafafa; }

	.vui-pro-layout-main-message-list {  }
	.vui-pro-layout-main-message-list .vui-list-item { cursor:pointer; padding:16px 20px; transition:all 0.2s; }
	.vui-pro-layout-main-message-list .vui-list-item .vui-list-item-meta-content { width:0; }
	.vui-pro-layout-main-message-list .vui-list-item .vui-list-item-meta-title { display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
	.vui-pro-layout-main-message-list .vui-list-item .vui-list-item-meta-description { font-size:12px; }
	.vui-pro-layout-main-message-list .vui-list-item:hover { background-color:#fafafa; }

	.vui-pro-layout-main-todo-list {  }
	.vui-pro-layout-main-todo-list .vui-list-item { cursor:pointer; padding:16px 20px; transition:all 0.2s; }
	.vui-pro-layout-main-todo-list .vui-list-item .vui-list-item-meta-content { width:0; }
	.vui-pro-layout-main-todo-list .vui-list-item .vui-list-item-meta-title { align-items:center; }
	.vui-pro-layout-main-todo-list .vui-list-item .vui-list-item-meta-title .title { flex:1; }
	.vui-pro-layout-main-todo-list .vui-list-item .vui-list-item-meta-title .vui-tag { margin-left:8px; }
	.vui-pro-layout-main-todo-list .vui-list-item .vui-list-item-meta-description { font-size:12px; }
	.vui-pro-layout-main-todo-list .vui-list-item:hover { background-color:#fafafa; }
</style>