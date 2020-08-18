import utils from "src/libs/utils";

export default {
	namespaced: true,
	state: {
		language: utils.getLanguage()
	},
	mutations: {
		setLanguage(state, language) {
			localStorage.setItem("language", language);
			state.language = language;
		}
	},
	actions: {
		setLanguage(context, language) {
			context.commit("setLanguage", language);
		}
	}
};