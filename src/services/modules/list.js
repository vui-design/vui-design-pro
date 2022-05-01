import axios from "src/libs/axios";

export const getStandardPageList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/getStandardPageList", settings);
};

export const addListStandardDatasource = payload => {
  return axios.post("/example/addListStandardDatasource", payload);
};

export const editListStandardDatasource = payload => {
  return axios.put("/example/editListStandardDatasource/" + payload.id, payload);
};

export const deleteListStandardDatasource = payload => {
  return axios.delete("/example/deleteListStandardDatasource/" + payload.id);
};

export default {
  getStandardPageList,
  addListStandardDatasource,
  editListStandardDatasource,
  deleteListStandardDatasource
};