<template>
  <div class="vui-user-settings-basic">
    <div class="vui-user-settings-basic-header">基本设置</div>
    <div class="vui-user-settings-basic-body">
      <vui-form ref="form" layout="vertical" class="form" v-bind:model="form" v-bind:rules="rules">
        <div class="form-content">
          <vui-form-item prop="nickname" label="昵称">
            <vui-input v-model="form.nickname" clearable style="width: 50%;" placeholder="请输入昵称" />
          </vui-form-item>
          <vui-form-item prop="phone" label="联系电话">
            <vui-space>
              <vui-input v-model="form.areacode" clearable style="width: 80px;" placeholder="请输入区号" />
              <vui-input v-model="form.phone" clearable style="width: 160px;" placeholder="请输入联系电话" />
            </vui-space>
          </vui-form-item>
          <vui-form-item prop="email" label="邮箱地址">
            <vui-input v-model="form.email" clearable style="width: 50%;" placeholder="请输入邮箱地址" />
          </vui-form-item>
          <vui-form-item prop="description" label="个人简介">
            <vui-textarea v-model="form.description" v-bind="controls.description" clearable placeholder="请输入个人简介" />
          </vui-form-item>
          <vui-form-item prop="country" label="国家地区">
            <vui-select v-model="form.country" searchable clearable style="width: 160px;" placeholder="请选择国家地区">
              <vui-option value="China">中国</vui-option>
            </vui-select>
          </vui-form-item>
          <vui-form-item label="所在省市">
            <vui-space>
              <vui-select v-model="form.province" v-on:change="handleChangeProvince" searchable clearable style="width: 160px;" placeholder="请选择所在省">
                <vui-option v-for="province in dictionary.provinces" v-bind:key="province.value" v-bind:value="province.value">{{province.label}}</vui-option>
              </vui-select>
              <vui-select v-model="form.city" searchable clearable style="width: 160px;" placeholder="请选择所在市">
                <vui-option v-for="city in dictionary.cities" v-bind:key="city.value" v-bind:value="city.value">{{city.label}}</vui-option>
              </vui-select>
            </vui-space>
          </vui-form-item>
          <vui-form-item prop="address" label="街道地址">
            <vui-input v-model="form.address" clearable placeholder="请输入街道地址" />
          </vui-form-item>
          <vui-form-item>
            <vui-button type="primary" size="large" v-on:click="handleSubmit">保存</vui-button>
            <vui-button size="large" style="margin-left: 16px;" v-on:click="handleCancel">取消</vui-button>
          </vui-form-item>
        </div>
        <div class="form-sider">
          <vui-form-item prop="avatar" label="头像">
            <vui-avatar-uploader v-model="form.avatar" />
          </vui-form-item>
        </div>
      </vui-form>
    </div>
  </div>
</template>

<script>
  import VuiAvatarUploader from "src/components/avatar-uploader";

  const provinces = [
    { value: "zhejiang", label: "浙江" },
    { value: "jiangsu", label: "江苏" }
  ];
  const cities = {
    "zhejiang": [
      { value: "hangzhou", label: "杭州" },
      { value: "ningbo", label: "宁波" },
      { value: "wenzhou", label: "温州" }
    ],
    "jiangsu": [
      { value: "nanjing", label: "南京" },
      { value: "suzhou", label: "苏州" },
      { value: "wuxi", label: "无锡" }
    ]
  };

  export default {
    components: {
      VuiAvatarUploader
    },
    data() {
      return {
        dictionary: {
          provinces: provinces,
          cities: cities["zhejiang"],
        },
        form: {
          avatar: "",
          nickname: "Ding Wei",
          areacode: "0571",
          phone: "88888888",
          email: "example@example.com",
          description: "小人物，小欲望，小满足，大幸福",
          country: "China",
          province: "zhejiang",
          city: "hangzhou",
          address: "杭州市滨江区江南大道100号"
        },
        rules: {
          nickname: [
            { trigger: "blur" , type: "string", required: true, message: "请输入昵称" }
          ],
          email: [
            { trigger: "blur" , type: "string", required: true, message: "请输入邮箱地址" },
            { trigger: "blur" , type: "email", message: "邮箱地址格式不正确" }
          ],
          description: [
            { trigger: "blur" , type: "string", required: true, message: "请输入邮箱地址" }
          ],
          country: [
            { trigger: "change" , type: "string", required: true, message: "请选择国家地区" }
          ],
          province: [
            { trigger: "change" , type: "string", required: true, message: "请选择所在省" }
          ],
          city: [
            { trigger: "change" , type: "string", required: true, message: "请选择所在城市" }
          ],
          address: [
            { trigger: "blur" , type: "string", required: true, message: "请输入街道地址" }
          ]
        },
        controls: {
          description: {
            autosize: {
              minRows: 4
            },
            maxLength: 200
          }
        }
      }
    },
    methods: {
      handleChangeProvince(province) {
        if (!province) {
          this.dictionary.cities = [];
          this.form.city = "";
        }
        else {
          this.dictionary.cities = cities[province];
          this.form.city = this.dictionary.cities[0]["value"];
        }
      },
      handleSubmit() {

      },
      handleCancel() {

      }
    }
  };
</script>

<style>
  .vui-user-settings-basic {  }
  .vui-user-settings-basic-header { margin-bottom:24px; color:#262626; font-weight:500; font-size:20px; }
  .vui-user-settings-basic-body {  }
  .vui-user-settings-basic-body .form { display:flex; justify-content:flex-start; align-items:flex-start; }
  .vui-user-settings-basic-body .form-sider { padding-left:32px; }
  .vui-user-settings-basic-body .form-content { flex:1; border-right:1px solid #f3f3f3; border-image:linear-gradient(to bottom, #f3f3f3, transparent) 0 10; padding-right:32px; }
</style>