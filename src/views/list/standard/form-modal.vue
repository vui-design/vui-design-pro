<template>
	<vui-modal
		v-model="visible"
		v-bind:closable="!submitting"
		v-bind:width="600"
		v-bind:clickBackdropToClose="false"
		v-on:cancel="handleClose"
		v-on:afterClose="handleAfterClose"
	>
		<template slot="title">{{type == 1 ? "添加任务" : "编辑任务"}}</template>
		<vui-form ref="form" layout="horizontal" v-bind:model="data" v-bind:rules="rules" v-bind:labelWidth="86">
			<vui-form-item prop="title" label="任务名称">
				<vui-input v-model="data.title" style="width: 100%;" placeholder="请输入任务名称" />
			</vui-form-item>
			<vui-form-item prop="startAt" label="开始时间">
				<vui-input v-model="data.startAt" style="width: 50%;" placeholder="请输入开始时间" />
			</vui-form-item>
			<vui-form-item prop="owner" label="负责人">
				<vui-select v-model="data.owner" style="width: 50%;" placeholder="请选择负责人">
					<vui-option value="阿波罗">阿波罗</vui-option>
					<vui-option value="柳残阳">柳残阳</vui-option>
					<vui-option value="萱子乔">萱子乔</vui-option>
					<vui-option value="花满楼">花满楼</vui-option>
					<vui-option value="张无忌">张无忌</vui-option>
					<vui-option value="紫旭琳">紫旭琳</vui-option>
					<vui-option value="张三丰">张三丰</vui-option>
					<vui-option value="瑰柳儿">瑰柳儿</vui-option>
					<vui-option value="雪浮灵">雪浮灵</vui-option>
					<vui-option value="南宫惘">南宫惘</vui-option>
				</vui-select>
			</vui-form-item>
			<vui-form-item prop="description" label="任务描述">
				<vui-textarea v-model="data.description" maxLength="200" style="width: 100%;" placeholder="请输入任务描述" />
			</vui-form-item>
		</vui-form>
		<template slot="footer">
			<vui-button v-bind:disabled="submitting" v-on:click="handleClose()">取消</vui-button>
			<vui-button type="primary" v-bind:loading="submitting" v-on:click="handleSubmit()">{{type == 1 ? "确认" : "保存"}}</vui-button>
		</template>
	</vui-modal>
</template>

<script>
	import utils from "src/libs/utils";

	export default {
		data() {
			return {
				type: 1,
				visible: false,
				submitting: false,
				data: {
					id: undefined,
					title: "",
					startAt: "",
					owner: undefined,
					description: ""
				},
				rules: {
					title: [
						{ trigger: "blur" , required: true, type: "string", message: "请输入任务名称" }
					],
					startAt: [
						{ trigger: "blur" , required: true, type: "string", message: "请输入开始时间" }
					],
					owner: [
						{ trigger: "change" , required: true, type: "string", message: "请选择负责人" }
					],
					description: [
						{ trigger: "blur", required: true, type: "string", message: "请输入任务描述" }
					]
				}
			};
		},
		methods: {
			add(callback) {
				this.type = 1;
				this.visible = true;
				this.callback = callback;
			},
			edit(data, callback) {
				this.type = 2;
				this.visible = true;
				this.data = utils.clone(data);
				this.callback = callback;
			},
			handleClose() {
				this.visible = false;
				this.submitting = false;
			},
			handleAfterClose() {
				const data = {
					id: undefined,
					title: "",
					startAt: "",
					owner: undefined,
					description: ""
				};

				this.$refs.form.reset();
				this.data = data;
			},
			handleSubmit() {
				this.$refs.form.validate(valid => {
					if (!valid) {
						return this.$message.error("任务信息填写不正确");
					}

					let payload = this.data;
					let action = "";
					let message = "";

					if (this.type == 1) {
						action = "example/addListStandardDatasource";
						message = "提交成功";
					}
					else if (this.type == 2) {
						action = "example/editListStandardDatasource";
						message = "保存成功";
					}

					this.submitting = true;
					this.$store.dispatch(action, payload).then(data => {
						this.handleClose();
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