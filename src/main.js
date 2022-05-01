// Vui Design 组件样式
import "vui-design/dist/style/vui-design.css";
// 第三方组件样式重写
import "./styles/thirdparty.css";
// 系统自身公共样式
import "./styles/index.css";

import Vue from "vue";
import VuiDesign from "vui-design";
import Viser from "viser-vue";
import App from "src/App";
import directives from "src/directives";
import filters from "src/filters";
import i18n from "src/locale";
import router from "src/router";
import store from "src/store";

Vue.config.productionTip = false;

Vue.use(VuiDesign, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.use(Viser);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

new Vue({
  el: "#root",
  i18n,
  router,
  store,
  render: h => h(App)
});