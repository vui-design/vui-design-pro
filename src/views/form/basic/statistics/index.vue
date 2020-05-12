<template>
	<vui-row :gutter="20">
		<vui-col :span="6">
			<vui-card borderless>
				<vui-statistic title="访问量" :value="110888">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<highcharts :options="chartOptions1" style="height: 50px; margin-top: 15px;" />
				<vui-divider dashed style="margin: 15px 0;" />
				<div style="line-height: 1;">日访问量 1,234</div>
			</vui-card>
		</vui-col>
		<vui-col :span="6">
			<vui-card borderless>
				<vui-statistic title="总销售额" prefix="￥" :value="126560">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<highcharts :options="chartOptions2" style="height: 50px; margin-top: 15px;" />
				<vui-divider dashed style="margin: 15px 0;" />
				<div style="line-height: 1;">日销售额 ￥12,423</div>
			</vui-card>
		</vui-col>
		<vui-col :span="6">
			<vui-card borderless>
				<vui-statistic title="支付笔数" :value="6560">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<highcharts :options="chartOptions3" style="height: 50px; margin-top: 15px;" />
				<vui-divider dashed style="margin: 15px 0;" />
				<div style="line-height: 1;">转化率 60%</div>
			</vui-card>
		</vui-col>
		<vui-col :span="6">
			<vui-card borderless>
				<vui-statistic title="运营活动效果" suffix="%" :value="90">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<highcharts :options="chartOptions4" style="height: 50px; margin-top: 15px;" />
				<vui-divider dashed style="margin: 15px 0;" />
				<div style="line-height: 1;">
					<span>周同比 12% <vui-icon type="arrow-up" color="#ed5565" :size="12" /></span>
					<span>日同比 11% <vui-icon type="arrow-down" color="#5cb85c" :size="12" /></span>
				</div>
			</vui-card>
		</vui-col>
	</vui-row>
</template>

<script>
	export default {
		data() {
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
				chartOptions3: {
					chart: {
						type: "column",
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
							borderWidth: 0
						}
					},
					xAxis: {
						title: null,
						lineWidth: 0,
						tickWidth: 0,
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
							color: "#975fe4",
							data: [7, 5, 4, 3, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6]
						}
					]
				},
				chartOptions4: {
					chart: {
						type: "bullet",
						spacing: 0,
						inverted: true
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
						lineWidth: 0,
						tickWidth: 0,
						labels: {
							enabled: false
						},
						categories: ["2019-11"]
					},
					yAxis: {
						title: null,
						lineWidth: 0,
						tickWidth: 0,
						gridLineWidth: 0,
						labels: {
							enabled: false
						},
						plotBands: [
							{
								from: 0,
								to: 50,
								color: "rgba(45, 140, 240, 0.15)"
							},
							{
								from: 50,
								to: 75,
								color: "rgba(45, 140, 240, 0.10)"
							},
							{
								from: 75,
								to: 100,
								color: "rgba(45, 140, 240, 0.05)"
							}
						]
					},
					series: [
						{
							color: "#1ab394",
							data: [{y: 90, target: 80}]
						}
					]
				}
			};
		}
	};
</script>