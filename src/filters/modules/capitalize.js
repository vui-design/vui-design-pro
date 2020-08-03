export default value => {
	if (!value) {
		return value;
	}

	value = String(value);

	return value.charAt(0).toUpperCase() + value.slice(1);
};