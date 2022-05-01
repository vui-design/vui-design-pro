<template>
  <vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
    <vui-tabs size="large" class="vui-dashboard-analysis-sales-pageview-tabs">
      <vui-radio-group v-model="range" slot="extra" type="button" size="small">
        <vui-radio value="today" label="今日" />
        <vui-radio value="week" label="本周" />
        <vui-radio value="month" label="本月" />
        <vui-radio value="year" label="全年" />
      </vui-radio-group>
      <vui-tab-panel key="sales" title="销售额">
        <div style="padding: 20px;">
          <vui-row v-bind:gutter="16">
            <vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="14" v-bind:lg="16" v-bind:xl="18">
              <div class="vui-dashboard-analysis-sales-pageview-chart">
                <h1 class="vui-dashboard-analysis-sales-pageview-chart-header">销售额趋势</h1>
                <div class="vui-dashboard-analysis-sales-pageview-chart-body">
                  <v-chart v-bind:forceFit="true" v-bind:height="272" v-bind:padding="[10, 0, 24, 30]" v-bind:scale="chartSales.scale" v-bind:data="chartSales.data">
                    <v-axis />
                    <v-bar position="month*value" color="#2d8cf0" />
                    <v-tooltip v-bind:crosshairs="false" v-bind:useHtml="true" v-bind:htmlContent="getChartTooltipTemplate" />
                  </v-chart>
                </div>
              </div>
            </vui-col>
            <vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="10" v-bind:lg="8" v-bind:xl="6">
              <div class="vui-dashboard-analysis-sales-pageview-rank">
                <h1 class="vui-dashboard-analysis-sales-pageview-rank-header">销售额排名</h1>
                <ul class="vui-dashboard-analysis-sales-pageview-rank-body">
                  <li v-for="(item, index) in rankSales" v-bind:key="index" class="vui-dashboard-analysis-sales-pageview-rank-item">
                    <i class="vui-dashboard-analysis-sales-pageview-rank-item-no">{{index + 1}}</i>
                    <i class="vui-dashboard-analysis-sales-pageview-rank-item-title">{{item.name}}</i>
                    <i class="vui-dashboard-analysis-sales-pageview-rank-item-extra">{{item.value | numerical}}</i>
                  </li>
                </ul>
              </div>
            </vui-col>
          </vui-row>
        </div>
      </vui-tab-panel>
      <vui-tab-panel key="pageview" title="访问量">
        <div style="padding: 20px;">
          <vui-row v-bind:gutter="16">
            <vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="14" v-bind:lg="16" v-bind:xl="18">
              <div class="vui-dashboard-analysis-sales-pageview-chart">
                <h1 class="vui-dashboard-analysis-sales-pageview-chart-header">访问量趋势</h1>
                <div class="vui-dashboard-analysis-sales-pageview-chart-body">
                  <v-chart v-bind:forceFit="true" v-bind:height="272" v-bind:padding="[10, 0, 24, 30]" v-bind:scale="chartPageview.scale" v-bind:data="chartPageview.data">
                    <v-axis />
                    <v-area position="month*value" shape="smooth" color="#f0ad4e" v-bind:opacity="1" />
                    <v-tooltip v-bind:crosshairs="false" v-bind:useHtml="true" v-bind:htmlContent="getChartTooltipTemplate" />
                  </v-chart>
                </div>
              </div>
            </vui-col>
            <vui-col v-bind:xs="24" v-bind:sm="24" v-bind:md="10" v-bind:lg="8" v-bind:xl="6">
              <div class="vui-dashboard-analysis-sales-pageview-rank">
                <h1 class="vui-dashboard-analysis-sales-pageview-rank-header">访问量排名</h1>
                <ul class="vui-dashboard-analysis-sales-pageview-rank-body">
                  <li v-for="(item, index) in rankPageview" v-bind:key="index" class="vui-dashboard-analysis-sales-pageview-rank-item">
                    <i class="vui-dashboard-analysis-sales-pageview-rank-item-no">{{index + 1}}</i>
                    <i class="vui-dashboard-analysis-sales-pageview-rank-item-title">{{item.name}}</i>
                    <i class="vui-dashboard-analysis-sales-pageview-rank-item-extra">{{item.value | numerical}}</i>
                  </li>
                </ul>
              </div>
            </vui-col>
          </vui-row>
        </div>
      </vui-tab-panel>
    </vui-tabs>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        range: "year",
        chartSales: {
          scale: [
            { dataKey: "value", tickInterval: 200 }
          ],
          data: [
            { value: 960, month: "2020/01", title: "销售额" },
            { value: 262, month: "2020/02", title: "销售额" },
            { value: 768, month: "2020/03", title: "销售额" },
            { value: 145, month: "2020/04", title: "销售额" },
            { value: 426, month: "2020/05", title: "销售额" },
            { value: 606, month: "2020/06", title: "销售额" },
            { value: 320, month: "2020/07", title: "销售额" },
            { value: 780, month: "2020/08", title: "销售额" },
            { value: 240, month: "2020/09", title: "销售额" },
            { value: 1020, month: "2020/10", title: "销售额" },
            { value: 824, month: "2020/11", title: "销售额" },
            { value: 780, month: "2020/12", title: "销售额" }
          ]
        },
        rankSales: [
          { value: 323234, name: "南京路 1 号店" },
          { value: 323234, name: "南京路 2 号店" },
          { value: 323234, name: "南京路 3 号店" },
          { value: 323234, name: "南京路 4 号店" },
          { value: 323234, name: "南京路 5 号店" },
          { value: 323234, name: "南京路 6 号店" },
          { value: 323234, name: "南京路 7 号店" },
          { value: 323234, name: "南京路 8 号店" }
        ],
        chartPageview: {
          scale: [
            { dataKey: "value", tickInterval: 200 }
          ],
          data: [
            { value: 960, month: "2020/01", title: "访问量" },
            { value: 262, month: "2020/02", title: "访问量" },
            { value: 768, month: "2020/03", title: "访问量" },
            { value: 145, month: "2020/04", title: "访问量" },
            { value: 426, month: "2020/05", title: "访问量" },
            { value: 606, month: "2020/06", title: "访问量" },
            { value: 320, month: "2020/07", title: "访问量" },
            { value: 780, month: "2020/08", title: "访问量" },
            { value: 240, month: "2020/09", title: "访问量" },
            { value: 1020, month: "2020/10", title: "访问量" },
            { value: 824, month: "2020/11", title: "访问量" },
            { value: 780, month: "2020/12", title: "访问量" }
          ]
        },
        rankPageview: [
          { value: 323234, name: "南京路 1 号店" },
          { value: 323234, name: "南京路 2 号店" },
          { value: 323234, name: "南京路 3 号店" },
          { value: 323234, name: "南京路 4 号店" },
          { value: 323234, name: "南京路 5 号店" },
          { value: 323234, name: "南京路 6 号店" },
          { value: 323234, name: "南京路 7 号店" },
          { value: 323234, name: "南京路 8 号店" }
        ]
      };
    },
    methods: {
      getChartTooltipTemplate(title, items) {
        let template = "";
        template += "<div class=\"g2-tooltip\">";
        template += "<ul class=\"g2-tooltip-list\">";
        items.forEach(item => {
          const data = item.point._origin;
          template += "<li class=\"g2-tooltip-list-item\">";
          template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
          template += "<label class=\"g2-tooltip-list-item-key\">" + data.title + "</label>";
          template += "<label class=\"g2-tooltip-list-item-value\">" + data.value + "</label>";
          template += "</li>";
        });
        template += "</ul>";
        template += "</div>";
        return template;
      }
    }
  };
