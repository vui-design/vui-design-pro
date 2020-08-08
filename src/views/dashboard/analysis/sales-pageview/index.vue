<template>
	<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
		<vui-tabs size="large" class="vui-pro-dashboard-analysis-tabs" headerStyle="margin-bottom: 0;">
			<vui-radio-group v-model="range" slot="extra" type="button" size="small">
				<vui-radio value="today" label="今日" />
				<vui-radio value="week" label="本周" />
				<vui-radio value="month" label="本月" />
				<vui-radio value="year" label="全年" />
			</vui-radio-group>
			<vui-tab-panel name="sales" title="销售额">
				<vui-row v-bind:gutter="40">
					<vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="14" v-bind:lg="16" v-bind:xl="18">
						<div class="vui-pro-dashboard-analysis-trend">
							<h1 class="vui-pro-dashboard-analysis-trend-title">销售额趋势</h1>
							<div class="vui-pro-dashboard-analysis-trend-chart">
								<v-chart v-bind:forceFit="true" v-bind:height="272" v-bind:padding="[10, 0, 24, 30]" v-bind:scale="chartSales.scale" v-bind:data="chartSales.data">
									<v-tooltip v-bind:crosshairs="false" v-bind:useHtml="true" v-bind:htmlContent="getChartTooltipTemplate" />
									<v-axis />
									<v-bar position="month*value" color="#2d8cf0" />
								</v-chart>
							</div>
						</div>
					</vui-col>
					<vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="10" v-bind:lg="8" v-bind:xl="6">
						<div class="vui-pro-dashboard-analysis-rank">
							<h1 class="vui-pro-dashboard-analysis-rank-title">销售额排名</h1>
							<ul class="vui-pro-dashboard-analysis-rank-list">
								<li v-for="(item, index) in rankSales" v-bind:key="index" class="vui-pro-dashboard-analysis-rank-item">
									<i class="vui-pro-dashboard-analysis-rank-item-no">{{index + 1}}</i>
									<i class="vui-pro-dashboard-analysis-rank-item-title">{{item.name}}</i>
									<i class="vui-pro-dashboard-analysis-rank-item-extra">{{item.value | numerical}}</i>
								</li>
							</ul>
						</div>
					</vui-col>
				</vui-row>
			</vui-tab-panel>
			<vui-tab-panel name="pageview" title="访问量">
				<vui-row v-bind:gutter="40">
					<vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="14" v-bind:lg="16" v-bind:xl="18">
						<div class="vui-pro-dashboard-analysis-trend">
							<h1 class="vui-pro-dashboard-analysis-trend-title">访问量趋势</h1>
							<div class="vui-pro-dashboard-analysis-trend-chart">
								<v-chart v-bind:forceFit="true" v-bind:height="272" v-bind:padding="[10, 0, 24, 30]" v-bind:scale="chartPageview.scale" v-bind:data="chartPageview.data">
									<v-tooltip v-bind:crosshairs="false" v-bind:useHtml="true" v-bind:htmlContent="getChartTooltipTemplate" />
									<v-axis />
									<v-area position="month*value" shape="smooth" color="#f0ad4e" v-bind:opacity="1" />
								</v-chart>
							</div>
						</div>
					</vui-col>
					<vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="10" v-bind:lg="8" v-bind:xl="6">
						<div class="vui-pro-dashboard-analysis-rank">
							<h1 class="vui-pro-dashboard-analysis-rank-title">访问量排名</h1>
							<ul class="vui-pro-dashboard-analysis-rank-list">
								<li v-for="(item, index) in rankPageview" v-bind:key="index" class="vui-pro-dashboard-analysis-rank-item">
									<i class="vui-pro-dashboard-analysis-rank-item-no">{{index + 1}}</i>
									<i class="vui-pro-dashboard-analysis-rank-item-title">{{item.name}}</i>
									<i class="vui-pro-dashboard-analysis-rank-item-extra">{{item.value | numerical}}</i>
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
				chartSales: {
					scale: [
						{ dataKey: "value", tickInterval: 200 }
					],
					data: [
						{ value: 960, month: "2020/01", title: "销售额" },
						{ value: 262, month: "2020/02", title: "销售额" },
						{ value: 768, month: "2020/03", title: "销售额" },
						{ value: 145, month: "2020/04", title: "销售额" },
						{ value: 426, month: "2020/05", title: "销售额" },
						{ value: 606, month: "2020/06", title: "销售额" },
						{ value: 320, month: "2020/07", title: "销售额" },
						{ value: 780, month: "2020/08", title: "销售额" },
						{ value: 240, month: "2020/09", title: "销售额" },
						{ value: 1020, month: "2020/10", title: "销售额" },
						{ value: 824, month: "2020/11", title: "销售额" },
						{ value: 780, month: "2020/12", title: "销售额" }
					]
				},
				rankSales: [
					{ value: 323234, name: "南京路 1 号店" },
					{ value: 323234, name: "南京路 2 号店" },
					{ value: 323234, name: "南京路 3 号店" },
					{ value: 323234, name: "南京路 4 号店" },
					{ value: 323234, name: "南京路 5 号店" },
					{ value: 323234, name: "南京路 6 号店" },
					{ value: 323234, name: "南京路 7 号店" },
					{ value: 323234, name: "南京路 8 号店" }
				],
				chartPageview: {
					scale: [
						{ dataKey: "value", tickInterval: 200 }
					],
					data: [
						{ value: 960, month: "2020/01", title: "访问量" },
						{ value: 262, month: "2020/02", title: "访问量" },
						{ value: 768, month: "2020/03", title: "访问量" },
						{ value: 145, month: "2020/04", title: "访问量" },
						{ value: 426, month: "2020/05", title: "访问量" },
						{ value: 606, month: "2020/06", title: "访问量" },
						{ value: 320, month: "2020/07", title: "访问量" },
						{ value: 780, month: "2020/08", title: "访问量" },
						{ value: 240, month: "2020/09", title: "访问量" },
						{ value: 1020, month: "2020/10", title: "访问量" },
						{ value: 824, month: "2020/11", title: "访问量" },
						{ value: 780, month: "2020/12", title: "访问量" }
					]
				},
				rankPageview: [
					{ value: 323234, name: "南京路 1 号店" },
					{ value: 323234, name: "南京路 2 号店" },
					{ value: 323234, name: "南京路 3 号店" },
					{ value: 323234, name: "南京路 4 号店" },
					{ value: 323234, name: "南京路 5 号店" },
					{ value: 323234, name: "南京路 6 号店" },
					{ value: 323234, name: "南京路 7 号店" },
					{ value: 323234, name: "南京路 8 号店" }
				]
			};
		},
		methods: {
			getChartTooltipTemplate(title, items) {
				let template = "";

				template += "<div class=\"g2-tooltip\">";
				template += "<ul class=\"g2-tooltip-list\">";
				items.forEach(item => {
					const data = item.point._origin;

					template += "<li class=\"g2-tooltip-list-item\">";
					template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
					template += "<label class=\"g2-tooltip-list-item-key\">" + data.title + "</label>";
					template += "<label class=\"g2-tooltip-list-item-value\">" + data.value + "</label>";
					template += "</li>";
				});
				template += "</ul>";
				template += "</div>";

				return template;
			}
		}
	};
