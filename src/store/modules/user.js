import services from "src/services";
import authorization from "src/libs/authorization";

export default {
	namespaced: true,
	state: {
		token: authorization.getToken(),
		details: {},
		permissions: []
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			authorization.setToken(token);
		},
		setDetails(state, details) {
			state.details = details;
		},
		setPermissions(state, permissions) {
			state.permissions = permissions;
		},
		clearToken(state) {
			state.token = "";
			authorization.removeToken();
		},
		clearDetails(state) {
			state.details = {};
		},
		clearPermissions(state) {
			state.permissions = [];
		}
	},
	actions: {
		async login(context, payload) {
			let response = await services.user.login();
			let data = response.data;

			context.commit("setToken", data);

			return data;
		},
		async getDetails(context) {
			let response = await services.user.getDetails();
			let data = response.data;

			context.commit("setDetails", data);

			return data;
		},
		async getPermissions(context) {
			let response = await services.user.getPermissions();
			let data = response.data;

			context.commit("setPermissions", data);

			return data;
		},
		async logout(context) {
			let response = await services.user.logout();
			let data = response.data;

			context.commit("clearToken");
			context.commit("clearDetails");
			context.commit("clearPermissions");

			return data;
		}
	}
};