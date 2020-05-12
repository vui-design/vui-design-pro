<template>
	<vui-card borderless padding="0" class="margin-top-20">
		<vui-tabs class="vui-design-pro-dashboard-analysis-tabs" size="large">
			<vui-radio-group slot="extra" type="button" size="small" v-model="range">
				<vui-radio label="今日" value="day" />
				<vui-radio label="本周" value="week" />
				<vui-radio label="本月" value="month" />
				<vui-radio label="全年" value="year" />
			</vui-radio-group>
			<vui-tab-panel name="tab1" title="销售额">
				<vui-row :gutter="40">
					<vui-col :span="18">
						<div class="vui-design-pro-dashboard-analysis-trend">
							<h1 class="vui-design-pro-dashboard-analysis-trend-title">销售额趋势</h1>
							<highcharts :options="chartSalesOptions" class="vui-design-pro-dashboard-analysis-trend-chart" />
						</div>
					</vui-col>
					<vui-col :span="6">
						<div class="vui-design-pro-dashboard-analysis-rank">
							<h1 class="vui-design-pro-dashboard-analysis-rank-title">门店销售额排名</h1>
							<ul class="vui-design-pro-dashboard-analysis-rank-list">
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">1</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 1 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">2</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 2 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">3</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 3 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">4</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 4 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">5</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 5 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">6</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 6 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">7</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 7 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">8</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 8 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
							</ul>
						</div>
					</vui-col>
				</vui-row>
			</vui-tab-panel>
			<vui-tab-panel name="tab2" title="访问量">
				<vui-row :gutter="40">
					<vui-col :span="18">
						<div class="vui-design-pro-dashboard-analysis-trend">
							<h1 class="vui-design-pro-dashboard-analysis-trend-title">访问量趋势</h1>
							<highcharts :options="chartPageviewOptions" class="vui-design-pro-dashboard-analysis-trend-chart" />
						</div>
					</vui-col>
					<vui-col :span="6">
						<div class="vui-design-pro-dashboard-analysis-rank">
							<h1 class="vui-design-pro-dashboard-analysis-rank-title">门店访问量排名</h1>
							<ul class="vui-design-pro-dashboard-analysis-rank-list">
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">1</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 1 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">2</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 2 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">3</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 3 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">4</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 4 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">5</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 5 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">6</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 6 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">7</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 7 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
								<li class="vui-design-pro-dashboard-analysis-rank-item">
									<i class="vui-design-pro-dashboard-analysis-rank-item-no">8</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-title">南京路 8 号店</i>
									<i class="vui-design-pro-dashboard-analysis-rank-item-extra">323,234</i>
								</li>
							</ul>
						</div>
					</vui-col>
				</vui-row>
			</vui-tab-panel>
		</vui-tabs>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				range: "year",
				chartSalesOptions: {
					chart: {
						type: "column",
						spacing: [10, 0, 0, 0]
					},
					title: null,
					subtitle: null,
					legend: {
						enabled: false
					},
					tooltip: {
						useHTML: true,
						formatter: function() {
							return `
								<div style="font-size: 0;">
									<i style="display:inline-block; width: 4px; height: 4px; border-radius: 4px; background-color: ${this.color}; vertical-align: middle;"></i>
									<div style="display:inline-block; margin-left:5px; vertical-align: middle; font-size: 12px;">${this.x}</div>
									<div style="display:inline-block; margin-left:10px; vertical-align: middle; font-size: 12px;">${this.y}</div>
								</div>
							`;
						}
					},
					plotOptions: {
						series: {
							borderWidth: 0
						}
					},
					xAxis: {
						title: null,
						categories: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
					},
					yAxis: {
						title: null,
						tickAmount: 7,
						gridLineDashStyle: "dash"
					},
					series: [
						{
							color: "#2d8cf0",
							data: [960, 262, 768, 426, 606, 320, 780, 240, 1020, 824, 780, 220]
						}
					]
				},
				chartPageviewOptions: {
					chart: {
						type: "areaspline",
						spacingTop: 10,
						spacingBottom: 0,
						spacingLeft: 0,
						spacingRight: 0
					},
					title: null,
					subtitle: null,
					legend: {
						enabled: false
					},
					tooltip: {
						useHTML: true,
						formatter: function() {
							return `
								<div style="font-size: 0;">
									<i style="display:inline-block; width: 4px; height: 4px; border-radius: 4px; background-color: ${this.color}; vertical-align: middle;"></i>
									<div style="display:inline-block; margin-left:5px; vertical-align: middle; font-size: 12px;">${this.x}</div>
									<div style="display:inline-block; margin-left:10px; vertical-align: middle; font-size: 12px;">${this.y}</div>
								</div>
							`;
						}
					},
					plotOptions: {
						series: {
							borderWidth: 0
						}
					},
					xAxis: {
						title: null,
						categories: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
					},
					yAxis: {
						title: null,
						tickAmount: 7,
						gridLineDashStyle: "dash"
					},
					series: [
						{
							color: "#f0ad4e",
							data: [960, 262, 768, 426, 606, 320, 780, 240, 1020, 824, 780, 220]
						}
					]
				}
			};
		}
	};
