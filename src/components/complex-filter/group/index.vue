<template>
	<div class="complex-filter-group">
		<div class="complex-filter-group-header">
			<label class="label">{{data.label}}</label>
		</div>
		<div class="complex-filter-group-body">
			<vui-row v-bind:gutter="20">
				<vui-col key="0" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
					<div class="complex-filter-group-option">
						<vui-checkbox v-bind:value="0">全部</vui-checkbox>
					</div>
				</vui-col>
				<vui-col v-for="(option, index) in data.options" v-bind:key="option.value" v-bind:xs="12" v-bind:sm="8" v-bind:md="6" v-bind:lg="4" v-bind:xl="3" v-bind:xxl="2">
					<div class="complex-filter-group-option">
						<vui-checkbox v-bind:value="option.value">{{option.label}}</vui-checkbox>
					</div>
				</vui-col>
			</vui-row>
		</div>
		<div class="complex-filter-group-footer">
			<a href="javascript:;" class="btn-more">
				<template>更多</template>
				<vui-icon type="chevron-down" />
			</a>
		</div>
	</div>
</template>

<script>
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
			return {

			};
		},
		methods: {

		}
	};
</script>