const placeholder = "--";
const objToString = Object.prototype.toString;
const isString = value => objToString.call(value) === "[object String]";
const isEmptyString = value => String(value).trim() === "";
const isFunction = value => objToString.call(value) === "[object Function]" || typeof value === "function";

export default (value, predicate) => {
  if (value === undefined || value === null) {
    return placeholder;
  }

  if (isString(value) && isEmptyString(value)) {
    return placeholder;
  }

  if (isFunction(predicate) && predicate(value)) {
    return placeholder;
  }

  return value;
};