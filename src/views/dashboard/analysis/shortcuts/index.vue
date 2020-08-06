<template>
	<vui-row v-bind:gutter="20">
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="group-filled" color="#69c0ff" />
					<span>用户</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="bar-chart-filled" color="#95de64" />
					<span>分析</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="store-filled" color="#ff9c6e" />
					<span>商品</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="mouse-filled" color="#b37feb" />
					<span>订单</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="stack-filled" color="#ffd666" />
					<span>票据</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="mail-open-filled" color="#5cdbd3" />
					<span>消息</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="pantone-filled" color="#ff85c0" />
					<span>标签</span>
				</a>
			</vui-card>
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
				<a href="javascript:;" class="vui-pro-dashboard-analysis-shortcut link-default">
					<vui-icon type="list-settings-filled" color="#ffc069" />
					<span>配置</span>
				</a>
			</vui-card>
		</vui-col>
	</vui-row>
</template>

<script>
	export default {
		components: {

		}
	};
</script>

<style>
	.vui-pro-dashboard-analysis-shortcut { display:block; padding:20px; text-align:center; }
	.vui-pro-dashboard-analysis-shortcut .vui-icon { font-size:24px; }
	.vui-pro-dashboard-analysis-shortcut span { display:block; margin-top:10px; }
</style>