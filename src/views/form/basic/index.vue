<template>
	<div class="padding-20">
		<vui-card title="基础表单" :bordered="false" padding="30px 20%">
			<vui-form :model="formData" :labelWidth="120">
				<vui-form-item label="Input">
					<vui-input placeholder="Enter something..." v-model="formData.input" />
				</vui-form-item>
				<vui-form-item label="Select">
					<vui-select style="width: 200px;" placeholder="Select..." v-model="formData.select">
						<vui-option value="new york">New York</vui-option>
						<vui-option value="london">London</vui-option>
						<vui-option value="sydney">Sydney</vui-option>
						<vui-option value="ottawa">Ottawa</vui-option>
						<vui-option value="paris">Paris</vui-option>
						<vui-option value="canberra">Canberra</vui-option>
					</vui-select>
				</vui-form-item>
				<vui-form-item label="Multiple Select">
					<vui-select placeholder="Select..." multiple v-model="formData.multipleSelect">
						<vui-option value="new york">New York</vui-option>
						<vui-option value="london">London</vui-option>
						<vui-option value="sydney">Sydney</vui-option>
						<vui-option value="ottawa">Ottawa</vui-option>
						<vui-option value="paris">Paris</vui-option>
						<vui-option value="canberra">Canberra</vui-option>
					</vui-select>
				</vui-form-item>
				<vui-form-item label="Radio">
					<vui-radio-group v-model="formData.radio">
						<vui-radio value="male">Male</vui-radio>
						<vui-radio value="female">Female</vui-radio>
					</vui-radio-group>
				</vui-form-item>
				<vui-form-item label="Checkbox">
					<vui-checkbox-group v-model="formData.checkbox">
						<vui-checkbox value="eat">Eat</vui-checkbox>
						<vui-checkbox value="sleep">Sleep</vui-checkbox>
						<vui-checkbox value="run">Run</vui-checkbox>
						<vui-checkbox value="movie">Movie</vui-checkbox>
					</vui-checkbox-group>
				</vui-form-item>
				<vui-form-item label="Switch">
					<vui-switch v-model="formData.switch">
						<template slot="checked">ON</template>
						<template slot="unchecked">OFF</template>
					</vui-switch>
				</vui-form-item>
				<vui-form-item label="Textarea">
					<vui-textarea placeholder="Enter something..." v-model="formData.textarea" :autosize="{minRows: 4, maxRows: 8}" />
				</vui-form-item>
				<vui-form-item>
					<vui-button type="primary">Submit</vui-button>
					<vui-button style="margin-left: 20px;">Cancel</vui-button>
				</vui-form-item>
			</vui-form>
		</vui-card>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					input: "",
					select: undefined,
					multipleSelect: [],
					radio: "male",
					checkbox: ["eat"],
					switch: false
				}
			};
		},
		watch: {
			formData: {
				deep: true,
				handler: function(newValue, oldValue) {
					console.log(JSON.stringify(newValue));
				}
			}
		}
	};
</script>