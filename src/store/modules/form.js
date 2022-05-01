import services from "src/services";

export default {
  namespaced: true,
  actions: {
    async submitBasic(context, payload) {
      let response = await services.form.submitBasic(payload);

      return response;
    },
    async submitSteps(context, payload) {
      let response = await services.form.submitSteps(payload);

      return response;
    }
  }
};