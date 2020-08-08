<template>
	<div class="vui-pro-page">
		<vui-page-header class="vui-pro-page-header" v-bind:ghost="false">
			<template slot="title">查询表格</template>
			<p>表格查询的复杂示例，包含增删改查、批量操作、导出、全屏和刷新等功能</p>
		</vui-page-header>
		<div class="vui-pro-page-body">
			<vui-fullscreen v-model="page.fullscreen" class="vui-pro-list-table">
				<vui-card v-bind:bordered="false" shadow="always">
					<vui-form v-bind:model="searcher" ref="searcher" layout="inline">
						<vui-form-item prop="name">
							<vui-input v-model="searcher.name" placeholder="请输入规则名称" />
						</vui-form-item>
						<vui-form-item prop="description">
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
				<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20" headerStyle="padding: 16px 16px 16px 20px;" bodyStyle="padding: 0;" title="查询表格">
					<vui-action-group slot="extra" size="small">
						<vui-space key="other">
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
						<vui-button key="export" icon="download" v-on:click="handleExport">导出</vui-button>
						<vui-button key="add" type="primary" icon="plus" v-on:click="handleAdd">新增</vui-button>
						<vui-dropdown key="batch" v-if="selectedTotalItems > 0">
							<vui-button type="primary" icon="list-settings">批量操作</vui-button>
							<vui-dropdown-menu slot="menu" v-on:click="handleBatchOperate">
								<vui-dropdown-menu-item name="delete" title="批量删除" />
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
								<a href="javascript:;" v-on:click="handleEdit(row)">编辑</a>
								<vui-popconfirm v-on:ok="handleDelete(row)" placement="top-end" title="确定要删除当前记录嘛？">
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
				<vui-pro-form-modal ref="formModal" />
			</vui-fullscreen>
		</div>
	</div>
		
</template>

<script>
	import VuiProFilter from "src/components/filter";
	import VuiProFormModal from "./form-modal";

	export default {
		// 依赖组件
		components: {
			VuiProFilter,
			VuiProFormModal
		},
		// 页面组件状态
		data() {
			return {
				// 存放页面级状态，例如这里的全屏属性
				page: {
					fullscreen: false
				},
				// 存放查询器状态，例如这里的规则名称和描述
				searcher: {
					name: "",
					description: ""
				},
				// 存放过滤器状态
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
				// 存放分页器状态，例如这里的总数量、当前页码、每页显示数量
				pagination: {
					total: 0,
					page: 1,
					pageSize: 20
				},
				// 存放列表的状态，例如是否处于加载中、列配置、是否可选择、数据源
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
		// 计算属性
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
		// 页面组件方法
		methods: {
			// 获取列表数据
			// 拼接参数 > 发起 action 到 store 状态管理层 > 发起异步请求到 service 层 > service 层执行真实的 ajax 请求
			// 请求成功后按照上列顺序反向逐层返回数据，直至当前页面组件
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
			// 重置查询
			handleResetSearch() {
				this.$refs.searcher.reset();
				this.getList();
			},
			// 查询
			handleSearch() {
				this.pagination.page = 1;
				this.getList();
			},
			// 过滤器的选项发生变更
			handleFilterChange(value) {
				console.log(JSON.parse(JSON.stringify(value)));
			},
			// 切换页码
			handleChangePage(page) {
				this.pagination.page = page;
				this.getList();
			},
			// 切换每页显示数量
			handleChangePageSize(pageSize) {
				this.pagination.pageSize = pageSize;
				this.getList();
			},
			// 列表行选择
			handleRowSelect(value) {
				this.list.rowSelection.value = value;
			},
			// 全屏
			handleFullscreen() {
				this.page.fullscreen = !this.page.fullscreen;
			},
			// 刷新
			handleRefresh() {
				this.getList();
			},
			// 导出
			handleExport() {
				this.$refs.table.export({
					original: false,
					filename: "表格名称"
				});
			},
			// 批量操作
			handleBatchOperate(name) {
				if (name === "delete") {
					this.$modal.confirm({
						title: "友情提示",
						description: "您确定要批量删除所选记录吗？",
						onCancel: () => {
							this.$message.info("您点击了取消");
						},
						onOk: () => {
							this.$message.info("您点击了确定");
						}
					});
				}
				else {
					this.$message.info("您点击了批量审批");
				}
			},
			// 新增
			handleAdd() {
				this.$refs.formModal.add(result => {
					// 新增成功后刷新列表
					this.getList();
				});
			},
			// 编辑
			handleEdit(data) {
				this.$refs.formModal.edit(data, result => {
					// 编辑成功后刷新列表
					this.getList();
				});
			},
			// 删除
			handleDelete(data) {
				const payload = data;
				const loading = this.$message.loading({
					duration: 0,
					content: "正在删除，请稍后..."
				});

				this.$store.dispatch("example/deleteListTableDatasource", payload).then(data => {
					loading.close();
					this.$message.success("删除成功");
					// 删除成功后刷新列表
					this.getList();
				}).catch(e => {
					this.list.loading = false;
				});
			}
		},
		// 页面组件实例化完成后立即请求首页数据
		created() {
			this.getList();
		}
	};
</script>

<style>
	.vui-pro-list-table {  }
	.vui-pro-list-table.vui-fullscreen-on { background-color:#f4f6f8; padding:20px; }
</style>