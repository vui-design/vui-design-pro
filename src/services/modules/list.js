import axios from "src/libs/axios";

export const getStandardPageList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/list/getStandardPageList", settings);
};

export const addStandard = payload => {
  return axios.post("/list/addStandard", payload);
};

export const editStandard = payload => {
  return axios.put("/list/editStandard/" + payload.id, payload);
};

export const deleteStandard = payload => {
  return axios.delete("/list/deleteStandard/" + payload.id);
};

export default {
  getStandardPageList,
  addStandard,
  editStandard,
  deleteStandard
};