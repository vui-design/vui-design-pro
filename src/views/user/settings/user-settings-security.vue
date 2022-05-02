<template>
  <div class="vui-user-settings-security">
    <div class="vui-user-settings-security-header">安全设置</div>
    <div class="vui-user-settings-security-body">
      <vui-list>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">账户密码</template>
            <template slot="description">当前密码强度：强</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">修改</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">密保手机</template>
            <template slot="description">已绑定手机：180****8888</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">修改</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">密保问题</template>
            <template slot="description">未设置密保问题，密保问题可有效保护账户安全</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">设置</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">备用邮箱</template>
            <template slot="description">已绑定邮箱：exam****@example.com</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">修改</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <template slot="title">MFA 设备</template>
            <template slot="description">未绑定 MFA 设备，绑定后，可以进行二次确认</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">绑定</a>
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
  .vui-user-settings-security {  }
  .vui-user-settings-security-header { margin-bottom:24px; color:#262626; font-weight:500; font-size:20px; }
  .vui-user-settings-security-body {  }
</style>