<template>
	<vui-card v-bind:bordered="false" shadow="always" title="销售额类型占比">
		<vui-radio-group v-model="category" slot="extra" type="button" size="small">
			<vui-radio v-bind:value="1" label="线上" />
			<vui-radio v-bind:value="2" label="门店" />
			<vui-radio v-bind:value="0" label="全部渠道" />
		</vui-radio-group>
		<div class="vui-pro-dashboard-analysis-sales-category-percentage">
			<div class="vui-pro-dashboard-analysis-sales-category-percentage-chart">
				<div class="vui-pro-dashboard-analysis-sales-category-percentage-chart-title">
					<h1>销售额</h1>
					<p>¥ 15,801</p>
				</div>
				<div class="vui-pro-dashboard-analysis-sales-category-percentage-chart-main">
					<v-chart v-bind:width="250" v-bind:height="250" v-bind:padding="15" v-bind:scale="chart.scale" v-bind:data="chartData">
						<v-tooltip v-bind:showTitle="false" v-bind:crosshairs="false" v-bind:useHtml="true" v-bind:htmlContent="getChartTooltipTemplate" />
						<v-pie position="percentage" v-bind:color="chart.color" v-bind:vStyle="chart.pieStyle" />
						<v-coord type="theta" v-bind:radius="1" v-bind:innerRadius="0.7" />
					</v-chart>
				</div>
			</div>
			<div class="vui-pro-dashboard-analysis-sales-category-percentage-legend">
				<div v-for="(item, index) in chart.data" v-bind:key="index" class="vui-pro-dashboard-analysis-sales-category-percentage-legend-item" v-on:click="handleClickLegendItem(item)">
					<i class="vui-pro-dashboard-analysis-sales-category-percentage-legend-item-marker" v-bind:style="{backgroundColor: item.disabled ? '#aaaaaa' : item.color}"></i>
					<span class="vui-pro-dashboard-analysis-sales-category-percentage-legend-item-title">{{item.title}}</span>
					<span class="vui-pro-dashboard-analysis-sales-category-percentage-legend-item-percentage">{{(item.percentage * 100).toFixed(2)}}%</span>
					<span class="vui-pro-dashboard-analysis-sales-category-percentage-legend-item-value">￥{{item.value | numerical}}</span>
				</div>
			</div>
		</div>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				category: 0,
				chart: {
					scale: [
						{ dataKey: "percentage", min: 0, formatter: ".0%" }
					],
					data: [
						{ value: 4544, percentage: 0.28, disabled: false, color: "#1890ff", title: "家用电器" },
						{ value: 3321, percentage: 0.21, disabled: false, color: "#13c2c2", title: "食用酒水" },
						{ value: 3133, percentage: 0.20, disabled: false, color: "#2fc25b", title: "个护健康" },
						{ value: 2341, percentage: 0.15, disabled: false, color: "#facc14", title: "服侍箱包" },
						{ value: 1231, percentage: 0.08, disabled: false, color: "#f04864", title: "母婴产品" },
						{ value: 1231, percentage: 0.08, disabled: false, color: "#8543e0", title: "其他" }
					],
					color: ["color", value => value],
					pieStyle: {
						stroke: "#fff",
						lineWidth: 4
					}
				}
			};
		},
		computed: {
			chartData() {
				return this.chart.data.filter(item => item.disabled === false);
			}
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
			},
			handleClickLegendItem(item) {
				item.disabled = !item.disabled;
			}
		}
	};
</script>

<style>
	.vui-pro-dashboard-analysis-sales-category-percentage { display:flex; justify-content:space-around; align-items:center; height:404px; }

	.vui-pro-dashboard-analysis-sales-category-percentage-chart { position:relative; width:220px; height:220px; }
	.vui-pro-dashboard-analysis-sales-category-percentage-chart-title { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); }
	.vui-pro-dashboard-analysis-sales-category-percentage-chart-title h1 { color:#8c8c8c; font-size:16px; text-align:center; }
	.vui-pro-dashboard-analysis-sales-category-percentage-chart-title p { margin-top:8px; color:#595959; font-size:24px; text-align:center; }
	.vui-pro-dashboard-analysis-sales-category-percentage-chart-main { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); }

	.vui-pro-dashboard-analysis-sales-category-percentage-legend { width:220px; height:220px; }
	.vui-pro-dashboard-analysis-sales-category-percentage-legend-item { display:flex; align-items:center; cursor:pointer; margin-bottom:20px; color:#595959; font-size:14px; line-height:1.42857142; }
	.vui-pro-dashboard-analysis-sales-category-percentage-legend-item-marker { display:block; width:8px; height:8px; border-radius:8px; margin-right:10px; }
	.vui-pro-dashboard-analysis-sales-category-percentage-legend-item-title { flex:1; display:block; }
	.vui-pro-dashboard-analysis-sales-category-percentage-legend-item-percentage { display:block; width:70px; color:#8c8c8c; text-align:right; }
	.vui-pro-dashboard-analysis-sales-category-percentage-legend-item-value { display:block; width:60px; text-align:right; }
</style>