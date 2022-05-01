<template>
  <vui-card v-bind:bordered="false">
    <template slot="title">快速开始 / 便捷导航</template>
    <vui-card-grid style="width: 33.33333333%; padding: 0;">
      <router-link to="/dashboard" class="vui-dashboard-workplace-shortcut">
        <vui-icon type="apps" style="color: #2d8cf0;" />
        <h4>控制面板</h4>
      </router-link>
    </vui-card-grid>
    <vui-card-grid style="width: 33.33333333%; padding: 0;">
      <router-link to="/form" class="vui-dashboard-workplace-shortcut">
        <vui-icon type="edit-square" style="color: #52c41a;" />
        <h4>表单</h4>
      </router-link>
    </vui-card-grid>
    <vui-card-grid style="width: 33.33333333%; padding: 0;">
      <router-link to="/list"  class="vui-dashboard-workplace-shortcut">
        <vui-icon type="table" style="color: #faad14;" />
        <h4>列表</h4>
      </router-link>
    </vui-card-grid>
    <vui-card-grid style="width: 33.33333333%; padding: 0;">
      <router-link to="/details" class="vui-dashboard-workplace-shortcut">
        <vui-icon type="profile" style="color: #975fe4;" />
        <h4>详情页</h4>
      </router-link>
    </vui-card-grid>
    <vui-card-grid style="width: 33.33333333%; padding: 0;">
      <router-link to="/user" class="vui-dashboard-workplace-shortcut">
        <vui-icon type="user" style="color: #fa8c16;" />
        <h4>个人页</h4>
      </router-link>
    </vui-card-grid>
    <vui-card-grid style="width: 33.33333333%; padding: 0;">
      <router-link to="/result" class="vui-dashboard-workplace-shortcut">
        <vui-icon type="info" style="color: #5bc0de;" />
        <h4>结果页</h4>
      </router-link>
    </vui-card-grid>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  };
</script>

<style>
  .vui-dashboard-workplace-shortcut { display:block; padding:20px 0; transition:all 0.2s; }
  .vui-dashboard-workplace-shortcut .vui-icon { display:block; width:24px; height:24px; margin:0 auto; font-size:20px; text-align:center; line-height:24px; }
  .vui-dashboard-workplace-shortcut h4 { display:block; margin-top:10px; color:#595959; text-align:center; line-height:1.42857143; }

  .vui-dashboard-workplace-shortcut:hover { background-color:rgba(0,0,0,0.01); }
  .vui-dashboard-workplace-shortcut:hover .vui-icon {  }
  .vui-dashboard-workplace-shortcut:hover h4 {  }
</style>