<template>
	<div>
		<vui-pro-dashboard-analysis-statistics />
		<vui-pro-dashboard-analysis-shortcuts />
		<vui-pro-dashboard-analysis-sales-pageview />
		<vui-row v-bind:gutter="20">
			<vui-col style="margin-top: 20px;" v-bind:lg="24" v-bind:xl="12">
				<vui-pro-dashboard-analysis-popular-search />
			</vui-col>
			<vui-col style="margin-top: 20px;" v-bind:lg="24" v-bind:xl="12">
				<vui-pro-dashboard-analysis-sales-category-percentage />
			</vui-col>
		</vui-row>
	</div>
</template>

<script>
	import VuiProDashboardAnalysisStatistics from "./statistics";
	import VuiProDashboardAnalysisShortcuts from "./shortcuts";
	import VuiProDashboardAnalysisSalesPageview from "./sales-pageview";
	import VuiProDashboardAnalysisPopularSearch from "./popular-search";
	import VuiProDashboardAnalysisSalesCategoryPercentage from "./sales-category-percentage";

	export default {
		components: {
			VuiProDashboardAnalysisStatistics,
			VuiProDashboardAnalysisShortcuts,
			VuiProDashboardAnalysisSalesPageview,
			VuiProDashboardAnalysisPopularSearch,
			VuiProDashboardAnalysisSalesCategoryPercentage
		}
	};
</script>