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
		redirect: "/login"
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
	}
];