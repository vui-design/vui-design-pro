<template>
  <div>
    <vui-filter v-model="filter.value" v-bind:options="filter.options" v-on:change="handleFilterChange" />
    <vui-card v-bind:bordered="false" shadow="always" style="margin-top: 16px;" title="文章列表">
      <vui-space slot="extra">
        <vui-select v-model="searcher.evaluation" searchable clearable style="width: 160px;" placeholder="按好评度查询">
          <vui-option v-bind:value="0">全部</vui-option>
          <vui-option v-bind:value="1">优秀</vui-option>
          <vui-option v-bind:value="2">良好</vui-option>
          <vui-option v-bind:value="3">合格</vui-option>
        </vui-select>
        <vui-select v-model="searcher.authors" v-bind:maxTagCount="1" multiple searchable clearable style="width: 160px;" placeholder="按作者查询">
          <vui-option value="阿波罗">阿波罗</vui-option>
          <vui-option value="柳残阳">柳残阳</vui-option>
          <vui-option value="萱子乔">萱子乔</vui-option>
          <vui-option value="花满楼">花满楼</vui-option>
          <vui-option value="张无忌">张无忌</vui-option>
          <vui-option value="紫旭琳">紫旭琳</vui-option>
          <vui-option value="张三丰">张三丰</vui-option>
          <vui-option value="瑰柳儿">瑰柳儿</vui-option>
          <vui-option value="雪浮灵">雪浮灵</vui-option>
          <vui-option value="南宫惘">南宫惘</vui-option>
        </vui-select>
        <vui-input-group compact>
          <vui-input v-model="searcher.keywords" searchable style="width: 160px;" placeholder="按关键字查询" />
          <vui-button icon="search" v-on:click="handleSearch" />
        </vui-input-group>
        <vui-button type="primary" icon="plus">写文章</vui-button>
      </vui-space>
      <vui-spin v-bind:spinning="list.loading">
        <vui-empty v-if="list.data.length == 0" style="padding: 160px 0;" />
        <vui-list v-else layout="vertical" size="large">
          <vui-list-item v-for="(item, index) in list.data" v-bind:key="index">
            <vui-list-item-meta>
              <vui-link slot="title" size="large">{{item.title}}</vui-link>
              <template slot="description">
                <vui-tag v-for="(tag, index) in item.tags" v-bind:key="index" style="margin-right: 8px;">{{tag}}</vui-tag>
              </template>
            </vui-list-item-meta>
            <article class="vui-list-search-articles-item-content">{{item.content}}</article>
            <div class="vui-list-search-articles-item-meta">
              <vui-avatar v-bind:src="item.avatar" size="small" />
              <a href="javascript:;">{{item.createUserName}}</a>
              <span>发布在</span>
              <a v-bind:href="item.url" target="_blank">{{item.url}}</a>
              <em>{{item.createdAt | dateformatter("yyyy-MM-dd HH:mm")}}</em>
            </div>
            <template slot="actions">
              <vui-link icon="user">{{item.collection}}</vui-link>
              <vui-link icon="thumb-up">{{item.like}}</vui-link>
              <vui-link icon="chat-ellipsis">{{item.comment}}</vui-link>
            </template>
            <img slot="extra" width="280" height="210" v-bind:src="item.thumbnail" />
          </vui-list-item>
        </vui-list>
      </vui-spin>
      <div style="border-top: 1px solid #f0f0f0; padding-top: 20px;">
        <div style="float: left; line-height: 34px;">共 <em>{{pagination.total}}</em> 条</div>
        <vui-pagination align="right" showPageSizer showPageElevator v-bind="pagination" v-on:change="handleChangePage" v-on:changePageSize="handleChangePageSize" />
      </div>
    </vui-card>
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
            words: [],
            progress: [],
            updatetime: []
          },
          options: [
            {
              label: "作品类型",
              key: "type",
              options: [
                { value: 1, label: "玄幻" },
                { value: 2, label: "奇幻" },
                { value: 3, label: "武侠" },
                { value: 4, label: "仙侠" },
                { value: 5, label: "都市" },
                { value: 6, label: "历史" },
                { value: 7, label: "军事" },
                { value: 8, label: "悬疑" },
                { value: 9, label: "科幻" },
                { value: 10, label: "游戏" },
                { value: 11, label: "体育" },
                { value: 12, label: "轻小说" },
                { value: 13, label: "现实" },
                { value: 14, label: "短篇" }
              ]
            },
            {
              label: "作品字数",
              key: "words",
              options: [
                { value: 1, label: "30万内" },
                { value: 2, label: "30~50万" },
                { value: 3, label: "50~100万" },
                { value: 4, label: "100~200万" },
                { value: 5, label: "200万以上" }
              ]
            },
            {
              label: "作品进度",
              key: "progress",
              options: [
                { value: 1, label: "连载" },
                { value: 2, label: "完结" }
              ]
            },
            {
              label: "更新时间",
              key: "updatetime",
              options: [
                { value: 1, label: "3天内" },
                { value: 2, label: "7天内" },
                { value: 3, label: "15天内" },
                { value: 4, label: "30天内" },
                { value: 5, label: "30天前" }
              ]
            }
          ]
        },
        // 存放查询器状态，例如这里的好评度、作者和关键字
        searcher: {
          evaluation: undefined,
          authors: [],
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
        this.$store.dispatch("list/getArticlePageList", payload).then(response => {
          this.list.loading = false;
          this.list.data = response.data.content;
          this.pagination.total = response.data.total;
        }).catch(e => {
          this.list.loading = false;
        });
      },
      // 过滤器的选项发生变更
      handleFilterChange(value) {
        console.log(JSON.parse(JSON.stringify(value)));
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
      }
    },
    // 页面组件实例化完成后立即请求首页数据
    created() {
      this.getPageList();
    }
  };
</script>

<style>
  .vui-list-search-articles-item-content { display:-webkit-box; overflow:hidden; text-overflow:ellipsis; -webkit-box-orient:vertical; -webkit-line-clamp:3; }

  .vui-list-search-articles-item-meta { display:flex; align-items:center; margin-top:16px; }
  .vui-list-search-articles-item-meta .vui-avatar {  }
  .vui-list-search-articles-item-meta a { margin-left:8px; }
  .vui-list-search-articles-item-meta span { margin-left:8px; color:#bfbfbf; }
  .vui-list-search-articles-item-meta em { margin-left:16px; color:#bfbfbf; }
</style>