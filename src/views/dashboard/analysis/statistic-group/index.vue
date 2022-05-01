<template>
  <vui-row v-bind:gutter="16">
    <vui-col style="margin-bottom: 16px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
      <vui-statistic-total-sales />
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
      <vui-statistic-pv />
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
      <vui-statistic-total-payments />
    </vui-col>
    <vui-col style="margin-bottom: 16px;" v-bind:xs="24" v-bind:sm="12" v-bind:md="12" v-bind:lg="12" v-bind:xl="6">
      <vui-statistic-activity-effect />
    </vui-col>
  </vui-row>
</template>

<script>
  import VuiStatisticTotalSales from "./statistic-total-sales";
  import VuiStatisticPv from "./statistic-pv";
  import VuiStatisticTotalPayments from "./statistic-total-payments";
  import VuiStatisticActivityEffect from "./statistic-activity-effect";

  export default {
    components: {
      VuiStatisticTotalSales,
      VuiStatisticPv,
      VuiStatisticTotalPayments,
      VuiStatisticActivityEffect
    }
  };
</script>