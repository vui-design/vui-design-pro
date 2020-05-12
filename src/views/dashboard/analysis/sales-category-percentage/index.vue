<template>
	<vui-card :bordered="false" title="销售额类型占比">
		<vui-radio-group slot="extra" type="button" size="small" v-model="category">
			<vui-radio label="全部渠道" value="0" />
			<vui-radio label="线上" value="1" />
			<vui-radio label="门店" value="2" />
		</vui-radio-group>
		<div class="vui-design-pro-dashboard-analysis-sales-category-percentage">
			<div class="vui-design-pro-dashboard-analysis-sales-category-percentage-chart">
				<div class="vui-design-pro-dashboard-analysis-sales-category-percentage-chart-title">
					<h1>销售额</h1>
					<p>¥ 15,801</p>
				</div>
				<div class="vui-design-pro-dashboard-analysis-sales-category-percentage-chart-main">
					<v-chart :width="250" :height="250" :padding="15" :data="chartDataSource" :scale="scale">
						<v-tooltip :showTitle="false" />
						<v-pie position="percent" color="title" :vStyle="pieStyle" />
						<v-coord type="theta" :radius="1" :innerRadius="0.7" />
					</v-chart>
				</div>
			</div>
			<div class="vui-design-pro-dashboard-analysis-sales-category-percentage-legend">
				<div v-for="(item, index) in data" :key="index" class="vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item" @click="handleClickLegendItem(item)">
					<i class="vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-marker" :style="{backgroundColor: item.disabled ? '#aaaaaa' : item.color}"></i>
					<span class="vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-title">{{item.title}}</span>
					<span class="vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-percentage">{{(item.percent * 100).toFixed(2)}}%</span>
					<span class="vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-value">￥{{item.value}}</span>
				</div>
			</div>
		</div>
	</vui-card>
</template>

<script>
	const data = [
		{ title: "家用电器", color: "#1890ff", disabled: false, value: 4544, percent: 0.28 },
		{ title: "食用酒水", color: "#13c2c2", disabled: false, value: 3321, percent: 0.21 },
		{ title: "个护健康", color: "#2fc25b", disabled: false, value: 3133, percent: 0.20 },
		{ title: "服侍箱包", color: "#facc14", disabled: false, value: 2341, percent: 0.15 },
		{ title: "母婴产品", color: "#f04864", disabled: false, value: 1231, percent: 0.08 },
		{ title: "其他", color: "#8543e0", disabled: false, value: 1231, percent: 0.08 }
	];
	const scale = [
		{
			dataKey: "percent",
			min: 0,
			formatter: ".0%"
		}
	];

	export default {
		data() {
			return {
				category: "0",
				data,
				scale,
				pieStyle: {
					stroke: "#fff",
					lineWidth: 2
				}
			};
		},
		computed: {
			chartDataSource() {
				return this.data.filter(item => item.disabled === false);
			}
		},
		methods: {
			handleClickLegendItem(item) {
				item.disabled = !item.disabled;
			}
		}
	};
</script>

<style>
	.vui-design-pro-dashboard-analysis-sales-category-percentage { position:relative; height:392px; }

	.vui-design-pro-dashboard-analysis-sales-category-percentage-chart { position:absolute; top:50%; left:20px; width:220px; height:220px; transform:translate(0, -50%); }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-chart-title { position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-chart-title h1 { color:#8c8c8c; font-size:14px; text-align:center; }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-chart-title p { margin-top:8px; color:#595959; font-size:20px; text-align:center; }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-chart-main { position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); }

	.vui-design-pro-dashboard-analysis-sales-category-percentage-legend { position:absolute; top:50%; right:20px; height:220px; transform:translate(0, -50%); }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item { cursor:pointer; margin-bottom:20px; font-size:0; line-height:1.42857142; }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-marker { display:inline-block; vertical-align:middle; width:8px; height:8px; border-radius:8px; margin-right:10px; }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-title { display:inline-block; width:80px; vertical-align:middle; color:#595959; font-size:14px; }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-percentage { display:inline-block; width:70px; vertical-align:middle; color:#8c8c8c; font-size:14px; }
	.vui-design-pro-dashboard-analysis-sales-category-percentage-legend-item-value { display:inline-block; vertical-align:middle; color:#595959; font-size:14px; }
</style>