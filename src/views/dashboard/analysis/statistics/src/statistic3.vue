<template>
	<vui-card v-bind:bordered="false" shadow="always">
		<vui-statistic v-bind:value="6060" title="支付笔数">
			<vui-tooltip slot="extra" style="display: block;" content="指标说明">
				<vui-icon type="info" />
			</vui-tooltip>
			<div slot="footer">
				<v-chart v-bind="chartSettings.root">
					<v-interval v-bind="chartSettings.geom" />
					<v-tooltip v-bind="chartSettings.tooltip" />
				</v-chart>
			</div>
		</vui-statistic>
		<vui-divider dashed style="margin: 16px 0;" />
		<div style="line-height: 1;">转化率 {{60}}%</div>
	</vui-card>
</template>

<script>
	const getChartSettings = dataSource => {
		const root = {
			key: new Date().getTime(),
			forceFit: true,
			height: 50,
			padding: [0, 0, 0, 0],
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
			color: "#975fe4"
		};

		const tooltip = {
			showTitle: false,
			crosshairs: false,
			useHtml: true,
			htmlContent(title, items) {
				let template = "";

				template += "<div class=\"g2-tooltip\">";
				template += "<ul class=\"g2-tooltip-list\">";
				items.forEach(item => {
					const data = item.point._origin;

					template += "<li class=\"g2-tooltip-list-item\">";
					template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
					template += "<label class=\"g2-tooltip-list-item-key\">" + data.date + "</label>";
					template += "<label class=\"g2-tooltip-list-item-value\">" + data.value + "</label>";
					template += "</li>";
				});
				template += "</ul>";
				template += "</div>";

				return template;
			}
		};

		return { root, geom, tooltip };
	};

	export default {
		data() {
			return {
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