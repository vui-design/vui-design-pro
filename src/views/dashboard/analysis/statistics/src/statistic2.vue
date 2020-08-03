<template>
	<vui-card v-bind:bordered="false">
		<vui-statistic v-bind:value="total" title="访问量">
			<vui-tooltip slot="extra" content="指标说明">
				<vui-icon type="info" />
			</vui-tooltip>
			<div slot="footer">
				<v-chart v-bind="chartSettings.view">
					<v-line v-bind="chartSettings.geom" />
					<v-tooltip v-bind="chartSettings.tooltip" />
				</v-chart>
			</div>
		</vui-statistic>
		<vui-divider dashed style="margin: 16px 0;" />
		<div style="line-height: 1;">日访问量 {{average | numerical}}</div>
	</vui-card>
</template>

<script>
	const getChartSettings = dataSource => {
		const view = {
			key: new Date().getTime(),
			forceFit: true,
			height: 50,
			padding: 0,
			scale: [
				{ dataKey: "date", type: "time" },
				{ dataKey: "value", min: 0 }
			],
			data: dataSource
		};

		const geom = {
			position: "date*value",
			shape: "smooth",
			opacity: 1,
			size: 2,
			color: "#5bc0de"
		};

		const tooltip = {
			showTitle: false,
			crosshairs: false,
			itemTpl: `
				<li data-index={index} class="g2-tooltip-list-item">
					<i class="g2-tooltip-list-item-marker" style="background-color: {color};"></i>
					<span class="g2-tooltip-list-item-key">{title}</span>
					<span class="g2-tooltip-list-item-value">{value}</span>
				</li>
			`
		};

		return { view, geom, tooltip };
	};

	export default {
		data() {
			return {
				total: 666666,
				average: 1234,
				chartSettings: getChartSettings([])
			};
		},
		created() {
			const dataSource = [
				{ date: "2020-01-01", value: 7 },
				{ date: "2020-01-02", value: 5 },
				{ date: "2020-01-03", value: 4 },
				{ date: "2020-01-04", value: 3 },
				{ date: "2020-01-05", value: 4 },
				{ date: "2020-01-06", value: 7 },
				{ date: "2020-01-07", value: 5 },
				{ date: "2020-01-08", value: 6 },
				{ date: "2020-01-09", value: 5 },
				{ date: "2020-01-10", value: 9 },
				{ date: "2020-01-11", value: 6 },
				{ date: "2020-01-12", value: 3 },
				{ date: "2020-01-13", value: 1 },
				{ date: "2020-01-14", value: 5 },
				{ date: "2020-01-15", value: 3 },
				{ date: "2020-01-16", value: 6 }
			];

			this.chartSettings = getChartSettings(dataSource);
		}
	};
</script>