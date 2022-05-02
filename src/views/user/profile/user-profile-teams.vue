<template>
  <div class="vui-user-profile-teams">
    <div class="vui-user-profile-teams-header">团队</div>
    <div class="vui-user-profile-teams-body">
      <vui-row v-bind:gutter="16">
        <vui-col v-bind:span="12">
          <div class="vui-user-profile-team">
            <div class="vui-user-profile-team-header">
              <vui-avatar size="small" src="images/apps/lodash.png" />
            </div>
            <div class="vui-user-profile-team-body">秃鸡队</div>
          </div>
        </vui-col>
        <vui-col v-bind:span="12">
          <div class="vui-user-profile-team">
            <div class="vui-user-profile-team-header">
              <vui-avatar size="small" src="images/apps/isjs.png" />
            </div>
            <div class="vui-user-profile-team-body">丁丁和他的朋友们</div>
          </div>
        </vui-col>
        <vui-col v-bind:span="12">
          <div class="vui-user-profile-team">
            <div class="vui-user-profile-team-header">
              <vui-avatar size="small" src="images/apps/vue.png" />
            </div>
            <div class="vui-user-profile-team-body">"V"笑之队</div>
          </div>
        </vui-col>
        <vui-col v-bind:span="12">
          <div class="vui-user-profile-team">
            <div class="vui-user-profile-team-header">
              <vui-avatar size="small" src="images/apps/react.png" />
            </div>
            <div class="vui-user-profile-team-body">有求必印</div>
          </div>
        </vui-col>
        <vui-col v-bind:span="12">
          <div class="vui-user-profile-team">
            <div class="vui-user-profile-team-header">
              <vui-avatar size="small" src="images/apps/angular.png" />
            </div>
            <div class="vui-user-profile-team-body">永不言弃NEVER GIVE UP</div>
          </div>
        </vui-col>
        <vui-col v-bind:span="12">
          <div class="vui-user-profile-team">
            <div class="vui-user-profile-team-header">
              <vui-avatar size="small" src="images/apps/bootstrap.png" />
            </div>
            <div class="vui-user-profile-team-body">运营开发部</div>
          </div>
        </vui-col>
      </vui-row>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>

<style>
  .vui-user-profile-teams {  }
  .vui-user-profile-teams-header { margin-bottom:16px; }
  .vui-user-profile-teams-body {  }
  .vui-user-profile-teams-body .vui-row .vui-col { padding-top:16px; }
  .vui-user-profile-teams-body .vui-row .vui-col:nth-child(1) { padding-top:0; }
  .vui-user-profile-teams-body .vui-row .vui-col:nth-child(2) { padding-top:0; }

  .vui-user-profile-team { display:flex; justify-content:flex-start; align-items:center; width:100%; }
  .vui-user-profile-team-header {  }
  .vui-user-profile-team-body { flex:1; margin-left:12px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
</style>