<template>
	<vui-fullscreen v-model="page.fullscreen" class="vui-pro-view-list-table">
		<vui-card v-bind:bordered="false">
			<vui-form ref="searcher" layout="inline">
				<vui-form-item>
					<vui-input v-model="searcher.name" placeholder="请输入规则名称" />
				</vui-form-item>
				<vui-form-item>
					<vui-input v-model="searcher.description" placeholder="请输入描述" />
				</vui-form-item>
				<vui-form-item>
					<vui-button v-on:click="handleResetSearch">重置</vui-button>
					<vui-button type="primary" class="margin-left-10" v-on:click="handleSearch">查询</vui-button>
				</vui-form-item>
			</vui-form>
		</vui-card>

		<vui-pro-filter
			class="margin-top-20"
			v-model="filter.value"
			v-bind:options="filter.options"
			v-on:change="handleFilterChange"
		/>

		<vui-card v-bind:bordered="false" class="margin-top-20" headerStyle="padding: 16px 16px 16px 20px;" bodyStyle="padding: 0;" title="查询表格">
			<vui-action-group slot="extra" size="small">
				<vui-space key="1">
					<vui-tooltip v-bind:content="page.fullscreen ? '退出全屏' : '全屏'">
						<a href="javascript:;" class="link-default" style="font-size: 16px;" v-on:click="handleFullscreen">
							<vui-icon v-bind:type="page.fullscreen ? 'fullscreen-exit' : 'fullscreen'" />
						</a>
					</vui-tooltip>
					<vui-tooltip content="刷新">
						<a href="javascript:;" class="link-default" style="font-size: 16px;" v-on:click="handleRefresh">
							<vui-icon type="refresh" />
						</a>
					</vui-tooltip>
				</vui-space>
				<vui-button key="2" icon="download" v-on:click="handleExport">导出</vui-button>
				<vui-button key="3" type="primary" icon="plus">新增</vui-button>
				<vui-dropdown key="4" v-if="selectedTotalItems > 0">
					<vui-button type="primary" icon="list-settings">批量操作</vui-button>
					<vui-dropdown-menu slot="menu">
						<vui-dropdown-menu-item name="remove" title="批量删除" />
						<vui-dropdown-menu-item name="approve" title="批量审批" />
					</vui-dropdown-menu>
				</vui-dropdown>
			</vui-action-group>
			<vui-alert type="warning" banner showIcon style="border-bottom: 1px solid #f0f0f0">
				<template>已选择 <em style="color: #faad14; font-weight: 600;">{{selectedTotalItems}}</em> 项，服务调用次数总计 <em>{{selectedTotalTimes}}</em> 万</template>
			</vui-alert>
			<vui-table ref="table" rowKey="id" v-bind="list" v-on:rowSelect="handleRowSelect">
				<template slot="count" slot-scope="{ row, rowIndex }">{{row.count | numerical}} 万</template>
				<template slot="state" slot-scope="{ row, rowIndex }">
					<vui-badge v-if="row.state == 1" status="default" text="未启用" />
					<vui-badge v-else-if="row.state == 2" status="success" text="已上线" />
					<vui-badge v-else-if="row.state == 3" status="processing" text="运行中" />
					<vui-badge v-else-if="row.state == 4" status="error" text="关闭" />
				</template>
				<template slot="action" slot-scope="{ row, rowIndex }">
					<vui-action-group>
						<a href="javascript:;" v-on:ok="handleEdit(row)">编辑</a>
						<vui-popconfirm v-on:ok="handleRemove(row)" placement="top-end" title="确定要删除当前记录嘛？">
							<a href="javascript:;">删除</a>
						</vui-popconfirm>
					</vui-action-group>
				</template>
			</vui-table>
			<div class="padding-20">
				<div style="float: left; line-height: 34px;">共 <em>{{pagination.total}}</em> 条</div>
				<vui-pagination align="right" showPageSizer v-bind="pagination" v-on:change="handleChangePage" v-on:changePageSize="handleChangePageSize" />
			</div>
		</vui-card>
	</vui-fullscreen>
</template>

<script>
	import VuiProFilter from "src/components/filter";

	export default {
		components: {
			VuiProFilter
		},
		data() {
			return {
				page: {
					fullscreen: false
				},
				searcher: {
					name: "",
					description: ""
				},
				filter: {
					value: {
						brand: [1, 2, 5, 7],
						android: [2, 3, 4, 6],
						ios: [1, 5],
						ratio: [2, 4, 6]
					},
					options: [
						{
							label: "品牌",
							key: "brand",
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
							key: "android",
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
							key: "ios",
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
							key: "ratio",
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
						{ key: "name", dataIndex: "name", title: "规则名称" },
						{ key: "description", dataIndex: "description", title: "描述" },
						{ key: "count", dataIndex: "count", sorter: true, slot: "count", title: "服务调用次数" },
						{ key: "state", dataIndex: "state", slot: "state", title: "状态" },
						{ key: "datetime", dataIndex: "datetime", sorter: true, title: "上次调度时间" },
						{ key: "action", width: 120, slot: "action", title: "操作" }
					],
					rowSelection: {
						width: 60,
						multiple: true,
						value: []
					},
					data: []
				}
			};
		},

		computed: {
			selectedTotalItems() {
				return this.list.rowSelection.value.length;
			},
			selectedTotalTimes() {
				let rows = this.list.rowSelection.value;
				let value = 0;

				this.list.data.forEach(row => {
					if (rows.indexOf(row.id) === -1) {
						return;
					}

					value += row.count;
				});

				return value;
			}
		},

		methods: {
			getList() {
				let payload = {
					...this.searcher,
					page: this.pagination.page,
					pageSize: this.pagination.pageSize
				};

				this.list.loading = true;
				this.$store.dispatch("example/getListTableDatasource", payload).then(data => {
					this.list.loading = false;
					this.list.data = data.content;
					this.pagination.total = data.total;
				}).catch(e => {
					this.list.loading = false;
				});
			},
			handleResetSearch(name) {
				this.$refs.searcher.reset();
				this.getList();
			},
			handleSearch() {
				this.pagination.page = 1;
				this.getList();
			},
			handleFilterChange(value) {
				console.log(JSON.parse(JSON.stringify(value)));
			},
			handleChangePage(page) {
				this.pagination.page = page;
				this.getList();
			},
			handleChangePageSize(pageSize) {
				this.pagination.pageSize = pageSize;
				this.getList();
			},
			handleRowSelect(value) {
				this.list.rowSelection.value = value;
			},
			handleFullscreen() {
				this.page.fullscreen = !this.page.fullscreen;
			},
			handleRefresh() {
				this.getList();
			},
			handleExport() {
				this.$refs.table.export({
					original: false,
					filename: "表格名称"
				});
			},
			handleAdd() {
				console.log("add");
			},
			handleEdit(row) {
				console.log(JSON.parse(JSON.stringify(row)));
			},
			handleRemove(row) {
				console.log(JSON.parse(JSON.stringify(row)));
			}
		},

		created() {
			this.getList();
		}
	};
</script>

<style>
	.vui-pro-view-list-table {  }
	.vui-pro-view-list-table.vui-fullscreen-on { background-color:#f4f6f8; padding:20px; }
</style>