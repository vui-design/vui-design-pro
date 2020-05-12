const numeric = /^(-?)(\d*)(\.(\d+))?$/;
const nonnegativeInteger = /^\d+$/;
const padEnd = (string, length, chars) => {
	length = length >> 0;
	chars = String(typeof chars !== "undefined" ? chars : " ");

	if (string.length > length) {
		return String(string);
	}
	else {
		length = length - string.length;

		if (length > chars.length) {
			chars += chars.repeat(length / chars.length);
		}

		return String(string) + chars.slice(0, length);
	}
};

export default (value, precision) => {
	let string = String(value);
	let matched = string.match(numeric);

	if (!matched) {
		return value;
	}
	else {
		let negative = matched[1];
		let int = matched[2] || "0";
		let decimal = matched[4] || "";

		int = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		if (nonnegativeInteger.test(precision)) {
			decimal = padEnd(decimal, precision, "0").slice(0, precision);
		}

		if (decimal) {
			decimal = `.${decimal}`;
		}

		return negative + int + decimal;
	}
};