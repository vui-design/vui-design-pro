const numeric = /^(-?)(\d*)(\.(\d+))?$/;
const nonnegativeinteger = /^\d+$/;
const thousandth = /\B(?=(\d{3})+(?!\d))/g;

export default (value, precision) => {
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