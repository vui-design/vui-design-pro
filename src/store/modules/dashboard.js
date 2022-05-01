import services from "src/services";

export default {
  namespaced: true,
  actions: {
    async getProjectList(context, payload) {
      let response = await services.dashboard.getProjectList(payload);

      return response;
    },
    async getTodoList(context, payload) {
      let response = await services.dashboard.getTodoList(payload);

      return response;
    },
    async getEventList(context, payload) {
      let response = await services.dashboard.getEventList(payload);

      return response;
    }
  }
};