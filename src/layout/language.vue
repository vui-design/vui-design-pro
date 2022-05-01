<template>
  <vui-tooltip style="display: block;" content="切换语言">
    <a href="javascript:;" class="vui-language">
      <vui-icon type="global" />
    </a>
  </vui-tooltip>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-language { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 8px; color:#595959; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-language:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
  .vui-language.active { background-color:rgba(0,0,0,0.02); color:#4298f2; }
</style>