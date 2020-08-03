const placeholder = "--";
const isString = value => Object.prototype.toString.call(value) === "[object String]";
const isEmptyString = value => String(value).trim() === "";

export default value => {
	if (value == undefined) {
		return placeholder;
	}

	if (isString(value) && isEmptyString(value)) {
		return placeholder;
	}

	return value;
};