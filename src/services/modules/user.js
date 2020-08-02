import axios from "src/utils/axios";

export const login = payload => {
	return axios.post("/user/login", payload);
};

export const getDetails = () => {
	return axios.get("/user/getDetails");
};

export const getPermissions = () => {
	return axios.get("/user/getPermissions");
};

export const logout = () => {
	return axios.post("/user/logout");
};

export default {
	login,
	getDetails,
	getPermissions,
	logout
};