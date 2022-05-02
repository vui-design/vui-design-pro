<template>
  <div class="vui-user-profile-applications">
    <vui-spin v-bind:spinning="list.loading">
      <vui-empty v-if="list.data.length === 0" style="padding: 160px 0;" />
      <vui-list v-else v-bind:grid="list.grid" v-bind:data="list.data">
        <vui-list-item slot="item" slot-scope="item, index">
          <vui-card>
            <vui-card-meta v-bind:title="item.title">
              <vui-avatar slot="avatar" v-bind:src="item.logo" />
            </vui-card-meta>
            <div class="vui-user-profile-applications-item-statistic">
              <vui-statistic v-bind:value="item.au" suffix="万" title="活跃用户" />
              <vui-statistic v-bind:value="item.nu" title="新增用户" />
            </div>
            <template slot="actions">
              <vui-tooltip style="display: block;" content="编辑">
                <vui-icon type="edit" />
              </vui-tooltip>
              <vui-tooltip style="display: block;" content="下载">
                <vui-icon type="download" />
              </vui-tooltip>
              <vui-tooltip style="display: block;" content="分享">
                <vui-icon type="share" />
              </vui-tooltip>
              <vui-dropdown style="display: block;" placement="bottom">
                <vui-icon type="more-x" />
                <vui-dropdown-menu slot="menu">
                  <vui-dropdown-menu-item value="1" title="编辑" />
                  <vui-dropdown-menu-item value="2" title="下载" />
                  <vui-dropdown-menu-item value="3" title="分享" />
                  <vui-dropdown-menu-item value="4" danger title="删除" />
                </vui-dropdown-menu>
              </vui-dropdown>
            </template>
          </vui-card>
        </vui-list-item>
      </vui-list>
    </vui-spin>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: {
          loading: false,
          grid: {
            gutter: 16,
            columns: 2
          },
          data: []
        }
      };
    },
    methods: {
      getList() {
        const payload = {

        };

        this.list.loading = true;
        this.$store.dispatch("list/getApplicationList", payload).then(response => {
          this.list.loading = false;
          this.list.data = response.data;
        }).catch(e => {
          this.list.loading = false;
        });
      }
    },
    created() {
      this.getList();
    }
  };
</script>

<style>
  .vui-user-profile-applications { padding:20px; }

  .vui-user-profile-applications-item-statistic { display:flex; align-items:flex-start; margin-top:8px; padding-left:50px; }
  .vui-user-profile-applications-item-statistic .vui-statistic { width:50%; }
</style>