<template>
	<div class="vui-pro-page">
		<vui-page-header class="vui-pro-page-header" v-bind:ghost="false">
			<template slot="title">标准列表</template>
			<p>标准的列表，包含增删改查等基础操作</p>
		</vui-page-header>
		<div class="vui-pro-page-body">
			<vui-card v-bind:bordered="false" shadow="always">
				<vui-row>
					<vui-col v-bind:span="8">
						<div class="vui-pro-app-statistic">
							<h4>进行中的任务</h4>
							<p><em style="color: #2d8cf0;">10</em>个任务</p>
						</div>
					</vui-col>
					<vui-col v-bind:span="8">
						<div class="vui-pro-app-statistic">
							<h4>剩余任务</h4>
							<p><em style="color: #faad14;">4</em>个任务</p>
						</div>
					</vui-col>
					<vui-col v-bind:span="8">
						<div class="vui-pro-app-statistic">
							<h4>任务总耗时</h4>
							<p><em style="color: #ed5565;">120</em>个小时</p>
						</div>
					</vui-col>
				</vui-row>
			</vui-card>
			<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20" headerStyle="padding: 16px 16px 16px 20px;" title="任务列表">
				<vui-space slot="extra">
					<vui-radio-group v-model="searcher.status" type="button">
						<vui-radio v-bind:value="0">全部</vui-radio>
						<vui-radio v-bind:value="1">进行中</vui-radio>
						<vui-radio v-bind:value="2">已完成</vui-radio>
					</vui-radio-group>
					<vui-input-group compact>
						<vui-input v-model="searcher.keywords" style="width: 200px;" placeholder="输入关键字查询" />
						<vui-button icon="search" v-on:click="handleSearch" />
					</vui-input-group>
					<vui-button type="primary" icon="plus" v-on:click="handleAdd">添加</vui-button>
				</vui-space>
				<vui-spin v-bind:spinning="list.loading">
					<vui-empty v-if="list.data.length == 0" style="padding: 100px 0;" />
					<vui-list v-else>
						<vui-list-item v-for="(item, index) in list.data" v-bind:key="index">
							<vui-list-item-meta>
								<vui-avatar slot="avatar" shape="square" v-bind:src="item.icon" v-bind:size="48" />
								<a slot="title" href="javascript:;">{{item.title}}</a>
								<div slot="description" class="write-ellipsis">{{item.description}}</div>
							</vui-list-item-meta>
							<div class="vui-pro-app-item-content">
								<div class="vui-pro-app-item-content-group">
									<h4>负责人</h4>
									<p>{{item.owner}}</p>
								</div>
								<div class="vui-pro-app-item-content-group">
									<h4>开始时间</h4>
									<p>{{item.startAt | dateformatter("yyyy-MM-dd HH:mm")}}</p>
								</div>
								<div class="vui-pro-app-item-content-group">
									<vui-progress v-bind:stroke="6" v-bind:status="item.status" v-bind:percentage="item.progress" />
								</div>
							</div>
							<template slot="actions">
								<a href="javascript:;" v-on:click="e => handleEdit(item)">编辑</a>
								<vui-dropdown trigger="click" placement="bottom">
									<a href="javascript:;">更多</a>
									<vui-dropdown-menu slot="menu" v-on:click="name => handleMoreActionClick(name, item)">
										<vui-dropdown-menu-item name="edit" title="编辑" />
										<vui-dropdown-menu-item name="delete" title="删除" />
									</vui-dropdown-menu>
								</vui-dropdown>
							</template>
						</vui-list-item>
					</vui-list>
				</vui-spin>
				<div style="border-top: 1px solid #f0f0f0; padding-top: 20px;">
					<div style="float: left; line-height: 34px;">共 <em>{{pagination.total}}</em> 条</div>
					<vui-pagination align="right" showPageSizer showPageElevator v-bind="pagination" v-on:change="handleChangePage" v-on:changePageSize="handleChangePageSize" />
				</div>
			</vui-card>
			<vui-pro-form-modal ref="formModal" />
		</div>
	</div>
</template>

<script>
	import VuiProFormModal from "./form-modal";

	export default {
		// 依赖组件
		components: {
			VuiProFormModal
		},
		// 页面组件状态
		data() {
			return {
				// 存放查询器状态，例如这里的状态和关键词
				searcher: {
					status: 0,
					keywords: ""
				},
				// 存放分页器状态，例如这里的总数量、当前页码、每页显示数量
				pagination: {
					total: 0,
					page: 1,
					pageSize: 10
				},
				// 存放列表的状态，例如是否处于加载中、数据源
				list: {
					loading: false,
					data: []
				}
			};
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
				this.$store.dispatch("example/getListStandardDatasource", payload).then(data => {
					this.list.loading = false;
					this.list.data = data.content;
					this.pagination.total = data.total;
				}).catch(e => {
					this.list.loading = false;
				});
			},
			// 查询
			handleSearch() {
				this.pagination.page = 1;
				this.getList();
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
			// 添加
			handleAdd() {
				this.$refs.formModal.add(result => {
					// 添加成功后刷新列表
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
			},
			// 更多操作
			handleMoreActionClick(name, data) {
				if (name === "edit") {
					this.handleEdit(data);
				}
				else if (name === "delete") {
					this.$modal.confirm({
						title: "友情提示",
						description: "您确定要删除当前任务吗？",
						onOk: () => {
							this.handleDelete(data);
						}
					});
				}
			}
		},
		// 页面组件实例化完成后立即请求首页数据
		created() {
			this.getList();
		}
	};
</script>

<style>
	.vui-pro-app-statistic { padding:8px 0; text-align:center; }
	.vui-pro-app-statistic h4 { color:#8c8c8c; font-size:14px; }
	.vui-pro-app-statistic p { margin-top:8px; color:#262626; font-size:24px; }
	.vui-pro-app-statistic p em { margin-right:8px; font-weight:600; }

	.vui-pro-app-item-content { display:flex; align-items:center; margin:0 20px 0 40px; }
	.vui-pro-app-item-content-group {  }
	.vui-pro-app-item-content-group h4 { color:#8c8c8c; font-size:14px; }
	.vui-pro-app-item-content-group p { margin-top:8px; color:#595959; font-size:14px; }
	.vui-pro-app-item-content-group .vui-progress { width:180px; }
	.vui-pro-app-item-content-group + .vui-pro-app-item-content-group { margin-left:40px; }
</style>