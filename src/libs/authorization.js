// 定义 token 数据的 key 值
export const tokenKey = "token";

// 获取 token 数据
export const getToken = () => localStorage.getItem(tokenKey);

// 存储 token 数据
export const setToken = token => localStorage.setItem(tokenKey, token);

// 删除 token 数据
export const removeToken = () => localStorage.removeItem(tokenKey);

// 跳转至 AMS 登录页面
export function amsLogin(to, location) {
  if (location) {
    localStorage.setItem("location", location);
  }

  window.location.replace(to + "&url=" + encodeURIComponent(window.location.origin + "/login"));
};

// 跳转至 AMS 退出页面
export function amsLogout(to, location) {
  if (location) {
    localStorage.setItem("location", location);
  }

  window.location.replace(to + "&url=" + encodeURIComponent(window.location.origin + "/login"));
};

export default {
  getToken,
  setToken,
  removeToken,
  amsLogin,
  amsLogout
};