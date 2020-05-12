<template>
	<vui-card :bordered="false">
		<vui-statistic title="运营活动效果" suffix="%" :value="90">
			<vui-tooltip slot="extra" content="指标说明">
				<vui-icon type="info" />
			</vui-tooltip>
		</vui-statistic>
		<div style="margin-top: 15px; overflow: hidden; font-size: 0;">
			<v-chart :forceFit="true" :height="50" :padding="0" :data="data" :scale="scale">
				<v-tooltip :showTitle="false" :crosshairs="false" />
				<v-view v-for="(item, i) in data" :key="i" :data="[item]" :scale="getScale(item, i)">
					<v-coord type="rect" direction="LB" />
					<v-interval position="title*actual" color="#1ab394" :size="10" />
					<v-point position="title*target" color="#09192a" shape="line" :size="10" :v-style="{lineWidth: 2}" />
					<v-guide type="region" :start="getGuide(item, 0, 'start')" :end="getGuide(item, 0, 'end')" :v-style="{fill: '#ffa39e', fillOpacity: 0.25}"/>
					<v-guide type="region" :start="getGuide(item, 1, 'start')" :end="getGuide(item, 1, 'end')" :v-style="{fill: '#ffd591', fillOpacity: 0.25}"/>
					<v-guide type="region" :start="getGuide(item, 2, 'start')" :end="getGuide(item, 2, 'end')" :v-style="{fill: '#a7e8b4', fillOpacity: 0.25}"/>
				</v-view>
			</v-chart>
		</div>
		<vui-divider dashed style="margin: 15px 0;" />
		<div style="line-height: 1;">
			<span>周同比 12% <vui-icon type="arrow-up" color="#ed5565" :size="12" /></span>
			<span>日同比 11% <vui-icon type="arrow-down" color="#5cb85c" :size="12" /></span>
		</div>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				data:  [
					{ "title": "Activity effect", "subtitle": "Activity effect", ranges: [50, 75, 100], target: 80, actual: 90 }
				],
				scale: [
					{ dataKey: "target" },
					{ dataKey: "actual" }
				]
			};
		},
		methods: {
			getScale(item, i) {
				const ranges = item.ranges;

				return [
					{
						dataKey: "target",
						min: 0,
						max: ranges[2],
						nice: false
					},
					{
						dataKey: "actual",
						min: 0,
						max: ranges[2],
						nice: false
					}
				];
			},
			getGuide(viewData, guideIndex, position) {
				const ranges = viewData.ranges;
				const guide = [
					{
						start: [-1, 0],
						end:[1, ranges[0]]
					},
					{
						start: [-1, ranges[0]],
						end: [1, ranges[1]]
					},
					{
						start: [-1, ranges[1]],
						end: [1, ranges[2]]
					}
				];

				return guide[guideIndex][position];
			},
		}
	};
</script>