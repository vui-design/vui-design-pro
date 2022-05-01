import VuiDesign from "vui-design";
import axios from "axios";
import config from "src/config";
import authorization from "src/libs/authorization";

axios.defaults.baseURL = config.baseURL;
axios.defaults.timeout = 10000;

axios.interceptors.request.use(config => {
  if (config.url === "/user/login") {

  }
  else if (authorization.getToken()) {
    config.headers["Authorization"] = authorization.getToken();
  }

  return config;
}, e => {
  VuiDesign.Message.error(e.message);

  return Promise.reject(e);
});

axios.interceptors.response.use(response => {
  const data = response.data;

  if (data.code === 0) {
    return data;
  }
  else {
    VuiDesign.Message.error(data.message);

    return Promise.reject(new Error(data.message));
  }
}, e => {
  VuiDesign.Message.error(e.message);

  return Promise.reject(e);
});

export default axios;