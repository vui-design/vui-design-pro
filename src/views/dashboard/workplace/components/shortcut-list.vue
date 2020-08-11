<template>
	<vui-card v-bind:bordered="false">
		<template slot="title">快速开始 / 便捷导航</template>
		<vui-card-grid class="vui-pro-dashboard-workplace-shortcut-wrapper">
			<router-link to="/dashboard" class="vui-pro-dashboard-workplace-shortcut">
				<vui-icon type="apps" class="vui-pro-dashboard-workplace-shortcut-icon" style="color: #2d8cf0;" />
				<div class="vui-pro-dashboard-workplace-shortcut-title">控制面板</div>
			</router-link>
		</vui-card-grid>
		<vui-card-grid class="vui-pro-dashboard-workplace-shortcut-wrapper">
			<router-link to="/form" class="vui-pro-dashboard-workplace-shortcut">
				<vui-icon type="edit-square" class="vui-pro-dashboard-workplace-shortcut-icon" style="color: #52c41a;" />
				<div class="vui-pro-dashboard-workplace-shortcut-title">表单</div>
			</router-link>
		</vui-card-grid>
		<vui-card-grid class="vui-pro-dashboard-workplace-shortcut-wrapper">
			<router-link to="/list"  class="vui-pro-dashboard-workplace-shortcut">
				<vui-icon type="table" class="vui-pro-dashboard-workplace-shortcut-icon" style="color: #faad14;" />
				<div class="vui-pro-dashboard-workplace-shortcut-title">列表</div>
			</router-link>
		</vui-card-grid>
		<vui-card-grid class="vui-pro-dashboard-workplace-shortcut-wrapper">
			<router-link to="/details" class="vui-pro-dashboard-workplace-shortcut">
				<vui-icon type="profile" class="vui-pro-dashboard-workplace-shortcut-icon" style="color: #975fe4;" />
				<div class="vui-pro-dashboard-workplace-shortcut-title">详情页</div>
			</router-link>
		</vui-card-grid>
		<vui-card-grid class="vui-pro-dashboard-workplace-shortcut-wrapper">
			<router-link to="/user" class="vui-pro-dashboard-workplace-shortcut">
				<vui-icon type="user" class="vui-pro-dashboard-workplace-shortcut-icon" style="color: #fa8c16;" />
				<div class="vui-pro-dashboard-workplace-shortcut-title">个人页</div>
			</router-link>
		</vui-card-grid>
		<vui-card-grid class="vui-pro-dashboard-workplace-shortcut-wrapper">
			<router-link to="/result" class="vui-pro-dashboard-workplace-shortcut">
				<vui-icon type="info" class="vui-pro-dashboard-workplace-shortcut-icon" style="color: #5bc0de;" />
				<div class="vui-pro-dashboard-workplace-shortcut-title">结果页</div>
			</router-link>
		</vui-card-grid>
	</vui-card>
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
	.vui-pro-dashboard-workplace-shortcut-wrapper { width:33.33333333% !important; box-shadow:1px 0 0 0 #f6f6f6, 0 1px 0 0 #f6f6f6 !important; min-height:82px !important; padding:0 !important; }

	.vui-pro-dashboard-workplace-shortcut { display:block; padding:20px 0; transition:all 0.2s; }
	.vui-pro-dashboard-workplace-shortcut .vui-pro-dashboard-workplace-shortcut-icon { display:block; width:24px; height:24px; margin:0 auto; font-size:20px; text-align:center; line-height:24px; }
	.vui-pro-dashboard-workplace-shortcut .vui-pro-dashboard-workplace-shortcut-title { display:block; margin-top:10px; color:#595959; text-align:center; line-height:1.42857143; }
	.vui-pro-dashboard-workplace-shortcut:hover { background-color:rgba(0,0,0,0.01); }
	.vui-pro-dashboard-workplace-shortcut:hover .vui-pro-dashboard-workplace-shortcut-icon {  }
	.vui-pro-dashboard-workplace-shortcut:hover .vui-pro-dashboard-workplace-shortcut-title {  }
</style>