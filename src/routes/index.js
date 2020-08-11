import Layout from "src/layout";

/**
* Vui Design Pro 中，路由的 meta 属性除了原生参数外可配置的参数：
*  addToMenu: 在菜单栏中是否显示当前路由，必填
*  addToBreadcrumb: 在面包屑中是否显示当前路由，必填
*  icon: 显示在菜单中的图标类型
*  title: 显示在网页标签、菜单和面包屑中的标题
*  authority: 当前路由所需权限
*/
export default [
	{
		path: "/",
		name: "index",
		meta: {
			addToMenu: false,
			addToBreadcrumb: true,
			title: "首页"
		},
		component: Layout,
		redirect: "/dashboard"
	},

	{
		path: "/login",
		name: "login",
		meta: {
			addToMenu: false,
			addToBreadcrumb: false,
			title: "登录"
		},
		component: () => import("src/views/login")
	},

	{
		path: "/dashboard",
		name: "dashboard",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "apps",
			title: "控制面板"
		},
		component: Layout,
		redirect: "/dashboard/analysis",
		children: [
			{
				path: "/dashboard/analysis",
				name: "dashboard-analysis",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "分析页"
				},
				component: () => import("src/views/dashboard/analysis")
			},
			/*
			{
				path: "/dashboard/monitor",
				name: "dashboard-monitor",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "监控页"
				},
				component: () => import("src/views/dashboard/monitor")
			},
			*/
			{
				path: "/dashboard/workplace",
				name: "dashboard-workplace",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "工作台"
				},
				component: () => import("src/views/dashboard/workplace")
			}
		]
	},

	{
		path: "/form",
		name: "form",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "edit-square",
			title: "表单"
		},
		component: Layout,
		redirect: "/form/basic",
		children: [
			{
				path: "/form/basic",
				name: "form-basic",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "基础表单"
				},
				component: () => import("src/views/form/basic")
			},
			{
				path: "/form/steps",
				name: "form-steps",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "分步表单"
				},
				component: () => import("src/views/form/steps")
			}
		]
	},

	{
		path: "/list",
		name: "list",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "table",
			title: "列表"
		},
		component: Layout,
		redirect: "/list/standard",
		children: [
			{
				path: "/list/standard",
				name: "list-standard",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "标准列表"
				},
				component: () => import("src/views/list/standard")
			},
			{
				path: "/list/card",
				name: "list-card",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "卡片列表"
				},
				component: () => import("src/views/list/card")
			},
			{
				path: "/list/table",
				name: "list-table",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "查询表格"
				},
				component: () => import("src/views/list/table")
			},
			{
				path: "/list/search",
				name: "list-search",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "搜索列表"
				},
				component: () => import("src/views/list/search"),
				redirect: "/list/search/articles",
				children: [
					{
						path: "/list/search/articles",
						name: "list-search-articles",
						meta: {
							addToMenu: true,
							addToBreadcrumb: true,
							title: "文章列表"
						},
						component: () => import("src/views/list/search/articles")
					},
					{
						path: "/list/search/projects",
						name: "list-search-projects",
						meta: {
							addToMenu: true,
							addToBreadcrumb: true,
							title: "项目列表"
						},
						component: () => import("src/views/list/search/projects")
					},
					{
						path: "/list/search/applications",
						name: "list-search-applications",
						meta: {
							addToMenu: true,
							addToBreadcrumb: true,
							title: "应用列表"
						},
						component: () => import("src/views/list/search/applications")
					}
				]
			}
		]
	},

	{
		path: "/details",
		name: "details",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "profile",
			title: "详情页面"
		},
		component: Layout,
		redirect: "/details/basic",
		children: [
			{
				path: "/details/basic",
				name: "details-basic",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "基础详情页面"
				},
				component: () => import("src/views/details/basic")
			},
			{
				path: "/details/advanced",
				name: "details-advanced",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "高级详情页面"
				},
				component: () => import("src/views/details/advanced")
			}
		]
	},

	{
		path: "/user",
		name: "user",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "user",
			title: "个人页面"
		},
		component: Layout,
		redirect: "/user/profile",
		children: [
			{
				path: "/user/profile",
				name: "user-profile",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "个人中心"
				},
				component: () => import("src/views/user/profile")
			},
			{
				path: "/user/settings",
				name: "user-settings",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "个人设置"
				},
				component: () => import("src/views/user/settings")
			}
		]
	},

	{
		path: "/result",
		name: "result",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "info",
			title: "结果页面"
		},
		component: Layout,
		redirect: "/result/info",
		children: [
			{
				path: "/result/info",
				name: "result-info",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "消息页面"
				},
				component: () => import("src/views/result/info")
			},
			{
				path: "/result/warning",
				name: "result-warning",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "警告页面"
				},
				component: () => import("src/views/result/warning")
			},
			{
				path: "/result/success",
				name: "result-success",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "成功页面"
				},
				component: () => import("src/views/result/success")
			},
			{
				path: "/result/fail",
				name: "result-fail",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "失败页面"
				},
				component: () => import("src/views/result/fail")
			}
		]
	},

	{
		path: "/exception",
		name: "exception",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "alert",
			title: "异常页面"
		},
		component: Layout,
		redirect: "/exception/403",
		children: [
			{
				path: "/exception/403",
				name: "exception-403",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "403"
				},
				component: () => import("src/views/exception/403")
			},
			{
				path: "/exception/404",
				name: "exception-404",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "404"
				},
				component: () => import("src/views/exception/404")
			},
			{
				path: "/exception/500",
				name: "exception-500",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "500"
				},
				component: () => import("src/views/exception/500")
			},
			{
				path: "/exception/comingsoon",
				name: "exception-comingsoon",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "敬请期待"
				},
				component: () => import("src/views/exception/comingsoon")
			}
		]
	},

	{
		path: "/business",
		name: "business",
		meta: {
			addToMenu: true,
			addToBreadcrumb: true,
			icon: "stack",
			title: "业务模板"
		},
		component: Layout,
		redirect: "/business/recharge",
		children: [
			{
				path: "/business/recharge",
				name: "business-recharge",
				meta: {
					addToMenu: true,
					addToBreadcrumb: true,
					title: "充值分析"
				},
				component: () => import("src/views/business/recharge")
			}
		]
	}
];