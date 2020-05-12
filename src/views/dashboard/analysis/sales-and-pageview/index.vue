<template>
	<vui-card :bordered="false" padding="0" class="margin-top-20">
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
							<div class="vui-design-pro-dashboard-analysis-trend-chart">
								<v-chart :forceFit="true" :height="265" :padding="[10, 0, 25, 30]" :data="chartSalesOptions.data" :scale="chartSalesOptions.scale">
									<v-tooltip />
									<v-axis />
									<v-bar position="month*sales" color="#2d8cf0" />
								</v-chart>
							</div>
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
							<div class="vui-design-pro-dashboard-analysis-trend-chart">
								<v-chart :forceFit="true" :height="265" :padding="[10, 0, 25, 30]" :data="chartPageviewOptions.data" :scale="chartPageviewOptions.scale">
									<v-tooltip />
									<v-axis />
									<v-area position="month*sales" shape="smooth" color="#f0ad4e" :opacity="1" />
								</v-chart>
							</div>
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
					data: [
						{ month: "一月", sales: 960 },
						{ month: "二月", sales: 262 },
						{ month: "三月", sales: 768 },
						{ month: "四月", sales: 145 },
						{ month: "五月", sales: 426 },
						{ month: "六月", sales: 606 },
						{ month: "七月", sales: 320 },
						{ month: "八月", sales: 780 },
						{ month: "九月", sales: 240 },
						{ month: "十月", sales: 1020 },
						{ month: "十一月", sales: 824 },
						{ month: "十二月", sales: 780 }
					],
					scale: [
						{
							dataKey: "sales",
							tickInterval: 200
						}
					]
				},

				chartPageviewOptions: {
					data: [
						{ month: "一月", sales: 960 },
						{ month: "二月", sales: 262 },
						{ month: "三月", sales: 768 },
						{ month: "四月", sales: 145 },
						{ month: "五月", sales: 426 },
						{ month: "六月", sales: 606 },
						{ month: "七月", sales: 320 },
						{ month: "八月", sales: 780 },
						{ month: "九月", sales: 240 },
						{ month: "十月", sales: 1020 },
						{ month: "十一月", sales: 824 },
						{ month: "十二月", sales: 780 }
					],
					scale: [
						{
							dataKey: "sales",
							tickInterval: 200
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
	.vui-design-pro-dashboard-analysis-tabs .vui-tab-panel .vui-tab-panel-content { padding:20px; }

	/* vui-design-pro-dashboard-analysis-trend */
	.vui-design-pro-dashboard-analysis-trend {  }

	.vui-design-pro-dashboard-analysis-trend-title { margin-bottom:20px; color:#262626; font-size:14px; line-height:1.42857142; }

	.vui-design-pro-dashboard-analysis-trend-chart { width:100%; height:265px; overflow:hidden; font-size:0; }

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