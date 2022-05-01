import axios from "src/libs/axios";

export const getStandardPageList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getStandardPageList", settings);
};

export const addStandardItem = payload => {
  return axios.post("/list/addStandardItem", payload);
};

export const editStandardItem = payload => {
  return axios.put("/list/editStandardItem/" + payload.id, payload);
};

export const deleteStandardItem = payload => {
  return axios.delete("/list/deleteStandardItem/" + payload.id);
};

export const getCardList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getCardList", settings);
};

export const getTablePageList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getStandardPageList", settings);
};

export const addTableItem = payload => {
  return axios.post("/list/addTableItem", payload);
};

export const editTableItem = payload => {
  return axios.put("/list/editTableItem/" + payload.id, payload);
};

export const deleteTableItem = payload => {
  return axios.delete("/list/deleteTableItem/" + payload.id);
};

export const getArticlePageList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getArticlePageList", settings);
};

export const getProjectList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getProjectList", settings);
};

export const getApplicationList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getApplicationList", settings);
};

export default {
  getStandardPageList,
  addStandardItem,
  editStandardItem,
  deleteStandardItem,
  getCardList,
  getTablePageList,
  addTableItem,
  editTableItem,
  deleteTableItem,
  getArticlePageList,
  getProjectList,
  getApplicationList
};