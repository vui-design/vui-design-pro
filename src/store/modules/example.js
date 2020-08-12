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
								total: 10,
								content:  [
									{ id: 10, icon: "/static/images/list-standard/nodejs.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 80, owner: "阿波罗", title: "Node.js", description: "一个基于 Chrome V8 引擎的 JavaScript 运行环境" },
									{ id: 9, icon: "/static/images/list-standard/webpack.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 40, owner: "柳残阳", title: "Webpack", description: "一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源" },
									{ id: 8, icon: "/static/images/list-standard/lodash.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 62, owner: "萱子乔", title: "Lodash", description: "一个一致性、模块化、高性能的 JavaScript 实用工具库" },
									{ id: 7, icon: "/static/images/list-standard/isjs.png", startAt: "2020-08-08 16:40:00", status: "active", progress: 84, owner: "花满楼", title: "Is.js", description: "Is.js 是一个微型通用性数据检查验证包" },
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
		async getListCardDatasource(context, payload) {
			// let response = await services.example.getListCardDatasource();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								total: 10,
								content:  [
									{ id: 16, logo: "/static/images/list-standard/nodejs.png", title: "Node.js", description: "一个基于 Chrome V8 引擎的 JavaScript 运行环境" },
									{ id: 15, logo: "/static/images/list-standard/webpack.png", title: "Webpack", description: "一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源" },
									{ id: 14, logo: "/static/images/list-standard/gulp.png", title: "Gulp.js", description: "基于流 stream 的自动化构建工具" },
									{ id: 13, logo: "/static/images/list-standard/egg.png", title: "Egg.js", description: "为企业级框架和应用而生，是阿里开源的企业级 Node.js 框架" },
									{ id: 12, logo: "/static/images/list-standard/sass.png", title: "Sass", description: "世界上最成熟、稳定和强大的专业级 CSS 扩展语言" },
									{ id: 11, logo: "/static/images/list-standard/less.png", title: "Less", description: "一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展" },
									{ id: 10, logo: "/static/images/list-standard/postcss.png", title: "PostCSS", description: "一个用 JavaScript 工具和插件转换 CSS 代码的工具" },
									{ id: 9, logo: "/static/images/list-standard/mockjs.png", title: "Mockjs", description: "生成随机数据，拦截 Ajax 请求" },
									{ id: 8, logo: "/static/images/list-standard/lodash.png", title: "Lodash", description: "一个一致性、模块化、高性能的 JavaScript 实用工具库" },
									{ id: 7, logo: "/static/images/list-standard/isjs.png", title: "Is.js", description: "Is.js 是一个微型通用性数据检查验证包" },
									{ id: 6, logo: "/static/images/list-standard/vue.png", title: "Vue", description: "渐进式 JavaScript 框架" },
									{ id: 5, logo: "/static/images/list-standard/react.png", title: "React", description: "起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源" },
									{ id: 4, logo: "/static/images/list-standard/angular.png", title: "Angular", description: "应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用" },
									{ id: 3, logo: "/static/images/list-standard/bootstrap.png", title: "Bootstrap", description: "Bootstrap 是 Twitter 推出的一个用于前端开发的开源工具包" },
									{ id: 2, logo: "/static/images/list-standard/viser.png", title: "Viser", description: "再一次发现你的数据" },
									{ id: 1, logo: "/static/images/list-standard/axure.png", title: "Axure", description: "Axure RP 是一款专业的快速原型设计工具" }
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
		},
		async getListSearchArticlesDatasource(context, payload) {
			// let response = await services.example.getListSearchArticlesDatasource();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								total: 10,
								content:  [
									{ id: 10, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/nodejs.png", createdAt: "2020-08-08 16:40:00", createUserName: "阿波罗", title: "Node.js", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "如果你是一个前端程序员，你不懂得像 PHP、Python 或 Ruby 等动态编程语言，然后你想创建自己的服务，那么 Node.js 是一个非常好的选择。Node.js 是运行在服务端的 JavaScript，如果你熟悉 Javascript，那么你将会很容易的学会 Node.js。当然，如果你是后端程序员，想部署一些高性能的服务，那么学习 Node.js 也是一个非常好的选择！" },
									{ id: 9, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/webpack.png", createdAt: "2020-08-08 16:40:00", createUserName: "柳残阳", title: "Webpack", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "本质上，Webpack 是一个现代 JavaScript 应用程序的静态模块打包器。当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 Bundle。" },
									{ id: 8, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/lodash.png", createdAt: "2020-08-08 16:40:00", createUserName: "萱子乔", title: "Lodash", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Lodash 是一个著名的 JavaScript 原生库，不需要引入其他第三方依赖。是一个意在提高开发者效率，提高 JavaScript 原生方法性能的 JavaScript 库。简单的说就是，很多方法 Lodash 已经帮你写好了，直接调用就行，不用自己费尽心思去写了，而且可以统一方法的一致性。" },
									{ id: 7, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/isjs.png", createdAt: "2020-08-08 16:40:00", createUserName: "花满楼", title: "Is.js", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Is.js 是一个微型通用性数据检查验证包。目前提供了数据类型、存在性、正则表达、字符串、数学、对象、数组、运行环境、时间、配置 10 大类 110 个验证方法。" },
									{ id: 6, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/vue.png", createdAt: "2020-08-08 16:40:00", createUserName: "张无忌", title: "Vue", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。" },
									{ id: 5, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/react.png", createdAt: "2020-08-08 16:40:00", createUserName: "紫旭琳", title: "React", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在 2013 年 5 月开源了。" },
									{ id: 4, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/angular.png", createdAt: "2020-08-08 16:40:00", createUserName: "张三丰", title: "Angular", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Angular（通常是指 Angular 2+ 或 Angular v2 及更高版本）是一个基于 TypeScript 的 开源 Web 应用框架， 由 Google 的 Angular 团队以及社区共同领导。Angular 是由 AngularJS 的同一个开发团队完全重写的。" },
									{ id: 3, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/bootstrap.png", createdAt: "2020-08-08 16:40:00", createUserName: "瑰柳儿", title: "Bootstrap", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Bootstrap 是 Twitter 推出的一个用于前端开发的开源工具包。它由 Twitter 的设计师 Mark Otto 和 Jacob Thornton 合作开发，是一个 CSS/HTML 框架。目前，Bootstrap 最新版本为 4.0 。Bootstrap 中文网致力于为广大国内开发者提供详尽的中文文档、代码实例等，助力开发者掌握并使用这一框架。" },
									{ id: 2, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/viser.png", createdAt: "2020-08-08 16:40:00", createUserName: "雪浮灵", title: "Viser", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Viser 一个基于 G2 实现的，为数据可视化工程师量身定制的工具。Viser-Graph 一个基于 G6 实现的，为呈现关系型数据的定制化工具。Viser Viser-Graph 现已支持几大主流前端框架，例如 React、Vue 和 AngularJS。" },
									{ id: 1, collection: 100, like: 666, comment: 888, url: "https://github.com/vui-design", thumbnail: "https://dummyimage.com/280x216/f4f6f8/595959", avatar: "/static/images/list-standard/axure.png", createdAt: "2020-08-08 16:40:00", createUserName: "南宫惘", title: "Axure", tags: ["Vui Design", "Vui Design Pro", "UI 框架"], content: "Axure RP 是美国 Axure Software Solution 公司旗舰产品，是一个专业的快速原型设计工具，让负责定义需求和规格、设计功能和界面的专家能够快速创建应用软件或 Web 网站的线框图、流程图、原型和规格说明文档。作为专业的原型设计工具，它能快速、高效的创建原型，同时支持多人协作设计和版本控制管理。" }
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
		async getListSearchProjectsDatasource(context, payload) {
			// let response = await services.example.getListSearchProjectsDatasource();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								total: 10,
								content:  [
									{
										id: 8,
										thumbnail: "/static/images/list-projects/lodash.png",
										createdAt: "2020-08-08 12:40:00",
										title: "Lodash",
										description: "一个一致性、模块化、高性能的 JavaScript 实用工具库",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 7,
										thumbnail: "/static/images/list-projects/isjs.png",
										createdAt: "2020-08-08 12:40:00",
										title: "Is.js",
										description: "Is.js 是一个微型通用性数据检查验证包",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 6,
										thumbnail: "/static/images/list-projects/vue.png",
										createdAt: "2020-08-08 12:40:00",
										title: "Vue",
										description: "渐进式 JavaScript 框架",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 5,
										thumbnail: "/static/images/list-projects/react.png",
										createdAt: "2020-08-08 12:40:00",
										title: "React",
										description: "起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 4,
										thumbnail: "/static/images/list-projects/angular.png",
										createdAt: "2020-08-08 12:40:00",
										title: "Angular",
										description: "应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 3,
										thumbnail: "/static/images/list-projects/bootstrap.png",
										createdAt: "2020-08-08 12:40:00",
										title: "Bootstrap",
										description: "Bootstrap 是 Twitter 推出的一个用于前端开发的开源工具包",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 2,
										thumbnail: "/static/images/list-projects/viser.png",
										createdAt: "2020-08-08 12:40:00",
										title: "Viser",
										description: "再一次发现你的数据",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									},
									{
										id: 1,
										thumbnail: "/static/images/list-projects/axure.png",
										createdAt: "2020-08-08 12:40:00", title: "Axure",
										description: "Axure RP 是一款专业的快速原型设计工具",
										collaborators: [
											{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
											{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" },
											{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" }
										]
									}
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
		async getListSearchApplicationsDatasource(context, payload) {
			// let response = await services.example.getListSearchApplicationsDatasource();
			// let data = response.data;

			const ajax = payload => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const response = {
							code: 0,
							data: {
								total: 10,
								content:  [
									{ id: 16, logo: "/static/images/list-standard/nodejs.png", au: 20, nu: 1422, title: "Node.js" },
									{ id: 15, logo: "/static/images/list-standard/webpack.png", au: 12, nu: 2464, title: "Webpack" },
									{ id: 14, logo: "/static/images/list-standard/gulp.png", au: 16, nu: 1246, title: "Gulp.js" },
									{ id: 13, logo: "/static/images/list-standard/egg.png", au: 14, nu: 1688, title: "Egg.js" },
									{ id: 12, logo: "/static/images/list-standard/sass.png", au: 12, nu: 1882, title: "Sass" },
									{ id: 11, logo: "/static/images/list-standard/less.png", au: 14, nu: 1266, title: "Less" },
									{ id: 10, logo: "/static/images/list-standard/postcss.png", au: 16, nu: 2488, title: "PostCSS" },
									{ id: 9, logo: "/static/images/list-standard/mockjs.png", au: 18, nu: 1066, title: "Mockjs" },
									{ id: 8, logo: "/static/images/list-standard/lodash.png", au: 20, nu: 1422, title: "Lodash" },
									{ id: 7, logo: "/static/images/list-standard/isjs.png", au: 12, nu: 2464, title: "Is.js" },
									{ id: 6, logo: "/static/images/list-standard/vue.png", au: 16, nu: 1246, title: "Vue" },
									{ id: 5, logo: "/static/images/list-standard/react.png", au: 14, nu: 1688, title: "React" },
									{ id: 4, logo: "/static/images/list-standard/angular.png", au: 12, nu: 1882, title: "Angular" },
									{ id: 3, logo: "/static/images/list-standard/bootstrap.png", au: 14, nu: 1266, title: "Bootstrap" },
									{ id: 2, logo: "/static/images/list-standard/viser.png", au: 16, nu: 2488, title: "Viser" },
									{ id: 1, logo: "/static/images/list-standard/axure.png", au: 18, nu: 1066, title: "Axure" }
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
		}
	}
};