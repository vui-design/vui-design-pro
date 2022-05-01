<template>
  <vui-statistic v-bind:value="2.8" title="人均搜索次数">
    <vui-tooltip slot="extra" style="display: block;" content="指标说明">
      <vui-icon type="info" />
    </vui-tooltip>
    <div slot="footer">
      <v-chart v-bind="chartSettings.root">
        <v-area v-bind="chartSettings.area" />
        <v-line v-bind="chartSettings.line" />
        <v-tooltip v-bind="chartSettings.tooltip" />
      </v-chart>
    </div>
  </vui-statistic>
</template>

<script>
  const data = [
    { date: "2019-10-01", value: 7 },
    { date: "2019-10-02", value: 5 },
    { date: "2019-10-03", value: 4 },
    { date: "2019-10-04", value: 3 },
    { date: "2019-10-05", value: 4 },
    { date: "2019-10-06", value: 7 },
    { date: "2019-10-07", value: 5 },
    { date: "2019-10-08", value: 6 },
    { date: "2019-10-09", value: 5 },
    { date: "2019-10-10", value: 9 },
    { date: "2019-10-11", value: 6 },
    { date: "2019-10-12", value: 3 },
    { date: "2019-10-13", value: 1 },
    { date: "2019-10-14", value: 5 },
    { date: "2019-10-15", value: 3 },
    { date: "2019-10-16", value: 6 }
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

    const area = {
      position: "date*value",
      shape: "smooth",
      opacity: 0.5,
      color: "#2d8cf0"
    };

    const line = {
      position: "date*value",
      shape: "smooth",
      opacity: 1,
      color: "#2d8cf0"
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

    return { root, area, line, tooltip };
  };

  export default {
    data() {
      return {
        chartSettings: getChartSettings(data)
      };
    }
  };
</script>