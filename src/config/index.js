/**
* @type {string}
* @description 当前环境
* @description development 开发环境
* @description test 测试环境
* @description release 预发布环境
* @description production 生产环境
*/
export const appMode = process.env.VUE_APP_MODE;

/**
* @type {string}
* @description 系统名称，用于在浏览器 Tab 标签中显示网页标题
*/
export const title = "Vui Design Pro";

/**
* @type {boolean} true | false
* @description 是否使用国际化，默认为 false
*/
export const useI18n = false;

/**
* @type {string}
* @description 默认的根路由 path 或 name 属性，用于在面包屑中显示一级导航
*/
export const rootRoute = "/";

/**
* @type {array}
* @description 访问白名单，即无需登录即可访问的路由 path 或 name 列表
*/
export const whiteList = ["/login"];

/**
* @type {object}
* @description 异步请求的基础路径
*/
const apiPaths = {
  development: "//localhost/api",
  test: "//www.fastmock.site/mock/4dac551bb65d2c54d3b7c6eeabb0f2da/api",
  release: "//www.fastmock.site/mock/4dac551bb65d2c54d3b7c6eeabb0f2da/api",
  production: "//www.fastmock.site/mock/4dac551bb65d2c54d3b7c6eeabb0f2da/api"
};

export const baseURL = apiPaths[appMode];

/**
* @type {number}
* @description token 在 cookie 中存储的天数，默认 1 天
*/
export const cookieExpires = 1;

/**
* @type {array}
* @description 图表配色
*/
export const colors = ["#2d8cf0", "#faad14", "#ed5565", "#52c41a", "#b381f1", "#60baf7", "#e6da46", "#f98a9c", "#84e0e5", "#dba7df"];

/**
* @description Export all configurations by default
*/
export default {
  appMode,
  title,
  useI18n,
  rootRoute,
  whiteList,
  baseURL,
  cookieExpires,
  colors
};