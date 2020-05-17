<template>
	<div class="complex-filter-group">
		<div class="complex-filter-group-header">
			<label class="label">{{data.label}}</label>
		</div>
		<div class="complex-filter-group-body">
			<vui-row v-bind:gutter="20" v-bind:style="{height: collapse ? '28px' : 'auto'}">
				<vui-col key="0" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
					<div class="complex-filter-group-option">
						<vui-checkbox v-bind:value="0" v-bind:checked="state.indexOf(0) > -1" v-on:change="checked => handleChange(checked, 0)">全部</vui-checkbox>
					</div>
				</vui-col>
				<vui-col v-for="(option, index) in data.options" v-bind:key="option.value" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
					<div class="complex-filter-group-option">
						<vui-checkbox v-bind:value="option.value" v-bind:checked="state.indexOf(option.value) > -1" v-on:change="checked => handleChange(checked, option.value)">{{option.label}}</vui-checkbox>
					</div>
				</vui-col>
			</vui-row>
		</div>
		<div class="complex-filter-group-footer">
			<a href="javascript:;" class="btn-more link-default" v-on:click="handleCollapse">
				<template v-if="collapse">更多<vui-icon type="chevron-down" /></template>
				<template v-else>收起<vui-icon type="chevron-up" /></template>
			</a>
		</div>
	</div>
</template>

<script>
	const isArrayEqual = function(array, other) {
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
			let state = this.getDerivedValueFromProps(this.value, this.data);

			return {
				collapse: true,
				state
			};
		},
		watch: {
			value: {
				deep: true,
				handler(value) {
					let state = this.getDerivedValueFromProps(value, this.data);

					this.state = state;
				}
			},
			data: {
				deep: true,
				handler(value) {
					let state = this.getDerivedValueFromProps(this.value, value);

					this.state = state;
				}
			}
		},
		methods: {
			getDerivedValueFromProps(value, data) {
				let a = [...value];
				let b = data.options.map(option => option.value);

				// 选项被全部选中时，需要将全部按钮选中
				if (isArrayEqual(a.sort(), b.sort())) {
					a.unshift(0);
				}

				return a;
			},
			handleCollapse() {
				this.collapse = !this.collapse;
			},
			handleChange(checked, value) {
				let options = this.data.options.map(option => option.value);

				if (checked) {
					if (value == 0) {
						let state = options;

						this.state = [0].concat(state);
						this.$emit("input", this.data.value, state);
						this.$emit("change", this.data.value, state);
					}
					else {
						let isExsited = this.state.indexOf(value) > -1;

						if (isExsited) {
							return;
						}

						let state = [...this.state, value];

						if (isArrayEqual(state.sort(), options.sort())) {
							this.state = [0].concat(state);
						}
						else {
							this.state = state;
						}

						this.$emit("input", this.data.value, state);
						this.$emit("change", this.data.value, state);
					}
				}
				else {
					if (value == 0) {
						let state = [];

						this.state = state;
						this.$emit("input", this.data.value, state);
						this.$emit("change", this.data.value, state);
					}
					else {
						let isNotExsited = this.state.indexOf(value) === -1;

						if (isNotExsited) {
							return;
						}

						let state = this.state.filter(item => item !== value);

						if (state.indexOf(0) > -1) {
							this.state = state.filter(item => item !== 0);
						}
						else {
							this.state = state;
						}

						this.$emit("input", this.data.value, state);
						this.$emit("change", this.data.value, state);
					}
				}
			}
		}
	};
</script>