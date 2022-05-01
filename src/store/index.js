import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import form from "./modules/form";
import list from "./modules/list";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    form,
    list
  }
});

export default store;