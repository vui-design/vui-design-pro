<template>
  <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
    <div style="min-height: calc(100vh - 96px);">
      <vui-result v-bind:status="status" v-bind:title="title" v-bind:description="description">
        <div slot="content" class="vui-result-error-content">
          <h4>您提交的内容可能存在如下错误：</h4>
          <p>
            <vui-icon type="crossmark-circle" />
            <span>您的账户已被冻结</span>
            <a href="javascript:;">立即解冻 &gt;</a>
          </p>
          <p>
            <vui-icon type="crossmark-circle" />
            <span>您的账户还不具备申请资格</span>
            <a href="javascript:;">立即升级 &gt;</a>
          </p>
        </div>
        <vui-space slot="extra">
          <vui-button type="primary" to="/">返回首页</vui-button>
          <vui-button>重试</vui-button>
        </vui-space>
      </vui-result>
    </div>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        status: "error",
        title: "提交失败",
        description: "请在重新提交之前核对并修改以下信息！"
      };
    }
  };
</script>

<style>
  .vui-result-error-content {  }
  .vui-result-error-content h4 { margin-bottom:24px; color:#262626; font-size:16px; }
  .vui-result-error-content p { color:#595959; }
  .vui-result-error-content p .vui-icon { margin-right:8px; color:#ed5565; }
  .vui-result-error-content p a { margin-left:8px; }
  .vui-result-error-content p + p { margin-top:16px; }
</style>