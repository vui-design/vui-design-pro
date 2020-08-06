<template>
	<vui-modal v-model="visible" v-bind:width="680" v-bind:closable="!submitting" v-bind:clickBackdropToClose="false" v-on:cancel="handleCloseForm()" v-on:afterClose="handleAfterCloseForm()">
		<template slot="title">{{type == 1 ? "添加规则" : "编辑规则"}}</template>
		<vui-form ref="form" layout="horizontal" v-bind:model="data" v-bind:rules="rules" v-bind:labelWidth="112">
			<vui-form-item prop="name" label="规则名称">
				<vui-input v-model="data.name" style="width: 50%;" placeholder="请输入规则名称" />
			</vui-form-item>
			<vui-form-item prop="description" label="描述">
				<vui-textarea v-model="data.description" maxLength="200" style="width: 100%;" placeholder="请输入描述" />
			</vui-form-item>
			<vui-form-item prop="count" label="服务调用次数">
				<vui-input-number v-model="data.count" v-bind:min="0" v-bind:formatter="formatter" v-bind:parser="parser" style="width: 25%;" placeholder="请输入服务调用次数" />
			</vui-form-item>
			<vui-form-item prop="state" label="状态">
				<vui-radio-group v-model="data.state">
					<vui-radio v-bind:value="1">未启用</vui-radio>
					<vui-radio v-bind:value="2">已上线</vui-radio>
					<vui-radio v-bind:value="3">运行中</vui-radio>
					<vui-radio v-bind:value="4">关闭</vui-radio>
				</vui-radio-group>
			</vui-form-item>
			<vui-form-item prop="datetime" label="上次调度时间">
				<vui-input v-model="data.datetime" style="width: 50%;" placeholder="请输入上次调度时间" />
			</vui-form-item>
		</vui-form>
		<template slot="footer">
			<vui-button v-bind:disabled="submitting" v-on:click="handleCloseForm()">取消</vui-button>
			<vui-button type="primary" v-bind:loading="submitting" v-on:click="handleSubmitForm()">{{type == 1 ? "确认" : "保存"}}</vui-button>
		</template>
	</vui-modal>
</template>

<script>
	import utils from "src/utils";

	export default {
		data() {
			return {
				type: 1,
				visible: false,
				submitting: false,
				data: {
					id: undefined,
					name: "",
					description: "",
					count: 0,
					state: 1,
					datetime: ""
				},
				rules: {
					name: [
						{ trigger: "blur" , required: true, type: "string", message: "请输入规则名称" }
					],
					description: [
						{ trigger: "blur", required: true, type: "string", message: "请输入描述" }
					],
					count: [
						{ trigger: "change" , required: true, type: "number", message: "请输入服务调用次数" }
					],
					state: [
						{ trigger: "change" , required: true, type: "number", message: "请选择状态" }
					],
					datetime: [
						{ trigger: "blur" , required: true, type: "string", message: "请输入上次调度时间" }
					]
				}
			};
		},

		methods: {
			add(data, callback) {
				this.type = 1;
				this.visible = true;
				this.data = utils.clone(data);
				this.callback = callback;
			},
			edit(data, callback) {
				this.type = 2;
				this.visible = true;
				this.data = utils.clone(data);
				this.callback = callback;
			},

			formatter(value) {
				return value + " 万";
			},
			parser(value) {
				return value.replace(" 万", "");
			},

			handleCloseForm() {
				this.visible = false;
				this.submitting = false;
			},
			handleAfterCloseForm() {
				this.$refs.form.reset();
			},
			handleSubmitForm() {
				this.$refs.form.validate(valid => {
					if (!valid) {
						return this.$message.error("信息填写不正确");
					}

					let action = "";
					let message = "";
					let payload = this.data;

					if (this.type == 1) {
						action = "example/addListTableDatasource";
						message = "提交成功";
					}
					else if (this.type == 2) {
						action = "example/editListTableDatasource";
						message = "保存成功";
					}

					this.submitting = true;
					this.$store.dispatch(action, payload).then(data => {
						this.handleCloseForm();
						this.$message.success(message);

						if (typeof this.callback === "function") {
							this.callback(data);
						}
					}).catch(e => {
						this.submitting = false;
					});
				});
			}
		}
	};
</script>