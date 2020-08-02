import config from "src/config";

// 谓词函数，用于检测变量类型
/* ---------------------------------------------------------------------------------------------------- */

const funProto = Function.prototype;
const objProto = Object.prototype;

const getPrototypeOf = Object.getPrototypeOf;

const objToString = objProto.toString;
const hasOwnProperty = objProto.hasOwnProperty;
const funToString = funProto.toString;

const restArguments = function(fn, startIndex) {
	startIndex = startIndex == null ? fn.length - 1 : +startIndex;

	return function() {
		let index = 0;
		let length = Math.max(arguments.length - startIndex, 0);
		let rest = Array(length);

		for (; index < length; index++) {
			rest[index] = arguments[index + startIndex];
		}

		switch (startIndex) {
			case 0:
				return fn.call(this, rest);
			case 1:
				return fn.call(this, arguments[0], rest);
			case 2:
				return fn.call(this, arguments[0], arguments[1], rest);
		}

		let args = Array(startIndex + 1);

		for (index = 0; index < startIndex; index++) {
			args[index] = arguments[index];
		}

		args[startIndex] = rest;

		return fn.apply(this, args);
	};
};

if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
		return window.setTimeout(callback, 1000 / 60);
	};
}

// 检查给定的值是否是 dom 元素
export function isElement(value) {
	return !!(value && value.nodeType === 1);
};

// 检查给定的值是否是 null
export function isNull(value) {
	return value === null;
};

// 检查给定的值是否是 undefined
export function isUndefined(value) {
	return value === void 0;
};

// 检查给定的值是否是 NaN，这和原生的 isNaN 函数不一样，如果变量是 undefined，原生的 isNaN 函数也会返回 true
export function isNaN(value) {
	return window.isNaN(value) && value !== value;
};

// 检查给定的值是否是数值
export function isNumber(value) {
	return objToString.call(value) === "[object Number]" && !isNaN(value);
};

// 检查给定的值是否是字符串
export function isString(value) {
	return objToString.call(value) === "[object String]";
};

// 检查给定的值是否是布尔值
export function isBoolean(value) {
	return value === true || value === false || objToString.call(value) === "[object Boolean]";
};

// 检查给定的值是否是正则表达式
export function isRegExp(value) {
	return objToString.call(value) === "[object RegExp]";
};

// 检查给定的值是否是日期对象
export function isDate(value) {
	return objToString.call(value) === "[object Date]";
};

// 检查给定的值是否是函数
export function isFunction(value) {
	return objToString.call(value) === "[object Function]" || typeof value === "function";
};

// 检查给定的值是否是数组
export function isArray(value) {
	return objToString.call(value) === "[object Array]";
};

// 检查给定的值是否是对象
export function isObject(value) {
	return !!value && typeof value === "object";
};

// 检查给定的值是否是纯对象，纯对象是指通过 {} 或 new Object() 声明的对象
export function isPlainObject(value) {
	if (!value || objToString.call(value) !== "[object Object]") {
		return false;
	}

	var prototype = getPrototypeOf(value);

	if (prototype === null) {
		return true;
	}

	var constructor = hasOwnProperty.call(prototype, "constructor") && prototype.constructor;

	return typeof constructor === "function" && funToString.call(constructor) === funToString.call(Object);
};

// 通用方法
/* ---------------------------------------------------------------------------------------------------- */

// 创建全局唯一标识符
export const guid = () => {
	let result = [];

	for (let index = 1; index <= 32; index++) {
		let n = Math.floor(Math.random() * 16.0).toString(16);

		result.push(n);

		if ((index == 8) || (index == 12) || (index == 16) || (index == 20)) {
			result.push("-");
		}
	}

	return result.join("");
};

// 默认的迭代函数
export const identity = value => value;

// 延时
export const delay = restArguments((callback, wait, args) => setTimeout(() => callback.apply(null, args), wait));

// 函数节流
export const throttle = (fn, wait, options = {}) => {
	let timeout;
	let context;
	let args;
	let result;
	let previous = 0;

	let later = function() {
		previous = options.leading === false ? 0 : new Date().getTime();
		timeout = null;
		result = fn.apply(context, args);

		if (!timeout) {
			context = args = null;
		}
	};

	let throttled = function() {
		let current = new Date().getTime();

		if (!previous && options.leading === false) {
			previous = current;
		}

		let remaining = wait - (current - previous);

		context = this;
		args = arguments;

		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}

			previous = current;
			result = fn.apply(context, args);

			if (!timeout) {
				context = args = null;
			}
		}
		else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}

		return result;
	};

	throttled.cancel = function() {
		clearTimeout(timeout);
		previous = 0;
		timeout = context = args = null;
	};

	return throttled;
};

