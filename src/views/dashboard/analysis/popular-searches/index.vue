<template>
  <vui-card v-bind:bordered="false" title="线上热门搜索">
    <vui-row v-bind:gutter="16">
      <vui-col v-bind:span="12">
        <vui-statistic-users />
      </vui-col>
      <vui-col v-bind:span="12">
        <vui-statistic-average-search-times />
      </vui-col>
    </vui-row>
    <vui-rank-search-keywords />
  </vui-card>
</template>

<script>
  import VuiStatisticUsers from "./statistic-users";
  import VuiStatisticAverageSearchTimes from "./statistic-average-search-times";
  import VuiRankSearchKeywords from "./rank-search-keywords";

  export default {
    components: {
      VuiStatisticUsers,
      VuiStatisticAverageSearchTimes,
      VuiRankSearchKeywords
    }
  };
</script>