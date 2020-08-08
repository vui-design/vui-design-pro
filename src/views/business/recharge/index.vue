<template>
	<div>

		<vui-card v-bind:bordered="false" shadow="always">
			<vui-form ref="searcher" layout="inline">
				<vui-form-item>
					<vui-radio-group v-model="searcher.range" type="button">
						<vui-radio value="yesterday">昨日</vui-radio>
						<vui-radio value="week">近7日</vui-radio>
						<vui-radio value="month">近30日</vui-radio>
						<vui-radio value="quarter">近90日</vui-radio>
						<vui-radio value="year">近1年</vui-radio>
					</vui-radio-group>
				</vui-form-item>
				<vui-form-item>
					<vui-input v-model="searcher.daterange" placeholder="请选择时间范围" />
				</vui-form-item>
				<vui-form-item>
					<vui-button v-on:click="handleResetSearch">重置</vui-button>
					<vui-button type="primary" class="margin-left-10" v-on:click="handleSearch">查询</vui-button>
				</vui-form-item>
			</vui-form>
		</vui-card>

		<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20" headerStyle="padding: 16px 16px 16px 20px;" bodyStyle="padding: 0; overflow: hidden;">
			<template slot="title">{{type == 1 ? "累充分析" : "至尊分析"}}</template>
			<vui-action-group slot="extra" size="small">
				<vui-radio-group v-model="type" type="button">
					<vui-radio v-bind:value="1">累充分析</vui-radio>
					<vui-radio v-bind:value="2">至尊分析</vui-radio>
				</vui-radio-group>
				<vui-button key="2" type="primary" icon="download" v-on:click="handleExport">导出</vui-button>
			</vui-action-group>
			<vui-table ref="table" bordered rowKey="id" style="max-width: unset; margin: -1px;" v-bind="list">
				<template slot="users" slot-scope="{ row }">{{row.users | numerical}}</template>
				<template slot="percentage" slot-scope="{ row }">{{row.percentage | numerical(2)}} %</template>
				<template slot="amount" slot-scope="{ row }">{{row.amount | numerical}}</template>
				<template slot="amount" slot-scope="{ row }">{{row.amount | numerical}}</template>
				<template slot="activityAmount" slot-scope="{ row }">{{row.activityAmount | numerical}}</template>
				<template slot="averageActivityDays" slot-scope="{ row }">{{row.averageActivityDays | numerical(2)}}</template>
				<template slot="pvp" slot-scope="{ row }">{{row.pvp | numerical}}</template>
				<template slot="pve" slot-scope="{ row }">{{row.pve | numerical}}</template>
				<template slot="mix" slot-scope="{ row }">{{row.mix | numerical}}</template>
				<template slot="action" slot-scope="{ row }">
					<vui-space v-bind:gutter="2">
						<vui-tag color="blue" style="cursor: pointer;">神兵分布</vui-tag>
						<vui-tag color="blue" style="cursor: pointer;">地域分布</vui-tag>
						<vui-tag color="green" style="cursor: pointer;">活跃趋势</vui-tag>
						<vui-tag color="red" style="cursor: pointer;">流失用户</vui-tag>
					</vui-space>
				</template>
			</vui-table>
		</vui-card>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				searcher: {
					range: "week",
					daterange: "2020-01-01 ~ 2020-01-07"
				},
				type: 1,
				list: {
					loading: false,
					scroll: {
						x: 1520
					},
					columns: [
						{ key: "distribution", dataIndex: "distribution", fixed: "left", width: 150, align: "right", ellipsis: true, title: "累充金额分布(元)" },
						{ key: "users", dataIndex: "users", width: 100, align: "right", ellipsis: true, sorter: true, slot: "users", title: "用户数" },
						{ key: "percentage", dataIndex: "percentage", width: 90, align: "right", ellipsis: true, sorter: true, slot: "percentage", title: "占比" },
						{ key: "amount", dataIndex: "amount", width: 140, align: "right", ellipsis: true, sorter: true, slot: "amount", title: "累充总金额(元)" },
						{ key: "activityAmount", dataIndex: "activityAmount", width: 200, align: "right", ellipsis: true, sorter: true, slot: "activityAmount", title: "活跃期间充值总金额(元)" },
						{ key: "averageActivityDays", dataIndex: "averageActivityDays", width: 130, align: "right", ellipsis: true, sorter: true, slot: "averageActivityDays", title: "平均活跃天数" },
						{ key: "pvp", dataIndex: "pvp", width: 150, align: "right", ellipsis: true, sorter: true, slot: "pvp", title: "仅竞技地图人数" },
						{ key: "pve", dataIndex: "pve", width: 150, align: "right", ellipsis: true, sorter: true, slot: "pve", title: "仅关卡地图人数" },
						{ key: "mix", dataIndex: "mix", align: "right", ellipsis: true, sorter: true, slot: "mix", title: "混合玩法人数" },
						{ key: "action", fixed: "right", width: 280, align: "center", slot: "action", title: "明细" }
					],
					data: []
				}
			};
		},

		methods: {
			getList() {
				let payload = {
					...this.searcher
				};

				this.list.loading = true;
				this.$store.dispatch("example/getListTableDatasource", payload).then(data => {
					data = [
						{ id: 1, distribution: "0", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 2, distribution: "1-100", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 3, distribution: "101-300", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 4, distribution: "301-500", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 5, distribution: "501-1,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 6, distribution: "1,001-2,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 7, distribution: "2,001-3,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 8, distribution: "3,001-5,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 9, distribution: "5,001-7,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 10, distribution: "7,001-10,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 11, distribution: "10,001-15,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 12, distribution: "15,001-20,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 13, distribution: "20,001-30,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 14, distribution: "30,001-50,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 15, distribution: "50,001-70,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 16, distribution: "70,001-100,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 17, distribution: "100,001-150,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 18, distribution: "150,001-200,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 19, distribution: "200,001-300,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 20, distribution: "300,001-500,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 21, distribution: "500,001-1,000,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 22, distribution: "100万以上", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
						{ id: 23, distribution: "求和/平均", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityDays: 3.5, pvp: 33210, pve: 5888, mix: 13580 },
					];

					this.list.loading = false;
					this.list.data = data;
				}).catch(e => {
					this.list.loading = false;
				});
			},
			handleResetSearch(name) {
				this.$refs.searcher.reset();
				this.getList();
			},
			handleSearch() {
				this.getList();
			},
			handleExport() {
				this.$refs.table.export({
					original: false,
					filename: "表格名称"
				});
			}
		},

		created() {
			this.getList();
		}
	};
</script>