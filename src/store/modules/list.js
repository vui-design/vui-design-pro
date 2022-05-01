import services from "src/services";

export default {
  namespaced: true,
  actions: {
    async getStandardPageList(context, payload) {
      let response = await services.list.getStandardPageList(payload);

      return response;
    },
    async addStandardItem(context, payload) {
      let response = await services.list.addStandardItem(payload);

      return response;
    },
    async editStandardItem(context, payload) {
      let response = await services.list.editStandardItem(payload);

      return response;
    },
    async deleteStandardItem(context, payload) {
      let response = await services.list.deleteStandardItem(payload);

      return response;
    },
    async getCardList(context, payload) {
      let response = await services.list.getCardList(payload);

      return response;
    },
    async getTablePageList(context, payload) {
      let response = await services.list.getTablePageList(payload);

      return response;
    },
    async addTableItem(context, payload) {
      let response = await services.list.addTableItem(payload);

      return response;
    },
    async editTableItem(context, payload) {
      let response = await services.list.editTableItem(payload);

      return response;
    },
    async deleteTableItem(context, payload) {
      let response = await services.list.deleteTableItem(payload);

      return response;
    },
    async getArticlePageList(context, payload) {
      let response = await services.list.getArticlePageList(payload);

      return response;
    },
    async getProjectList(context, payload) {
      let response = await services.list.getProjectList(payload);

      return response;
    },
    async getApplicationList(context, payload) {
      let response = await services.list.getApplicationList(payload);

      return response;
    }
  }
};