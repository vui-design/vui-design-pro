<template>
  <div class="vui-user-profile-projects">
    <vui-spin v-bind:spinning="list.loading">
      <vui-empty v-if="list.data.length === 0" style="padding: 160px 0;" />
      <vui-list v-else v-bind:grid="list.grid" v-bind:data="list.data">
        <vui-list-item slot="item" slot-scope="item, index">
          <vui-card>
            <vui-image slot="cover" v-bind:src="item.thumbnail" lazyload fit="cover" style="width: 100%; height: 170px;" />
            <vui-card-meta v-bind:title="item.title">
              <div slot="description" style="height: 40px;">{{item.description}}</div>
            </vui-card-meta>
            <div class="vui-user-profile-projects-item-meta">
              <span class="moment">{{item.createdAt | dateformatter("yyyy-MM-dd HH:mm")}}</span>
              <vui-avatar-group size="small">
                <vui-tooltip v-for="collaborator in item.collaborators" v-bind:key="collaborator.id" v-bind:content="collaborator.name">
                  <vui-avatar v-bind:src="collaborator.avatar" />
                </vui-tooltip>
              </vui-avatar-group>
            </div>
            <template slot="actions">
              <vui-tooltip style="display: block;" content="编辑">
                <vui-icon type="edit" />
              </vui-tooltip>
              <vui-tooltip style="display: block;" content="删除">
                <vui-icon type="dustbin" />
              </vui-tooltip>
              <vui-dropdown style="display: block;" placement="bottom">
                <vui-icon type="more-x" />
                <vui-dropdown-menu slot="menu">
                  <vui-dropdown-menu-item value="1" title="编辑" />
                  <vui-dropdown-menu-item value="2" danger title="删除" />
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
        this.$store.dispatch("list/getProjectList", payload).then(response => {
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
  .vui-user-profile-projects { padding:20px; }

  .vui-user-profile-projects-item-meta { display:flex; justify-content:space-between; align-items:center; margin-top:16px; }
  .vui-user-profile-projects-item-meta .moment { color:#8c8c8c; }
</style>