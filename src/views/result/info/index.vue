<template>
  <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
    <div style="min-height: calc(100vh - 96px);">
      <vui-result v-bind:status="status" v-bind:title="title" v-bind:description="description">
        <template slot="extra">
          <vui-button type="primary" to="/">返回首页</vui-button>
        </template>
      </vui-result>
    </div>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        status: "info",
        title: "消息标题",
        description: "提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。"
      };
    }
  };
</script>