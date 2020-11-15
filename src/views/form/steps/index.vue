<template>
	<div class="vui-pro-page">
		<vui-page-header class="vui-pro-page-header" v-bind:ghost="false">
			<template slot="title">分布表单</template>
			<p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成</p>
		</vui-page-header>
		<div class="vui-pro-page-body">
			<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 40px;">
				<vui-steps v-bind:step="step" type="dot" style="width: 800px; margin: 0 auto;">
					<vui-step title="填写转账信息" />
					<vui-step title="确认转账信息" />
					<vui-step title="完成" />
				</vui-steps>
				<div v-if="step == 0" key="step1" class="margin-top-40">
					<div style="width: 600px; margin:0 auto;">
						<vui-form ref="stepForm1" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="100">
							<vui-form-item prop="payer" label="付款账户">
								<vui-select v-model="form.payer" style="width: 50%;" placeholder="请选择付款账户">
									<vui-option value="kiwi@dianhun.cn">kiwi@dianhun.cn</vui-option>
									<vui-option value="dingwei@qq.com">dingwei@qq.com</vui-option>
								</vui-select>
							</vui-form-item>
							<vui-form-item prop="payee" label="收款账户">
								<vui-input-group compact style="width: 100%;">
									<vui-select v-model="form.type" style="width: 100px;" placeholder="账户类型">
										<vui-option value="alipay">支付宝</vui-option>
										<vui-option value="weixin">微信</vui-option>
										<vui-option value="bank">银行账户</vui-option>
									</vui-select>
									<vui-input v-model="form.payee"style="width: calc(100% - 100px);"  placeholder="请输入收款账户" />
								</vui-input-group>
							</vui-form-item>
							<vui-form-item prop="name" label="收款人姓名">
								<vui-input v-model="form.name" style="width: 50%;" placeholder="请输入收款人姓名" />
							</vui-form-item>
							<vui-form-item prop="amount" label="转账金额">
								<vui-input-number v-model="form.amount" v-bind="controls.amount" style="width: 50%;" placeholder="请输入转账金额" />
							</vui-form-item>
							<vui-form-item>
								<vui-button type="primary" v-bind:loading="submitting" v-on:click="handleNextStep">下一步</vui-button>
							</vui-form-item>
						</vui-form>
					</div>
					<vui-divider dashed v-bind:gutter="40" />
					 <vui-alert type="warning" showIcon message="注意事项">
					 	<div slot="description" class="vui-pro-form-steps-alert-description">
					 		<ul>
					 			<li>
					 				<h4>转账到支付宝账户</h4>
									<p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
					 			</li>
								<li>
									<h4>转账到微信</h4>
									<p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
								</li>
								<li>
									<h4>转账到银行账户</h4>
									<p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
								</li>
					 		</ul>
						</div>
					 </vui-alert>
				</div>
				<div v-else-if="step == 1" key="step2" class="margin-top-40">
					<div style="width: 600px; margin:0 auto;">
						<vui-alert type="warning" class="margin-bottom-30" closable showIcon>确认转账后，资金将直接打入对方账户，无法退回。</vui-alert>
						<vui-form ref="stepForm2" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="100" style="width: 600px; margin:0 auto;">
							<vui-form-item label="付款账户">{{form.payer}}</vui-form-item>
							<vui-form-item label="支付方式">
								<template v-if="form.type == 'alipay'">支付宝</template>
								<template v-else-if="form.type == 'weixin'">微信</template>
								<template v-else-if="form.type == 'bank'">银行账户</template>
							</vui-form-item>
							<vui-form-item label="收款账户">{{form.payee}}</vui-form-item>
							<vui-form-item label="收款人姓名">{{form.name}}</vui-form-item>
							<vui-form-item label="转账金额">
								<em style="margin-right: 4px; color: #2d8cf0; font-weight: 600;">{{form.amount | numerical}}</em>元
							</vui-form-item>
							<vui-form-item prop="password" label="支付密码">
								<vui-input type="password" v-model="form.password" showPasswordToggler style="width: 50%;" placeholder="请输入支付密码" />
							</vui-form-item>
							<vui-form-item>
								<vui-button type="primary" v-bind:loading="submitting" v-on:click="handleSubmit">提交</vui-button>
								<vui-button  class="margin-left-20" v-bind:disabled="submitting" v-on:click="handlePrevStep">上一步</vui-button>
							</vui-form-item>
						</vui-form>
					</div>
				</div>
				<div v-else-if="step == 2" key="step3" class="margin-top-40">
					<vui-result status="success" style="padding: 0;" title="提交成功" description="转账成功，预计在两小时内到账">
						<vui-descriptions slot="content" bordered v-bind:columns="1" v-bind:labelWidth="120">
							<vui-description label="交易单号">{{details.no}}</vui-description>
							<vui-description label="付款账户">{{details.payer}}</vui-description>
							<vui-description label="支付方式">
								<template v-if="details.type == 'alipay'">支付宝</template>
								<template v-else-if="details.type == 'weixin'">微信</template>
								<template v-else-if="details.type == 'bank'">银行账户</template>
							</vui-description>
							<vui-description label="收款账户">{{details.payee}}</vui-description>
							<vui-description label="收款人姓名">{{details.name}}</vui-description>
							<vui-description label="转账金额">
								<em style="margin-right: 4px; color: #2d8cf0; font-weight: 600;">{{details.amount | numerical}}</em>元
							</vui-description>
							<vui-description label="支付时间">{{details.createdAt | dateformatter("yyyy-MM-dd HH:mm:ss")}}</vui-description>
						</vui-descriptions>
						<template slot="extra">
							<vui-button type="primary" v-on:click="handleAgain">再转一笔</vui-button>
							<vui-button>查看账单</vui-button>
							<vui-button>打印</vui-button>
						</template>
					</vui-result>
				</div>
			</vui-card>
		</div>
	</div>
