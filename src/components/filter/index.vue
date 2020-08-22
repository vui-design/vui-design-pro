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
</style>