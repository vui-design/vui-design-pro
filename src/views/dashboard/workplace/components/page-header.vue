<template>
	<vui-page-header class="vui-pro-page-header" v-bind:ghost="false">
		<template slot="title">工作台</template>
		<div class="vui-pro-dashboard-workplace">
			<div class="vui-pro-dashboard-workplace-profile">
				<vui-avatar class="vui-pro-dashboard-workplace-profile-avatar" src="/images/static/avatars/svg/1.svg" v-bind:size="72" />
				<section class="vui-pro-dashboard-workplace-profile-details">
					<div class="welcome">早安，Ding Wei，祝你开心每一天！</div>
					<vui-space divider class="meta">
						<label>前端开发工程师</label>
						<label>电魂网络－发行线－技术运营中心－运营开发部－前端开发组</label>
					</vui-space>
				</section>
			</div>
			<div class="vui-pro-dashboard-workplace-extra">
				<vui-space v-bind:divider="54" v-bind:size="30">
					<vui-statistic class="vui-pro-dashboard-workplace-extra-statistic" v-bind:value="24" title="项目数" />
					<vui-statistic class="vui-pro-dashboard-workplace-extra-statistic" v-bind:value="8" suffix="/ 24" title="待办事项" />
					<vui-statistic class="vui-pro-dashboard-workplace-extra-statistic" v-bind:value="2048" title="项目访问" />
				</vui-space>
			</div>
		</div>
	</vui-page-header>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	};
</script>

<style>
	.vui-pro-dashboard-workplace { display:flex; align-items:flex-start; }

	.vui-pro-dashboard-workplace-profile { flex:1; display:flex; align-items:center; }
	.vui-pro-dashboard-workplace-profile-avatar {  }
	.vui-pro-dashboard-workplace-profile-details { margin-left:20px; }
	.vui-pro-dashboard-workplace-profile-details .welcome { color:#262626; font-size:20px; font-weight:500; line-height:30px; }
	.vui-pro-dashboard-workplace-profile-details .meta { margin-top:10px; color:#8c8c8c; font-size:14px; line-height:24px; }

	.vui-pro-dashboard-workplace-extra { margin-left:40px; }
	.vui-pro-dashboard-workplace-extra-statistic {  }
	.vui-pro-dashboard-workplace-extra-statistic .vui-statistic-title { text-align:right; }
	.vui-pro-dashboard-workplace-extra-statistic .vui-statistic-body { justify-content:flex-end; }
</style>