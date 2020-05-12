<template>
	<vui-card :bordered="false" title="线上热门搜索">
		<vui-row :gutter="40">
			<vui-col :span="12">
				<vui-statistic title="搜索用户数" :value="12345">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<div style="margin-top: 15px; overflow: hidden; font-size: 0;">
					<v-chart :forceFit="true" :height="50" :padding="0" :data="chart1Options.data" :scale="chart1Options.scale">
						<v-tooltip :showTitle="false" :crosshairs="false" :itemTpl="getTooltipItemTemplate()" />
						<v-area position="date*value" shape="smooth" color="#2d8cf0" :opacity="0.5" />
						<v-line position="date*value" shape="smooth" color="#2d8cf0" :opacity="1" :size="2" />
					</v-chart>
				</div>
			</vui-col>
			<vui-col :span="12">
				<vui-statistic title="人均搜索次数" :value="2.8">
					<vui-tooltip slot="extra" content="指标说明">
						<vui-icon type="info" />
					</vui-tooltip>
				</vui-statistic>
				<div style="margin-top: 15px; overflow: hidden; font-size: 0;">
					<v-chart :forceFit="true" :height="50" :padding="0" :data="chart1Options.data" :scale="chart1Options.scale">
						<v-tooltip :showTitle="false" :crosshairs="false" :itemTpl="getTooltipItemTemplate()" />
						<v-area position="date*value" shape="smooth" color="#2d8cf0" :opacity="0.5" />
						<v-line position="date*value" shape="smooth" color="#2d8cf0" :opacity="1" :size="2" />
					</v-chart>
				</div>
			</vui-col>
		</vui-row>
		<vui-table class="margin-top-20" :columns="dataTableOptions.columns" :data="dataTableOptions.data" />
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
							sorter: true,
							render(h, column, row) {
								let icon;

								if (row.trend === "up") {
									icon = (
										<vui-icon type="arrow-up" size="12" color="#ed5565" />
									);
								}
								else {
									icon = (
										<vui-icon type="arrow-down" size="12" color="#5cb85c" />
									);
								}

								return (
									<div>
										<span style="margin-right: 10px;">{row[column.dataIndex]}</span>
										<span>{icon}</span>
									</div>
								);
							}
						}
					],
					data: [
						{
							key: 1,
							no: 1,
							keyword: "搜索关键词1",
							total: 988,
							gain: "22%",
							trend: "up"
						},
						{
							key: 2,
							no: 2,
							keyword: "搜索关键词2",
							total: 962,
							gain: "11%",
							trend: "up"
						},
						{
							key: 3,
							no: 3,
							keyword: "搜索关键词3",
							total: 718,
							gain: "44%",
							trend: "down"
						},
						{
							key: 4,
							no: 4,
							keyword: "搜索关键词4",
							total: 656,
							gain: "11%",
							trend: "up"
						},
						{
							key: 5,
							no: 5,
							keyword: "搜索关键词5",
							total: 888,
							gain: "50%",
							trend: "down"
						}
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