import Vue from "vue";
import VueRouter from "vue-router";
import authorization from "src/utils/authorization";
import { setPageTitle, isMatchedWhiteList, checkAuthority } from "src/utils";
import store from "src/store";
import routes from "./routes";

Vue.use(VueRouter);

const router =  new VueRouter({
	mode: "history",
	scrollBehavior: () => ({ y: 0 }),
	routes
});

const runNextWithRoles = (to, roles, next) => {
	if (checkAuthority(to, roles)) {
		next();
	}
	else {
		next({
			path: "/exception/403",
			replace: true
		}); 
	}
};

router.beforeEach((to, from, next) => {
	next();
	/*
	// 获取登录 token 数据
	const token = authorization.getToken();

	// 已登陆
	if (token) {
		// 如果当前路由是登录页面，则重定向到首页
		if (to.path === "/login") {
			next({
				path: "/",
				replace: true
			});
		}
		// 非登录页面根据用户角色进行跳转
		else {
			const roles = store.state.user.roles;

			if (roles && roles.length) {
				runNextWithRoles(to, roles, next);
			}
			else {
				store.dispatch("user/getUserInfo").then(data => {
					runNextWithRoles(to, data.roles, next);
				}).catch(() => {
					store.dispatch("user/clearToken").then(() => {
						next({
							path: "/login",
							replace: true
						});
					});
				})
			}
		}
	}
	// 未登陆
	else {
		// 如果当前路由存在于访问白名单中，直接进入
		if (isMatchedWhiteList(to)) {
			next();
		}
		// 其它页面重定向到登录页面
		else {
			next({
				path: "/login",
				replace: true
			});
		}
	}
	*/
});

router.afterEach((to, from) => {
	// 更新文档标题
	setPageTitle(to);

	// 更新 store 中的面包屑数据
	store.dispatch("app/setBreadcrumb", to);
});

export default router;