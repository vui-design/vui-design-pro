<template>
	<div>

		<vui-card v-bind:bordered="false" shadow="always">
			<vui-form ref="searcher" layout="inline">
				<vui-form-item>
					<vui-input v-model="searcher.daterange" placeholder="请选择时间范围" />
				</vui-form-item>
				<vui-form-item>
					<vui-select v-model="searcher.zone" style="width: 170px;" placeholder="所属大区">
						<vui-option v-bind:value="0">所有大区</vui-option>
						<vui-option v-bind:value="1">梦1大区 - 全部</vui-option>
						<vui-option v-bind:value="2">梦2大区 - 全部</vui-option>
						<vui-option v-bind:value="3">Wegame大区 - 全部</vui-option>
						<vui-option v-bind:value="4">梦1大区 - 七星合一</vui-option>
						<vui-option v-bind:value="5">梦2大区 - 火烧赤壁</vui-option>
						<vui-option v-bind:value="6">梦2大区 - 草船借箭</vui-option>
					</vui-select>
				</vui-form-item>
				<vui-form-item>
					<vui-button v-on:click="handleResetSearch">重置</vui-button>
					<vui-button type="primary" class="margin-left-10" v-on:click="handleSearch">查询</vui-button>
				</vui-form-item>
			</vui-form>
		</vui-card>

		<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20" bodyStyle="padding: 0;">
			<vui-tabs v-model="tabpanel" size="large" headerStyle="margin-bottom: 0; padding: 0 20px;">
				<vui-tab-panel name="full" title="累充用户趋势">
					<div class="padding-20">
						<v-chart v-bind="full.chart.root">
							<v-line v-bind="full.chart.geom" />
							<v-axis v-bind="full.chart.axisx" />
							<v-axis v-bind="full.chart.axisy" />
							<v-legend v-bind="full.chart.legend" />
							<v-tooltip v-bind="full.chart.tooltip" />
						</v-chart>
					</div>
					<div class="padding-20" style="border-top: 1px solid #f4f6f8;">
						<vui-table v-bind="full.list" rowKey="action_date">
							<template slot="echarge_cnt1" slot-scope="{ row }">{{row.echarge_cnt1 | numerical}}</template>
							<template slot="echarge_cnt2" slot-scope="{ row }">{{row.echarge_cnt2 | numerical}}</template>
							<template slot="echarge_cnt3" slot-scope="{ row }">{{row.echarge_cnt3 | numerical}}</template>
							<template slot="echarge_cnt4" slot-scope="{ row }">{{row.echarge_cnt4 | numerical}}</template>
							<template slot="echarge_cnt5" slot-scope="{ row }">{{row.echarge_cnt5 | numerical}}</template>
							<template slot="echarge_cnt6" slot-scope="{ row }">{{row.echarge_cnt6 | numerical}}</template>
							<template slot="echarge_cnt7" slot-scope="{ row }">{{row.echarge_cnt7 | numerical}}</template>
							<template slot="echarge_cnt8" slot-scope="{ row }">{{row.echarge_cnt8 | numerical}}</template>
							<template slot="echarge_cnt9" slot-scope="{ row }">{{row.echarge_cnt9 | numerical}}</template>
							<template slot="echarge_cnt10" slot-scope="{ row }">{{row.echarge_cnt10 | numerical}}</template>
							<template slot="echarge_cnt11" slot-scope="{ row }">{{row.echarge_cnt11 | numerical}}</template>
							<template slot="echarge_cnt_all" slot-scope="{ row }">{{row.echarge_cnt_all | numerical}}</template>
						</vui-table>
					</div>
				</vui-tab-panel>
				<vui-tab-panel name="supreme" title="至尊用户趋势">
					<div class="padding-20">
						<v-chart v-bind="supreme.chart.root">
							<v-line v-bind="supreme.chart.geom" />
							<v-axis v-bind="supreme.chart.axisx" />
							<v-axis v-bind="supreme.chart.axisy" />
							<v-legend />
							<v-tooltip v-bind="supreme.chart.tooltip" />
						</v-chart>
					</div>
					<div class="padding-20" style="border-top: 1px solid #f4f6f8;">
						<vui-table v-bind="full.list" rowKey="action_date">
							<template slot="echarge_cnt1" slot-scope="{ row }">{{row.echarge_cnt1 | numerical}}</template>
							<template slot="echarge_cnt2" slot-scope="{ row }">{{row.echarge_cnt2 | numerical}}</template>
							<template slot="echarge_cnt3" slot-scope="{ row }">{{row.echarge_cnt3 | numerical}}</template>
							<template slot="echarge_cnt4" slot-scope="{ row }">{{row.echarge_cnt4 | numerical}}</template>
							<template slot="echarge_cnt5" slot-scope="{ row }">{{row.echarge_cnt5 | numerical}}</template>
							<template slot="echarge_cnt6" slot-scope="{ row }">{{row.echarge_cnt6 | numerical}}</template>
							<template slot="echarge_cnt7" slot-scope="{ row }">{{row.echarge_cnt7 | numerical}}</template>
							<template slot="echarge_cnt8" slot-scope="{ row }">{{row.echarge_cnt8 | numerical}}</template>
							<template slot="echarge_cnt9" slot-scope="{ row }">{{row.echarge_cnt9 | numerical}}</template>
							<template slot="echarge_cnt10" slot-scope="{ row }">{{row.echarge_cnt10 | numerical}}</template>
							<template slot="echarge_cnt11" slot-scope="{ row }">{{row.echarge_cnt11 | numerical}}</template>
							<template slot="echarge_cnt_all" slot-scope="{ row }">{{row.echarge_cnt_all | numerical}}</template>
						</vui-table>
					</div>
				</vui-tab-panel>
			</vui-tabs>
		</vui-card>

	</div>
