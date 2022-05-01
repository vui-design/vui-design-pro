<template>
  <vui-card v-bind:bordered="false" shadow="always">
    <template slot="title">我的项目</template>
    <router-link slot="extra" to="/list/search/projects">全部项目</router-link>
    <vui-empty v-if="list.data.length === 0" style="padding: 53px 0;">
      <img slot="image" src="images/empty/projects.png" style="height: 80px;" />
      <template slot="description">Sorry，暂无项目记录！点击下方按钮立即创建</template>
      <vui-button type="primary" to="/list/search/projects">立即创建</vui-button>
    </vui-empty>
    <template v-else>
      <vui-card-grid v-for="(item, index) in list.data" v-bind:key="item.id" style="width: 33.33333333%; padding: 0;">
        <router-link  class="vui-dashboard-workplace-project" to="/list/search/projects">
          <div class="vui-dashboard-workplace-project-header">
            <div class="vui-dashboard-workplace-project-avatar">
              <vui-avatar v-bind:src="item.logo" v-bind:size="32" />
            </div>
            <h4 class="vui-dashboard-workplace-project-name">{{item.title}}</h4>
          </div>
          <div class="vui-dashboard-workplace-project-body">{{item.description}}</div>
          <div class="vui-dashboard-workplace-project-footer">
            <span class="vui-dashboard-workplace-project-tag">{{item.tag}}</span>
            <span class="vui-dashboard-workplace-project-moment">
              <vui-time v-bind:time="item.createdAt" />
            </span>
          </div>
        </router-link>
      </vui-card-grid>
    </template>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        list: {
          loading: false,
          data: []
        }
      };
    },
    methods: {
      getList() {
        const payload = {

        };

        this.list.loading = true;
        this.$store.dispatch("dashboard/getProjectList", payload).then(response => {
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
  .vui-dashboard-workplace-project { display:block; padding:20px; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-header { display:flex; height:32px; overflow:hidden; white-space:nowrap; }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-body { display:-webkit-box; min-height:40px; margin-top:12px; overflow:hidden; color:#8c8c8c; line-height:20px; white-space:normal; word-break:break-all; word-wrap:break-word; text-overflow:ellipsis; -webkit-line-clamp:2; -webkit-box-orient:vertical; }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-footer { height:20px; margin-top:12px; font-size:12px; line-height:20px; }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-avatar { display:block; margin-right:16px; }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-name { flex:1; cursor:inherit; display:block; overflow:hidden; color:#262626; font-size:16px; line-height:30px; white-space:nowrap; text-overflow:ellipsis; }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-tag { float:left; cursor:inherit; color:#8c8c8c; }
  .vui-dashboard-workplace-project .vui-dashboard-workplace-project-moment { float:right; cursor:inherit; color:#bfbfbf; }

  .vui-dashboard-workplace-project:hover { background-color:rgba(0,0,0,0.01); }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-header {  }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-body {  }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-footer {  }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-avatar {  }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-name {  }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-tag {  }
  .vui-dashboard-workplace-project:hover .vui-dashboard-workplace-project-moment {  }
</style>