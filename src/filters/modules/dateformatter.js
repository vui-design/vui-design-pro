const placeholder = "--";
const getType = value => Object.prototype.toString.call(value);
const isString = value => getType(value) === "[object String]";
const isEmptyString = value => String(value).trim() === "";
const isNotNumber = value => window.isNaN(value) && value !== value;
const isNumber = value => getType(value) === "[object Number]" && !isNotNumber(value);
const isDate = value => getType(value) === "[object Date]";
const isValidDate = value => isDate(value) && !isNotNumber(value.getTime());
const weekdays = {
  "0": "\u65e5",
  "1": "\u4e00",
  "2": "\u4e8c",
  "3": "\u4e09",
  "4": "\u56db",
  "5": "\u4e94",
  "6": "\u516d" 
};

const parse = function() {
  if (arguments.length == 0) {
    return;
  }

  let date;

  if (arguments.length == 1) {
    const value = arguments[0];

    if (isDate(value)) {
      date = value;
    }
    else if (isString(value)) {
      date = new Date(value.replace(/-/g, "/"));
    }
    else if (isNumber(value)) {
      date = new Date(value);
    }
  }
  else if (arguments.length >= 3) {
    const [year, month, day, hour = 0, minute = 0, second = 0] = arguments;

    date = new Date(year, month - 1, day, hour, minute, second);
  }

  return date;
};

export default (value, pattern) => {
  if (value === undefined || value === null) {
    return placeholder;
  }

  if (isString(value) && isEmptyString(value)) {
    return placeholder;
  }

  const date = parse(value);

  if (!date || !isValidDate(date)) {
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

  for (var key in settings) {
    if (new RegExp("(" + key + ")").test(pattern)) {
      pattern = pattern.replace(RegExp.$1, (RegExp.$1.length == 1) ? (settings[key]) : (("00" + settings[key]).substr(("" + settings[key]).length)));
    }
  }

  return pattern;
};