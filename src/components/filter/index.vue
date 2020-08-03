<template>
	<div class="vui-pro-filter">
		<vui-pro-filter-group
			v-for="(item, index) in options"
			v-bind:key="item.key"
			v-bind:class="index % 2 == 0 ? 'even' : 'odd'"
			v-bind:data="item"
			v-bind:value="state[item.key]"
			v-on:change="handleGroupChange"
		/>
	</div>
</template>

<script>
	import VuiProFilterGroup from "../filter-group";

	export default {
		components: {
			VuiProFilterGroup
		},
		props: {
			value: {
				type: Object,
				default: () => ({})
			},
			options: {
				type: Array,
				default: () => []
			}
		},
		data() {
			let state = this.getDerivedStateFromProps(this.value);

			return {
				state
			};
		},
		watch: {
			value: {
				deep: true,
				handler(value) {
					let state = this.getDerivedStateFromProps(value);

					this.state = state;
				}
			}
		},
		methods: {
			getDerivedStateFromProps(value) {
				let state = {};

				Object.keys(value).forEach(key => {
					let selected = value[key];

					state[key] = [...selected];
				});

				return state;
			},
			handleGroupChange(key, value) {
				this.state[key] = value;
				this.$emit("input", this.state);
				this.$emit("change", this.state);
			}
		}
	};
</script>

<style>
	.vui-pro-filter { border-radius:2px; overflow:hidden; }

	.vui-pro-filter-group { position:relative; display:flex; align-items:flex-start; }
	.vui-pro-filter-group-header { display:flex; align-items:center; width:120px; padding:8px 0; }
	.vui-pro-filter-group-header .label { flex:1; display:block; height:32px; padding:0 16px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#262626; line-height:32px; }
	.vui-pro-filter-group-body { flex:1; padding:8px 0; overflow:hidden; }
	.vui-pro-filter-group-body .vui-row { height:auto; overflow:hidden; transition:all 0.2s; }
	.vui-pro-filter-group-body .vui-row.collapsed { height:32px; }
	.vui-pro-filter-group-body .vui-pro-filter-group-option { display:flex; padding:8px 0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
	.vui-pro-filter-group-footer { display:flex; padding:8px 0; line-height:32px; }
	.vui-pro-filter-group-footer .btn-more { flex:1; display:block; align-items:center; height:32px; padding:0 16px; }
	.vui-pro-filter-group-footer .btn-more .vui-icon { margin-left:4px; transform:scale(0.6); }

	.vui-pro-filter-group + .vui-pro-filter-group { margin-top:1px; }
	.vui-pro-filter-group.even { background-color:#fff; }
	.vui-pro-filter-group.odd { background-color:#fafafa; }
</style>