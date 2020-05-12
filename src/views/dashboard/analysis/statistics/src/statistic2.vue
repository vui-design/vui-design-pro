<template>
	<vui-card :bordered="false">
		<vui-statistic title="总销售额" prefix="￥" :value="666666">
			<vui-tooltip slot="extra" content="指标说明">
				<vui-icon type="info" />
			</vui-tooltip>
		</vui-statistic>
		<div style="margin-top: 15px; overflow: hidden; font-size: 0;">
			<v-chart :forceFit="true" :height="50" :padding="0" :data="data" :scale="scale">
				<v-tooltip :showTitle="false" :crosshairs="false" :itemTpl="getTooltipItemTemplate()" />
				<v-line position="date*value" shape="smooth" color="#5bc0de" :opacity="1" :size="2" />
			</v-chart>
		</div>
		<vui-divider dashed style="margin: 15px 0;" />
		<div style="line-height: 1;">日销售额 ￥1,234</div>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				data:  [
					{ date: "2019-10-01", value: 7 },
					{ date: "2019-10-02", value: 5 },
					{ date: "2019-10-03", value: 4 },
					{ date: "2019-10-04", value: 3 },
					{ date: "2019-10-05", value: 4 },
					{ date: "2019-10-06", value: 7 },
					{ date: "2019-10-07", value: 5 },
					{ date: "2019-10-08", value: 6 },
					{ date: "2019-10-09", value: 5 },
					{ date: "2019-10-10", value: 9 },
					{ date: "2019-10-11", value: 6 },
					{ date: "2019-10-12", value: 3 },
					{ date: "2019-10-13", value: 1 },
					{ date: "2019-10-14", value: 5 },
					{ date: "2019-10-15", value: 3 },
					{ date: "2019-10-16", value: 6 }
				],
				scale: [
					{ dataKey: "date" },
					{ dataKey: "value" }
				]
			};
		},
		methods: {
			getTooltipItemTemplate() {
				return `
					<li data-index={index} style="white-space: nowrap;">
						<i style="display: inline-block; width: 6px; height: 6px; border-radius: 6px; background-color: {color}; margin-right: 5px; vertical-align: middle;"></i>
						<span style="display: inline-block; vertical-align: middle;">{title}</span>
						<span style="display: inline-block; margin-left: 10px; vertical-align: middle;">{value}</span>
					</li>
				`;
			}
		}
	};
</script>