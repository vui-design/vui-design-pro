<template>
  <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;">
    <template slot="title">最新动态</template>
    <vui-list class="vui-dashboard-workplace-event-list">
      <vui-list-item v-for="event in events" v-bind:key="event.id" class="vui-dashboard-workplace-event">
        <vui-list-item-meta v-bind:avatar="event.avatar">
          <div slot="title">
            <a href="javascript:;" class="username">{{event.username}}</a>
            <span class="text">{{event.action}}</span>
            <a v-if="event.targetUsername" href="javascript:;" class="username">{{event.targetUsername}}</a>
            <span v-if="event.targetContent" class="text">{{event.targetContent}}</span>
            <a href="javascript:;" class="content">{{event.content}}</a>
          </div>
          <div slot="description" class="moment">{{event.moment}}</div>
        </vui-list-item-meta>
      </vui-list-item>
    </vui-list>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        events: [
          {
            id: 6,
            avatar: require("src/images/avatar-svg1.svg"),
            username: "阿波罗",
            action: "关注了项目",
            content: "Vui Design Pro",
            moment: "刚刚"
          },
          {
            id: 5,
            avatar: require("src/images/avatar-svg2.svg"),
            username: "柳残阳",
            action: "发表了文章",
            content: "SEO 页面优化之 Nuxt 服务器渲染",
            moment: "6 小时前"
          },
          {
            id: 4,
            avatar: require("src/images/avatar-svg3.svg"),
            username: "萱子乔",
            action: "提出问题",
            content: "Table 组件支持合并单元格吗？",
            moment: "2 天前"
          },
          {
            id: 3,
            avatar: require("src/images/avatar-svg4.svg"),
            username: "花满楼",
            action: "回复了",
            targetUsername: "萱子乔",
            targetContent: "的问题",
            content: "Vue 中如何实现大数据列表的虚拟滚动？",
            moment: "4 天前"
          },
          {
            id: 2,
            avatar: require("src/images/avatar-svg5.svg"),
            username: "张无忌",
            action: "兑换了物品",
            content: "《Vue.js 实战》",
            moment: "2 周前"
          },
          {
            id: 1,
            avatar: require("src/images/avatar-svg6.svg"),
            username: "紫旭琳",
            action: "评论了",
            targetUsername: "张三丰",
            targetContent: "的文章",
            content: "关于 Modal 对话框的异步关闭",
            moment: "2 个月前"
          }
        ]
      };
    }
  };
</script>

<style>
  .vui-dashboard-workplace-event-list { min-height:488px; }

  .vui-dashboard-workplace-event {  }
  .vui-dashboard-workplace-event .username { color:#262626; }
  .vui-dashboard-workplace-event .text { margin:0 4px; color:#8c8c8c; }
  .vui-dashboard-workplace-event .content { color:#2090d8; }
  .vui-dashboard-workplace-event .moment { color:#bfbfbf; }
</style>