// 函数防抖
export const debounce = (fn, wait, immediate) => {
	let timeout;
	let result;

	let later = function(context, args) {
		timeout = null;

		if (args) {
			result = fn.apply(context, args);
		}
	};

	let debounced = restArguments(function(args) {
		if (timeout) {
			clearTimeout(timeout);
		}

		if (immediate) {
			let callNow = !timeout;

			timeout = setTimeout(later, wait);

			if (callNow) {
				result = fn.apply(this, args);
			}
		}
		else {
			timeout = delay(later, wait, this, args);
		}

		return result;
	});

	debounced.cancel = function() {
		clearTimeout(timeout);
		timeout = null;
	};

	return debounced;
};

// 数组或对象克隆
export const clone = object => {
	if (!isArray(object) && !isPlainObject(object)) {
		return object;
	}

	let copy = isArray(object) ? [] : {};

	for (let key in object) {
		if (hasOwnProperty.call(object, key)) {
			let value = object[key];

			copy[key] = clone(value);
		}
	}

	return copy;
};

// 扁平化处理嵌套结构的列表数据
// @param {Array} list 数据列表
// @param {String} key 数据条目的子数据所对应的 key 键名称
// @param {Boolean} keep 扁平化处理时是否保留父级数据条目
export const flatten = (list, key, keep = false) => {
	let result = [];

	list.forEach(item => {
		let children = item[key];

		if (children) {
			if (keep) {
				result.push(item);
			}

			result.push.apply(result, flatten(children, key, keep));
		}
		else {
			result.push(item);
		}
	});

	return result;
};

// 将日期字符串、时间戳等转换为日期对象
export const dateparser = (...rest) => {
	let date;

	if (rest.length == 0) {
		date = new Date();
	}
	else if (rest.length == 1) {
		let value = rest[0];

		if (isDate(value)) {
			date = value;
		}
		else if (isString(value)) {
			date = new Date(value.replace(/-/g, "/"));
		}
		else if (isNumber(value)) {
			date = new Date(parseInt(value, 10));
		}
		else {
			date = new Date(value);
		}
	}
	else if (rest.length >= 3) {
		let [year, month, day, hour = 0, minute = 0, second = 0] = rest;

		date = new Date(year, month - 1, day, hour, minute, second);
	}

	return date;
};

// 将日期对象转换为指定格式
export const dateformatter = (date, format) => {
	date = dateparser(date);

	let settings = {
		"M+": date.getMonth() + 1,
		"d+": date.getDate(),
		"h+": date.getHours() == 12 ? 12 : date.getHours() % 12,
		"H+": date.getHours(),
		"m+": date.getMinutes(),
		"s+": date.getSeconds(),
		"S": date.getMilliseconds(),
		"q+": Math.floor((date.getMonth() + 3) / 3)
	};
	let week = {
		"0": "\u65e5",
		"1": "\u4e00",
		"2": "\u4e8c",
		"3": "\u4e09",
		"4": "\u56db",
		"5": "\u4e94",
		"6": "\u516d" 
	};

	if(/(y+)/.test(format)){
		format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	if(/(E+)/.test(format)){
		format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]);
	}

	for(let key in settings){
		if(new RegExp("(" + key + ")").test(format)){
			format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (settings[key]) : (("00" + settings[key]).substr(("" + settings[key]).length)));
		}
	}

	return format;
};

// 将指定文本内容复制到剪贴板
export const clipboard = text => {
	return new Promise((resolve, reject) => {
		// 创建隐藏的 Textarea 标签，并将文本放入其中
		let textarea = document.createElement("textarea");

		textarea.style.position = "absolute";
		textarea.style.top = "0";
		textarea.style.left = "0";
		textarea.style.border = "none";
		textarea.style.margin = "0";
		textarea.style.padding = "0";
		textarea.style.opacity = "0";
		textarea.value = text;

		document.body.appendChild(textarea);

		// 复制 Textarea 标签的文本
		textarea.select();
		document.execCommand("copy");

		// 移除 Textarea 标签
		document.body.removeChild(textarea);

		resolve();
	});
};

// 获取元素距离页面顶部的距离
export const getElementRectTop = element => {
	let top = element.offsetTop;

	while (element = element.offsetParent) {
		top += element.offsetTop;
	}

	return top;
};

// 获取浏览器滚动高度
export const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

// 从一个位置平滑滚动到另一个位置
// @param {Window/HTMLElement} element 滚动容器
// @param {Number} from 滚动的起始位置
// @param {Number} to 滚动的目标位置
// @param {Number} duration 滚动动画时长，单位毫秒
// @param {Function} callback 滚动完成的回调函数
export const scrollTo = (element, from = 0, to, duration = 500, callback) => {
	const difference = Math.abs(from - to);
	const step = Math.ceil(difference / duration * 50);
	const scroll = (start, end, step) => {
		if (start === end) {
			return isFunction(callback) && callback();
		}

		let distance = (start + step > end) ? end : start + step;

		if (start > end) {
			distance = (start - step < end) ? end : start - step;
		}

		if (element === window) {
			window.scrollTo(distance, distance);
		}
		else {
			element.scrollTop = distance;
		}

		window.requestAnimationFrame(() => scroll(distance, end, step));
	}

	scroll(from, to, step);
};

