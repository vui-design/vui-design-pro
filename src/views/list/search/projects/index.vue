<template>
  <div>
    <vui-filter v-model="filter.value" v-bind:options="filter.options" v-on:change="handleFilterChange" />
    <vui-spin v-bind:spinning="list.loading"  style="margin-top: 16px;">
      <vui-empty v-if="list.data.length === 0" style="padding: 160px 0;" />
      <vui-list v-else v-bind:grid="list.grid" v-bind:data="list.data">
        <vui-list-item slot="item" slot-scope="item, index">
          <vui-card v-bind:bordered="false" shadow="always">
            <vui-image slot="cover" v-bind:src="item.thumbnail" lazyload fit="cover" style="width: 100%; height: 170px;" />
            <vui-card-meta v-bind:title="item.title">
              <div slot="description" style="height: 40px;">{{item.description}}</div>
            </vui-card-meta>
            <div class="vui-list-search-projects-item-meta">
              <span class="moment">{{item.createdAt | dateformatter("yyyy-MM-dd HH:mm")}}</span>
              <vui-avatar-group size="small">
                <vui-tooltip v-for="collaborator in item.collaborators" v-bind:key="collaborator.id" v-bind:content="collaborator.name">
                  <vui-avatar v-bind:src="collaborator.avatar" />
                </vui-tooltip>
              </vui-avatar-group>
            </div>
            <template slot="actions">
              <vui-tooltip style="display: block;" content="编辑">
                <vui-icon type="edit" />
              </vui-tooltip>
              <vui-tooltip style="display: block;" content="删除">
                <vui-icon type="dustbin" />
              </vui-tooltip>
              <vui-dropdown style="display: block;" placement="bottom">
                <vui-icon type="more-x" />
                <vui-dropdown-menu slot="menu">
                  <vui-dropdown-menu-item value="1" title="编辑" />
                  <vui-dropdown-menu-item value="2" danger title="删除" />
                </vui-dropdown-menu>
              </vui-dropdown>
            </template>
          </vui-card>
        </vui-list-item>
      </vui-list>
    </vui-spin>
  </div>
</template>

<script>
  import VuiFilter from "src/components/filter";

  export default {
    // 依赖组件
    components: {
      VuiFilter
    },
    // 页面组件状态
    data() {
      return {
        // 存放过滤器状态
        filter: {
          value: {
            type: [],
            state: [],
            department: []
          },
          options: [
            {
              label: "所属类目",
              key: "type",
              options: [
                { value: 1, label: "类目一" },
                { value: 2, label: "类目二" },
                { value: 3, label: "类目三" },
                { value: 4, label: "类目四" },
                { value: 5, label: "类目五" },
                { value: 6, label: "类目六" },
                { value: 7, label: "类目七" },
                { value: 8, label: "类目八" },
                { value: 9, label: "类目九" },
                { value: 10, label: "类目十" },
                { value: 11, label: "类目十一" },
                { value: 12, label: "类目十二" }
              ]
            },
            {
              label: "所属阶段",
              key: "state",
              options: [
                { value: 1, label: "阶段一" },
                { value: 2, label: "阶段二" },
                { value: 3, label: "阶段三" },
                { value: 4, label: "阶段四" },
                { value: 5, label: "阶段五" },
                { value: 6, label: "阶段六" }
              ]
            },
            {
              label: "所属部门",
              key: "department",
              options: [
                { value: 1, label: "部门一" },
                { value: 2, label: "部门二" },
                { value: 3, label: "部门三" },
                { value: 4, label: "部门四" },
                { value: 5, label: "部门五" },
                { value: 6, label: "部门六" },
                { value: 7, label: "部门七" },
                { value: 8, label: "部门八" },
                { value: 9, label: "部门九" },
                { value: 10, label: "部门十" }
              ]
            }
          ]
        },
        // 存放列表的状态，例如是否处于加载中、数据源
        list: {
          loading: false,
          grid: {
            gutter: 16,
            columns: 4
          },
          data: []
        }
      };
    },
    // 页面组件方法
    methods: {
      // 获取列表数据
      // 组装参数 > 发起 action 到 store 状态管理层 > 发起异步请求到 service 层 > service 层执行 ajax 请求
      // 请求成功后按照上列顺序反向逐层返回数据，直至当前页面组件
      getList() {
        const payload = {

        };

        this.list.loading = true;
        this.$store.dispatch("example/getListSearchProjectsDatasource", payload).then(data => {
          this.list.loading = false;
          this.list.data = data.content;
        }).catch(e => {
          this.list.loading = false;
        });
      },
      // 过滤器的选项发生变更
      handleFilterChange(value) {
        console.log(JSON.parse(JSON.stringify(value)));
      }
    },
    // 页面组件实例化完成后立即请求首页数据
    created() {
      this.getList();
    }
  };
</script>

<style>
  .vui-list-search-projects-item-meta { display:flex; justify-content:space-between; align-items:center; margin-top:16px; }
  .vui-list-search-projects-item-meta .moment { color:#8c8c8c; }
</style>