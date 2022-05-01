<template>
  <vui-card v-bind:bordered="false">
    <vui-statistic v-bind:value="666666" title="访问量">
      <vui-tooltip slot="extra" style="display: block;" content="指标说明">
        <vui-icon type="info" />
      </vui-tooltip>
      <div slot="footer" style="overflow: hidden;">
        <v-chart v-bind="chartSettings.root">
          <v-line v-bind="chartSettings.geom" />
          <v-tooltip v-bind="chartSettings.tooltip" />
        </v-chart>
      </div>
    </vui-statistic>
    <vui-divider v-bind:gutter="16" />
    <div style="overflow: hidden; line-height: 1; white-space: nowrap;">日访问量 {{1234 | numerical}}</div>
  </vui-card>
</template>

<script>
  const data = [
    { date: "2020-01-01", value: 7 },
    { date: "2020-01-02", value: 5 },
    { date: "2020-01-03", value: 4 },
    { date: "2020-01-04", value: 3 },
    { date: "2020-01-05", value: 4 },
    { date: "2020-01-06", value: 7 },
    { date: "2020-01-07", value: 5 },
    { date: "2020-01-08", value: 6 },
    { date: "2020-01-09", value: 5 },
    { date: "2020-01-10", value: 9 },
    { date: "2020-01-11", value: 6 },
    { date: "2020-01-12", value: 3 },
    { date: "2020-01-13", value: 1 },
    { date: "2020-01-14", value: 5 },
    { date: "2020-01-15", value: 3 },
    { date: "2020-01-16", value: 6 }
  ];

  const getChartSettings = data => {
    const root = {
      key: new Date().getTime(),
      forceFit: true,
      height: 50,
      padding: [0, 0, 0, 0],
      scale: [
        { dataKey: "date", type: "time" },
        { dataKey: "value", min: 0 }
      ],
      data: data
    };

    const geom = {
      position: "date*value",
      shape: "smooth",
      opacity: 1,
      color: "#5bc0de"
    };

    const tooltip = {
      showTitle: false,
      crosshairs: false,
      useHtml: true,
      htmlContent(title, items) {
        let template = "";

        template += "<div class=\"g2-tooltip\">";
        template += "<ul class=\"g2-tooltip-list\">";
        items.forEach(item => {
          const target = item.point._origin;

          template += "<li class=\"g2-tooltip-list-item\">";
          template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
          template += "<label class=\"g2-tooltip-list-item-key\">" + target.date + "</label>";
          template += "<label class=\"g2-tooltip-list-item-value\">" + target.value + "</label>";
          template += "</li>";
        });
        template += "</ul>";
        template += "</div>";

        return template;
      }
    };

    return { root, geom, tooltip };
  };

  export default {
    data() {
      return {
        chartSettings: getChartSettings(data)
      };
    }
  };
</script>