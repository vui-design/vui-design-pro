import axios from "src/utils/axios";

export const login = payload => {
	return axios({
		method: "POST",
		url: "/user/login",
		data: payload
	});
};

export const logout = () => {
	return axios({
		method: "POST",
		url: "/user/logout",
	});
};

export const getUserInfo = () => {
	return axios({
		method: "GET",
		url: "/user/getUserInfo"
	});
};

export default {
	login,
	logout,
	getUserInfo
};