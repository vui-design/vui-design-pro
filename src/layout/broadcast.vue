<template>
  <vui-dropdown v-model="broadcast.visible" trigger="click" placement="bottom-end" style="display: block;">
    <a href="javascript:;" class="vui-broadcast" v-bind:class="broadcast.visible ? 'active' : ''">
      <vui-badge v-bind:count="notice.count + message.count + todo.count" v-bind:offset="[3, 3]">
        <vui-icon type="notification" />
      </vui-badge>
    </a>
    <vui-tabs slot="menu" class="vui-broadcast-tabs">
      <vui-tab-panel key="notice">
        <template slot="title">
          <template>通知</template>
          <template v-if="notice.count">({{notice.count}})</template>
        </template>
        <vui-empty v-if="notice.data.length === 0" style="padding:42px 0px;" description="暂无通知" />
        <div v-else class="vui-broadcast-panel">
          <div class="vui-broadcast-panel-body">
            <vui-list class="vui-broadcast-notice-list">
              <vui-list-item v-for="(item, index) in notice.data" v-bind:key="item.id" v-bind:class="item.readed ? 'readed' : ''" v-on:click.native="handleNoticeClick(item, index)">
                <vui-list-item-meta v-bind:avatar="item.icon" v-bind:title="item.title">
                  <template slot="description">
                    <vui-time v-bind:time="item.createdAt" />
                  </template>
                </vui-list-item-meta>
              </vui-list-item>
            </vui-list>
          </div>
          <div class="vui-broadcast-panel-footer">
            <a href="javascript:;" class="link-default" v-on:click="handleNoticeClean">清空通知</a>
            <a href="javascript:;" class="link-default">查看更多</a>
          </div>
        </div>
      </vui-tab-panel>
      <vui-tab-panel key="message">
        <template slot="title">
          <template>消息</template>
          <template v-if="message.count">({{message.count}})</template>
        </template>
        <vui-empty v-if="message.data.length == 0" style="padding:42px 0px;" description="暂无消息" />
        <div v-else class="vui-broadcast-panel">
          <div class="vui-broadcast-panel-body">
            <vui-list class="vui-broadcast-message-list">
              <vui-list-item v-for="(item, index) in message.data" v-bind:key="item.id" v-bind:class="item.readed ? 'readed' : ''" v-on:click.native="handleMessageClick(item, index)">
                <vui-list-item-meta v-bind:avatar="item.icon" v-bind:title="item.title">
                  <template slot="description">
                    <div style="margin-bottom: 4px;">{{item.description}}</div>
                    <vui-time v-bind:time="item.createdAt" />
                  </template>
                </vui-list-item-meta>
              </vui-list-item>
            </vui-list>
          </div>
          <div class="vui-broadcast-panel-footer">
            <a href="javascript:;" class="link-default" v-on:click="handleMessageClean">清空消息</a>
            <a href="javascript:;" class="link-default">查看更多</a>
          </div>
        </div>
      </vui-tab-panel>
      <vui-tab-panel key="todo">
        <template slot="title">
          <template>待办</template>
          <template v-if="todo.count">({{todo.count}})</template>
        </template>
        <vui-empty v-if="todo.data.length == 0" style="padding:42px 0px;" description="暂无待办" />
        <div v-else class="vui-broadcast-panel">
          <div class="vui-broadcast-panel-body">
            <vui-list class="vui-broadcast-todo-list">
              <vui-list-item v-for="(item, index) in todo.data" v-bind:key="item.id" v-bind:class="item.readed ? 'readed' : ''" v-on:click.native="handleTodoClick(item, index)">
                <vui-list-item-meta v-bind:avatar="item.icon">
                  <template slot="title">
                    <div class="title">{{item.title}}</div>
                    <vui-tag v-if="item.status == 1">{{item.statusText}}</vui-tag>
                    <vui-tag v-else-if="item.status == 2" color="blue">{{item.statusText}}</vui-tag>
                    <vui-tag v-else-if="item.status == 3" color="gold">{{item.statusText}}</vui-tag>
                    <vui-tag v-else-if="item.status == 4" color="red">{{item.statusText}}</vui-tag>
                  </template>
                  <template slot="description">
                    <div style="margin-bottom: 0px;">{{item.description}}</div>
                  </template>
                </vui-list-item-meta>
              </vui-list-item>
            </vui-list>
          </div>
          <div class="vui-broadcast-panel-footer">
            <a href="javascript:;" class="link-default" v-on:click="handleTodoClean">清空待办</a>
            <a href="javascript:;" class="link-default">查看更多</a>
          </div>
        </div>
      </vui-tab-panel>
    </vui-tabs>
  </vui-dropdown>
</template>

