import Layout from "src/components/layout";

/**
* Vui Design Pro 中，路由的 meta 属性除了原生参数外可配置的参数：
*  addToMenu: 在菜单栏中是否显示当前路由，默认为 true
*  addToBreadcrumb: 在面包屑中是否显示当前路由，默认为 true
*  icon: 显示在菜单栏、面包屑中的图标类型
*  title: 显示在菜单栏、面包屑中的文字
*  access: 当前路由的访问权限，当前路由设置的权限会影响子路由
*/
export default [
	{
		path: "/",
		name: "index",
		meta: {
			addToMenu: false,
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
			title: "登录"
		},
		component: () => import("src/views/login")
	},

	{
		path: "/dashboard",
		name: "dashboard",
		meta: {
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
					title: "分析页"
				},
				component: () => import("src/views/dashboard/analysis")
			},
			{
				path: "/dashboard/monitor",
				name: "dashboard-monitor",
				meta: {
					title: "监控页"
				},
				component: () => import("src/views/dashboard/monitor")
			},
			{
				path: "/dashboard/workplace",
				name: "dashboard-workplace",
				meta: {
					title: "工作台"
				},
				component: () => import("src/views/dashboard/workplace")
			}
		]
	},

	{
		path: "/result",
		name: "result",
		meta: {
			icon: "checkmark-circle",
			title: "结果页面"
		},
		component: Layout,
		redirect: "/result/success",
		children: [
			{
				path: "/result/info",
				name: "result-info",
				meta: {
					title: "消息页面"
				},
				component: () => import("src/views/result/info")
			},
			{
				path: "/result/warning",
				name: "result-warning",
				meta: {
					title: "警告页面"
				},
				component: () => import("src/views/result/warning")
			},
			{
				path: "/result/success",
				name: "result-success",
				meta: {
					title: "成功页面"
				},
				component: () => import("src/views/result/success")
			},
			{
				path: "/result/fail",
				name: "result-fail",
				meta: {
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
					title: "403"
				},
				component: () => import("src/views/exception/403")
			},
			{
				path: "/exception/404",
				name: "exception-404",
				meta: {
					title: "404"
				},
				component: () => import("src/views/exception/404")
			},
			{
				path: "/exception/500",
				name: "exception-500",
				meta: {
					title: "500"
				},
				component: () => import("src/views/exception/500")
			}
		]
	},

	{
		path: "/form",
		name: "form",
		meta: {
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
					title: "基础表单"
				},
				component: () => import("src/views/form/basic")
			},
			{
				path: "/form/step",
				name: "form-step",
				meta: {
					title: "分步表单"
				},
				component: () => "form-step"
			},
			{
				path: "/form/advanced",
				name: "form-advanced",
				meta: {
					title: "高级表单"
				},
				component: () => "form-advanced"
			}
		]
	},

	{
		path: "/list",
		name: "list",
		meta: {
			icon: "list-settings",
			title: "列表"
		},
		component: Layout,
		redirect: "/list/basic",
		children: [
			{
				path: "/list/basic",
				name: "list-basic",
				meta: {
					title: "标准列表"
				},
				component: () => ""
			},
			{
				path: "/list/card",
				name: "list-card",
				meta: {
					title: "卡片列表"
				},
				component: () => ""
			},
			{
				path: "/list/table",
				name: "list-table",
				meta: {
					title: "查询表格"
				},
				component: () => import("src/views/list/table")
			},
			{
				path: "/list/search",
				name: "list-search",
				meta: {
					title: "搜索列表"
				},
				component: Layout,
				redirect: "/list/search/articles",
				children: [
					{
						path: "/list/search/articles",
						name: "list-search-articles",
						meta: {
							title: "搜索列表（文章）"
						},
						component: () => ""
					},
					{
						path: "/list/search/projects",
						name: "list-search-projects",
						meta: {
							title: "搜索列表（项目）"
						},
						component: () => ""
					},
					{
						path: "/list/search/applications",
						name: "list-search-applications",
						meta: {
							title: "搜索列表（应用）"
						},
						component: () => ""
					}
				]
			}
		]
	},

	{
		path: "/profile",
		name: "profile",
		meta: {
			icon: "profile",
			title: "详情页面"
		},
		component: Layout,
		redirect: "/profile/basic-usage",
		children: [
			{
				path: "/profile/basic-usage",
				name: "profile-basic-usage",
				meta: {
					title: "基础详情页面"
				},
				component: () => ""
			},
			{
				path: "/profile/advanced",
				name: "profile-advanced",
				meta: {
					title: "高级详情页面"
				},
				component: () => ""
			}
		]
	},

	{
		path: "/account",
		name: "account",
		meta: {
			icon: "user",
			title: "个人页面"
		},
		component: Layout,
		redirect: "/account/center",
		children: [
			{
				path: "/account/center",
				name: "account-center",
				meta: {
					title: "个人中心"
				},
				component: () => ""
			},
			{
				path: "/exception/settings",
				name: "exception-settings",
				meta: {
					title: "个人设置"
				},
				component: () => ""
			}
		]
	}
];