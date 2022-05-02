<template>
  <div class="vui-user-settings-account">
    <div class="vui-user-settings-account-header">账号绑定</div>
    <div class="vui-user-settings-account-body">
      <vui-list>
        <vui-list-item>
          <vui-list-item-meta>
            <vui-avatar slot="avatar" shape="square" src="https://dummyimage.com/48x48/f4f6f8/595959" v-bind:size="48" />
            <template slot="title">绑定淘宝</template>
            <template slot="description">当前未绑定淘宝账号</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">绑定</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <vui-avatar slot="avatar" shape="square" src="https://dummyimage.com/48x48/f4f6f8/595959" v-bind:size="48" />
            <template slot="title">绑定支付宝</template>
            <template slot="description">当前未绑定支付宝账号</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">绑定</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <vui-avatar slot="avatar" shape="square" src="https://dummyimage.com/48x48/f4f6f8/595959" v-bind:size="48" />
            <template slot="title">绑定钉钉</template>
            <template slot="description">当前未绑定钉钉账号</template>
          </vui-list-item-meta>
          <template slot="actions">
            <a href="javascript:;">绑定</a>
          </template>
        </vui-list-item>
        <vui-list-item>
          <vui-list-item-meta>
            <vui-avatar slot="avatar" shape="square" src="https://dummyimage.com/48x48/f4f6f8/595959" v-bind:size="48" />
            <template slot="title">绑定微信</template>
            <template slot="description">当前未绑定微信账号</template>
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
  .vui-user-settings-account {  }
  .vui-user-settings-account-header { margin-bottom:24px; color:#262626; font-weight:500; font-size:20px; }
  .vui-user-settings-account-body {  }
</style>