</template>

<script>
	export default {
		inject: ["refresh"],
		data() {
			return {
				step: 0,
				submitting: false,
				form: {
					payer: "kiwi@dianhun.cn",
					type: "alipay",
					payee: "zhangsan@example.com",
					name: "Zhang San",
					amount: 1000,
					password: "888888"
				},
				controls: {
					amount: {
						min: 0,
						max: 200000,
						formatter: value => ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
						parser: value => value.replace(/\$\s?|(,*)/g, "")
					}
				},
				rules: {
					payer: [
						{ trigger: "change" , required: true, type: "string", message: "请选择付款账户" }
					],
					payee: [
						{ trigger: "blur", required: true, message: "请收入收款账户" }
					],
					name: [
						{ trigger: "blur", required: true, message: "请输入收款人姓名" }
					],
					amount: [
						{ trigger: "change" , required: true, type: "number", message: "请输入转账金额" }
					],
					password: [
						{ trigger: "blur", required: true, type: "string", message: "请输入支付密码" }
					]
				},
				details: {}
			};
		},
		methods: {
			handleNextStep() {
				this.$refs.stepForm1.validate(valid => {
					if (!valid) {
						return this.$message.error("转账信息填写不正确");
					}

					this.step++;
				});
			},
			handlePrevStep() {
				this.step--;
			},
			handleSubmit() {
				this.$refs.stepForm2.validate(valid => {
					if (!valid) {
						return this.$message.error("转账信息填写不正确");
					}

					this.submitting = true;
					this.$store.dispatch("example/submitFormSteps", this.form).then(data => {
						this.details = data;
						this.step++;
						this.submitting = false;
					}).catch(e => {
						this.submitting = false;
					});
				});
			},
			handleAgain() {
				this.refresh();
			}
		}
	};
</script>

<style>
	.vui-pro-form-steps-alert-description {  }
	.vui-pro-form-steps-alert-description ul { list-style:decimal; padding-left:14px; }
	.vui-pro-form-steps-alert-description li + li { margin-top:8px; }
	.vui-pro-form-steps-alert-description h4 { color:#595959; font-size:14px; }
	.vui-pro-form-steps-alert-description p { color:#8c8c8c; font-size:14px; }
</style>