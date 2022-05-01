<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false">
      <template slot="title">分布表单</template>
      <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成</p>
    </vui-page-header>
    <div class="vui-design-pro-page-body">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 40px;">
        <vui-steps v-bind:step="page.step" type="dot" style="width: 800px; margin: 0 auto;">
          <vui-step title="填写转账信息" />
          <vui-step title="确认转账信息" />
          <vui-step title="完成转账操作" />
        </vui-steps>
        <div v-show="page.step === 0" key="step1" style="margin-top: 40px;">
          <div style="width: 640px; margin:0 auto;">
            <vui-form ref="form1" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="100">
              <vui-form-item prop="payer" label="付款账户">
                <vui-select v-model="form.payer" searchable clearable style="width: 50%;" placeholder="请选择付款账户">
                  <vui-option value="kiwi@dianhun.cn">kiwi@dianhun.cn</vui-option>
                  <vui-option value="dingwei@qq.com">dingwei@qq.com</vui-option>
                </vui-select>
              </vui-form-item>
              <vui-form-item prop="payee" label="收款账户">
                <vui-input-group compact style="width: 100%;">
                  <vui-select v-model="form.type" searchable style="width: 100px;" placeholder="账户类型">
                    <vui-option value="alipay">支付宝</vui-option>
                    <vui-option value="weixin">微信</vui-option>
                    <vui-option value="bank">银行账户</vui-option>
                  </vui-select>
                  <vui-input v-model="form.payee" clearable style="width: calc(100% - 100px);" placeholder="请输入收款账户" />
                </vui-input-group>
              </vui-form-item>
              <vui-form-item prop="name" label="收款人姓名">
                <vui-input v-model="form.name" clearable style="width: 50%;" placeholder="请输入收款人姓名" />
              </vui-form-item>
              <vui-form-item prop="amount" label="转账金额">
                <vui-input-number v-model="form.amount" v-bind="controls.amount" style="width: 50%;" placeholder="请输入转账金额" />
              </vui-form-item>
              <vui-form-item>
                <vui-button type="primary" v-bind:loading="page.submitting" v-on:click="handleNextStep">下一步</vui-button>
              </vui-form-item>
            </vui-form>
          </div>
        </div>
        <div v-show="page.step === 1" key="step2" style="margin-top: 40px;">
          <div style="width: 640px; margin:0 auto;">
            <vui-alert type="warning" showIcon closable style="margin-bottom: 24px;">
              <template>确认转账后，资金将直接打入对方账户，无法退回。</template>
            </vui-alert>
            <vui-form ref="form2" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="100">
              <vui-form-item label="付款账户">{{form.payer}}</vui-form-item>
              <vui-form-item label="支付方式">
                <template v-if="form.type === 'alipay'">支付宝</template>
                <template v-else-if="form.type === 'weixin'">微信</template>
                <template v-else-if="form.type === 'bank'">银行账户</template>
              </vui-form-item>
              <vui-form-item label="收款账户">{{form.payee}}</vui-form-item>
              <vui-form-item label="收款人姓名">{{form.name}}</vui-form-item>
              <vui-form-item label="转账金额">
                <vui-statistic v-bind:value="form.amount" v-bind:precision="2" suffix="元" />
              </vui-form-item>
              <vui-form-item prop="password" label="支付密码">
                <vui-input type="password" v-model="form.password" showPasswordToggler style="width: 50%;" placeholder="请输入支付密码" />
              </vui-form-item>
              <vui-form-item>
                <vui-space>
                  <vui-button type="primary" v-bind:loading="page.submitting" v-on:click="handleSubmit">提交</vui-button>
                  <vui-button v-bind:disabled="page.submitting" v-on:click="handlePrevStep">上一步</vui-button>
                </vui-space>
              </vui-form-item>
            </vui-form>
          </div>
        </div>
        <div v-show="page.step === 2" key="step3" style="margin-top: 40px;">
          <vui-result status="success" style="padding: 0;">
            <template slot="title">操作成功</template>
            <template slot="description">转账成功，预计在两小时内到账</template>
          </vui-result>
          <vui-descriptions bordered labelAlign="right" v-bind:columns="1" v-bind:labelWidth="120" style="margin-top: 40px;">
            <vui-description label="交易单号">{{result.no}}</vui-description>
            <vui-description label="付款账户">{{result.payer}}</vui-description>
            <vui-description label="支付方式">
              <template v-if="result.type === 'alipay'">支付宝</template>
              <template v-else-if="result.type === 'weixin'">微信</template>
              <template v-else-if="result.type === 'bank'">银行账户</template>
            </vui-description>
            <vui-description label="收款账户">{{result.payee}}</vui-description>
            <vui-description label="收款人姓名">{{result.name}}</vui-description>
            <vui-description label="转账金额">
              <vui-statistic v-bind:value="result.amount" v-bind:precision="2" suffix="元" />
            </vui-description>
            <vui-description label="支付时间">{{result.createdAt | dateformatter("yyyy-MM-dd HH:mm:ss")}}</vui-description>
          </vui-descriptions>
          <div style="margin-top: 40px; text-align: center;">
            <vui-space>
              <vui-button type="primary" v-on:click="handleAgain">再转一笔</vui-button>
              <vui-button-group>
                <vui-button>查看账单</vui-button>
                <vui-button>打印</vui-button>
              </vui-button-group>
            </vui-space>
          </div>
        </div>
        <div class="vui-form-steps-notice">
          <h4>注意事项</h4>
          <dl>
            <dt>转账到支付宝账户</dt>
            <dd>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</dd>
          </dl>
          <dl>
            <dt>转账到微信</dt>
            <dd>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</dd>
          </dl>
          <dl>
            <dt>转账到银行账户</dt>
            <dd>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</dd>
          </dl>
        </div>
      </vui-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: {
          step: 0,
          submitting: false
        },
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
            formatter: value => ("$ " + value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
        result: {}
      };
    },
    methods: {
      handleNextStep() {
        this.$refs.form1.validate(valid => {
          if (!valid) {
            return this.$message.error("转账信息填写不正确");
          }

          this.page.step++;
        });
      },
      handlePrevStep() {
        this.page.step--;
      },
      handleSubmit() {
        this.$refs.form2.validate(valid => {
          if (!valid) {
            return this.$message.error("转账信息填写不正确");
          }

          const payload =  {
            ...this.form
          };

          this.page.submitting = true;
          this.$store.dispatch("example/submitFormSteps", payload).then(data => {
            this.result = data;
            this.page.step++;
            this.page.submitting = false;
          }).catch(e => {
            this.page.submitting = false;
          });
        });
      },
      handleAgain() {
        this.page.step = 0;
        this.$refs.form1.reset();
        this.$refs.form2.reset();
      }
    }
  };
</script>

<style>
  .vui-form-steps-notice { border-top:1px solid #f0f0f0; margin-top:40px; padding-top:40px; }
  .vui-form-steps-notice h4 { color:#262626; font-size:16px; }
  .vui-form-steps-notice dl { margin-top:16px; color:#595959; font-size:14px; }
  .vui-form-steps-notice dl dt { color:#262626; }
  .vui-form-steps-notice dl dd { margin-top:4px; }
  .vui-form-steps-notice dl + dl { margin-top:16px; }
</style>