<template>
	<vui-row v-bind:gutter="20">
		<vui-col style="margin-bottom: 20px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
			<vui-pro-dashboard-analysis-statistic1 />
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
			<vui-pro-dashboard-analysis-statistic2 />
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
			<vui-pro-dashboard-analysis-statistic3 />
		</vui-col>
		<vui-col style="margin-bottom: 20px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
			<vui-pro-dashboard-analysis-statistic4 />
		</vui-col>
	</vui-row>
</template>

<script>
	import VuiProDashboardAnalysisStatistic1 from "./src/statistic1";
	import VuiProDashboardAnalysisStatistic2 from "./src/statistic2";
	import VuiProDashboardAnalysisStatistic3 from "./src/statistic3";
	import VuiProDashboardAnalysisStatistic4 from "./src/statistic4";

	export default {
		components: {
			VuiProDashboardAnalysisStatistic1,
			VuiProDashboardAnalysisStatistic2,
			VuiProDashboardAnalysisStatistic3,
			VuiProDashboardAnalysisStatistic4
		}
	};
</script>