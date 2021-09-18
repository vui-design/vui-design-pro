<template>
	<vui-card v-bind:bordered="false" shadow="always">
		<template slot="title">我的项目</template>
		<router-link slot="extra" to="/list/search/projects">全部项目</router-link>
		<vui-empty v-if="data.length == 0" style="padding: 60px 0;">
			<img slot="image" src="/images/static/workplace/projects.png" style="height: 80px;" />
			<template slot="description">Sorry，暂无项目记录！点击下方按钮立即创建</template>
			<vui-button type="primary" to="/list/search/projects">立即创建</vui-button>
		</vui-empty>
		<template v-else>
			<vui-card-grid v-for="(item, index) in data" v-bind:key="item.id" class="vui-pro-dashboard-workplace-project-wrapper">
				<router-link  class="vui-pro-dashboard-workplace-project" to="/list/search/projects">
					<div class="vui-pro-dashboard-workplace-project-header">
						<vui-avatar slot="avatar" class="vui-pro-dashboard-workplace-project-avatar" v-bind:src="item.logo" v-bind:size="30" />
						<label class="vui-pro-dashboard-workplace-project-name">{{item.title}}</label>
					</div>
					<div class="vui-pro-dashboard-workplace-project-body">{{item.description}}</div>
					<div class="vui-pro-dashboard-workplace-project-footer">
						<label class="vui-pro-dashboard-workplace-project-tag">{{item.tag}}</label>
						<label class="vui-pro-dashboard-workplace-project-moment">
							<vui-time v-bind:time="item.createdAt" />
						</label>
					</div>
				</router-link>
			</vui-card-grid>
		</template>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				data: [
					{ id: 6, logo: "/images/static/list-standard/lodash.png", createdAt: "2020-08-08 12:40:00", title: "Lodash", tag: "JavaScript 工具包", description: "一个一致性、模块化、高性能的 JavaScript 实用工具库" },
					{ id: 5, logo: "/images/static/list-standard/isjs.png", createdAt: "2020-08-08 12:40:00", title: "Is.js", tag: "数据验证包", description: "Is.js 是一个微型通用性数据检查验证包" },
					{ id: 4, logo: "/images/static/list-standard/vue.png", createdAt: "2020-08-08 12:40:00", title: "Vue", tag: "渐进式 UI 框架", description: "渐进式 JavaScript 框架" },
					{ id: 3, logo: "/images/static/list-standard/react.png", createdAt: "2020-08-08 12:40:00", title: "React", tag: "UI 框架", description: "起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源" },
					{ id: 2, logo: "/images/static/list-standard/angular.png", createdAt: "2020-08-08 12:40:00", title: "Angular", tag: "UI 框架", description: "应用设计框架与开发平台，用于创建高效、复杂、精致的单页面应用" },
					{ id: 1, logo: "/images/static/list-standard/bootstrap.png", createdAt: "2020-08-08 12:40:00", title: "Bootstrap", tag: "开源工具包", description: "Bootstrap 是 Twitter 推出的一个用于前端开发的开源工具包" },
				]
			};
		}
	};
</script>

<style>
	.vui-pro-dashboard-workplace-project-wrapper { width:33.33333333% !important; box-shadow:1px 0 0 0 #f6f6f6, 0 1px 0 0 #f6f6f6 !important; min-height:162px !important; padding:0 !important; }

	.vui-pro-dashboard-workplace-project { display:block; padding:24px; transition:all 0.2s; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-header { display:flex; height:30px; overflow:hidden; white-space:nowrap; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-body { display:-webkit-box; min-height:40px; margin-top:12px; overflow:hidden; color:#8c8c8c; line-height:20px; white-space:normal; word-break:break-all; word-wrap:break-word; text-overflow:ellipsis; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-footer { height:20px; margin-top:12px; font-size:12px; line-height:20px; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-avatar { display:block; margin-right:16px; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-name { flex:1; cursor:inherit; display:block; overflow:hidden; color:#262626; font-size:16px; line-height:30px; white-space:nowrap; text-overflow:ellipsis; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-tag { float:left; cursor:inherit; color:#8c8c8c; }
	.vui-pro-dashboard-workplace-project .vui-pro-dashboard-workplace-project-moment { float:right; cursor:inherit; color:#bfbfbf; }
	.vui-pro-dashboard-workplace-project:hover { background-color:rgba(0,0,0,0.01); }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-header {  }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-body {  }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-footer {  }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-avatar {  }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-name {  }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-tag {  }
	.vui-pro-dashboard-workplace-project:hover .vui-pro-dashboard-workplace-project-moment {  }
</style>