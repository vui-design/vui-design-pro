<template>
	<div class="vui-pro-filter-group">
		<div class="vui-pro-filter-group-header">
			<label class="label">{{data.label}}</label>
		</div>
		<div class="vui-pro-filter-group-body">
			<vui-row v-bind:gutter="20" v-bind:class="collapsed ? 'collapsed' : ''">
				<vui-col key="0" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
					<div class="vui-pro-filter-group-option">
						<vui-checkbox v-bind:value="0" v-bind:indeterminate="indeterminate" v-bind:checked="state.indexOf(0) > -1" v-on:change="checked => handleChange(checked, 0)">全部</vui-checkbox>
					</div>
				</vui-col>
				<vui-col v-for="(option, index) in data.options" v-bind:key="option.value" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
					<div class="vui-pro-filter-group-option">
						<vui-checkbox v-bind:value="option.value" v-bind:checked="state.indexOf(option.value) > -1" v-on:change="checked => handleChange(checked, option.value)">{{option.label}}</vui-checkbox>
					</div>
				</vui-col>
			</vui-row>
		</div>
		<div class="vui-pro-filter-group-footer">
			<a href="javascript:;" class="btn-more link-default" v-on:click="handleCollapse">
				<template v-if="collapsed">展开<vui-icon type="chevron-down" /></template>
				<template v-else>收起<vui-icon type="chevron-up" /></template>
			</a>
		</div>
	</div>
</template>

<script>
	const isArrayEqualed = function(array, other) {
		let i;
		let length;

		if (!other) {
			return false;
		}

		if (array.length !== other.length) {
			return false;
		}

		for (i = 0, length = array.length; i < length; i++) {
			if (array[i] instanceof Array && other[i] instanceof Array) {
				if (!array[i].equals(other[i])) {
					return false;
				}
			}
			else if (array[i] !== other[i]) {
				return false;
			}
		}

		return true;
	};

	export default {
		props: {
			value: {
				type: Array,
				default: () => []
			},
			data: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			let state = this.getDerivedStateFromProps(this.value, this.data);

			return {
				collapsed: true,
				state
			};
		},
		computed: {
			indeterminate() {
				let state = this.state.filter(value => value !== 0);

				return state.length > 0;
			}
		},
		watch: {
			value: {
				deep: true,
				handler(value) {
					let state = this.getDerivedStateFromProps(value, this.data);

					this.state = state;
				}
			},
			data: {
				deep: true,
				handler(value) {
					let state = this.getDerivedStateFromProps(this.value, value);

					this.state = state;
				}
			}
		},
		methods: {
			getDerivedStateFromProps(value, data) {
				let state = [...value];
				let options = data.options.map(option => option.value);

				if (isArrayEqualed(state.sort(), options.sort())) {
					state.unshift(0);
				}

				return state;
			},
			handleCollapse() {
				this.collapsed = !this.collapsed;
			},
			handleChange(checked, value) {
				let options = this.data.options.map(option => option.value);

				if (checked) {
					if (value == 0) {
						let state = options;

						this.state = [0].concat(state);
						this.$emit("input", this.data.key, state);
						this.$emit("change", this.data.key, state);
					}
					else {
						let isExsited = this.state.indexOf(value) > -1;

						if (isExsited) {
							return;
						}

						let state = [...this.state, value];

						if (isArrayEqualed(state.sort(), options.sort())) {
							this.state = [0].concat(state);
						}
						else {
							this.state = state;
						}

						this.$emit("input", this.data.key, state);
						this.$emit("change", this.data.key, state);
					}
				}
				else {
					if (value == 0) {
						let state = [];

						this.state = state;
						this.$emit("input", this.data.key, state);
						this.$emit("change", this.data.key, state);
					}
					else {
						let isNotExsited = this.state.indexOf(value) === -1;

						if (isNotExsited) {
							return;
						}

						let state = this.state.filter(item => item !== value);

						if (state.indexOf(0) > -1) {
							state = state.filter(item => item !== 0);
						}

						this.state = state;
						this.$emit("input", this.data.key, state);
						this.$emit("change", this.data.key, state);
					}
				}
			}
		}
	};
</script>

<style>
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