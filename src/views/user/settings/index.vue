<template>
  <vui-layout>
    <vui-sider v-bind:width="200" style="border-right: 1px solid #f0f0f0;">
      <vui-menu mode="inline" style="padding: 8px 0;" v-bind:selectedName="activeKey" v-on:select="handleChange">
        <vui-menu-item name="basic" title="基本设置" />
        <vui-menu-item name="security" title="安全设置" />
        <vui-menu-item name="account" title="账号绑定" />
        <vui-menu-item name="message" title="新消息通知" />
      </vui-menu>
    </vui-sider>
    <vui-content style="min-height: calc(100vh - 96px); background-color: #fff; padding: 24px;">
      <vui-user-settings-basic v-if="activeKey === 'basic'" />
      <vui-user-settings-security v-else-if="activeKey === 'security'" />
      <vui-user-settings-account v-else-if="activeKey === 'account'" />
      <vui-user-settings-message v-else-if="activeKey === 'message'" />
    </vui-content>
  </vui-layout>
</template>

<script>
  import VuiUserSettingsBasic from "./user-settings-basic";
  import VuiUserSettingsSecurity from "./user-settings-security";
  import VuiUserSettingsAccount from "./user-settings-account";
  import VuiUserSettingsMessage from "./user-settings-message";

  export default {
    components: {
      VuiUserSettingsBasic,
      VuiUserSettingsSecurity,
      VuiUserSettingsAccount,
      VuiUserSettingsMessage
    },
    data() {
      return {
        activeKey: "basic"
      }
    },
    methods: {
      handleChange(activeKey) {
        this.activeKey = activeKey;
      }
    }
  };
</script>