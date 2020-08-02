import Vue from "vue";
import Vuex from "vuex";

import app from "./modules/app";
import user from "./modules/user";
import example from "./modules/example";

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		app,
		user,
		example
	}
});

export default store;