</template>

<script>
	import DataSet from "@antv/data-set";

	const columns = [
		{ key: "action_date", dataIndex: "action_date", fixed: "left", width: 120, align: "center", ellipsis: true, sorter: true, title: "日期/星标" },
		{ key: "echarge_cnt1", dataIndex: "echarge_cnt1", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt1", title: "1-9" },
		{ key: "echarge_cnt2", dataIndex: "echarge_cnt2", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt2", title: "10-49" },
		{ key: "echarge_cnt3", dataIndex: "echarge_cnt3", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt3", title: "50-99" },
		{ key: "echarge_cnt4", dataIndex: "echarge_cnt4", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt4", title: "100-199" },
		{ key: "echarge_cnt5", dataIndex: "echarge_cnt5", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt5", title: "200-499" },
		{ key: "echarge_cnt6", dataIndex: "echarge_cnt6", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt6", title: "500-999" },
		{ key: "echarge_cnt7", dataIndex: "echarge_cnt7", width: 120, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt7", title: "1000-1999" },
		{ key: "echarge_cnt8", dataIndex: "echarge_cnt8", width: 120, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt8", title: "2000-2999" },
		{ key: "echarge_cnt9", dataIndex: "echarge_cnt9", width: 120, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt9", title: "3000-4999" },
		{ key: "echarge_cnt10", dataIndex: "echarge_cnt10", width: 120, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt10", title: "5000-9999" },
		{ key: "echarge_cnt11", dataIndex: "echarge_cnt11", width: 100, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt11", title: "10000+" },
		{ key: "echarge_cnt_all", dataIndex: "echarge_cnt_all", width: 80, align: "right", ellipsis: true, sorter: true, slot: "echarge_cnt_all", title: "总计" }
	];

	const data = [
		{ action_date: "2020-08-01", echarge_cnt1: 9625, echarge_cnt2: 43164, echarge_cnt3: 46750, echarge_cnt4: 27831, echarge_cnt5: 24628, echarge_cnt6: 19777, echarge_cnt7: 11049, echarge_cnt8: 3051, echarge_cnt9: 1945, echarge_cnt10: 1381, echarge_cnt11: 463, echarge_cnt_all: 189664 },
		{ action_date: "2020-08-02", echarge_cnt1: 9738, echarge_cnt2: 43035, echarge_cnt3: 46557, echarge_cnt4: 27695, echarge_cnt5: 24540, echarge_cnt6: 19786, echarge_cnt7: 11091, echarge_cnt8: 3007, echarge_cnt9: 1913, echarge_cnt10: 1379, echarge_cnt11: 474, echarge_cnt_all: 189215 },
		{ action_date: "2020-08-03", echarge_cnt1: 9712, echarge_cnt2: 42305, echarge_cnt3: 46448, echarge_cnt4: 27442, echarge_cnt5: 24597, echarge_cnt6: 19818, echarge_cnt7: 11143, echarge_cnt8: 2970, echarge_cnt9: 1956, echarge_cnt10: 1346, echarge_cnt11: 467, echarge_cnt_all: 188204 },
		{ action_date: "2020-08-04", echarge_cnt1: 9682, echarge_cnt2: 41992, echarge_cnt3: 46982, echarge_cnt4: 27413, echarge_cnt5: 24741, echarge_cnt6: 20036, echarge_cnt7: 11209, echarge_cnt8: 2913, echarge_cnt9: 1987, echarge_cnt10: 1329, echarge_cnt11: 457, echarge_cnt_all: 188741 },
		{ action_date: "2020-08-05", echarge_cnt1: 9697, echarge_cnt2: 41448, echarge_cnt3: 47556, echarge_cnt4: 27412, echarge_cnt5: 24919, echarge_cnt6: 20274, echarge_cnt7: 11351, echarge_cnt8: 2837, echarge_cnt9: 2016, echarge_cnt10: 1302, echarge_cnt11: 437, echarge_cnt_all: 189249 },
		{ action_date: "2020-08-06", echarge_cnt1: 9741, echarge_cnt2: 41186, echarge_cnt3: 48205, echarge_cnt4: 27587, echarge_cnt5: 25184, echarge_cnt6: 20309, echarge_cnt7: 11430, echarge_cnt8: 2744, echarge_cnt9: 2009, echarge_cnt10: 1218, echarge_cnt11: 405, echarge_cnt_all: 190018 },
		{ action_date: "2020-08-07", echarge_cnt1: 9555, echarge_cnt2: 40794, echarge_cnt3: 48953, echarge_cnt4: 27667, echarge_cnt5: 25215, echarge_cnt6: 20430, echarge_cnt7: 11416, echarge_cnt8: 2694, echarge_cnt9: 2021, echarge_cnt10: 1179, echarge_cnt11: 399, echarge_cnt_all: 190323 },
		{ action_date: "2020-08-08", echarge_cnt1: 10463, echarge_cnt2: 44368, echarge_cnt3: 41856, echarge_cnt4: 26379, echarge_cnt5: 24838, echarge_cnt6: 17142, echarge_cnt7: 8574, echarge_cnt8: 1555, echarge_cnt9: 1800, echarge_cnt10: 664, echarge_cnt11: 213, echarge_cnt_all: 177852 },
		{ action_date: "2020-08-09", echarge_cnt1: 10590, echarge_cnt2: 44943, echarge_cnt3: 39440, echarge_cnt4: 25693, echarge_cnt5: 24253, echarge_cnt6: 15826, echarge_cnt7: 7748, echarge_cnt8: 1370, echarge_cnt9: 1661, echarge_cnt10: 600, echarge_cnt11: 192, echarge_cnt_all: 172316 },
		{ action_date: "2020-08-10", echarge_cnt1: 10852, echarge_cnt2: 44945, echarge_cnt3: 37855, echarge_cnt4: 25501, echarge_cnt5: 24057, echarge_cnt6: 15026, echarge_cnt7: 7241, echarge_cnt8: 1280, echarge_cnt9: 1561, echarge_cnt10: 545, echarge_cnt11: 173, echarge_cnt_all: 169036 },
		{ action_date: "2020-08-11", echarge_cnt1: 10691, echarge_cnt2: 44557, echarge_cnt3: 36760, echarge_cnt4: 25045, echarge_cnt5: 24163, echarge_cnt6: 14993, echarge_cnt7: 7447, echarge_cnt8: 1385, echarge_cnt9: 1508, echarge_cnt10: 608, echarge_cnt11: 211, echarge_cnt_all: 167368 }
	];

	const getChartSettings = function(columns, dataSource) {
		dataSource = new DataSet.View().source(dataSource);
		dataSource.transform({
			type: "fold",
			fields: ["echarge_cnt1", "echarge_cnt2", "echarge_cnt3", "echarge_cnt4", "echarge_cnt5", "echarge_cnt6", "echarge_cnt7", "echarge_cnt8", "echarge_cnt9", "echarge_cnt10", "echarge_cnt11"],
			key: "type",
			value: "value"
		});
		dataSource = dataSource.rows;

		return {
			root: {
				key: new Date().getTime(),
				forceFit: true,
				animate: false,
				height: 480,
				padding: ["auto", "auto", "auto", "auto"],
				scale: [
					{ dataKey: "action_date", type: "time", range: [0, 1], tickCount: 16 },
					{ dataKey: "value", tickCount: 8 }
				],
				data: dataSource
			},
			geom: {
				position: "action_date*value",
				shape: "smooth",
				color: "type"
			},
			axisx: {
				dataKey: "action_date",
				label: {
					textStyle: {
						fill: "#8c8c8c"
					}
				}
			},
			axisy: {
				dataKey: "value",
				label: {
					textStyle: {
						fill: "#8c8c8c"
					},
					formatter(text) {
						return text.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
					}
				}
			},
			legend: {
				itemFormatter(value) {
					const target = columns.find(column => column.dataIndex === value);

					return target ? target.title : value;
				}
			},
			tooltip: {
				useHtml: true,
				htmlContent(title, items) {
					let template = "";

					template += "<div class=\"g2-tooltip\">";
					template += "<div class=\"g2-tooltip-title\">" + title + "</div>";
					template += "<ul class=\"g2-tooltip-list\">";
					items.forEach(item => {
						const data = item.point._origin;
						const target = columns.find(column => column.dataIndex === data.type);

						const color = item.color;
						const key = target ? target.title : data.type;
						const value = String(data.value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

						template += "<li class=\"g2-tooltip-list-item\">";
						template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + color + ";\"></i>";
						template += "<label class=\"g2-tooltip-list-item-key\">" + key + "</label>";
						template += "<label class=\"g2-tooltip-list-item-value\">" + value + "</label>";
						template += "</li>";
					});
					template += "</ul>";
					template += "</div>";

					return template;
				}
			}
		};
	};

	export default {
		data() {
			return {
				searcher: {
					daterange: "2020-01-01 ~ 2020-01-07",
					zone: 0
				},

				tabpanel: "full",

				full: {
					chart: getChartSettings(columns, data),
					list: {
						loading: false,
						scroll: {
							x: 1380
						},
						columns: columns,
						data: data
					}
				},

				supreme: {
					chart: getChartSettings(columns, data),
					list: {
						loading: false,
						scroll: {
							x: 1380
						},
						columns: columns,
						data: data
					}
				}
			};
		},

		methods: {
			getDataSource() {
				let payload = {
					...this.searcher
				};
			},
			handleResetSearch(name) {
				this.$refs.searcher.reset();
				this.getDataSource();
			},
			handleSearch() {
				this.getDataSource();
			}
		},

		created() {

		}
	};
</script>