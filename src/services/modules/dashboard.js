import axios from "src/libs/axios";

export const getProjectList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/dashboard/getProjectList", settings);
};

export const getTodoList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/dashboard/getTodoList", settings);
};

export const getEventList = payload => {
  const settings = {
    params: payload
  };

  return axios.get("/dashboard/getEventList", settings);
};

export default {
  getProjectList,
  getTodoList,
  getEventList
};