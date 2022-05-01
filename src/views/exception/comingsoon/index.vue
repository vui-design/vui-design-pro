<template>
  <div style=" display: flex; justify-content: center; align-items: center; height: 100%;">
  	<vui-result
      status="comingsoon"
      title="Oops...Coming soon!"
      description="很抱歉，当前页面正在开发或维护中，敬请期待！"
    >
      <template slot="extra">
        <vui-button type="primary" to="/">返回首页</vui-button>
      </template>
    </vui-result>
  </div>
</template>

<script>
  export default {

  };
</script>