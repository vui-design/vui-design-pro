<template>
  <vui-table v-bind="list" style="margin-top: 16px;">
    <template slot="rank" slot-scope="{ row, rowIndex }">{{rowIndex + 1}}</template>
    <template slot="total" slot-scope="{ row }">{{row.total | numerical}}</template>
    <template slot="ratio" slot-scope="{ row }">
      <vui-ratio v-bind:precision="0" v-bind:value="row.total" v-bind:denominator="row.denominator" />
    </template>
  </vui-table>
</template>

<script>
  export default {
    data() {
      return {
        list: {
          rowKey: "id",
          columns: [
            { key: "rank", width: 80, slot: "rank", title: "排名" },
            { key: "keyword", dataIndex: "keyword", title: "搜索关键词" },
            { key: "total", dataIndex: "total", sorter: true, slot: "total", title: "用户数" },
            { key: "ratio", width: 100, sorter: true, slot: "ratio", title: "周涨幅" }
          ],
          data: [
            { id: 1, total: 988, denominator: 600, keyword: "搜索关键词1" },
            { id: 2, total: 962, denominator: 1200, keyword: "搜索关键词2" },
            { id: 3, total: 718, denominator: 600, keyword: "搜索关键词3" },
            { id: 4, total: 656, denominator: 800, keyword: "搜索关键词4" },
            { id: 5, total: 888, denominator: 666, keyword: "搜索关键词5" }
          ]
        }
      };
    }
  };
</script>