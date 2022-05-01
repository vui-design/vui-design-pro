<template>
  <vui-card v-bind:bordered="false" shadow="always">
    <vui-statistic v-bind:value="90" suffix="%" title="运营活动效果">
      <vui-tooltip slot="extra" style="display: block;" content="指标说明">
        <vui-icon type="info" />
      </vui-tooltip>
      <div slot="footer" style="overflow: hidden;">
        <v-chart v-bind="chartSettings.root">
          <v-tooltip v-bind="chartSettings.tooltip" />
          <v-view v-for="(item, itemIndex) in chartSettings.views" v-bind:key="itemIndex" v-bind="item.view">
            <v-coord v-bind="item.coord" />
            <v-interval v-bind="item.interval" />
            <v-point v-bind="item.point" />
            <v-guide v-for="(guide, guideIndex) in item.guides" v-bind:key="guideIndex" v-bind="guide" />
          </v-view>
        </v-chart>
      </div>
    </vui-statistic>
    <vui-divider v-bind:gutter="16" />
    <div style="overflow: hidden; line-height: 1; white-space: nowrap;">
        <vui-space v-bind:size="4" style="margin-left: 0px;">
          <template>周同比</template>
          <vui-ratio v-bind:value="1383" v-bind:denominator="1234" v-bind:precision="0" />
        </vui-space>
        <vui-space v-bind:size="4" style="margin-left: 16px;">
          <template>日同比</template>
          <vui-ratio v-bind:value="110" v-bind:denominator="123" v-bind:precision="0" />
        </vui-space>
    </div>
  </vui-card>
</template>

<script>
  const data = [
    { title: "Activity effect", subtitle: "Activity effect", ranges: [50, 75, 100], target: 80, actual: 90 }
  ];

  const getViewScale = item => {
    const ranges = item.ranges;

    return [
      { dataKey: "target", min: 0, max: ranges[2], nice: false },
      { dataKey: "actual", min: 0, max: ranges[2], nice: false }
    ];
  };

  const getViewGuide = (viewData, guideIndex, position) => {
    const ranges = viewData.ranges;
    const guide = [
      {
        start: [-1, 0],
        end:[1, ranges[0]]
      },
      {
        start: [-1, ranges[0]],
        end: [1, ranges[1]]
      },
      {
        start: [-1, ranges[1]],
        end: [1, ranges[2]]
      }
    ];

    return guide[guideIndex][position];
  };

  const getChartSettings = data => {
    const root = {
      key: new Date().getTime(),
      forceFit: true,
      height: 50,
      padding: [0, 0, 0, 0],
      scale: [
        { dataKey: "target" },
        { dataKey: "actual" }
      ],
      data: data
    };

    let views = [];

    data.forEach((item, itemIndex) => {
      const view = {
        data: [item],
        scale: getViewScale(item)
      };

      const coord = {
        type: "rect",
        direction: "LB"
      };

      const interval = {
        position: "title*actual",
        color: "#1ab394",
        size: 10
      };

      const point = {
        position: "title*target",
        color: "#09192a",
        shape: "line",
        size: 10,
        vStyle: {
          lineWidth: 2
        }
      };

      let guides = ["#ffa39e", "#ffd591", "#a7e8b4"];

      guides = guides.map((guide, guideIndex) => {
        return {
          type: "region",
          start: getViewGuide(item, guideIndex, "start"),
          end: getViewGuide(item, guideIndex, "end"),
          vStyle: {
            fill: guide,
            fillOpacity: 0.25
          }
        };
      });

      return views.push({
        view,
        coord,
        interval,
        point,
        guides
      });
    });

    const tooltip = {
      showTitle: false,
      crosshairs: false,
      useHtml: true,
      htmlContent(title, items) {
        let template = "";

        template += "<div class=\"g2-tooltip\">";
        template += "<ul class=\"g2-tooltip-list\">";
        items.forEach(item => {
          template += "<li class=\"g2-tooltip-list-item\">";
          template += "<i class=\"g2-tooltip-list-item-marker\" style=\"background-color: " + item.color + ";\"></i>";
          template += "<label class=\"g2-tooltip-list-item-key\">" + item.name + "</label>";
          template += "<label class=\"g2-tooltip-list-item-value\">" + item.value + "</label>";
          template += "</li>";
        });
        template += "</ul>";
        template += "</div>";

        return template;
      }
    };

    return { root, views, tooltip };
  };

  export default {
    data() {
      return {
        chartSettings: getChartSettings(data)
      };
    }
  };
</script>