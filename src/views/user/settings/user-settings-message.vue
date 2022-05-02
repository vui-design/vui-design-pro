<template>
  <div class="vui-user-settings-message">
    <div class="vui-user-settings-message-header">新消息通知</div>
    <div class="vui-user-settings-message-body">
      <vui-list>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">账户密码</template>
            <template slot="description">用户消息将以站内信的形式通知</template>
          </vui-list-item-meta>
          <template slot="actions">
            <vui-switch checked checkedText="开" uncheckedText="关" />
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">系统消息</template>
            <template slot="description">系统消息将以站内信的形式通知</template>
          </vui-list-item-meta>
          <template slot="actions">
            <vui-switch checkedText="开" uncheckedText="关" />
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">待办任务</template>
            <template slot="description">待办任务将以站内信的形式通知</template>
          </vui-list-item-meta>
          <template slot="actions">
            <vui-switch checked checkedText="开" uncheckedText="关" />
          </template>
        </vui-list-item>
      </vui-list>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  };
</script>

<style>
  .vui-user-settings-message {  }
  .vui-user-settings-message-header { margin-bottom:24px; color:#262626; font-weight:500; font-size:20px; }
  .vui-user-settings-message-body {  }
</style>