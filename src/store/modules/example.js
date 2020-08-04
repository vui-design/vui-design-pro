import services from "src/services";

export default {
	namespaced: true,
	actions: {
		async getListTableDatasource(context, payload) {
			// let response = await services.example.getListTableDatasource();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								total: 100,
								content:  [
									{ id: 10, name: "TradeCode 10", description: "这是一段描述", count: 73, state: 4, datetime: "2020-01-10 08:00:00" },
									{ id: 9, name: "TradeCode 9", description: "这是一段描述", count: 223, state: 3, datetime: "2020-01-09 08:00:00" },
									{ id: 8, name: "TradeCode 8", description: "这是一段描述", count: 835, state: 4, datetime: "2020-01-08 08:00:00" },
									{ id: 7, name: "TradeCode 7", description: "这是一段描述", count: 996, state: 3, datetime: "2020-01-07 08:00:00" },
									{ id: 5, name: "TradeCode 5", description: "这是一段描述", count: 578, state: 3, datetime: "2020-01-05 08:00:00" },
									{ id: 6, name: "TradeCode 6", description: "这是一段描述", count: 696, state: 4, datetime: "2020-01-06 08:00:00" },
									{ id: 4, name: "TradeCode 4", description: "这是一段描述", count: 110, state: 4, datetime: "2020-01-04 08:00:00" },
									{ id: 3, name: "TradeCode 3", description: "这是一段描述", count: 60, state: 3, datetime: "2020-01-03 08:00:00" },
									{ id: 2, name: "TradeCode 2", description: "这是一段描述", count: 229, state: 2, datetime: "2020-01-02 08:00:00" },
									{ id: 1, name: "TradeCode 1", description: "这是一段描述", count: 660, state: 4, datetime: "2020-01-01 08:00:00" }
								]
							},
							message: "success"
						};

						resolve(response);
					}, 300);
				})
			};

			const response = await ajax(payload);
			const data = response.data;

			return data;
		}
	}
};