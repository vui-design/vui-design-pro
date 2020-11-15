<template>
	<div class="vui-pro-page">
		<vui-page-header class="vui-pro-page-header" v-bind:ghost="false">
			<template slot="title">卡片列表</template>
			<p>卡片类型的列表，配合栅格实现响应式布局</p>
		</vui-page-header>
		<div class="vui-pro-page-body">
			<vui-spin v-bind:spinning="list.loading">
				<vui-empty v-if="list.data.length == 0" style="padding: calc((100vh - 278px) / 2) 0;" />
				<vui-list v-else v-bind:grid="list.grid" v-bind:data="list.data">
					<vui-list-item slot="item" slot-scope="item, index">
						<vui-card v-bind:bordered="false" shadow="always">
							<vui-card-meta v-bind:title="item.title">
								<vui-avatar slot="avatar" v-bind:src="item.logo" v-bind:size="48" />
								<div slot="description" class="line-clamp line-clamp2" style="height: 40px;">{{item.description}}</div>
							</vui-card-meta>
							<template slot="actions">
								<vui-tooltip style="display: block;" content="编辑">
									<vui-icon type="edit" />
								</vui-tooltip>
								<vui-tooltip style="display: block;" content="删除">
									<vui-icon type="dustbin" />
								</vui-tooltip>
								<vui-dropdown style="display: block;" placement="bottom">
									<vui-icon type="more-x" />
									<vui-dropdown-menu slot="menu">
										<vui-dropdown-menu-item name="1" title="编辑" />
										<vui-dropdown-menu-item name="2" title="删除" />
									</vui-dropdown-menu>
								</vui-dropdown>
							</template>
						</vui-card>
					</vui-list-item>
				</vui-list>
			</vui-spin>
		</div>
	</div>
</template>

<script>
	export default {
		// 页面组件状态
		data() {
			return {
				// 存放列表的状态，例如是否处于加载中、数据源
				list: {
					loading: false,
					grid: {
						gutter: 16,
						columns: 4
					},
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
				let payload = {};

				this.list.loading = true;
				this.$store.dispatch("example/getListCardDatasource", payload).then(data => {
					this.list.loading = false;
					this.list.data = data.content;
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