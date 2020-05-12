<template>
	<vui-card borderless title="线上热门搜索">
		<vui-row :gutter="40">
			<vui-col :span="12">
				<vui-statistic title="搜索用户数" :value="12345">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<highcharts :options="chartOptions1" style="height: 50px; margin-top: 15px;" />
			</vui-col>
			<vui-col :span="12">
				<vui-statistic title="人均搜索次数" :value="2.8">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<highcharts :options="chartOptions2" style="height: 50px; margin-top: 15px;" />
			</vui-col>
		</vui-row>
		<vui-table class="margin-top-20" :columns="columns" :data="data" />
	</vui-card>
</template>

<script>
	export default {
		data() {
			const columns = [
				{
					key: "no",
					dataIndex: "no",
					title: "排名",
					width: 80
				},
				{
					key: "keyword",
					dataIndex: "keyword",
					title: "搜索关键词"
				},
				{
					key: "total",
					dataIndex: "total",
					title: "用户数",
					sorter: true
				},
				{
					key: "gain",
					dataIndex: "gain",
					title: "周涨幅",
					sorter: true
				}
			];

			const data = [
				{
					key: 1,
					no: 1,
					keyword: "搜索关键词1",
					total: 988,
					gain: "22%"
				},
				{
					key: 2,
					no: 2,
					keyword: "搜索关键词2",
					total: 962,
					gain: "11%"
				},
				{
					key: 3,
					no: 3,
					keyword: "搜索关键词3",
					total: 718,
					gain: "44%"
				},
				{
					key: 4,
					no: 4,
					keyword: "搜索关键词4",
					total: 656,
					gain: "11%"
				},
				{
					key: 5,
					no: 5,
					keyword: "搜索关键词5",
					total: 888,
					gain: "50%"
				}
			];

			return {
				chartOptions1: {
					chart: {
						type: "areaspline",
						spacing: 0
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
							lineWidth: 0,
							states: {
								hover: {
									lineWidth: 0,
									lineWidthPlus: 0
								}
							},
							marker: {
								lineWidth: 0,
								radius: 0,
								states: {
									hover: {
										lineWidth: 0,
										radius: 2
									}
								}
							}
						}
					},
					xAxis: {
						title: null,
						lineWidth: 0,
						tickWidth: 0,
						tickmarkPlacement: "on",
						labels: {
							enabled: false
						},
						categories: [ "2019-11-01", "2019-11-02", "2019-11-03", "2019-11-04", "2019-11-05", "2019-11-06", "2019-11-07", "2019-11-08", "2019-11-09", "2019-11-10", "2019-11-11", "2019-11-12", "2019-11-13", "2019-11-14", "2019-11-15"]
					},
					yAxis: {
						title: null,
						lineWidth: 0,
						tickWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					series: [
						{
							color: "#2d8cf0",
							data: [7, 5, 4, 3, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6]
						}
					]
				},
				chartOptions2: {
					chart: {
						type: "spline",
						spacing: 0
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
							states: {
								hover: {
									lineWidth: 0,
									lineWidthPlus: 0
								}
							},
							marker: {
								lineWidth: 0,
								radius: 0,
								states: {
									hover: {
										lineWidth: 0,
										radius: 2
									}
								}
							}
						}
					},
					xAxis: {
						title: null,
						lineWidth: 0,
						tickWidth: 0,
						tickmarkPlacement: "on",
						labels: {
							enabled: false
						},
						categories: [ "2019-11-01", "2019-11-02", "2019-11-03", "2019-11-04", "2019-11-05", "2019-11-06", "2019-11-07", "2019-11-08", "2019-11-09", "2019-11-10", "2019-11-11", "2019-11-12", "2019-11-13", "2019-11-14", "2019-11-15"]
					},
					yAxis: {
						title: null,
						lineWidth: 0,
						tickWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						}
					},
					series: [
						{
							color: "#5bc0de",
							data: [7, 5, 4, 3, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6]
						}
					]
				},
				columns,
				data
			};
		}
	};
</script>