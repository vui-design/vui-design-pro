const placeholder = "--";
const funProto = Function.prototype;
const objProto = Object.prototype;
const getPrototypeOf = Object.getPrototypeOf;
const objToString = objProto.toString;
const hasOwnProperty = objProto.hasOwnProperty;
const funToString = funProto.toString;
const isNaN= value => window.isNaN(value) && value !== value;
const isString = value => objToString.call(value) === "[object String]";
const isNumber = value => objToString.call(value) === "[object Number]" && !isNaN(value);
const isArray = value => objToString.call(value) === "[object Array]";
const isPlainObject = value => {
  if (!value || objToString.call(value) !== "[object Object]") {
    return false;
  }

  const prototype = getPrototypeOf(value);

  if (prototype === null) {
    return true;
  }

  const constructor = hasOwnProperty.call(prototype, "constructor") && prototype.constructor;

  return typeof constructor === "function" && funToString.call(constructor) === funToString.call(Object);
};

export default (value, property) => {
  if (!isArray(value)) {
    return placeholder;
  }

  if (value.length === 0) {
    return placeholder;
  }

  let array = [];

  value.forEach(item => {
    if (isString(item) || isNumber(item)) {
      array.push(item);
    }
    else if (isPlainObject(item)) {
      array.push(item[property]);
    }
  });

  return array.join(", ");
};