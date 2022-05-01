<template>
  <vui-breadcrumb class="vui-breadcrumbs">
    <vui-breadcrumb-item v-for="breadcrumb in breadcrumbs" v-bind:key="breadcrumb.name" v-bind:to="breadcrumb.path">
      <template>{{breadcrumb.meta && breadcrumb.meta.title}}</template>
    </vui-breadcrumb-item>
  </vui-breadcrumb>
</template>

<script>
  import routes from "src/routes";
  import config from "src/config";
  import utils from "src/libs/utils";

  export default {
    computed: {
      breadcrumbs() {
        const route = this.$route;
        const rootRoute = utils.getRouteByPath(routes, config.rootRoute);
        const items = utils.getBreadcrumbByRoute(route, rootRoute);

        return items;
      }
    }
  };
</script>

<style>
  .vui-breadcrumbs { display:flex; align-items:center; height:64px; }
</style>