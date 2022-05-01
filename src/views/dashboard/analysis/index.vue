<template>
  <div>
    <vui-statistic-group />
    <vui-shortcuts />
    <vui-sales-pageview />
    <vui-row v-bind:gutter="16">
      <vui-col style="margin-top: 16px;" v-bind:lg="24" v-bind:xl="12">
        <vui-popular-searches />
      </vui-col>
      <vui-col style="margin-top: 16px;" v-bind:lg="24" v-bind:xl="12">
        <vui-sales-category-percentage />
      </vui-col>
    </vui-row>
  </div>
</template>

<script>
  import VuiStatisticGroup from "./statistic-group";
  import VuiShortcuts from "./shortcuts";
  import VuiSalesPageview from "./sales-pageview";
  import VuiPopularSearches from "./popular-searches";
  import VuiSalesCategoryPercentage from "./sales-category-percentage";

  export default {
    components: {
      VuiStatisticGroup,
      VuiShortcuts,
      VuiSalesPageview,
      VuiPopularSearches,
      VuiSalesCategoryPercentage
    }
  };
</script>