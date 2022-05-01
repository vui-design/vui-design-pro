import html2canvas from "html2canvas";
import config from "src/config";
import is from "./is";

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

// 通用工具方法
/* ---------------------------------------------------------------------------------------------------- */

// 创建全局唯一标识符
export const guid = () => {
  let parts = [];

  for (let index = 1; index <= 32; index++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);

    parts.push(n);

    if ((index == 8) || (index == 12) || (index == 16) || (index == 20)) {
      parts.push("-");
    }
  }

  return parts.join("");
};

// 默认的回调函数
export const noop = () => {};

// 默认的迭代函数
export const identity = value => value;

// 实现 sleep 函数，可用于延时处理
// 或让线程休眠，等到指定时间在重新唤起（需要配合 async/await 函数使用）
// 单位毫秒
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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
const delay = restArguments((callback, wait, args) => setTimeout(() => callback.apply(null, args), wait));

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

// 数组或对象克隆（深拷贝）
export const clone = object => {
  if (!is.array(object) && !is.json(object)) {
    return object;
  }

  let copy = is.array(object) ? [] : {};

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
// @param {String} property 数据条目的子数据所对应的键值名称，可选，默认为 children 字段
// @param {Boolean} keep 扁平化处理时是否保留父级数据条目，可选，默认为 false 不保留
// @param {Function} predicate 谓词函数，用于判断是否展开子数据；可选
export const flatten = (list, property = "children", keep = false, predicate) => {
  if (is.boolean(property)) {
    predicate = key;
    keep = property;
    property = "children";
  }

  let array = [];

  list.forEach(item => {
    let children = item[property];

    if (children) {
      if (keep) {
        array.push(item);
      }

      if (is.function(predicate) && !predicate(item)) {
        return;
      }

      array.push.apply(array, flatten(children, property, keep, predicate));
    }
    else {
      array.push(item);
    }
  });

  return array;
};

// 将数值千分位化，并保留指定小数位
const numeric = /^(-?)(\d*)(\.(\d+))?$/;
const nonnegativeinteger = /^\d+$/;
const thousandth = /\B(?=(\d{3})+(?!\d))/g;

export const numerical = (value, precision) => {
  let string = String(value);
  let matched = string.match(numeric);

  if (!matched) {
    return value ? value : "N/A";
  }
  else {
    if (nonnegativeinteger.test(precision)) {
      value = Number(value).toFixed(precision);
      string = String(value);
      matched = string.match(numeric);
    }

    let negative = matched[1];
    let int = matched[2] || "0";
    let decimal = matched[4] || "";

    int = int.replace(thousandth, ",");

    if (decimal) {
      decimal = `.${decimal}`;
    }

    return negative + int + decimal;
  }
};

// 获取 dom 元素的指定 style 样式
export const getStyle = (element, property) => {
  if (!element || !property) {
    return null;
  }

  if (property === "float") {
    property = "cssFloat";
  }

  try {
    const computed = document.defaultView.getComputedStyle(element, "");

    return element.style[property] || computed ? computed[property] : null;
  }
  catch(e) {
    return element.style[property];
  }
};

// 根据字体设置计算文本宽度，可用于动态表格列配置的列宽设置
export const getTextWidth = function(text, font) {
  if (!font) {
    font = getStyle(document.body, "font");
  }

  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");

  context.font = font;

  const measure = context.measureText(text);

  return measure.width;
};

// 获取 dom 元素距离页面顶部的距离
export const getElementRectTop = element => {
  let top = element.offsetTop;

  while (element = element.offsetParent) {
    top += element.offsetTop;
  }

  return top;
};

// 获取浏览器当前滚动高度
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
      return is.function(callback) && callback();
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
  const from = getScrollTop();
  const to = 0;

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

  const from = getScrollTop();
  const to = getElementRectTop(element);

  scrollTo(window, from, to, duration, callback);
};

// 手动触发 window 的 reize 事件
// 目的是为了在收缩左侧菜单栏时，内容板块的图表宽度可能不会自动适应父容器的宽度变化
export const dispatchResize = () => window.dispatchEvent(new Event("resize"));

// 将指定文本内容复制到剪贴板
export const clipboard = text => {
  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement("textarea");

      textarea.style.position = "absolute";
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.border = "none";
      textarea.style.margin = "0";
      textarea.style.padding = "0";
      textarea.style.opacity = "0";
      textarea.value = text;

      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      resolve();
    }
    catch(e) {
      reject(e);
    }
  });
};

// 将指定 dom 元素的内容保存为图片，可用于实现页面截图
// @param {HTMLElement} element 内容容器
// @param {Function} ignoreElements 用于忽略指定元素
// @param {String} filename 保存的文件名
export const html2image = options => {
  const { width, height } = options.element.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement("canvas");

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  const context = canvas.getContext("2d");

  context.scale(dpr, dpr);

  html2canvas(options.element, {
    useCORS: true,
    ignoreElements: options.ignoreElements,
    canvas
  }).then(canvas => {
    const image = canvas.toDataURL("image/jpeg", 1.0);
    const link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    const event = document.createEvent("MouseEvents");

    link.href = image;
    link.download = options.filename;

    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent(event);
  }).catch(e => {
    console.log(e);
  });
};

// 利用 FileReader 将本地图片转换为 URL 格式的字符串（base64 编码）
// @param {File} image 图片文件
// @param {Function} callback 转换成功的回调函数
export const imageToDataURL = image => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.addEventListener("load", e => resolve(reader.result));
      reader.readAsDataURL(image);
    }
    catch(e) {
      reject(e);
    }
  });
};

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
    return is.string(authority) ? authority === permission : authority.includes(permission);
  };

  return permissions.some(predicate);
};

// 以默认导出的形式导出所有谓词函数
/* ---------------------------------------------------------------------------------------------------- */
export default {
  guid,
  noop,
  identity,
  sleep,
  throttle,
  debounce,
  clone,
  flatten,
  numerical,
  getStyle,
  getTextWidth,
  getElementRectTop,
  getScrollTop,
  scrollTo,
  scrollToTop,
  scrollToElement,
  dispatchResize,
  clipboard,
  html2image,
  imageToDataURL,
  getLanguage,
  setPageTitle,
  getPureRoute,
  getRouteByPath,
  getMenuFromRoutes,
  getBreadcrumbByRoute,
  compareWhiteList,
  checkAuthority
};