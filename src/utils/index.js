import { title, whiteList } from "src/config";

/**
 * 获取元素距离页面顶部的距离
 * @param {HTMLElement} element 元素
 */
export function getElementRectTop(element) {
  let top = element.offsetTop;

  while(element = element.offsetParent) {
      top += element.offsetTop;
  }

  return top;
};

/**
 * 获取浏览器滚动高度
 */
export function getScrollTop() {
	return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * 从一个位置平滑滚动到另一个位置
 * @param {Window/HTMLElement} element 滚动容器
 * @param {Number} from 滚动的起始位置
 * @param {Number} to 滚动的目标位置
 * @param {Number} duration 滚动动画时长，单位毫秒
 * @param {Function} complete 滚动完成的回调函数
 */
export function smoothScrollTo(element, from = 0, to, duration = 500, complete) {
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
			return window.setTimeout(callback, 1000 / 60);
		};
	}

	const difference = Math.abs(from - to);
	const step = Math.ceil(difference / duration * 50);
	const scroll = (start, end, step) => {
		if (start === end) {
			return complete && complete();
		}

		let d = (start + step > end) ? end : start + step;

		if (start > end) {
			d = (start - step < end) ? end : start - step;
		}

		if (element === window) {
			window.scrollTo(d, d);
		}
		else {
			element.scrollTop = d;
		}

		window.requestAnimationFrame(() => scroll(d, end, step));
	}

	scroll(from, to, step);
};

/**
 * 路由导航完成后根据当前路由对象的 meta.title 属性设置文档标题。若无 meta.title 属性，则设置成默认值
 * @param {Object} route 当前路由列表
 */
export function setPageTitle(route) {
	let customTitle;

	if (route.meta && route.meta.title) {
		customTitle = route.meta.title + " - " + title;
	}

	window.document.title = customTitle || title;
};

/**
 * 获取默认语言
 */
export function getDefaultLanguage() {
	return localStorage.getItem("language") || window.navigator.language || "zh-CN";
};

/**
 * 判断当前访问路由是否匹配白名单列表
 * @param {Object} route 当前访问路由
 */
export function isMatchedWhiteList(route) {
	return whiteList.indexOf(route.path) > -1 || whiteList.indexOf(route.name) > -1;
};

/**
 * 根据用户角色信息判断是否允许访问某个路由
 * @param {Object} route 路由
 * @param {Array} roles 用户角色信息
 */
export function checkAuthority(route, roles) {
	let access = route.meta && route.meta.access;
	let allowed = true;

	if (access && access.length) {
		allowed = roles.some(role => access.indexOf(role) > -1);
	}

	return allowed;
};

/**
 * 用于获取路由配置中的根路由对象
 * @param {Array} routes 路由配置
 * @param {String} target 根路由的 path 或 name 属性
 */
export function getRootRouteFromRoutes(routes, target = "/") {
	let i = 0;
	let length = routes.length;
	let rootRoute = {};

	while (i < length) {
		const route = routes[i];

		if (route.children && route.children.length) {
			const child = getRootRouteFromRoutes(route.children, target);

			if (child.path) {
				return child;
			}
		}
		else if (route.path === target || route.name === target) {
			rootRoute = {
				path: route.path,
				name: route.name,
				meta: {
					...route.meta
				}
			};
		}

		i++;
	}

	return rootRoute;
};

/**
 * 通过路由配置和用户角色信息获取菜单数据
 * @param {Array} routes 路由配置
 * @param {Array} roles 用户角色信息
 */
export function getMenuFromRoutes(routes, roles) {
	let result = [];

	for (let i = 0; i < routes.length; i++) {
		const route = routes[i];

		if (!route.meta || (route.meta && route.meta.addToMenu === false)) {
			continue;
		}

		if (!checkAuthority(route, roles)) {
			continue;
		}

		let item = {
			path: route.path,
			name: route.name,
			meta: {
				...route.meta
			}
		};

		if (route.children && route.children.length) {
			const children = getMenuFromRoutes(route.children, roles);
			
			if (children.length) {
				item.children = children;
			}
		}

		result.push(item);
	}

	return result;
};

/**
 * 根据当前路由对象的 matched 属性获取面包屑数据
 * @param {Object} route 当前路由对象
 * @param {Object} rootRoute 根路由对象
 */
export function getBreadcrumbByRoute(route, rootRoute) {
	let matched = route.matched;

	if (matched.some(route => route.path === rootRoute.path || route.name === rootRoute.name)) {
		return [rootRoute];
	}

	let result = matched.filter(route => {
		return route.meta && route.meta.addToBreadcrumb !== false;
	}).map(route => {
		let item = {
			path: route.path,
			name: route.name,
			meta: {
				...route.meta
			}
		};

		return item;
	});

	return [rootRoute].concat(result);
};