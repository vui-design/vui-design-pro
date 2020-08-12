<template>
	<div>

		<vui-card v-bind:bordered="false" shadow="always">
			<vui-form ref="searcher" layout="inline">
				<vui-form-item>
					<vui-input v-model="searcher.endAt" style="width: 180px;" prepend="更新日期" placeholder="更新日期" />
				</vui-form-item>
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

		<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20" headerStyle="padding: 16px 16px 16px 20px;" bodyStyle="padding: 0; overflow: hidden;">
			<template slot="title">{{type == 1 ? "累充分析" : "至尊分析"}}</template>
			<vui-separator slot="extra">
				<vui-radio-group v-model="type" type="button">
					<vui-radio v-bind:value="1">累充分析</vui-radio>
					<vui-radio v-bind:value="2">至尊分析</vui-radio>
				</vui-radio-group>
				<vui-space>
					<vui-button type="primary" icon="bar-chart" to="trend" append>查看趋势</vui-button>
					<vui-button type="primary" icon="download" v-on:click="handleExport">导出</vui-button>
				</vui-space>
			</vui-separator>
			<vui-table ref="table" bordered rowKey="id" style="max-width: unset; margin: -1px;" v-bind="list">
				<template slot="users" slot-scope="{ row }">{{row.users | numerical}}</template>
				<template slot="percentage" slot-scope="{ row }">{{row.percentage | numerical(2)}} %</template>
				<template slot="amount" slot-scope="{ row }">{{row.amount | numerical}}</template>
				<template slot="amount" slot-scope="{ row }">{{row.amount | numerical}}</template>
				<template slot="activityAmount" slot-scope="{ row }">{{row.activityAmount | numerical}}</template>
				<template slot="averageActivityHours" slot-scope="{ row }">{{row.averageActivityHours | numerical(2)}}</template>
				<template slot="pvp" slot-scope="{ row }">{{row.pvp | numerical}}</template>
				<template slot="pve" slot-scope="{ row }">{{row.pve | numerical}}</template>
				<template slot="mix" slot-scope="{ row }">{{row.mix | numerical}}</template>
				<template slot="averageM3bStock" slot-scope="{ row }">{{row.averageM3bStock | numerical}}</template>
				<template slot="lost_uv_7d" slot-scope="{ row }">{{row.lost_uv_7d | numerical}}</template>
				<template slot="lost_uv_30d" slot-scope="{ row }">{{row.lost_uv_30d | numerical}}</template>
				<template slot="lost_uv_90d" slot-scope="{ row }">{{row.lost_uv_90d | numerical}}</template>
				<template slot="action" slot-scope="{ row }">
					<vui-separator align="center">
						<a href="javascript:;">神兵分布</a>
						<a href="javascript:;">地域分布</a>
					</vui-separator>
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
					endAt: "2020-01-07",
					range: "week",
					daterange: "2020-01-01 ~ 2020-01-07",
					zone: 0
				},
				type: 1,
				list: {
					loading: false,
					scroll: {
						x: 1880
					},
					columns: [
						{ key: "distribution", dataIndex: "distribution", fixed: "left", width: 150, align: "right", ellipsis: true, title: "累充金额分布(元)" },
						{ key: "users", dataIndex: "users", width: 90, align: "right", ellipsis: true, sorter: true, slot: "users", title: "用户数" },
						{ key: "percentage", dataIndex: "percentage", width: 80, align: "right", ellipsis: true, sorter: true, slot: "percentage", title: "占比" },
						{ key: "amount", dataIndex: "amount", width: 140, align: "right", ellipsis: true, sorter: true, slot: "amount", title: "累充总金额(元)" },
						{ key: "activityAmount", dataIndex: "activityAmount", width: 196, align: "right", ellipsis: true, sorter: true, slot: "activityAmount", title: "活跃期间充值总金额(元)" },
						{ key: "averageActivityHours", dataIndex: "averageActivityHours", width: 166, align: "right", ellipsis: true, sorter: true, slot: "averageActivityHours", title: "人均游戏时长(小时)" },
						{ key: "pvp", dataIndex: "pvp", width: 104, align: "right", ellipsis: true, sorter: true, slot: "pvp", title: "竞技人数" },
						{ key: "pve", dataIndex: "pve", width: 104, align: "right", ellipsis: true, sorter: true, slot: "pve", title: "关卡人数" },
						{ key: "mix", dataIndex: "mix", width: 130, align: "right", ellipsis: true, sorter: true, slot: "mix", title: "混合玩法人数" },
						{ key: "averageM3bStock", dataIndex: "averageM3bStock", align: "right", ellipsis: true, sorter: true, slot: "averageM3bStock", title: "人均梦三币存量" },
						{ key: "lost_uv_7d", dataIndex: "lost_uv_7d", width: 130, align: "right", ellipsis: true, sorter: true, slot: "lost_uv_7d", title: "7天流失人数" },
						{ key: "lost_uv_30d", dataIndex: "lost_uv_30d", width: 130, align: "right", ellipsis: true, sorter: true, slot: "lost_uv_30d", title: "30天流失人数" },
						{ key: "lost_uv_90d", dataIndex: "lost_uv_90d", width: 130, align: "right", ellipsis: true, sorter: true, slot: "lost_uv_90d", title: "90天流失人数" },
						{ key: "action", fixed: "right", width: 180, align: "center", slot: "action", title: "明细" }
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
						{ id: 1, distribution: "0", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 2, distribution: "1-100", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 3, distribution: "101-300", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 4, distribution: "301-500", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 5, distribution: "501-1,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 6, distribution: "1,001-2,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 7, distribution: "2,001-3,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 8, distribution: "3,001-5,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 9, distribution: "5,001-7,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 10, distribution: "7,001-10,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 11, distribution: "10,001-15,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 12, distribution: "15,001-20,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 13, distribution: "20,001-30,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 14, distribution: "30,001-50,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 15, distribution: "50,001-70,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 16, distribution: "70,001-100,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 17, distribution: "100,001-150,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 18, distribution: "150,001-200,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 19, distribution: "200,001-300,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 20, distribution: "300,001-500,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 21, distribution: "500,001-1,000,000", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 22, distribution: "100万以上", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 },
						{ id: 23, distribution: "求和/平均", users: 52678, percentage: 2.22, amount: 526780, activityAmount: 126780, averageActivityHours: 3.5, pvp: 33210, pve: 5888, mix: 13580, averageM3bStock: 5600, lost_uv_7d: 114, lost_uv_30d: 1200, lost_uv_90d: 2640 }
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
					quoted: true,
					columns: this.list.columns.filter((column, index) => column.key !== "action"),
            		data: this.list.data,
					filename: "梦三国充值分析"
				});
			}
		},

		created() {
			this.getList();
		}
	};
</script>