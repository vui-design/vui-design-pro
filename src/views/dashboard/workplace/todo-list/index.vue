<template>
  <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;" bodyStyle="padding: 0;">
    <template slot="title">待办事项</template>
    <vui-table v-bind="list" class="vui-pro-dashboard-workplace-todo-list">
      <template slot="no" slot-scope="{ row, rowIndex }">{{rowIndex + 1}}</template>
      <template slot="title" slot-scope="{ row }">{{row.title}}</template>
      <template slot="collaborators" slot-scope="{ row }">
        <vui-avatar-group size="small">
          <vui-tooltip v-for="collaborator in row.collaborators" v-bind:key="collaborator.id" v-bind:content="collaborator.name">
            <vui-avatar v-bind:src="collaborator.avatar" />
          </vui-tooltip>
        </vui-avatar-group>
      </template>
    </vui-table>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        list: {
          loading: false,
          rowKey: "id",
          columns: [
            { key: "no", slot: "no", width: 60, align: "center", ellipsis: true, title: "#" },
            { key: "title", dataIndex: "title", slot: "title", ellipsis: true, title: "任务" },
            { key: "collaborators", dataIndex: "collaborators", width: 100, ellipsis: true, slot: "collaborators", title: "协作者" }
          ],
          data: []
        }
      };
    },
    methods: {
      getList() {
        const payload = {

        };

        this.list.loading = true;
        this.$store.dispatch("dashboard/getTodoList", payload).then(response => {
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
  .vui-pro-dashboard-workplace-todo-list .vui-table-body tr:last-child td { border-bottom:none; }
</style>