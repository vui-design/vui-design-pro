<template>
  <vui-card v-bind:bordered="false" title="销售额类型占比">
    <vui-radio-group v-model="category" slot="extra" type="button" size="small">
      <vui-radio v-bind:value="1" label="线上" />
      <vui-radio v-bind:value="2" label="门店" />
      <vui-radio v-bind:value="0" label="全部渠道" />
    </vui-radio-group>
    <div class="vui-dashboard-analysis-sales-category-percentage">
      <div class="vui-dashboard-analysis-sales-category-percentage-chart">
        <div class="vui-dashboard-analysis-sales-category-percentage-chart-title">
          <h1>销售额</h1>
          <p>¥  {{total | numerical}}</p>
        </div>
        <div class="vui-dashboard-analysis-sales-category-percentage-chart-main">
          <v-chart v-bind="chart.root" v-bind:data="dataSource">
            <v-pie v-bind="chart.pie" />
            <v-coord v-bind="chart.coord" />
            <v-tooltip v-bind="chart.tooltip" />
          </v-chart>
        </div>
      </div>
      <div class="vui-dashboard-analysis-sales-category-percentage-legend">
        <div v-for="(item, index) in data" v-bind:key="index" class="vui-dashboard-analysis-sales-category-percentage-legend-item" v-on:click="handleToggle(item)">
          <i class="vui-dashboard-analysis-sales-category-percentage-legend-item-marker" v-bind:style="{backgroundColor: item.disabled ? '#aaaaaa' : item.color}"></i>
          <span class="vui-dashboard-analysis-sales-category-percentage-legend-item-title">{{item.title}}</span>
          <span class="vui-dashboard-analysis-sales-category-percentage-legend-item-percentage">{{(item.percentage * 100).toFixed(2)}}%</span>
          <span class="vui-dashboard-analysis-sales-category-percentage-legend-item-value">￥{{item.value | numerical}}</span>
        </div>
      </div>
    </div>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        category: 0,
        data: [
          { value: 4544, percentage: 0.28, disabled: false, color: "#1890ff", title: "家用电器" },
          { value: 3321, percentage: 0.21, disabled: false, color: "#13c2c2", title: "食用酒水" },
          { value: 3133, percentage: 0.20, disabled: false, color: "#2fc25b", title: "个护健康" },
          { value: 2341, percentage: 0.15, disabled: false, color: "#facc14", title: "服侍箱包" },
          { value: 1231, percentage: 0.08, disabled: false, color: "#f04864", title: "母婴产品" },
          { value: 1231, percentage: 0.08, disabled: false, color: "#8543e0", title: "其他" }
        ],
        chart: {
          root: {
            width: 240,
            height: 240,
            padding: 0,
            scale: [
              { dataKey: "percentage", min: 0, formatter: ".0%" }
            ]
          },
          pie: {
            position: "percentage",
            color: ["color", value => value],
            vStyle: {
              stroke: "#fff",
              lineWidth: 4
            }
          },
          coord: {
            type: "theta",
            radius: 1,
            innerRadius: 0.7
          },
          tooltip: {
            showTitle: false,
            crosshairs: false,
            useHtml: true,
            htmlContent: (title, items) => {
              let template = "";

              template += "<div class=\"g2-tooltip\">";
              template += "<ul class=\"g2-tooltip-list\">";
              items.forEach(item => {
                const target = item.point._origin;

                template += "<li class=\"g2-tooltip-list-item\">";
                template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
                template += "<label class=\"g2-tooltip-list-item-key\">" + target.title + "</label>";
                template += "<label class=\"g2-tooltip-list-item-value\">" + target.value + "</label>";
                template += "</li>";
              });
              template += "</ul>";
              template += "</div>";

              return template;
            }
          }
        }
      };
    },
    computed: {
      dataSource() {
        return this.data.filter(item => item.disabled === false);
      },
      total() {
        return this.dataSource.reduce((total, item) => total + item.value, 0);
      }
    },
    methods: {
      handleToggle(item) {
        item.disabled = !item.disabled;
      }
    }
  };
</script>

<style>
  .vui-dashboard-analysis-sales-category-percentage { display:flex; justify-content:space-around; align-items:center; height:404px; }

  .vui-dashboard-analysis-sales-category-percentage-chart { position:relative; width:240px; height:240px; }
  .vui-dashboard-analysis-sales-category-percentage-chart-title { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); }
  .vui-dashboard-analysis-sales-category-percentage-chart-title h1 { color:#8c8c8c; font-size:16px; text-align:center; }
  .vui-dashboard-analysis-sales-category-percentage-chart-title p { margin-top:8px; color:#595959; font-size:24px; text-align:center; }
  .vui-dashboard-analysis-sales-category-percentage-chart-main {  }

  .vui-dashboard-analysis-sales-category-percentage-legend { width:240px; }
  .vui-dashboard-analysis-sales-category-percentage-legend-item { display:flex; align-items:center; cursor:pointer; color:#595959; font-size:14px; line-height:1.42857142; }
  .vui-dashboard-analysis-sales-category-percentage-legend-item + .vui-dashboard-analysis-sales-category-percentage-legend-item { margin-top:16px; }
  .vui-dashboard-analysis-sales-category-percentage-legend-item-marker { display:block; width:8px; height:8px; border-radius:8px; margin-right:10px; }
  .vui-dashboard-analysis-sales-category-percentage-legend-item-title { flex:1; display:block; }
  .vui-dashboard-analysis-sales-category-percentage-legend-item-percentage { display:block; width:70px; color:#8c8c8c; text-align:right; }
  .vui-dashboard-analysis-sales-category-percentage-legend-item-value { display:block; width:60px; text-align:right; }
</style>