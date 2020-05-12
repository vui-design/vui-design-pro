// 获取 cookie
export function get(key) {
	let cookieKey = encodeURIComponent(key) + "=";
	let cookieStart = document.cookie.indexOf(cookieKey);
	let cookieValue = null;

	if(cookieStart > -1){
		let cookieEnd = document.cookie.indexOf(";", cookieStart);

		if(cookieEnd === -1){
			cookieEnd = document.cookie.length;
		}

		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieKey.length, cookieEnd));
	}

	return cookieValue;
};

// 设置 cookie
export function set(key, value, attributes){
	let cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value);

	if (attributes && typeof attributes.expires === "number") {
		attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
		attributes.expires = attributes.expires.toUTCString();
	}

	let stringifiedAttributes = "";

	for (let attributeName in attributes) {
		if (!attributes[attributeName]) {
			continue
		}

		stringifiedAttributes += "; " + attributeName;

		if (attributes[attributeName] === true) {
			continue
		}

		stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
	}

	document.cookie = cookieText + stringifiedAttributes;
};

// 删除 cookie
export function remove(key, attributes){
	set(key, "", {
		...attributes,
		expires: -1
	});
};

export default {
	get,
	set,
	remove
};