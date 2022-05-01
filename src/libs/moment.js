import is from "./is";

// 将日期对象、日期字符串或时间戳转换为日期对象
export const parse = function() {
  let date;

  if (arguments.length == 0) {
    date = new Date();
  }
  else if (arguments.length == 1) {
    let value = arguments[0];

    if (is.string(value)) {
      date = new Date(value.replace(/-/g, "/"));
    }
    else if (is.number(value)) {
      date = new Date(parseInt(value, 10));
    }
    else {
      date = new Date(value);
    }
  }
  else if (arguments.length >= 3) {
    let [year, month, day, hour = 0, minute = 0, second = 0] = arguments;

    date = new Date(year, month - 1, day, hour, minute, second);
  }

  if (!is.date(date)) {
    throw new Error("[Vui Design Pro][moment.parse] Parameter cannot be converted to a legal Date object!");
  }

  return date;
};

// 将日期对象、日期字符串或时间戳转换为指定格式
const weekdays = {
  "0": "\u65e5",
  "1": "\u4e00",
  "2": "\u4e8c",
  "3": "\u4e09",
  "4": "\u56db",
  "5": "\u4e94",
  "6": "\u516d" 
};

export const format = function(date, pattern) {
  date = parse(date);

  if (!is.date(date)) {
    return "";
  }

  const settings = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours() == 12 ? 12 : date.getHours() % 12,
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "S": date.getMilliseconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3)
  };

  if (/(y+)/.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  if (/(E+)/.test(pattern)) {
    pattern = pattern.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + weekdays[date.getDay() + ""]);
  }

  for (let key in settings) {
    if (new RegExp("(" + key + ")").test(pattern)) {
      pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (settings[key]) : (("00" + settings[key]).substr(("" + settings[key]).length)));
    }
  }

  return pattern;
};

// 导出所有
export default {
  parse,
  format
};