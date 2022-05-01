<template>
  <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;">
    <template slot="title">最新动态</template>
    <vui-empty v-if="list.data.length === 0" style="padding: 188px 0;">
      <img slot="image" src="images/empty/events.png" style="height: 80px;" />
      <template slot="description">暂无动态</template>
    </vui-empty>
    <vui-list v-else class="vui-dashboard-workplace-event-list">
      <vui-list-item v-for="item in list.data" v-bind:key="item.id" class="vui-dashboard-workplace-event">
        <vui-list-item-meta v-bind:avatar="item.avatar">
          <div slot="title">
            <a href="javascript:;" class="username">{{item.username}}</a>
            <span class="text">{{item.action}}</span>
            <a v-if="item.targetUsername" href="javascript:;" class="username">{{item.targetUsername}}</a>
            <span v-if="item.targetContent" class="text">{{item.targetContent}}</span>
            <a href="javascript:;" class="content">{{item.content}}</a>
          </div>
          <div slot="description" class="moment">{{item.moment}}</div>
        </vui-list-item-meta>
      </vui-list-item>
    </vui-list>
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
        this.$store.dispatch("dashboard/getEventList", payload).then(response => {
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
  .vui-dashboard-workplace-event-list { min-height:488px; }

  .vui-dashboard-workplace-event {  }
  .vui-dashboard-workplace-event .username { color:#262626; }
  .vui-dashboard-workplace-event .text { margin:0 4px; color:#8c8c8c; }
  .vui-dashboard-workplace-event .content { color:#2090d8; }
  .vui-dashboard-workplace-event .moment { color:#bfbfbf; }
</style>