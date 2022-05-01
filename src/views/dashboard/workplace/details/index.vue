<template>
  <div class="vui-dashboard-workplace-details">
    <div class="vui-dashboard-workplace-details-profile">
      <div class="vui-dashboard-workplace-details-profile-header">
        <vui-avatar src="images/avatars/svg1.svg" v-bind:size="72" />
      </div>
      <div class="vui-dashboard-workplace-details-profile-body">
        <h4>早安，Ding Wei，祝你开心每一天！</h4>
        <vui-space divider>
          <span>前端开发工程师</span>
          <span>电魂网络－发行线－技术运营中心－运营开发部－前端开发组</span>
        </vui-space>
      </div>
    </div>
    <div class="vui-dashboard-workplace-details-extra">
      <vui-space v-bind:divider="54" v-bind:size="32">
        <vui-statistic class="vui-dashboard-workplace-details-extra-statistic" v-bind:value="24" title="项目数" />
        <vui-statistic class="vui-dashboard-workplace-details-extra-statistic" v-bind:value="8" suffix="/ 24" title="待办事项" />
        <vui-statistic class="vui-dashboard-workplace-details-extra-statistic" v-bind:value="2048" title="项目访问" />
      </vui-space>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-dashboard-workplace-details { display:flex; align-items:flex-start; }

  .vui-dashboard-workplace-details-profile { flex:1; display:flex; align-items:center; }
  .vui-dashboard-workplace-details-profile-header {  }
  .vui-dashboard-workplace-details-profile-body { margin-left:16px; }
  .vui-dashboard-workplace-details-profile-body h4 { color:#262626; font-size:20px; font-weight:500; line-height:32px; }
  .vui-dashboard-workplace-details-profile-body span { display:block; color:#8c8c8c; font-size:14px; line-height:24px; }
  .vui-dashboard-workplace-details-profile-body .vui-space { margin-top:8px; }

  .vui-dashboard-workplace-details-extra { margin-left:32px; }
  .vui-dashboard-workplace-details-extra-statistic {  }
  .vui-dashboard-workplace-details-extra-statistic .vui-statistic-title { text-align:right; }
  .vui-dashboard-workplace-details-extra-statistic .vui-statistic-body { justify-content:flex-end; }
</style>