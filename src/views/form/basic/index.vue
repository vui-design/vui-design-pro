<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false">
      <template slot="title">基础表单</template>
      <p>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景</p>
    </vui-page-header>
    <div class="vui-design-pro-page-body">
      <vui-card v-bind:bordered="false" bodyStyle="padding: 40px 20%;">
        <vui-form ref="form" v-bind:model="form" v-bind:rules="rules" v-bind:labelWidth="86">
          <vui-form-item prop="name" label="姓名">
            <vui-input v-model="form.name" clearable style="width: 50%;" placeholder="请输入您的姓名" />
          </vui-form-item>
          <vui-form-item prop="email" label="邮箱地址">
            <vui-input v-model="form.email" clearable placeholder="请输入您的邮箱地址" />
          </vui-form-item>
          <vui-form-item prop="city" label="城市">
            <vui-select v-model="form.city" searchable clearable style="width: 25%;" placeholder="请选择所在城市">
              <vui-option value="beijing">北京</vui-option>
              <vui-option value="shanghai">上海</vui-option>
              <vui-option value="guangzhou">广州</vui-option>
              <vui-option value="shenzhen">深圳</vui-option>
              <vui-option value="hangzhou">杭州</vui-option>
            </vui-select>
          </vui-form-item>
          <vui-form-item prop="age" label="年龄">
            <vui-input-number v-model="form.age" v-bind="controls.age" style="width: 25%;" placeholder="请输入您的年龄" />
          </vui-form-item>
          <vui-form-item prop="birthday" label="出生日期">
            <vui-input v-model="form.birthday" clearable style="width: 25%;" placeholder="请选择您的出生日期" />
          </vui-form-item>
          <vui-form-item prop="gender" label="性别">
            <vui-radio-group v-model="form.gender">
              <vui-radio value="male">男</vui-radio>
              <vui-radio value="female">女</vui-radio>
            </vui-radio-group>
          </vui-form-item>
          <vui-form-item prop="hobby" label="兴趣爱好">
            <vui-checkbox-group v-model="form.hobby">
              <vui-checkbox value="eat">吃</vui-checkbox>
              <vui-checkbox value="sleep">睡</vui-checkbox>
              <vui-checkbox value="run">跑步</vui-checkbox>
              <vui-checkbox value="movie">电影</vui-checkbox>
            </vui-checkbox-group>
          </vui-form-item>
          <vui-form-item prop="married" label="是否已婚">
            <vui-switch v-model="form.married">
              <template slot="checkedText">是</template>
              <template slot="uncheckedText">否</template>
            </vui-switch>
          </vui-form-item>
          <vui-form-item prop="introduction" label="个人简介">
            <vui-textarea v-model="form.introduction" v-bind="controls.introduction" clearable placeholder="请输入您的个人简介" />
          </vui-form-item>
          <vui-form-item>
            <vui-space>
              <vui-button type="primary" v-bind:loading="submitting" v-on:click="handleSubmit">提交</vui-button>
              <vui-button-group v-bind:disabled="submitting">
                <vui-button v-on:click="handleReset">重置</vui-button>
                <vui-button v-on:click="handleBack">取消</vui-button>
              </vui-button-group>
            </vui-space>
          </vui-form-item>
        </vui-form>
      </vui-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        submitting: false,
        form: {
          name: "",
          email: "",
          city: undefined,
          age: undefined,
          birthday: "",
          gender: "male",
          hobby: [],
          married: true,
          introduction: ""
        },
        controls: {
          age: {
            min: 15,
            max: 60
          },
          introduction: {
            autosize: {
              minRows: 4,
              maxRows: 8
            },
            maxLength: 200
          }
        },
        rules: {
          name: [
            { trigger: "blur" , type: "string", required: true, message: "姓名不允许为空" }
          ],
          email: [
            { trigger: "blur", type: "string", required: true, message: "邮箱地址不允许为空" },
            { trigger: "blur" , type: "email", message: "邮箱地址格式不正确" }
          ],
          city: [
            { trigger: "change", type: "string", required: true, message: "所在城市不允许为空" }
          ],
          age: [
            { trigger: "change" , type: "number", required: true, message: "年龄不允许为空" }
          ],
          birthday: [
            { trigger: "blur", type: "string", required: true, message: "出生日期不允许为空" }
          ],
          hobby: [
            { trigger: "change", type: "array", required: true, min: 1, message: "至少选择一项兴趣爱好" },
            { trigger: "change", type: "array", max: 2, message: "最多选择两项兴趣爱好" }
          ],
          introduction: [
            { trigger: "blur", type: "string", required: true, message: "个人简介不允许为空" },
            { trigger: "blur", type: "string", min: 20, message: "个人简介不少于20个字符" }
          ]
        }
      };
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate(valid => {
          if (!valid) {
            return this.$message.error("个人信息填写不正确");
          }

          const payload = {
            ...this.form
          };

          this.submitting = true;
          this.$store.dispatch("form/submitBasic", payload).then(data => {
            this.submitting = false;
            this.$message.success("提交成功");
          }).catch(e => {
            this.submitting = false;
          });
        });
      },
      handleReset() {
        this.$refs.form.reset();
      },
      handleBack() {
        this.$router.back();
      }
    }
  };
</script>