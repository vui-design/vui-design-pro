import axios from "src/libs/axios";

export const submitBasic = payload => {
  return axios.post("/form/submitBasic", payload);
};

export const submitSteps = payload => {
  return axios.post("/form/submitSteps", payload);
};

export default {
  submitBasic,
  submitSteps
};