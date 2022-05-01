import Vue from "vue";
import VueRouter from "vue-router";
import config from "src/config";
import routes from "src/routes";
import store from "src/store";
import utils from "src/libs/utils";
import authorization from "src/libs/authorization";

Vue.use(VueRouter);

const router =  new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

const runNextWithPermissions = (to, permissions, next) => {
  if (utils.checkAuthority(to.meta.authority, permissions)) {
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
      const permissions = store.state.user.permissions;

      if (permissions && permissions.length) {
        runNextWithPermissions(to, permissions, next);
      }
      else {
        store.dispatch("user/getUserInfo").then(data => {
          runNextWithPermissions(to, data.permissions, next);
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
    if (utils.compareWhiteList(to)) {
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
  // 更新网页标题
  utils.setPageTitle(to);
});

export default router;