<template>
  <vui-layout class="vui-design-pro">
    <vui-sider v-model="collapsed" v-bind:width="220" collapsible breakpoint="lg" color="dark" class="vui-design-pro-sider">
      <vui-logo v-bind:collapsed="collapsed" />
      <vui-navigation v-bind:collapsed="collapsed"/>
    </vui-sider>
    <vui-layout class="vui-design-pro-main" v-bind:class="collapsed ? 'collapsed' : ''">
      <vui-header color="light" class="vui-design-pro-main-header">
        <vui-space v-bind:size="0" class="pull-left">
          <vui-sider-collapser v-bind:collapsed="collapsed" v-on:click="handleCollapse" />
          <vui-breadcrumbs class="pull-left" />
        </vui-space>
        <vui-space v-bind:size="0" class="pull-right">
          <vui-broadcast />
          <vui-language />
          <vui-helper />
          <vui-user />
        </vui-space>
      </vui-header>
      <vui-content class="vui-design-pro-main-body">
        <router-view v-bind:key="$route.fullPath" />
      </vui-content>
      <vui-footer class="vui-design-pro-main-footer">
        <vui-links />
        <vui-copyright />
      </vui-footer>
    </vui-layout>
  </vui-layout>
</template>

<script>
  import VuiLogo from "./logo";
  import VuiNavigation from "./navigation";
  import VuiSiderCollapser from "./sider-collapser";
  import VuiBreadcrumbs from "./breadcrumbs";
  import VuiBroadcast from "./broadcast";
  import VuiLanguage from "./language";
  import VuiHelper from "./helper";
  import VuiUser from "./user";
  import VuiLinks from "./links";
  import VuiCopyright from "./copyright";
  import utils from "src/libs/utils";

  export default {
    components: {
      VuiLogo,
      VuiNavigation,
      VuiSiderCollapser,
      VuiBreadcrumbs,
      VuiBroadcast,
      VuiLanguage,
      VuiHelper,
      VuiUser,
      VuiLinks,
      VuiCopyright
    },
    data() {
      return {
        collapsed: false
      };
    },
    watch: {
      collapsed(value) {
				// 自动触发一次 window 的 reize 事件
				// 目的是为了在收缩左侧菜单栏时，内容板块的图表宽度可能不会自动适应父容器的宽度变更
				utils.dispatchResize();
      }
    },
    methods: {
      handleCollapse() {
        this.collapsed = !this.collapsed;
      }
    }
  };
</script>

<style>
  /* vui-design-pro */
  .vui-design-pro { position:relative; z-index:1; min-height:100vh; }

  /* vui-design-pro-sider */
  .vui-design-pro-sider { position:fixed; top:0; left:0; z-index:2; height:100%; box-shadow:0 0 6px rgba(0,0,0,0.06); }

  /* vui-design-pro-main */
  .vui-design-pro-main { position:relative; z-index:1; min-height:100%; padding-left:220px; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-design-pro-main.collapsed { padding-left:80px; }
  .vui-design-pro-main-header { position:relative; z-index:2; box-shadow:0 1px 0 #f3f3f3; padding:0; }
  .vui-design-pro-main-body { position:relative; z-index:1; padding:16px; }
  .vui-design-pro-main-footer { padding:16px; text-align:center; }

  /* vui-design-pro-page */
  .vui-design-pro-page { margin:-16px; }
  .vui-design-pro-page-header { padding:16px; }
  .vui-design-pro-page-body { padding:16px; }
</style>