<script>
  import routes from "src/routes";
  import config from "src/config";
  import utils from "src/libs/utils";

  export default {
    data() {
      return {
        broadcast: {
          visible: false
        },
        notice: {
          count: 5,
          data: [
            { id: 5, readed: false, icon: "images/notices/icon1.png", createdAt: "2020-08-02 12:00:00", title: "你收到了 20 分新的周报" },
            { id: 4, readed: false, icon: "images/notices/icon4.png", createdAt: "2020-08-02 06:00:00", title: "点击后设为已读状态" },
            { id: 3, readed: false, icon: "images/notices/icon3.png", createdAt: "2020-08-02 00:00:00", title: "你推荐的 张三丰 已通过第三轮面试" },
            { id: 2, readed: false, icon: "images/notices/icon2.png", createdAt: "2020-07-20 00:00:00", title: "左侧图标用于区分不同类型" },
            { id: 1, readed: false, icon: "images/notices/icon1.png", createdAt: "2020-02-02 00:00:00", title: "标题文本不易过长，超出部分将被自动截断" }
          ]
        },
        message: {
          count: 3,
          data: [
            { id: 3, readed: false, icon: "images/avatars/svg1.svg", createdAt: "2020-08-02 00:00:00", title: "张三丰 评论了你", description: "哇塞，你好厉害~" },
            { id: 2, readed: false, icon: "images/avatars/svg2.svg", createdAt: "2020-07-20 00:00:00", title: "张无忌 回复了你", description: "这种模板用于提醒谁与你发生了互动，左侧放互动人员头像" },
            { id: 1, readed: false, icon: "images/avatars/svg3.svg", createdAt: "2020-02-02 00:00:00", title: "标题文本不易过长，超出部分将被自动截断", description: "这种模板用于提醒谁与你发生了互动，左侧放互动人员头像" }
          ]
        },
        todo: {
          count: 4,
          data: [
            { id: 4, readed: false, status: 1, statusText: "未开始", title: "任务名称", description: "任务需要在 2020-12-30 12:00:00 前启动" },
            { id: 3, readed: false, status: 2, statusText: "进行中", title: "第三方紧急代码变更", description: "张三丰提交于 2020-08-02，需在 2020-08-04 前完成代码变更任务" },
            { id: 2, readed: false, status: 3, statusText: "已耗时 8 天", title: "信息安全考试", description: "描述内容描述内容描述内容" },
            { id: 1, readed: false, status: 4, statusText: "马上到期", title: "ABCD 版本发布", description: "这种模板用于提醒用户最新待办事项，详细内容点击进行查看..." }
          ]
        }
      };
    },
    methods: {
      handleNoticeClick(item, index) {
        if (item.readed) {
          return;
        }

        item.readed = true;
        this.notice.count -= 1;
      },
      handleNoticeClean(item, index) {
        this.notice.count = 0;
        this.notice.data = [];
      },
      handleMessageClick(item, index) {
        if (item.readed) {
          return;
        }

        item.readed = true;
        this.message.count -= 1;
      },
      handleMessageClean(item, index) {
        this.message.count = 0;
        this.message.data = [];
      },
      handleTodoClick(item, index) {
        if (item.readed) {
          return;
        }

        item.readed = true;
        this.todo.count -= 1;
      },
      handleTodoClean(item, index) {
        this.todo.count = 0;
        this.todo.data = [];
      }
    }
  };
</script>

<style>
  .vui-broadcast { cursor:pointer; display:flex; align-items:center; height:64px; padding:0 16px; color:#595959; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-broadcast:hover { background-color:rgba(0,0,0,0.02); color:#4298f2; }
  .vui-broadcast.active { background-color:rgba(0,0,0,0.02); color:#4298f2; }

  .vui-broadcast-tabs.vui-tabs-medium { width:336px; border-radius:2px; background-color:#fff; box-shadow:0 1px 6px rgba(0,0,0,0.1); overflow:hidden; }
  .vui-broadcast-tabs.vui-tabs-medium > .vui-tabs-header { margin-bottom:0; }
  .vui-broadcast-tabs.vui-tabs-medium > .vui-tabs-header .vui-tabs-header-content { justify-content:center; }
  .vui-broadcast-tabs.vui-tabs-medium > .vui-tabs-header .vui-tabs-tab { height:48px; }
  .vui-broadcast-tabs.vui-tabs-medium > .vui-tabs-header .vui-tabs-tab + .vui-tabs-tab { margin-left:24px; }

  .vui-broadcast-panel {  }
  .vui-broadcast-panel-body {  }
  .vui-broadcast-panel-footer { display:flex; justify-content:center; align-items:center; height:46px; border-top:1px solid #f0f0f0; }
  .vui-broadcast-panel-footer a { flex:1; display:block; text-align:center; line-height:46px; }
  .vui-broadcast-panel-footer a:first-child {  }
  .vui-broadcast-panel-footer a:last-child { border-left:1px solid #f0f0f0; }

  .vui-broadcast-notice-list {  }
  .vui-broadcast-notice-list .vui-list-item { cursor:pointer; padding:16px; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-broadcast-notice-list .vui-list-item .vui-list-item-meta-title { display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
  .vui-broadcast-notice-list .vui-list-item .vui-list-item-meta-description { font-size:12px; }
  .vui-broadcast-notice-list .vui-list-item:hover { background-color:#fafafa; }
  .vui-broadcast-notice-list .vui-list-item.readed { opacity:0.6; }

  .vui-broadcast-message-list {  }
  .vui-broadcast-message-list .vui-list-item { cursor:pointer; padding:16px; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-broadcast-message-list .vui-list-item .vui-list-item-meta-title { display:block; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; }
  .vui-broadcast-message-list .vui-list-item .vui-list-item-meta-description { font-size:12px; }
  .vui-broadcast-message-list .vui-list-item:hover { background-color:#fafafa; }
  .vui-broadcast-message-list .vui-list-item.readed { opacity:0.6; }

  .vui-broadcast-todo-list {  }
  .vui-broadcast-todo-list .vui-list-item { cursor:pointer; padding:16px; transition:all 0.2s cubic-bezier(0.23,1,0.32,1); }
  .vui-broadcast-todo-list .vui-list-item .vui-list-item-meta-title { align-items:center; }
  .vui-broadcast-todo-list .vui-list-item .vui-list-item-meta-title .title { flex:1; }
  .vui-broadcast-todo-list .vui-list-item .vui-list-item-meta-title .vui-tag { margin-left:8px; }
  .vui-broadcast-todo-list .vui-list-item .vui-list-item-meta-description { font-size:12px; }
  .vui-broadcast-todo-list .vui-list-item:hover { background-color:#fafafa; }
  .vui-broadcast-todo-list .vui-list-item.readed { opacity:0.6; }
</style>