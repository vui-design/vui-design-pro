import services from "src/services";

export default {
  namespaced: true,
  actions: {
    async getStandardPageList(context, payload) {
      let response = await services.list.getStandardPageList(payload);

      return response.data;
    },
    async addListStandardDatasource(context, payload) {
      // let response = await services.example.addListStandardDatasource(payload);
      // let data = response.data;

      const ajax = payload => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const response = {
              code: 0,
              data: null,
              message: "success"
            };

            resolve(response);
          }, 1000);
        })
      };

      const response = await ajax(payload);
      const data = response.data;

      return data;
    },
    async editListStandardDatasource(context, payload) {
      // let response = await services.example.editListStandardDatasource(payload);
      // let data = response.data;

      const ajax = payload => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const response = {
              code: 0,
              data: null,
              message: "success"
            };

            resolve(response);
          }, 1000);
        })
      };

      const response = await ajax(payload);
      const data = response.data;

      return data;
    },
    async deleteListStandardDatasource(context, payload) {
      // let response = await services.example.deleteListStandardDatasource(payload);
      // let data = response.data;

      const ajax = payload => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const response = {
              code: 0,
              data: null,
              message: "success"
            };

            resolve(response);
          }, 1000);
        })
      };

      const response = await ajax(payload);
      const data = response.data;

      return data;
    }
  }
};