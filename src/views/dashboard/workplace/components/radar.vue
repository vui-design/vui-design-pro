<template>
	<vui-card v-bind:bordered="false" class="margin-top-20">
		<template slot="title">XX 指数</template>
		<v-chart v-bind:forceFit="true" v-bind:animate="false" v-bind:height="260" v-bind:data="data" v-bind:scale="scale" v-bind:padding="padding">
			<v-axis v-bind:dataKey="axis.dataKey" v-bind:line="axis.line" v-bind:tickLine="axis.tickLine" v-bind:grid="axis.grid" />
			<v-line position="type*score" v-bind:color="color" v-bind:size="1" />
			<v-point position="type*score" v-bind:color="color" shape="circle" v-bind:size="3" />
			<v-coord type="polar" radius="1" />
			<v-tooltip />
		</v-chart>
		<vui-separator v-bind:size="54" v-bind:gutter="40" align="center" class="margin-top-30">
			<a href="javascript:;" v-on:click="handleClickLegendItem('个人')">
				<vui-statistic class="vui-pro-dashboard-workplace-extra-statistic" v-bind:value="36" title="个人" />
			</a>
			<a href="javascript:;" v-on:click="handleClickLegendItem('团队')">
				<vui-statistic class="vui-pro-dashboard-workplace-extra-statistic" v-bind:value="20" title="团队" />
			</a>
			<a href="javascript:;" v-on:click="handleClickLegendItem('部门')">
				<vui-statistic class="vui-pro-dashboard-workplace-extra-statistic" v-bind:value="28" title="部门" />
			</a>
		</vui-separator>
	</vui-card>
</template>

<script>
	const colors = [
		{ disabled: false, color: "#1890ff", target: "个人" },
		{ disabled: false, color: "#2fc25b", target: "团队" },
		{ disabled: false, color: "#facc14", target: "部门" }
	];

	const dataSource = [
		{ score: 10, type: "引用", target: "个人" },
		{ score: 4, type: "引用", target: "团队" },
		{ score: 6, type: "引用", target: "部门" },
		{ score: 8, type: "口碑", target: "个人" },
		{ score: 4, type: "口碑", target: "团队" },
		{ score: 2, type: "口碑", target: "部门" },
		{ score: 4, type: "产量", target: "个人" },
		{ score: 6, type: "产量", target: "团队" },
		{ score: 6, type: "产量", target: "部门" },
		{ score: 6, type: "贡献", target: "个人" },
		{ score: 4, type: "贡献", target: "团队" },
		{ score: 6, type: "贡献", target: "部门" },
		{ score: 8, type: "热度", target: "个人" },
		{ score: 2, type: "热度", target: "团队" },
		{ score: 8, type: "热度", target: "部门" }
	];

	export default {
		data() {
			return {
				data: dataSource,
				scale: [
					{ dataKey: "score", min: 0, max: 10 }
				],
				padding: ["auto", "auto", "auto", "auto"],
				color: ["target", this.getTargetColor],
				axis: {
					dataKey: "score",
					line: null,
					tickLine: null,
					grid: {
						type: "polygon"
					}
				}
			};
		},
		methods: {
			getTargetColor(value) {
				const item = colors.find(item => item.target === value);

				return item.color;
			},
			handleClickLegendItem(value) {
				const item = colors.find(item => item.target === value);

				item.disabled = !item.disabled;

				this.data = dataSource.filter(item => item.target !== value);
			}
		}
	};
</script>

<style>
	
</style>