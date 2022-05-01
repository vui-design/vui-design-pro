<template>
  <h1 class="vui-logo" v-bind:class="collapsed ? 'collapsed' : ''">
    <router-link to="/">
      <img src="images/logo.svg" />
      <span>Vui Design Pro</span>
    </router-link>
  </h1>
</template>

<script>
  export default {
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style>
  .vui-logo { position:relative; height:64px; margin-bottom:10px; padding:0 20px; overflow:hidden; }
  .vui-logo a { display:flex; align-items:center; height:100%; }
  .vui-logo img { display:block; width:32px; transition:width 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-logo span { flex:1; cursor:inherit; display:block; margin-left:10px; overflow:hidden; color:#fff; font-size:18px; font-weight:600; line-height:2; white-space:nowrap; text-overflow:ellipsis; }

  .vui-logo.collapsed {  }
  .vui-logo.collapsed a {  }
  .vui-logo.collapsed img { width:40px; }
  .vui-logo.collapsed span { display:none; }
</style>