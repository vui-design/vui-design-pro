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
      <template v-if="modal.type === 1">添加任务</template>
      <template v-else>编辑任务</template>
    </template>
    <vui-form ref="form" layout="horizontal" v-bind:model="model" v-bind:rules="rules" v-bind:labelWidth="86">
      <vui-form-item prop="title" label="任务名称">
        <vui-input v-model="model.title" clearable placeholder="请输入任务名称" />
      </vui-form-item>
      <vui-form-item prop="startAt" label="开始时间">
        <vui-input v-model="model.startAt" clearable style="width: 50%;" placeholder="请输入开始时间" />
      </vui-form-item>
      <vui-form-item prop="owner" label="负责人">
        <vui-select v-model="model.owner" searchable clearable style="width: 50%;" placeholder="请选择负责人">
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
        <vui-textarea v-model="model.description" clearable maxLength="200" placeholder="请输入任务描述" />
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
            return this.$message.error("任务信息填写不正确");
          }

          const payload = this.model;
          let action = "";
          let message = "";

          if (this.modal.type == 1) {
            action = "list/addStandardItem";
            message = "提交成功";
          }
          else if (this.modal.type == 2) {
            action = "list/editStandardItem";
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