</script>

<style>
	/* vui-pro-dashboard-analysis-tabs */
	.vui-pro-dashboard-analysis-tabs .vui-tabs-header { padding:0 20px; }
	.vui-pro-dashboard-analysis-tabs .vui-tab-panel .vui-tab-panel-content { padding:20px; }

	/* vui-pro-dashboard-analysis-trend */
	.vui-pro-dashboard-analysis-trend {  }
	.vui-pro-dashboard-analysis-trend-title { margin-bottom:20px; color:#8c8c8c; font-size:14px; line-height:1.42857142; }
	.vui-pro-dashboard-analysis-trend-chart { width:100%; height:272px; overflow:hidden; font-size:0; }

	/* vui-pro-dashboard-analysis-rank */
	.vui-pro-dashboard-analysis-rank {  }
	.vui-pro-dashboard-analysis-rank-title { margin-bottom:20px; color:#8c8c8c; font-size:14px; line-height:1.42857142; }
	.vui-pro-dashboard-analysis-rank-list {  }
	.vui-pro-dashboard-analysis-rank-item { display:flex; align-items:center; margin-top:16px; font-size:14px; line-height:1.42857142; }
	.vui-pro-dashboard-analysis-rank-item .vui-pro-dashboard-analysis-rank-item-no { width:20px; height:20px; border-radius:20px; background-color:#fafafa; margin-right:10px; color:#595959; font-style:italic; text-align:center; line-height:20px; }
	.vui-pro-dashboard-analysis-rank-item .vui-pro-dashboard-analysis-rank-item-title { flex:1; color:#595959; }
	.vui-pro-dashboard-analysis-rank-item .vui-pro-dashboard-analysis-rank-item-extra { margin-left:10px; color:#8c8c8c; }
	.vui-pro-dashboard-analysis-rank-item:nth-child(1) {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(1) .vui-pro-dashboard-analysis-rank-item-no { background-color:#eaf4fe; color:#2d8cf0; }
	.vui-pro-dashboard-analysis-rank-item:nth-child(1) .vui-pro-dashboard-analysis-rank-item-title {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(1) .vui-pro-dashboard-analysis-rank-item-extra {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(2) {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(2) .vui-pro-dashboard-analysis-rank-item-no { background-color:#fef7ed; color:#faad14; }
	.vui-pro-dashboard-analysis-rank-item:nth-child(2) .vui-pro-dashboard-analysis-rank-item-title {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(2) .vui-pro-dashboard-analysis-rank-item-extra {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(3) {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(3) .vui-pro-dashboard-analysis-rank-item-no { background-color:#fdeef0; color:#ed5565; }
	.vui-pro-dashboard-analysis-rank-item:nth-child(3) .vui-pro-dashboard-analysis-rank-item-title {  }
	.vui-pro-dashboard-analysis-rank-item:nth-child(3) .vui-pro-dashboard-analysis-rank-item-extra {  }
</style>