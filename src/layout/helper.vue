<template>
  <vui-tooltip style="display: block;" content="帮助文档">
    <a href="javascript:;" class="vui-helper">
      <vui-icon type="help" />
    </a>
  </vui-tooltip>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-helper { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 8px; color:#595959; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-helper:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
  .vui-helper.active { background-color:rgba(0,0,0,0.02); color:#4298f2; }
</style>