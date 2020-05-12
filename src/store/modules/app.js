import routes from "src/router/routes";
import { rootRoute } from "src/config";
import { getDefaultLanguage, getRootRouteFromRoutes, getMenuFromRoutes, getBreadcrumbByRoute } from "src/utils";

/**
 * State
 */
const state = {
	language: getDefaultLanguage(),
	rootRoute: getRootRouteFromRoutes(routes, rootRoute),
	breadcrumb: []
};

/**
 * Getters
 */
const getters = {
	menu(state, getters, rootState) {
		return getMenuFromRoutes(routes, rootState.user.roles);
	}
};

/**
 * Mutations
 */
const mutations = {
	setLanguage(state, language) {
		localStorage.setItem("language", language);
		state.language = language;
	},
	setBreadcrumb(state, route) {
		state.breadcrumb = getBreadcrumbByRoute(route, state.rootRoute);
	}
};

/**
 * Actions
 */
const actions = {
	setBreadcrumb({ commit }, payload) {
		commit("setBreadcrumb", payload);
	}
};

/**
 * Merge and export state, getters, mutations, actions
 */
export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};