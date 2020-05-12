<template>
	<div class="padding-20">
		<vui-card :bordered="false">
			<vui-form ref="formData" layout="inline">
				<vui-form-item>
					<vui-input class="pull-left" placeholder="请输入..." v-model="formData.a" />
				</vui-form-item>
				<vui-form-item>
					<vui-input class="pull-left" placeholder="请输入..." v-model="formData.b" />
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary" class="pull-left" @click="handleSearch">查询</vui-button>
					<vui-button class="pull-left margin-left-10" @click="handleReset">重置</vui-button>
				</vui-form-item>
			</vui-form>
		</vui-card>

		<vui-card title="查询表格" class="margin-top-20" :bordered="false" :padding="0">
			<vui-table :columns="table.columns" :data="table.data" getRowKey="id" :loading="table.loading" />
			<div class="padding-20">
				 <vui-pagination v-model="formData.page" :total="500" align="right" showPageSizer />
			</div>
		</vui-card>
	</div>
</template>

<script>
	export default {
		data() {
			const columns = [
				{ key: "id", dataIndex: "id", title: "ID", width: 60, align: "center" },
				{ key: "name", dataIndex: "name", title: "规则名称", width: 150 },
				{ key: "description", dataIndex: "description", title: "描述" },
				{ key: "count", dataIndex: "count", title: "服务调用次数", width: 150 },
				{ key: "state", dataIndex: "state", title: "状态", width: 100, render: this.getTableStateColumn },
				{ key: "datetime", dataIndex: "datetime", width: 200, title: "上次调度时间" },
				{ key: "action", title: "操作", width: 150, align: "center", render: this.getTableActionColumn }
			];

			const data = [
				{ id: 1, name: "TradeCode 1", description: "这是一段描述", count: "660万", state: 4, datetime: "2017-07-01 08:00:00" },
				{ id: 2, name: "TradeCode 2", description: "这是一段描述现场 v 现场 v 下", count: "229 万", state: 2, datetime: "2017-07-01 08:00:00" },
				{ id: 3, name: "TradeCode 3", description: "这是一段描述", count: "60 万", state: 3, datetime: "2017-07-01 08:00:00" },
				{ id: 4, name: "TradeCode 4", description: "这是一段描述", count: "110 万", state: 4, datetime: "2017-07-01 08:00:00" },
				{ id: 5, name: "TradeCode 5", description: "这是一段描述", count: "578 万", state: 3, datetime: "2017-07-01 08:00:00" },
				{ id: 6, name: "TradeCode 6", description: "这是一段描述", count: "696 万", state: 4, datetime: "2017-07-01 08:00:00" },
				{ id: 7, name: "TradeCode 7", description: "这是一段描述", count: "996 万", state: 3, datetime: "2017-07-01 08:00:00" },
				{ id: 8, name: "TradeCode 8", description: "这是一段描述", count: "835 万", state: 4, datetime: "2017-07-01 08:00:00" },
				{ id: 9, name: "TradeCode 9", description: "这是一段描述", count: "223 万", state: 3, datetime: "2017-07-01 08:00:00" },
				{ id: 10, name: "TradeCode 10", description: "这是一段描述", count: "73 万", state: 4, datetime: "2017-07-01 08:00:00" }
			];

			return {
				formData: {
					a: "",
					b: "",
					page: 3
				},
				table: {
					columns: columns,
					data: data,
					loading: false
				}
			};
		},
		methods: {
			getTableStateColumn(h, column, row) {
				if (row.state == 1) {
					return (
						<vui-badge status="default" text="未启用" />
					);
				}
				else if (row.state == 2) {
					return (
						<vui-badge status="success" text="已上线" />
					);
				}
				else if (row.state == 3) {
					return (
						<vui-badge status="processing" text="运行中" />
					);
				}
				else if (row.state == 4) {
					return (
						<vui-badge status="error" text="关闭" />
					);
				}
			},
			getTableActionColumn(h, column, row) {
				return (
					<div>
						<a href="javascript:;">编辑</a>
						<vui-divider type="vertical" />
						<a href="javascript:;">删除</a>
					</div>
				);
			},
			handleSearch(name) {
				console.log("search");
			},
			handleReset(name) {
				this.formData = {
					a: "",
					b: ""
				};
			}
		}
	};
</script>