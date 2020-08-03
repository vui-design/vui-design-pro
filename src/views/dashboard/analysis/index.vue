<template>
	<div>
		<vui-pro-dashboard-analysis-statistics />
		<vui-pro-dashboard-analysis-sales-pageview />
		<vui-row class="margin-top-20" v-bind:gutter="20">
			<vui-col v-bind:span="12">
				<vui-pro-dashboard-analysis-popular-search />
			</vui-col>
			<vui-col v-bind:span="12">
				<vui-pro-dashboard-analysis-sales-category-percentage />
			</vui-col>
		</vui-row>
	</div>
</template>

<script>
	import VuiProDashboardAnalysisStatistics from "./statistics";
	import VuiProDashboardAnalysisSalesPageview from "./sales-pageview";
	import VuiProDashboardAnalysisPopularSearch from "./popular-search";
	import VuiProDashboardAnalysisSalesCategoryPercentage from "./sales-category-percentage";

	export default {
		components: {
			VuiProDashboardAnalysisStatistics,
			VuiProDashboardAnalysisSalesPageview,
			VuiProDashboardAnalysisPopularSearch,
			VuiProDashboardAnalysisSalesCategoryPercentage
		}
	};
</script>