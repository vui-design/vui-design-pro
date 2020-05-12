<template>
	<vui-card borderless title="销售额类型占比">
		<vui-radio-group slot="extra" type="button" size="small" v-model="category">
			<vui-radio label="全部渠道" value="0" />
			<vui-radio label="线上" value="1" />
			<vui-radio label="门店" value="2" />
		</vui-radio-group>
		<highcharts :options="chartOptions" />
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				category: "0",
				chartOptions: {
					chart: {
						type: "pie",
						spacing : [0, 0 , 0, 0]
					},
					title: {
						floating: true,
						align: "center",
						verticalAlign: "middle",
						y: -15,
						useHTML: true,
						text: `
							<div style="line-height: 1;">
								<h4 style="color: #8c8c8c; font-size: 14px; text-align: center;">销售额</h4>
								<div style="margin-top: 20px; color: #262626; font-size: 20px; text-align: center;">¥ 15,801</div>
							</div>
						`
					},
					legend: {
						enabled: true,
						symbolWidth: 10,
						symbolHeight: 10,
						itemMarginBottom: 10,
						itemStyle: {
							fontWeight: 400
						},
						useHTML: true,
						labelFormatter: function() {
							return `${this.name} ￥${this.y}`;
						}
					},
					tooltip: {
						useHTML: true,
						formatter: function() {
							return `
								<div style="font-size: 0;">
									<i style="display:inline-block; width: 4px; height: 4px; border-radius: 4px; background-color: ${this.color}; vertical-align: middle;"></i>
									<div style="display:inline-block; margin-left:5px; vertical-align: middle; font-size: 12px;">${this.key}</div>
									<div style="display:inline-block; margin-left:10px; vertical-align: middle; font-size: 12px;">${this.y}</div>
								</div>
							`;
						}
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: "pointer",
							dataLabels: {
								enabled: false
							},
							showInLegend: true
						}
					},
					series: [
						{
							innerSize: "60%",
							data: [
								{ name: "家用电器",   y: 4544 },
								{ name: "食用酒水",   y: 3321 },
								{ name: "个护健康",   y: 3133 },
								{ name: "服侍箱包",   y: 2341 },
								{ name: "母婴产品",   y: 1231 },
								{ name: "其他",   y: 1231 }
							]
						}
					]
				}
			};
		}
	};
</script>