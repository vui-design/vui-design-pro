<template>
	<div style="padding: 20px;">
		<DashboardAnalysisStatistics />
		<DashboardAnalysisSalesAndPageview />
		<vui-row class="margin-top-20" :gutter="20">
			<vui-col :span="12">
				<DashboardAnalysisPopularSearch />
			</vui-col>
			<vui-col :span="12">
				<DashboardAnalysisSalesCategoryPercentage />
			</vui-col>
		</vui-row>
	</div>
</template>

<script>
	import DashboardAnalysisStatistics from "./statistics";
	import DashboardAnalysisSalesAndPageview from "./sales-and-pageview";
	import DashboardAnalysisPopularSearch from "./popular-search";
	import DashboardAnalysisSalesCategoryPercentage from "./sales-category-percentage";

	export default {
		components: {
			DashboardAnalysisStatistics,
			DashboardAnalysisSalesAndPageview,
			DashboardAnalysisPopularSearch,
			DashboardAnalysisSalesCategoryPercentage
		}
	};
</script>