// 从当前滚动位置平滑滚动到页面顶部
// @param {Number} duration 滚动动画时长，单位毫秒
// @param {Function} callback 滚动完成的回调函数
export const scrollToTop = (duration, callback) => {
	let from = getScrollTop();
	let to = 0;

	scrollTo(window, from, to, duration, callback);
};

// 从当前滚动位置平滑滚动到指定元素
// @param {HTMLElement} element 元素
// @param {Number} duration 滚动动画时长，单位毫秒
// @param {Function} callback 滚动完成的回调函数
export const scrollToElement = (element, duration, callback) => {
	if (!element) {
		return;
	}

	let from = getScrollTop();
	let to = getElementRectTop(element);

	scrollTo(window, from, to, duration, callback);
};

// 手动触发 window 的 reize 事件
// 目的是为了在收缩左侧菜单栏时，内容板块的图表宽度可能不会自动适应父容器的宽度变化
export const dispatchResize = () => window.dispatchEvent(new Event("resize"));

// 获取默认语言
export const getLanguage = () => localStorage.getItem("language") || window.navigator.language || "zh-CN";

// 路由导航完成后根据当前路由对象的 meta.title 属性设置文档标题。若无 meta.title 属性，则设置成默认值
export const setPageTitle = route => {
	let title;

	if (route.meta && route.meta.title) {
		title = route.meta.title + " - " + config.title;
	}
	else {
		title = config.title;
	}

	window.document.title = title;
};

// 用于获取经过阉割后的路由对象，只提取需要的属性
// @param {Object} 路由对象
export const getPureRoute = route => {
	let target = {
		path: route.path,
		name: route.name,
		meta: {
			...route.meta
		}
	};

	if (route.children) {
		target.children = route.children.map(getPureRoute);
	}

	return target;
};

// 根据 path 属性查找路由列表中的指定路由对象
// @param {Array} 路由列表
// @param {String} 路由对象的 path 或 name 属性
export const getRouteByPath = (routes, path) => {
	let i = 0;
	let length = routes.length;
	let target = {};

	while (i < length) {
		let route = routes[i];

		if (route.path === path || route.name === path) {
			target = getPureRoute(route);
			break;
		}
		else if (route.children && route.children.length > 0) {
			route = getRouteByPath(route.children, path);

			if (route.path) {
				target = getPureRoute(route);
				break;
			}
		}

		i++;
	}

	return target;
};

// 通过路由配置和用户权限列表解析菜单数据
// @param {Array} 路由配置
// @param {Array} 用户权限列表
export function getMenuFromRoutes(routes, permissions) {
	let result = [];

	for (let i = 0; i < routes.length; i++) {
		const route = routes[i];
		const meta = route.meta;

		if (meta && meta.addToMenu === false) {
			continue;
		}

		if (meta && meta.authority && !utils.checkAuthority(meta.authority, permissions)) {
			continue;
		}

		let target = getPureRoute(route);

		if (route.children && route.children.length) {
			const children = getMenuFromRoutes(route.children, permissions);

			if (children.length) {
				target.children = children;
				result.push(target);
			}
		}
		else {
			result.push(target);
		}
	}

	return result;
};

// 根据当前路由对象的 matched 属性获取面包屑数据
// @param {Object} route 当前路由对象
// @param {Object} rootRoute 根路由对象
export const getBreadcrumbByRoute = (route, rootRoute) => {
	const matched = route.matched;

	if (matched.some(route => route.path === rootRoute.path)) {
		return [rootRoute];
	}

	const result = matched.filter(route => route.meta && route.meta.addToBreadcrumb).map(getPureRoute);

	return [rootRoute, ...result];
};

// 判断当前访问路由是否匹配白名单列表
// @param {Object} route 当前路由对象
export const compareWhiteList = route => config.whiteList.indexOf(route.path) > -1 || config.whiteList.indexOf(route.name) > -1;

// 判断用户操作/访问权限
// @param {String|Array} authority 授权标识符或标识符列表
export const checkAuthority = (authority, permissions) => {
	const predicate = permission => {
		return isString(authority) ? authority === permission : authority.includes(permission);
	};

	return permissions.some(predicate);
};

// 以默认导出的形式导出所有谓词函数
/* ---------------------------------------------------------------------------------------------------- */
export default {
	isElement,
	isNull,
	isUndefined,
	isNaN,
	isNumber,
	isString,
	isBoolean,
	isRegExp,
	isDate,
	isFunction,
	isArray,
	isObject,
	isPlainObject,

	guid,
	identity,
	delay,
	throttle,
	debounce,
	clone,
	flatten,
	dateparser,
	dateformatter,

	clipboard,
	getElementRectTop,
	getScrollTop,
	scrollTo,
	scrollToTop,
	scrollToElement,
	dispatchResize,

	getLanguage,
	setPageTitle,

	getPureRoute,
	getRouteByPath,
	getMenuFromRoutes,
	getBreadcrumbByRoute,

	compareWhiteList,
	checkAuthority
};