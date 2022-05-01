<template>
  <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;">
    <template slot="title">XX 指数</template>
    <vui-empty v-if="dataSource.length === 0" style="padding: 127px 0;">
      <img slot="image" style="height: 60px;" src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
      <div slot="description">暂无统计数据</div>
    </vui-empty>
    <div v-else>
      <v-chart v-bind="chartSettings.root">
        <v-coord v-bind="chartSettings.coord" />
        <v-axis v-bind="chartSettings.axis" />
        <v-line v-bind="chartSettings.line" />
        <v-point v-bind="chartSettings.point" />
        <v-tooltip v-bind="chartSettings.tooltip" />
      </v-chart>
      <vui-space v-bind:divider="56" v-bind:size="40" block justify="center" style="margin-top: 24px">
        <a href="javascript:;" v-for="(item, index) in dataSource" v-bind:key="index" v-on:click="handleClickChartLegendItem(item)">
          <vui-statistic class="vui-dashboard-workplace-radar-statistic" v-bind:value="item.citation + item.praise + item.output + item.contribution + item.hot">
            <vui-badge slot="title" v-bind:color="getChartLegendItemColor(item)" v-bind:text="item.target" />
          </vui-statistic>
        </a>
      </vui-space>
    </div>
  </vui-card>
</template>

<script>
  import DataSet from "@antv/data-set";

  const scales = {
    citation: "引用",
    praise: "口碑",
    output: "产量",
    contribution: "贡献",
    hot: "热度"
  };

  const chart = {
    getScaleText: function(value) {
      return scales[value];
    },
    getGeomColor(dataSource, value) {
      const target = dataSource.find(item => item.target === value);

      return target ? target.color : value;
    },
    getChartTooltipTemplate(title, items) {
      let template = "";

      template += "<div class=\"g2-tooltip\">";
      template += "<div class=\"g2-tooltip-title\">" + title + "</div>";
      template += "<ul class=\"g2-tooltip-list\">";
      items.forEach(item => {
        const data = item.point._origin;

        template += "<li class=\"g2-tooltip-list-item\">";
        template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
        template += "<label class=\"g2-tooltip-list-item-key\">" + data.target + "</label>";
        template += "<label class=\"g2-tooltip-list-item-value\">" + data.value + "</label>";
        template += "</li>";
      });
      template += "</ul>";
      template += "</div>";

      return template;
    },
    getSettings(dataSource) {
      let data = dataSource.filter(it => it.enabled);

      data = new DataSet.View().source(data);
      data.transform({
        type: "fold",
        fields: ["citation", "praise", "output", "contribution", "hot"],
        key: "item",
        value: "value"
      });
      data = data.rows;

      return {
        root: {
          key: new Date().getTime(),
          forceFit: true,
          animate: true,
          height: 270,
          padding: ["auto", "auto", "auto", "auto"],
          data: data,
          scale: [
            { dataKey: "item", formatter: this.getScaleText },
            { dataKey: "value", min: 0, max: 10 }
          ]
        },
        coord: {
          type: "polar",
          radius: 1
        },
        axis: {
          dataKey: "value",
          line: null,
          tickLine: null,
          grid: {
            type: "polygon"
          }
        },
        line: {
          position: "item*value",
          size: 1,
          color: ["target", value => this.getGeomColor(dataSource, value)]
        },
        point: {
          position: "item*value",
          size: 3,
          shape: "circle",
          color: ["target", value => this.getGeomColor(dataSource, value)]
        },
        tooltip: {
          crosshairs: false,
          useHtml: true,
          htmlContent:  this.getChartTooltipTemplate
        }
      };
    }
  };

  export default {
    data() {
      const dataSource = [];
      const chartSettings = chart.getSettings(dataSource);

      return {
        dataSource,
        chartSettings
      };
    },
    methods: {
      getChartLegendItemColor(item) {
        return item.enabled ? item.color : "#aaaaaa";
      },
      handleClickChartLegendItem(item) {
        // 至少保留一项数据可见
        const items = this.dataSource.filter(item => item.enabled);

        if (items.length <= 1 && item.enabled === true) {
          return;
        }

        // 切换数据可见性，并重绘图表
        item.enabled = !item.enabled;

        const chartSettings = chart.getSettings(this.dataSource);

        this.chartSettings = chartSettings;
      }
    },
    created() {
      const dataSource = [
        { target: "个人", citation: 9, praise: 8, output: 4, contribution: 6, hot: 8, enabled: true, color: "#1890ff" },
        { target: "团队", citation: 4, praise: 4, output: 8, contribution: 4, hot: 2, enabled: true, color: "#2fc25b" },
        { target: "部门", citation: 6, praise: 2, output: 6, contribution: 8, hot: 8, enabled: true, color: "#facc14" }
      ];
      const chartSettings = chart.getSettings(dataSource);

      this.dataSource = dataSource;
      this.chartSettings = chartSettings;
    }
  };
</script>

<style>
  .vui-dashboard-workplace-radar-statistic {  }
  .vui-dashboard-workplace-radar-statistic .vui-statistic-title { display:flex; justify-content:center; align-items:center; }
  .vui-dashboard-workplace-radar-statistic .vui-statistic-body { justify-content:center; }
</style>