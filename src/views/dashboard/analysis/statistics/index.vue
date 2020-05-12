<template>
	<vui-row :gutter="20">
		<vui-col :span="6">
			<DashboardAnalysisStatistic1 />
		</vui-col>
		<vui-col :span="6">
			<DashboardAnalysisStatistic2 />
		</vui-col>
		<vui-col :span="6">
			<DashboardAnalysisStatistic3 />
		</vui-col>
		<vui-col :span="6">
			<DashboardAnalysisStatistic4 />
		</vui-col>
	</vui-row>
</template>

<script>
	import DashboardAnalysisStatistic1 from "./src/statistic1";
	import DashboardAnalysisStatistic2 from "./src/statistic2";
	import DashboardAnalysisStatistic3 from "./src/statistic3";
	import DashboardAnalysisStatistic4 from "./src/statistic4";

	export default {
		components: {
			DashboardAnalysisStatistic1,
			DashboardAnalysisStatistic2,
			DashboardAnalysisStatistic3,
			DashboardAnalysisStatistic4
		}
	};
</script>