</script>

<style>
  /* vui-dashboard-analysis-sales-pageview-tabs */
  .vui-dashboard-analysis-sales-pageview-tabs .vui-tabs-header { margin-bottom:0; padding:0 20px; }
  .vui-dashboard-analysis-sales-pageview-tabs .vui-tabs-header .vui-tabs-tab { height:54px; }

  /* vui-dashboard-analysis-sales-pageview-chart */
  .vui-dashboard-analysis-sales-pageview-chart {  }
  .vui-dashboard-analysis-sales-pageview-chart-header { margin-bottom:16px; color:#8c8c8c; font-size:16px; line-height:1.42857142; }
  .vui-dashboard-analysis-sales-pageview-chart-body { width:100%; height:272px; overflow:hidden; font-size:0; }

  /* vui-dashboard-analysis-sales-pageview-rank */
  .vui-dashboard-analysis-sales-pageview-rank {  }
  .vui-dashboard-analysis-sales-pageview-rank-header { margin-bottom:16px; color:#8c8c8c; font-size:16px; line-height:1.42857142; }
  .vui-dashboard-analysis-sales-pageview-rank-body {  }
  .vui-dashboard-analysis-sales-pageview-rank-item { display:flex; align-items:center; margin-top:16px; font-size:14px; line-height:1.42857142; }
  .vui-dashboard-analysis-sales-pageview-rank-item .vui-dashboard-analysis-sales-pageview-rank-item-no { width:20px; height:20px; border-radius:20px; background-color:#fafafa; margin-right:16px; color:#595959; text-align:center; line-height:20px; }
  .vui-dashboard-analysis-sales-pageview-rank-item .vui-dashboard-analysis-sales-pageview-rank-item-title { flex:1; color:#595959; }
  .vui-dashboard-analysis-sales-pageview-rank-item .vui-dashboard-analysis-sales-pageview-rank-item-extra { margin-left:16px; color:#8c8c8c; }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(1) {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(1) .vui-dashboard-analysis-sales-pageview-rank-item-no { background-color:#eaf4fe; color:#2d8cf0; }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(1) .vui-dashboard-analysis-sales-pageview-rank-item-title {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(1) .vui-dashboard-analysis-sales-pageview-rank-item-extra {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(2) {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(2) .vui-dashboard-analysis-sales-pageview-rank-item-no { background-color:#fef7ed; color:#faad14; }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(2) .vui-dashboard-analysis-sales-pageview-rank-item-title {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(2) .vui-dashboard-analysis-sales-pageview-rank-item-extra {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(3) {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(3) .vui-dashboard-analysis-sales-pageview-rank-item-no { background-color:#fdeef0; color:#ed5565; }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(3) .vui-dashboard-analysis-sales-pageview-rank-item-title {  }
  .vui-dashboard-analysis-sales-pageview-rank-item:nth-child(3) .vui-dashboard-analysis-sales-pageview-rank-item-extra {  }
</style>