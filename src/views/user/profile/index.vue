<template>
  <div class="vui-user-profile">
    <div class="vui-user-profile-sider">
      <vui-card v-bind:bordered="false" bodyStyle="padding: 20px 40px;">
        <vui-user-profile-avatar />
        <vui-divider v-bind:gutter="24" />
        <vui-user-profile-details />
        <vui-divider v-bind:gutter="24" />
        <vui-user-profile-tags />
        <vui-divider v-bind:gutter="24" />
        <vui-user-profile-teams />
      </vui-card>
    </div>
    <div class="vui-user-profile-content">
      <vui-card v-bind:bordered="false" bodyStyle="padding: 0;">
        <vui-tabs size="large" class="vui-user-profile-tabs">
          <vui-tab-panel key="tab1">
            <template slot="title">文章(10)</template>
            <vui-user-profile-articles />
          </vui-tab-panel>
          <vui-tab-panel key="tab2">
            <template slot="title">项目(8)</template>
            <vui-user-profile-projects />
          </vui-tab-panel>
          <vui-tab-panel key="tab3">
            <template slot="title">应用(16)</template>
            <vui-user-profile-applications />
          </vui-tab-panel>
        </vui-tabs>
      </vui-card>
    </div>
  </div>
</template>

<script>
  import VuiUserProfileAvatar from "./user-profile-avatar";
  import VuiUserProfileDetails from "./user-profile-details";
  import VuiUserProfileTags from "./user-profile-tags";
  import VuiUserProfileTeams from "./user-profile-teams";
  import VuiUserProfileArticles from "./user-profile-articles";
  import VuiUserProfileProjects from "./user-profile-projects";
  import VuiUserProfileApplications from "./user-profile-applications";

  export default {
    components: {
      VuiUserProfileAvatar,
      VuiUserProfileDetails,
      VuiUserProfileTags,
      VuiUserProfileTeams,
      VuiUserProfileArticles,
      VuiUserProfileProjects,
      VuiUserProfileApplications
    },
    data() {
      return {

      };
    },
    methods: {

    }
  };
</script>

<style>
  .vui-user-profile { display:flex; justify-content:flex-start; align-items:flex-start; }
  .vui-user-profile-sider { width:360px; margin-right:16px; }
  .vui-user-profile-content { flex:1; overflow:hidden; }

  .vui-user-profile-tabs .vui-tabs-header { margin-bottom:0; padding:0 20px; }
  .vui-user-profile-tabs .vui-tabs-header .vui-tabs-tab { height:54px; }
</style>