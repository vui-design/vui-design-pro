<template>
	<div class="ui-filter">
		<vc-filter-group
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
	import VcFilterGroup from "../filter-group";

	export default {
		components: {
			VcFilterGroup
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
	.ui-filter { border-radius:2px; overflow:hidden; }

	.ui-filter-group { position:relative; display:flex; align-items:flex-start; }
	.ui-filter-group-header { display:flex; align-items:center; width:120px; padding:8px 0; }
	.ui-filter-group-header .label { flex:1; display:block; height:32px; padding:0 16px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; color:#262626; line-height:32px; }
	.ui-filter-group-body { flex:1; padding:8px 0; overflow:hidden; }
	.ui-filter-group-body .vui-row { height:auto; overflow:hidden; transition:all 0.2s; }
	.ui-filter-group-body .vui-row.collapsed { height:32px; }
	.ui-filter-group-body .ui-filter-group-option { display:flex; padding:8px 0; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
	.ui-filter-group-footer { display:flex; padding:8px 0; line-height:32px; }
	.ui-filter-group-footer .btn-more { flex:1; display:block; align-items:center; height:32px; padding:0 16px; }
	.ui-filter-group-footer .btn-more .vui-icon { margin-left:4px; transform:scale(0.6); }

	.ui-filter-group + .ui-filter-group { margin-top:1px; }
	.ui-filter-group.even { background-color:#fff; }
	.ui-filter-group.odd { background-color:#fafafa; }
</style>