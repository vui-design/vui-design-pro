import Vue from "vue";
import VueI18n from "vue-i18n";
import VuiDesignZhCN from "vui-design/dist/locale/zh-CN";
import VuiDesignEnUS from "vui-design/dist/locale/en-US";
import LocaleZhCN from "./lang/zh-CN";
import LocaleEnUS from "./lang/en-US";
import utils from "src/libs/utils";

Vue.use(VueI18n);

const language = utils.getLanguage();
const messages = {
  "zh-CN": Object.assign(VuiDesignZhCN, LocaleZhCN),
  "en-US": Object.assign(VuiDesignEnUS, LocaleEnUS)
};

Vue.config.language = language;

const i18n = new VueI18n({
  locale: language,
  messages
});

export default i18n;