<template>
	<vui-card v-bind:bordered="false" title="线上热门搜索">
		<vui-row v-bind:gutter="40">
			<vui-col v-bind:span="12">
				<vui-statistic v-bind:value="12345" title="搜索用户数">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<div style="margin-top: 15px; overflow: hidden; font-size: 0;">
					<v-chart v-bind:forceFit="true" v-bind:height="50" v-bind:padding="0" v-bind:data="chart1Options.data" v-bind:scale="chart1Options.scale">
						<v-tooltip v-bind:showTitle="false" v-bind:crosshairs="false" v-bind:itemTpl="getTooltipItemTemplate()" />
						<v-area position="date*value" shape="smooth" color="#2d8cf0" v-bind:opacity="0.5" />
						<v-line position="date*value" shape="smooth" color="#2d8cf0" v-bind:opacity="1" v-bind:size="2" />
					</v-chart>
				</div>
			</vui-col>
			<vui-col v-bind:span="12">
				<vui-statistic title="人均搜索次数" v-bind:value="2.8">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<div style="margin-top: 15px; overflow: hidden; font-size: 0;">
					<v-chart v-bind:forceFit="true" v-bind:height="50" v-bind:padding="0" v-bind:data="chart1Options.data" v-bind:scale="chart1Options.scale">
						<v-tooltip v-bind:showTitle="false" v-bind:crosshairs="false" v-bind:itemTpl="getTooltipItemTemplate()" />
						<v-area position="date*value" shape="smooth" color="#2d8cf0" v-bind:opacity="0.5" />
						<v-line position="date*value" shape="smooth" color="#2d8cf0" v-bind:opacity="1" v-bind:size="2" />
					</v-chart>
				</div>
			</vui-col>
		</vui-row>
		<vui-table v-bind:columns="dataTableOptions.columns" v-bind:data="dataTableOptions.data" class="margin-top-20" getRowKey="id">
			<template slot="no" slot-scope="{ row, index }">{{index + 1}}</template>
			<template slot="gain" slot-scope="{ row, index }">
				<span style="margin-right: 10px;">{{row.gain}}</span>
				<vui-icon v-if="row.trend === 'up'" type="arrow-up" v-bind:size="12" color="#ed5565" />
				<vui-icon v-else type="arrow-down" v-bind:size="12" color="#5cb85c" />
			</template>
		</vui-table>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				chart1Options: {
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
				},
				chart2Options: {
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
				},
				dataTableOptions: {
					columns: [
						{ key: "no", width: 80, slot: "no", title: "排名" },
						{ key: "keyword", dataIndex: "keyword", title: "搜索关键词" },
						{ key: "total", dataIndex: "total", sorter: true, title: "用户数" },
						{ key: "gain", dataIndex: "gain", sorter: true, slot: "gain", title: "周涨幅" }
					],
					data: [
						{ id: 1, keyword: "搜索关键词1", total: 988, gain: "22%", trend: "up" },
						{ id: 2, keyword: "搜索关键词2", total: 962, gain: "11%", trend: "up" },
						{ id: 3, keyword: "搜索关键词3", total: 718, gain: "44%", trend: "down" },
						{ id: 4, keyword: "搜索关键词4", total: 656, gain: "11%", trend: "up" },
						{ id: 5, keyword: "搜索关键词5", total: 888, gain: "50%", trend: "down" }
					]
				}
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