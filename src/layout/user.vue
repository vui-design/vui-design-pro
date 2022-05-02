<template>
  <vui-dropdown v-model="usermenu.visible" trigger="hover" placement="bottom-end" style="display: block;">
    <div class="vui-user" v-bind:class="usermenu.visible ? 'active' : ''">
      <span>Ding Wei</span>
      <vui-avatar size="small" src="images/avatars/svg1.svg" />
      <vui-icon type="chevron-down" />
    </div>
    <vui-dropdown-menu slot="menu" v-on:click="handleUsermenuClick">
      <vui-dropdown-menu-item value="profile" icon="user" to="/user/profile" title="个人中心" />
      <vui-dropdown-menu-item value="settings" icon="settings" to="/user/settings" title="个人设置" />
      <vui-dropdown-menu-divider />
      <vui-dropdown-menu-item value="logout" icon="logout" danger title="退出登录" />
    </vui-dropdown-menu>
  </vui-dropdown>
</template>

<script>
  import authorization from "src/libs/authorization";

  export default {
    data() {
      return {
        usermenu: {
          visible: false
        }
      };
    },
    methods: {
      handleUsermenuClick(value) {
        if (value == "logout") {
          this.$store.dispatch("user/logout").then(to => {
            authorization.amsLogout(to, this.$route.fullPath);
          });
        }
      }
    }
  };
</script>

<style>
  .vui-user { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 8px; color:#595959; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-user span {  }
  .vui-user .vui-avatar { margin:0 4px; }
  .vui-user .vui-icon { font-size:12px; transform:scale(0.85); }

  .vui-user:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
  .vui-user:hover span {  }
  .vui-user:hover .vui-avatar {  }
  .vui-user:hover .vui-icon {  }

  .vui-user.active { background-color:rgba(0,0,0,0.02); color:#297ed8; }
  .vui-user.active span {  }
  .vui-user.active .vui-avatar {  }
  .vui-user.active .vui-icon {  }
</style>