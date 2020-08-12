<template>
	<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20" bodyStyle="padding: 0;">
		<template slot="title">待办事项</template>
		<vui-table v-bind:loading="loading" v-bind:columns="columns" v-bind:data="data" rowKey="id" class="vui-pro-dashboard-workplace-todo-list">
			<template slot="no" slot-scope="{ row, rowIndex }">{{rowIndex + 1}}</template>
			<template slot="title" slot-scope="{ row, rowIndex }">{{row.title}}</template>
			<template slot="collaborators" slot-scope="{ row, rowIndex }">
				<vui-pro-avatar-list v-bind:data="row.collaborators" />
			</template>
		</vui-table>
	</vui-card>
</template>

<script>
	import VuiProAvatarList from "src/components/avatar-list";

	export default {
		components: {
			VuiProAvatarList
		},
		data() {
			return {
				loading: false,
				columns: [
					{ key: "no", slot: "no", width: 60, align: "center", ellipsis: true, title: "#" },
					{ key: "title", dataIndex: "title", slot: "title", ellipsis: true, title: "任务" },
					{ key: "collaborators", dataIndex: "collaborators", width: 100, ellipsis: true, slot: "collaborators", title: "协作者" }
				],
				data: [
					{
						id: 3,
						title: "修改 Notion 上的 BRNR 模板",
						collaborators: [
							{ id: 1, avatar: "/static/images/avatars/png/1.png", name: "张三" },
							{ id: 2, avatar: "/static/images/avatars/png/2.png", name: "李四" }
						]
					},
					{
						id: 2,
						title: "购买 CDN 域名",
						collaborators: [
							{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" },
						]
					},
					{
						id: 1,
						title: "阅读若干 API 文档并完成 Demo Code",
						collaborators: [
							{ id: 3, avatar: "/static/images/avatars/png/3.png", name: "王二" },
							{ id: 4, avatar: "/static/images/avatars/png/4.png", name: "麻子" }
						]
					}
				]
			};
		}
	};
</script>

<style>
	.vui-pro-dashboard-workplace-todo-list .vui-table-body tr:last-child td { border-bottom:none; }
</style>