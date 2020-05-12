import VuiDesign from "vui-design";
import axios from "axios";
import { baseURL } from "src/config";
import { getToken } from "src/utils/authorization";

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;

axios.interceptors.request.use(config => {
	if (config.url === "/user/login") {

	}
	else if (getToken()) {
		config.headers["Authorization"] = getToken();
	}

	return config;
}, e => {
	console.log(e);

	VuiDesign.Message.error(e.message);

	return Promise.reject(e);
});

axios.interceptors.response.use(response => {
	const data = response.data;

	if (data.code !== 0) {
		VuiDesign.Message.error(data.message);

		return Promise.reject(new Error(data.message));
	}
	else {
		return data;
	}
}, e => {
	console.log(e);

	VuiDesign.Message.error(e.message);

	return Promise.reject(e);
});

export default axios;