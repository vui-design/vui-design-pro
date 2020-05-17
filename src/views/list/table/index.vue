<template>
	<div class="padding-20">
		<vui-card v-bind:bordered="false">
			<vui-form ref="searcher" layout="inline">
				<vui-form-item>
					<vui-input v-model="searcher.a" placeholder="请输入..." />
				</vui-form-item>
				<vui-form-item>
					<vui-input v-model="searcher.b" placeholder="请输入..." />
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary" v-on:click="handleSearch">查询</vui-button>
					<vui-button class="margin-left-10" v-on:click="handleResetSearch">重置</vui-button>
				</vui-form-item>
			</vui-form>
		</vui-card>

		<complex-filter
			class="margin-top-20"
			v-model="filter.value"
			v-bind:data="filter.data"
			v-on:change="handleFilterChange"
		/>

		<vui-card v-bind:bordered="false" class="margin-top-20">
			<vui-table v-bind:loading="list.loading" v-bind:columns="list.columns" v-bind:data="list.data" getRowKey="id">
				<template slot="state" slot-scope="{ row, index }">
					<vui-badge v-if="row.state == 1" status="default" text="未启用" />
					<vui-badge v-else-if="row.state == 2" status="success" text="已上线" />
					<vui-badge v-else-if="row.state == 3" status="processing" text="运行中" />
					<vui-badge v-else-if="row.state == 4" status="error" text="关闭" />
				</template>
				<template slot="action" slot-scope="{ row, index }">
					<vui-action-list>
						<a href="javascript:;">编辑</a>
						<a href="javascript:;">删除</a>
					</vui-action-list>
				</template>
			</vui-table>
			<vui-pagination
					class="margin-top-20"
					align="right"
					showPageSizer
					v-bind:total="pagination.total"
					v-bind:page="pagination.page"
					v-bind:pageSize="pagination.pageSize"
					v-on:change="handleChangePage"
					v-on:changePageSize="handleChangePageSize"
				/>
		</vui-card>
	</div>
</template>

<script>
	import ComplexFilter from "src/components/complex-filter";

	export default {
		components: {
			ComplexFilter
		},
		data() {
			return {
				searcher: {
					a: "",
					b: ""
				},

				filter: {
					value: {
						brand: [1, 2],
						android: [2, 3, 4, 6],
						ios: [1],
						ratio: [4, 6]
					},
					data: [
						{
							label: "品牌",
							value: "brand",
							options: [
								{ value: 1, label: "Apple" },
								{ value: 2, label: "谷歌" },
								{ value: 3, label: "华为" },
								{ value: 4, label: "OPPO" },
								{ value: 5, label: "VIVO" },
								{ value: 6, label: "三星" },
								{ value: 7, label: "小米" },
								{ value: 8, label: "魅族" },
								{ value: 9, label: "金立" },
								{ value: 10, label: "诺基亚" },
								{ value: 11, label: "iQOO" },
								{ value: 12, label: "海信" },
								{ value: 13, label: "一加" },
								{ value: 14, label: "索尼" }
							]
						},
						{
							label: "Android系统",
							value: "android",
							options: [
								{ value: 1, label: "11" },
								{ value: 2, label: "10" },
								{ value: 3, label: "9" },
								{ value: 4, label: "8.1.0" },
								{ value: 5, label: "8.0.0" },
								{ value: 6, label: "7.1.2" },
								{ value: 7, label: "7.1.1" },
								{ value: 8, label: "7.1" },
								{ value: 9, label: "7.0.0" },
								{ value: 10, label: "6.8.1" },
								{ value: 11, label: "6.8" }
							]
						},
						{
							label: "iOS系统",
							value: "ios",
							options: [
								{ value: 1, label: "13.4.1" },
								{ value: 2, label: "13.4" },
								{ value: 3, label: "13.3.1" },
								{ value: 4, label: "13.3" },
								{ value: 5, label: "13.1.2" },
								{ value: 6, label: "13.1.1" },
								{ value: 7, label: "13.1" },
								{ value: 8, label: "12.4.5" }
							]
						},
						{
							label: "分辨率",
							value: "ratio",
							options: [
								{ value: 1, label: "3120*1440" },
								{ value: 2, label: "2960*1440" },
								{ value: 3, label: "2880*1440" },
								{ value: 4, label: "2580*1440" },
								{ value: 5, label: "2560*1440" },
								{ value: 6, label: "2340*1080" },
								{ value: 7, label: "2316*1080" },
								{ value: 8, label: "2310*1080" }
							]
						}
					]
				},

				pagination: {
					total: 0,
					page: 1,
					pageSize: 20
				},

				list: {
					loading: false,
					columns: [
						{ key: "id", dataIndex: "id", width: 60, align: "center", title: "ID"},
						{ key: "name", dataIndex: "name", title: "规则名称" },
						{ key: "description", dataIndex: "description", title: "描述" },
						{ key: "count", dataIndex: "count", title: "服务调用次数" },
						{ key: "state", dataIndex: "state", slot: "state", title: "状态" },
						{ key: "datetime", dataIndex: "datetime", title: "上次调度时间" },
						{ key: "action", width: 120, align: "center", slot: "action", title: "操作" }
					],
					data: []
				}
			};
		},

		methods: {
			getList() {
				let payload = {
					...this.searcher,
					...this.pagination
				};

				this.list.loading = true;
				// 模拟请求
				setTimeout(() => {
					this.list.loading = false;
					this.list.data = [
						{ id: 1, name: "TradeCode 1", description: "这是一段描述", count: "660万", state: 4, datetime: "2017-07-01 08:00:00" },
						{ id: 2, name: "TradeCode 2", description: "这是一段描述", count: "229 万", state: 2, datetime: "2017-07-01 08:00:00" },
						{ id: 3, name: "TradeCode 3", description: "这是一段描述", count: "60 万", state: 3, datetime: "2017-07-01 08:00:00" },
						{ id: 4, name: "TradeCode 4", description: "这是一段描述", count: "110 万", state: 4, datetime: "2017-07-01 08:00:00" },
						{ id: 5, name: "TradeCode 5", description: "这是一段描述", count: "578 万", state: 3, datetime: "2017-07-01 08:00:00" },
						{ id: 6, name: "TradeCode 6", description: "这是一段描述", count: "696 万", state: 4, datetime: "2017-07-01 08:00:00" },
						{ id: 7, name: "TradeCode 7", description: "这是一段描述", count: "996 万", state: 3, datetime: "2017-07-01 08:00:00" },
						{ id: 8, name: "TradeCode 8", description: "这是一段描述", count: "835 万", state: 4, datetime: "2017-07-01 08:00:00" },
						{ id: 9, name: "TradeCode 9", description: "这是一段描述", count: "223 万", state: 3, datetime: "2017-07-01 08:00:00" },
						{ id: 10, name: "TradeCode 10", description: "这是一段描述", count: "73 万", state: 4, datetime: "2017-07-01 08:00:00" }
					];
					this.pagination.total = 100;
				}, 500);
			},

			handleSearch() {
				this.pagination.page = 1;
				this.getList();
			},
			handleResetSearch(name) {
				this.$refs.searcher.reset();
				this.getList();
			},

			handleFilterChange(value) {
				console.log(value);
			},

			handleChangePage(page) {
				this.pagination.page = page;
				this.getList();
			},
			handleChangePageSize(pageSize) {
				this.pagination.pageSize = pageSize;
				this.getList();
			}
		},

		created() {
			this.getList();
		}
	};
</script>