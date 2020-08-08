import services from "src/services";

export default {
	namespaced: true,
	actions: {
		async submitFormBasic(context, payload) {
			// let response = await services.example.submitFormBasic();
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
		async submitFormSteps(context, payload) {
			// let response = await services.example.submitFormSteps();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								...payload,
								createdAt: new Date,
								no: "1000288022008060008422200860486664"
							},
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
		async getListStandardDatasource(context, payload) {
			// let response = await services.example.getListStandardDatasource();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								total: 8,
								content:  [
									{ id: 8, icon: "/static/images/list-standard/nodejs.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 40, owner: "萱子乔", title: "Node.js", description: "一个基于 Chrome V8 引擎的 JavaScript 运行环境" },
									{ id: 7, icon: "/static/images/list-standard/isjs.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 86, owner: "花满楼", title: "Is.js", description: "Is.js 是一个微型通用性数据检查验证包" },
									{ id: 6, icon: "/static/images/list-standard/vue.png", startAt: "2020-08-08 16:40:00", status: "exception", progress: 70, owner: "张无忌", title: "Vue", description: "渐进式 JavaScript 框架" },
									{ id: 5, icon: "/static/images/list-standard/react.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 80, owner: "紫旭琳", title: "React", description: "起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源" },
									{ id: 4, icon: "/static/images/list-standard/angular.png", startAt: "2020-08-08 16:40:00", status: "success", progress: 100, owner: "张三丰", title: "Angular", description: "应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用" },
									{ id: 3, icon: "/static/images/list-standard/bootstrap.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 76, owner: "瑰柳儿", title: "Bootstrap", description: "Bootstrap 是 Twitter 推出的一个用于前端开发的开源工具包" },
									{ id: 2, icon: "/static/images/list-standard/viser.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 20, owner: "雪浮灵", title: "Viser", description: "再一次发现你的数据" },
									{ id: 1, icon: "/static/images/list-standard/axure.png", startAt: "2020-08-08 16:40:00", status: "exception", progress: 100, owner: "南宫惘", title: "Axure", description: "Axure RP 是一款专业的快速原型设计工具" }
								]
							},
							message: "success"
						};

						resolve(response);
					}, 500);
				})
			};

			const response = await ajax(payload);
			const data = response.data;

			return data;
		},
		async addListStandardDatasource(context, payload) {
			// let response = await services.example.addListStandardDatasource();
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
			// let response = await services.example.editListStandardDatasource();
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
			// let response = await services.example.deleteListStandardDatasource();
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
					}, 500);
				})
			};

			const response = await ajax(payload);
			const data = response.data;

			return data;
		},
		async addListTableDatasource(context, payload) {
			// let response = await services.example.addListTableDatasource();
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
		async editListTableDatasource(context, payload) {
			// let response = await services.example.editListTableDatasource();
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
		async deleteListTableDatasource(context, payload) {
			// let response = await services.example.deleteListTableDatasource();
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