<template>
  <div class="vui-user-profile-details">
    <div class="vui-user-profile-details-item">
      <div class="vui-user-profile-details-item-header">
        <vui-icon type="profile" />
      </div>
      <div class="vui-user-profile-details-item-body">前端开发工程师</div>
    </div>
    <div class="vui-user-profile-details-item">
      <div class="vui-user-profile-details-item-header">
        <vui-icon type="git-merge" />
      </div>
      <div class="vui-user-profile-details-item-body">电魂网络－发行线－技术运营中心－运营开发部－前端开发组</div>
    </div>
    <div class="vui-user-profile-details-item">
      <div class="vui-user-profile-details-item-header">
        <vui-icon type="building" />
      </div>
      <div class="vui-user-profile-details-item-body">浙江省杭州市</div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-user-profile-details {  }
  .vui-user-profile-details-item { display:flex; justify-content:flex-start; align-items:flex-start; }
  .vui-user-profile-details-item + .vui-user-profile-details-item { margin-top:8px; }
  .vui-user-profile-details-item-header {  }
  .vui-user-profile-details-item-body { margin-left:12px; }
</style>