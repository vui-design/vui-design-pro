<template>
  <vui-modal
    v-model="modal.visible"
    v-bind:width="modal.width"
    v-bind:clickBackdropToClose="modal.clickBackdropToClose"
    v-bind:bodyStyle="modal.bodyStyle"
    v-on:cancel="handleClose"
    v-on:afterClose="handleAfterClose"
  >
    <template slot="title">
      <template v-if="modal.type === 1">添加规则</template>
      <template v-else>编辑规则</template>
    </template>
    <vui-form ref="form" layout="horizontal" v-bind:model="model" v-bind:rules="rules" v-bind:labelWidth="112">
      <vui-form-item prop="name" label="规则名称">
        <vui-input v-model="model.name" v-bind="controls.name" style="width: 50%;" placeholder="请输入规则名称" />
      </vui-form-item>
      <vui-form-item prop="description" label="描述">
        <vui-textarea v-model="model.description" v-bind="controls.description" placeholder="请输入描述" />
      </vui-form-item>
      <vui-form-item prop="count" label="服务调用次数">
        <vui-input-number v-model="model.count" v-bind="controls.count" style="width: 25%;" placeholder="请输入服务调用次数" />
      </vui-form-item>
      <vui-form-item prop="state" label="状态">
        <vui-radio-group v-model="model.state">
          <vui-radio v-bind:value="1">未启用</vui-radio>
          <vui-radio v-bind:value="2">已上线</vui-radio>
          <vui-radio v-bind:value="3">运行中</vui-radio>
          <vui-radio v-bind:value="4">关闭</vui-radio>
        </vui-radio-group>
      </vui-form-item>
      <vui-form-item prop="datetime" label="上次调度时间">
        <vui-input v-model="model.datetime" v-bind="controls.datetime" style="width: 50%;" placeholder="请输入上次调度时间" />
      </vui-form-item>
    </vui-form>
    <template slot="footer">
      <vui-button v-bind:disabled="modal.submitting" v-on:click="handleCancel">取消</vui-button>
      <vui-button type="primary" v-bind:loading="modal.submitting" v-on:click="handleSubmit">
        <template v-if="modal.type === 1">确认</template>
        <template v-else>保存</template>
      </vui-button>
    </template>
  </vui-modal>
</template>

<script>
  import utils from "src/libs/utils";

  export default {
    data() {
      return {
        modal: {
          visible: false,
          width: 600,
          clickBackdropToClose: false,
          bodyStyle: {
            padding: "24px"
          },
          type: 1,
          submitting: false,
          callback: undefined
        },
        model: {
          id: undefined,
          name: "",
          description: "",
          count: 0,
          state: 1,
          datetime: ""
        },
        controls: {
          name: {
            clearable: true
          },
          description: {
            clearable: true,
            maxLength: 200
          },
          count: {
            min: 0,
            formatter: value => value + " 万"
          },
          datetime: {
            clearable: true
          }
        },
        rules: {
          name: [
            { trigger: "blur" , type: "string", required: true, message: "请输入规则名称" }
          ],
          description: [
            { trigger: "blur", type: "string", required: true, message: "请输入描述" }
          ],
          count: [
            { trigger: "change" , type: "number", required: true, message: "请输入服务调用次数" }
          ],
          state: [
            { trigger: "change" , type: "number", required: true, message: "请选择状态" }
          ],
          datetime: [
            { trigger: "blur" , type: "string", required: true, message: "请输入上次调度时间" }
          ]
        }
      };
    },
    methods: {
      add(callback) {
        this.modal.type = 1;
        this.modal.visible = true;
        this.modal.callback = callback;
      },
      edit(data, callback) {
        this.modal.type = 2;
        this.modal.visible = true;
        this.modal.callback = callback;
        this.$nextTick(() => {
          this.model = utils.clone(data);
        });
      },
      handleClose() {
        this.visible = false;
        this.submitting = false;
      },
      handleAfterClose() {
        this.$refs.form.reset();
      },
      handleClose() {
        this.modal.visible = false;
        this.modal.submitting = false;
      },
      handleCancel() {
        this.handleClose();
      },
      handleSubmit() {
        this.$refs.form.validate(valid => {
          if (!valid) {
            return this.$message.error("信息填写不正确");
          }

          const payload = this.model;
          let action = "";
          let message = "";

          if (this.modal.type == 1) {
            action = "list/addTableItem";
            message = "提交成功";
          }
          else if (this.modal.type == 2) {
            action = "list/editTableItem";
            message = "保存成功";
          }

          this.modal.submitting = true;
          this.$store.dispatch(action, payload).then(data => {
            this.handleClose();
            this.$message.success(message);

            if (typeof this.modal.callback === "function") {
              this.modal.callback(data);
            }
          }).catch(e => {
            this.modal.submitting = false;
          });
        });
      }
    }
  };
</script>