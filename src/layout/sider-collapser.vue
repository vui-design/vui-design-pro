<template>
  <a href="javascript:;" class="vui-sider-collapser" v-on:click="handleClick">
    <vui-icon v-bind:type="collapsed ? 'menu-unfold' : 'menu-fold'" />
  </a>
</template>

<script>
  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick() {
        this.$emit("click");
      }
    }
  };
</script>

<style>
  .vui-sider-collapser { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 8px; color:#595959; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-sider-collapser:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
  .vui-sider-collapser.active { background-color:rgba(0,0,0,0.02); color:#4298f2; }
</style>