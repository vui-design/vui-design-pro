const env = process.env.NODE_ENV;

/**
* @type {string}
* @description 文档标题
*/
export const title = "Vui Design Pro";

/**
* @type {boolean} true | false
* @description 是否使用国际化，默认为 false；如果不使用，则需要在路由中给需要在菜单中展示的路由设置 meta.title，用来在菜单中显示文字
*/
export const useI18n = true;

/**
* @type {string}
* @description 默认的根路由 path 或 name 属性，用来在面包屑中显示一级导航
*/
export const rootRoute = "/";

/**
* @type {array}
* @description 访问白名单，即无需登录即可访问的路由 path 或 name 列表
*/
export const whiteList = ["/login"];

/**
* @type {object}
* @description 接口请求基础路径，dev 开发环境，prod 生产环境
*/
const mapApiPaths = {
	development: "https://www.easy-mock.com/mock/5dd110849a4da91d9ad9446c/vui",
	test: "https://www.test.com/",
	production: "https://www.production.com/"
};

export const baseURL = mapApiPaths[env];

/**
* @type {number}
* @description token 在 cookie 中存储的天数，默认 1 天
*/
export const cookieExpires = 1;

/**
* @description Export all configurations by default
*/
export default {
	title,
	useI18n,
	rootRoute,
	whiteList,
	baseURL,
	cookieExpires
};