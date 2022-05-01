import services from "src/services";

export default {
  namespaced: true,
  actions: {
    async getStandardPageList(context, payload) {
      let response = await services.list.getStandardPageList(payload);

      return response;
    },
    async addStandard(context, payload) {
      let response = await services.list.addStandard(payload);

      return response;
    },
    async editStandard(context, payload) {
      let response = await services.list.editStandard(payload);

      return response;
    },
    async deleteStandard(context, payload) {
      let response = await services.list.deleteStandard(payload);

      return response;
    }
  }
};