</script>

<style>
	/* vui-design-pro-dashboard-analysis-tabs */
	.vui-design-pro-dashboard-analysis-tabs .vui-tabs-header { padding:0 20px; }
	.vui-design-pro-dashboard-analysis-tabs .vui-tab-panel { padding:20px; }

	/* vui-design-pro-dashboard-analysis-trend */
	.vui-design-pro-dashboard-analysis-trend {  }

	.vui-design-pro-dashboard-analysis-trend-title { margin-bottom:20px; color:#262626; font-size:14px; line-height:1.42857142; }

	.vui-design-pro-dashboard-analysis-trend-chart { height:265px; }

	/* vui-design-pro-dashboard-analysis-rank */
	.vui-design-pro-dashboard-analysis-rank {  }

	.vui-design-pro-dashboard-analysis-rank-title { margin-bottom:20px; color:#262626; font-size:14px; line-height:1.42857142; }

	.vui-design-pro-dashboard-analysis-rank-list {  }

	.vui-design-pro-dashboard-analysis-rank-item { display:flex; align-items:center; margin-top:15px; font-size:14px; line-height:1.42857142; }
	.vui-design-pro-dashboard-analysis-rank-item .vui-design-pro-dashboard-analysis-rank-item-no { width:20px; height:20px; border-radius:20px; margin-right:10px; color:#595959; text-align:center; line-height:20px; }
	.vui-design-pro-dashboard-analysis-rank-item .vui-design-pro-dashboard-analysis-rank-item-title { flex:1; color:#595959; }
	.vui-design-pro-dashboard-analysis-rank-item .vui-design-pro-dashboard-analysis-rank-item-extra { margin-left:10px; color:#8c8c8c; }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(1) {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(1) .vui-design-pro-dashboard-analysis-rank-item-no { background-color:#09192a; color:#fff; }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(1) .vui-design-pro-dashboard-analysis-rank-item-title {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(1) .vui-design-pro-dashboard-analysis-rank-item-extra {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(2) {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(2) .vui-design-pro-dashboard-analysis-rank-item-no { background-color:#09192a; color:#fff; }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(2) .vui-design-pro-dashboard-analysis-rank-item-title {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(2) .vui-design-pro-dashboard-analysis-rank-item-extra {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(3) {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(3) .vui-design-pro-dashboard-analysis-rank-item-no { background-color:#09192a; color:#fff; }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(3) .vui-design-pro-dashboard-analysis-rank-item-title {  }
	.vui-design-pro-dashboard-analysis-rank-item:nth-child(3) .vui-design-pro-dashboard-analysis-rank-item-extra {  }
</style>