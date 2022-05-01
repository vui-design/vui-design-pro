<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false">
      <template slot="title">标准列表</template>
      <p>标准的列表，包含增删改查等基础操作</p>
    </vui-page-header>
    <div class="vui-design-pro-page-body">
      <vui-card v-bind:bordered="false" shadow="always">
        <vui-row>
          <vui-col v-bind:span="8">
            <div class="vui-list-standard-statistic">
              <h4>进行中的任务</h4>
              <p><em style="color: #2d8cf0;">10</em>个任务</p>
            </div>
          </vui-col>
          <vui-col v-bind:span="8">
            <div class="vui-list-standard-statistic">
              <h4>剩余任务</h4>
              <p><em style="color: #faad14;">4</em>个任务</p>
            </div>
          </vui-col>
          <vui-col v-bind:span="8">
            <div class="vui-list-standard-statistic">
              <h4>任务总耗时</h4>
              <p><em style="color: #ed5565;">120</em>个小时</p>
            </div>
          </vui-col>
        </vui-row>
      </vui-card>
      <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;" headerStyle="padding: 16px 16px 16px 20px;" title="标准列表">
        <vui-space slot="extra">
          <vui-radio-group v-model="searcher.status" type="button">
            <vui-radio v-bind:value="0">全部</vui-radio>
            <vui-radio v-bind:value="1">进行中</vui-radio>
            <vui-radio v-bind:value="2">已完成</vui-radio>
          </vui-radio-group>
          <vui-input-group compact>
            <vui-input v-model="searcher.keywords" clearable style="width: 200px;" placeholder="输入关键字查询" />
            <vui-button icon="search" v-on:click="handleSearch" />
          </vui-input-group>
          <vui-button type="primary" icon="plus" v-on:click="handleAdd">添加</vui-button>
        </vui-space>
        <vui-spin v-bind:spinning="list.loading">
          <vui-empty v-if="list.data.length === 0" style="padding: 160px 0;" />
          <vui-list v-else>
            <vui-list-item v-for="(item, index) in list.data" v-bind:key="index">
              <vui-list-item-meta>
                <vui-avatar slot="avatar" shape="square" v-bind:src="item.icon" v-bind:size="48" />
                <a slot="title" href="javascript:;">{{item.title}}</a>
                <div slot="description" class="write-ellipsis">{{item.description}}</div>
              </vui-list-item-meta>
              <div class="vui-list-standard-list-item-content">
                <div class="vui-list-standard-list-item-content-group">
                  <h4>负责人</h4>
                  <p>{{item.owner}}</p>
                </div>
                <div class="vui-list-standard-list-item-content-group">
                  <h4>开始时间</h4>
                  <p>{{item.startAt | dateformatter("yyyy-MM-dd HH:mm")}}</p>
                </div>
                <div class="vui-list-standard-list-item-content-group">
                  <vui-progress v-bind:stroke="6" v-bind:status="item.status" v-bind:percentage="item.progress" />
                </div>
              </div>
              <template slot="actions">
                <a href="javascript:;" style="display: block;" v-on:click="handleEdit(item)">编辑</a>
                <vui-dropdown trigger="click" placement="bottom">
                  <a href="javascript:;" style="display: block;">更多</a>
                  <vui-dropdown-menu slot="menu" v-on:click="value => handleMoreAction(value, item)">
                    <vui-dropdown-menu-item value="edit" title="编辑" />
                    <vui-dropdown-menu-item value="delete" danger title="删除" />
                  </vui-dropdown-menu>
                </vui-dropdown>
              </template>
            </vui-list-item>
          </vui-list>
        </vui-spin>
        <div style="border-top: 1px solid #f0f0f0; padding-top: 20px;">
          <div style="float: left; line-height: 34px;">共 <em>{{pagination.total}}</em> 条</div>
          <vui-pagination align="right" showPageSizer showPageElevator v-bind="pagination" v-on:change="handleChangePage" v-on:changePageSize="handleChangePageSize" />
        </div>
      </vui-card>
      <vui-editor ref="editor" />
    </div>
  </div>
