<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false">
      <template slot="title">查询表格</template>
      <p>表格查询的复杂示例，包含增删改查、批量操作、导出、全屏和刷新等功能</p>
    </vui-page-header>
    <vui-fullscreen v-model="page.fullscreen" class="vui-design-pro-page-body">
      <vui-card v-bind:bordered="false" shadow="always">
        <vui-form ref="searcher" layout="inline" v-bind:model="searcher">
          <vui-form-item prop="name">
            <vui-input v-model="searcher.name" clearable placeholder="按规则名称查询" />
          </vui-form-item>
          <vui-form-item prop="description">
            <vui-input v-model="searcher.description" clearable placeholder="按描述查询" />
          </vui-form-item>
          <vui-form-item>
            <vui-space>
              <vui-button v-on:click="handleResetSearch">重置</vui-button>
              <vui-button type="primary" v-on:click="handleSearch">查询</vui-button>
            </vui-space>
          </vui-form-item>
        </vui-form>
      </vui-card>
      <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;" bodyStyle="padding: 0; overflow: hidden;">
      	<template slot="title">查询表格</template>
        <vui-space slot="extra" divider v-bind:size="16">
          <vui-space>
            <vui-tooltip style="display: block;" v-bind:content="page.fullscreen ? '退出全屏' : '全屏'">
              <vui-link size="large" block v-on:click="handleFullscreen">
                <vui-icon v-bind:type="page.fullscreen ? 'fullscreen-exit' : 'fullscreen'" />
              </vui-link>
            </vui-tooltip>
            <vui-tooltip style="display: block;" content="刷新">
              <vui-link size="large" block v-on:click="handleRefresh">
                <vui-icon type="refresh" />
              </vui-link>
            </vui-tooltip>
          </vui-space>
          <vui-space>
            <vui-button icon="download" v-on:click="handleExport">导出</vui-button>
            <vui-button type="primary" icon="plus" v-on:click="handleAdd">添加</vui-button>
            <vui-dropdown v-if="selection.count > 0">
              <vui-button type="primary" icon="list-settings">批量操作</vui-button>
              <vui-dropdown-menu slot="menu" v-on:click="handleBatchOperate">
                <vui-dropdown-menu-item value="approve" title="批量审批" />
                <vui-dropdown-menu-item value="delete" danger title="批量删除" />
              </vui-dropdown-menu>
            </vui-dropdown>
          </vui-space>
        </vui-space>
        <vui-alert type="warning" showIcon banner style="border-bottom: 1px solid #f0f0f0">
          <template>已选择 <em style="color: #faad14; font-weight: 600;">{{selection.count}}</em> 项，服务调用次数总计 <em>{{selection.times}}</em> 万</template>
        </vui-alert>
        <vui-table ref="table" v-bind="list" v-on:rowSelect="handleRowSelect" style="max-width: unset; margin: -1px;">
          <template slot="count" slot-scope="{ row }">{{row.count | numerical}} 万</template>
          <template slot="state" slot-scope="{ row }">
            <vui-badge v-if="row.state === 1" status="default" text="未启用" />
            <vui-badge v-else-if="row.state === 2" status="success" text="已上线" />
            <vui-badge v-else-if="row.state === 3" status="processing" text="运行中" />
            <vui-badge v-else-if="row.state === 4" status="error" text="关闭" />
          </template>
          <template slot="action" slot-scope="{ row }">
            <vui-space divider>
              <a href="javascript:;" style="display: block;" v-on:click="handleEdit(row)">编辑</a>
              <vui-popconfirm v-on:ok="handleDelete(row)" placement="top-end" style="display: block;" title="确定要删除当前记录嘛？">
                <a href="javascript:;" style="display: block;">删除</a>
              </vui-popconfirm>
            </vui-space>
          </template>
        </vui-table>
        <div style="padding: 20px;">
          <div style="float: left; line-height: 34px;">共 <em>{{pagination.total}}</em> 条</div>
          <vui-pagination align="right" showPageSizer v-bind="pagination" v-on:change="handleChangePage" v-on:changePageSize="handleChangePageSize" />
        </div>
      </vui-card>
      <vui-editor ref="editor" />
    </vui-fullscreen>
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
        // 存放页面级状态，例如这里的全屏属性
        page: {
          fullscreen: false
        },
        // 存放查询器状态，例如这里的规则名称和描述
        searcher: {
          name: "",
          description: ""
        },
        // 存放分页器状态，例如这里的总数量、当前页码、每页显示数量
        pagination: {
          total: 0,
          page: 1,
          pageSize: 20
        },
        // 存放列表的状态，例如是否处于加载中、列配置、是否可选择、数据源
        list: {
          loading: false,
          bordered: true,
          rowKey: "id",
          rowSelection: {
            width: 60,
            multiple: true,
            value: []
          },
          columns: [
            { key: "name", dataIndex: "name", title: "规则名称" },
            { key: "description", dataIndex: "description", title: "描述" },
            { key: "count", dataIndex: "count", sorter: true, slot: "count", title: "服务调用次数" },
            { key: "state", dataIndex: "state", slot: "state", title: "状态" },
            { key: "datetime", dataIndex: "datetime", sorter: true, title: "上次调度时间" },
            { key: "action", width: 116, slot: "action", title: "操作" }
          ],
          data: []
        }
      };
    },
    // 计算属性
    computed: {
      selection() {
        const count = this.list.rowSelection.value.length;
        let times = 0;

        this.list.data.forEach(row => {
          if (this.list.rowSelection.value.indexOf(row.id) === -1) {
            return;
          }

          times += row.count;
        });

        return {
          count,
          times
        };
      }
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
        this.$store.dispatch("list/getTablePageList", payload).then(response => {
          this.list.loading = false;
          this.list.data = response.data.content;
          this.pagination.total = response.data.total;
        }).catch(e => {
          this.list.loading = false;
        });
      },
      // 重置查询
      handleResetSearch() {
        this.$refs.searcher.reset();
        this.getPageList();
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
      // 列表行选择
      handleRowSelect(value) {
        this.list.rowSelection.value = value;
      },
      // 全屏
      handleFullscreen() {
        this.page.fullscreen = !this.page.fullscreen;
      },
      // 刷新
      handleRefresh() {
        this.getPageList();
      },
      // 导出
      handleExport() {
        this.$refs.table.export({
          original: false,
          filename: "表格名称"
        });
      },
      // 批量操作
      handleBatchOperate(value) {
        if (value === "approve") {
          this.$message.info("您点击了批量审批");
        }
        else if (value === "delete") {
          this.$modal.confirm({
            title: "友情提示",
            description: "您确定要批量删除所选记录吗？",
            canecl: () => this.$message.info("您点击了取消"),
            okButtonProps: {
              props: {
                type: "danger"
              }
            },
            ok: () => this.$message.info("您点击了确定"),
          });
        }
      },
      // 新增
      handleAdd() {
        this.$refs.editor.add(result => {
          // 新增成功后刷新列表
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

        this.$store.dispatch("list/deleteTableItem", payload).then(data => {
          loading.close();
          this.$message.success("删除成功");
          // 删除成功后刷新列表
          this.getPageList();
        }).catch(e => {
          this.list.loading = false;
        });
      }
    },
    // 页面组件实例化完成后立即请求首页数据
    created() {
      this.getPageList();
    }
  };
</script>

<style>
  .vui-design-pro-page-body.vui-fullscreen-on { background-color:#f4f6f8; padding:16px; }
</style>