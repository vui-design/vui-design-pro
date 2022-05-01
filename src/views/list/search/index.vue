<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false">
      <template slot="title">搜索列表</template>
      <vui-menu slot="footer" mode="horizontal" v-bind:selectedName="$route.path">
        <vui-menu-item name="/list/search/articles" to="articles" title="文章列表" />
        <vui-menu-item name="/list/search/projects" to="projects" title="项目列表" />
        <vui-menu-item name="/list/search/applications" to="applications" title="应用列表" />
      </vui-menu>
    </vui-page-header>
    <div class="vui-design-pro-page-body">
      <router-view v-bind:key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>