</template>

<script>
  import VuiEditor from "./editor";

  export default {
    // 依赖组件
    components: {
      VuiEditor
    },
    // 页面组件状态
    data() {
      return {
        // 存放查询器状态，例如这里的状态和关键词
        searcher: {
          status: 0,
          keywords: ""
        },
        // 存放分页器状态，例如这里的总数量、当前页码、每页显示数量
        pagination: {
          total: 0,
          page: 1,
          pageSize: 10
        },
        // 存放列表的状态，例如是否处于加载中、数据源
        list: {
          loading: false,
          data: []
        }
      };
    },
    // 页面组件方法
    methods: {
      // 获取列表数据
      // 组装参数 > 发起 action 到 store 状态管理层 > 发起异步请求到 service 层 > service 层执行 ajax 请求
      // 请求成功后按照上列顺序反向逐层返回数据，直至当前页面组件
      getPageList() {
        const payload = {
          ...this.searcher,
          page: this.pagination.page,
          pageSize: this.pagination.pageSize
        };

        this.list.loading = true;
        this.$store.dispatch("list/getStandardPageList", payload).then(data => {
          this.list.loading = false;
          this.list.data = data.content;
          this.pagination.total = data.total;
        }).catch(e => {
          this.list.loading = false;
        });
      },
      // 查询
      handleSearch() {
        this.pagination.page = 1;
        this.getPageList();
      },
      // 切换页码
      handleChangePage(page) {
        this.pagination.page = page;
        this.getPageList();
      },
      // 切换每页显示数量
      handleChangePageSize(pageSize) {
        this.pagination.pageSize = pageSize;
        this.getPageList();
      },
      // 添加
      handleAdd() {
        this.$refs.editor.add(result => {
          // 添加成功后刷新列表
          this.getPageList();
        });
      },
      // 编辑
      handleEdit(item) {
        this.$refs.editor.edit(item, result => {
          // 编辑成功后刷新列表
          this.getPageList();
        });
      },
      // 删除
      handleDelete(item) {
        const payload = item;
        const loading = this.$message.loading({
          duration: 0,
          content: "正在删除，请稍后..."
        });

        this.$store.dispatch("example/deleteListTableDatasource", payload).then(data => {
          loading.close();
          this.$message.success("删除成功");
          // 删除成功后刷新列表
          this.getPageList();
        }).catch(e => {
          this.list.loading = false;
        });
      },
      // 更多操作
      handleMoreAction(value, item) {
        if (value === "edit") {
          this.handleEdit(item);
        }
        else if (value === "delete") {
          this.$modal.confirm({
            title: "友情提示",
            description: "您确定要删除当前任务吗？",
            okButtonProps: {
              props: {
                type: "danger"
              }
            },
            ok: () => this.handleDelete(item)
          });
        }
      }
    },
    // 页面组件实例化完成后立即请求列表数据
    created() {
      this.getPageList();
    }
  };
</script>

<style>
  .vui-list-standard-statistic { text-align:center; }
  .vui-list-standard-statistic h4 { color:#8c8c8c; font-size:14px; }
  .vui-list-standard-statistic p { margin-top:8px; color:#262626; font-size:24px; }
  .vui-list-standard-statistic p em { margin-right:8px; font-weight:600; }

  .vui-list-standard-list-item-content { display:flex; align-items:center; margin:0 20px 0 40px; }
  .vui-list-standard-list-item-content-group {  }
  .vui-list-standard-list-item-content-group h4 { color:#8c8c8c; font-size:14px; }
  .vui-list-standard-list-item-content-group p { margin-top:8px; color:#595959; font-size:14px; }
  .vui-list-standard-list-item-content-group .vui-progress { width:180px; }
  .vui-list-standard-list-item-content-group + .vui-list-standard-list-item-content-group { margin-left:40px; }
</style>