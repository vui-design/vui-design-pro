<template>
  <vui-row v-bind:gutter="16">
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #2d8cf0;">
          <vui-icon type="group-filled" />
          <span>用户</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #52c41a;">
          <vui-icon type="bar-chart-filled" />
          <span>分析</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #faad14;">
          <vui-icon type="store-filled" />
          <span>商品</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #975fe4;">
          <vui-icon type="mouse-filled" />
          <span>订单</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #fa8c16;">
          <vui-icon type="stack-filled" />
          <span>票据</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #5bc0de;">
          <vui-icon type="mail-open-filled" />
          <span>消息</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #ff6b94;">
          <vui-icon type="pantone-filled" />
          <span>标签</span>
        </a>
      </vui-card>
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="6" v-bind:sm="6" v-bind:md="6" v-bind:lg="3" v-bind:xl="3">
      <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
        <a href="javascript:;" class="vui-dashboard-analysis-shortcut" style="color: #faad14;">
          <vui-icon type="list-settings-filled" />
          <span>配置</span>
        </a>
      </vui-card>
    </vui-col>
  </vui-row>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-dashboard-analysis-shortcut { display:block; padding:16px; text-align:center; }
  .vui-dashboard-analysis-shortcut .vui-icon { font-size:24px; }
  .vui-dashboard-analysis-shortcut span { display:block; margin-top:8px; color:#595959; transition:color 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-dashboard-analysis-shortcut:hover {  }
  .vui-dashboard-analysis-shortcut:hover .vui-icon {  }
  .vui-dashboard-analysis-shortcut:hover span { color:currentColor; }
</style>