<template>
	<div class="complex-filter">
		<complex-filter-group
			v-for="(group, index) in data"
			v-bind:key="group.value"
			v-bind:value="state[group.value]"
			v-bind:data="group"
			v-bind:class="index % 2 == 0 ? 'even' : 'odd'"
			v-on:change="handleGroupChange"
		/>
	</div>
</template>

<script>
	import ComplexFilterGroup from "src/components/complex-filter-group";

	export default {
		components: {
			ComplexFilterGroup
		},
		props: {
			value: {
				type: Object,
				default: () => ({})
			},
			data: {
				type: Array,
				default: () => []
			}
		},
		data() {
			let state = this.getDerivedValueFromProps(this.value);

			return {
				state
			};
		},
		watch: {
			value: {
				deep: true,
				handler(value) {
					let state = this.getDerivedValueFromProps(value);

					this.state = state;
				}
			}
		},
		methods: {
			getDerivedValueFromProps(value) {
				var state = {};

				Object.keys(value).forEach(key => {
					state[key] = [
						...value[key]
					];
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
	.complex-filter { border-radius:2px; overflow:hidden; }

	.complex-filter-group { position:relative; display:flex; align-items:flex-start; }
	.complex-filter-group-header { display:flex; align-items:center; width:120px; padding:6px 0; color:#262626; line-height:28px; }
	.complex-filter-group-header .label { flex:1; display:flex; padding:0 16px; }
	.complex-filter-group-body { flex:1; padding:6px 0; overflow:hidden; }
	.complex-filter-group-body .vui-row { overflow:hidden; }
	.complex-filter-group-body .complex-filter-group-option { display:flex; padding:6px 0; }
	.complex-filter-group-footer { display:flex; padding:6px 0; line-height:28px; }
	.complex-filter-group-footer .btn-more { flex:1; display:flex; align-items:center; padding:0 16px; }
	.complex-filter-group-footer .btn-more .vui-icon { margin-left:4px; transform:scale(0.6); }

	.complex-filter-group + .complex-filter-group { margin-top:1px; }
	.complex-filter-group.even { background-color:#fff; }
	.complex-filter-group.odd { background-color:#f9f9f9; }
</style>