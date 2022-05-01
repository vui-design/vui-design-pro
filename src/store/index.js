import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import example from "./modules/example";
import list from "./modules/list";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    example,
    list
  }
});

export default store;