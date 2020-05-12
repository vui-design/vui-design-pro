import services from "src/services";
import authorization from "src/utils/authorization";

/**
 * State
 */
const state = {
	token: authorization.getToken(),
	uid: "",
	avatar: "",
	nickname: "",
	roles: null
};

/**
 * Getters
 */
const getters = {

};

/**
 * Mutations
 */
const mutations = {
	setToken(state, token) {
		state.token = token;
		authorization.setToken(token);
	},
	setUid(state, uid) {
		state.uid = uid;
	},
	setAvatar(state, avatar) {
		state.avatar = avatar;
	},
	setNickname(state, nickname) {
		state.nickname = nickname;
	},
	setRoles(state, roles) {
		state.roles = roles;
	}
};

/**
 * Actions
 */
const actions = {
	// 设置面包屑
	setBreadcrumb({ commit }, payload) {
		commit("setBreadcrumb", payload);
	},
	// 单独清除 token 数据
	clearToken({ commit }) {
		return new Promise(resolve => {
			commit("setToken", "");
			resolve();
		});
	},
	// 登录
	login({ commit }, payload) {
		return new Promise((resolve, reject) => {
			services.login(payload).then(response => {
				const data = response.data;

				commit("setToken", data.token);
				resolve(data);
			}).catch(e => {
				reject(e)
			});
		});
	},
	// 退出
	logout({ commit }) {
		return new Promise((resolve, reject) => {
			services.logout().then(() => {
				commit("setToken", "");
				commit("setAvatar", "");
				commit("setUid", "");
				commit("setNickname", "");
				commit("setRoles", null);
				resolve();
			}).catch(e => {
				reject(e);
			});

			// 如果退出登录无需请求接口，则可以直接使用如下代码
			// commit("setToken", "");
			// commit("setAvatar", "");
			// commit("setUid", "");
			// commit("setNickname", "");
			// commit("setRoles", null);
			// resolve();
		})
	},
	// 获取用户信息
	getUserInfo({ commit }) {
		return new Promise((resolve, reject) => {
			services.getUserInfo().then(response => {
				const data = response.data;

				commit("setAvatar", data.avatar);
				commit("setUid", data.uid);
				commit("setNickname", data.nickname);
				commit("setRoles", data.roles);
				resolve(data);
			}).catch(e => {
				reject(e);
			});
		});
	}
};

/**
 * Merge and export state, getters, mutations, actions
 */
export default {
	namespaced: true,
	state,
	mutations,
	actions
};