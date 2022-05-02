<template>
  <div class="vui-user-profile-articles">
    <vui-spin v-bind:spinning="list.loading">
      <vui-empty v-if="list.data.length == 0" style="padding: 160px 0;" />
      <vui-list v-else layout="vertical" size="large">
        <vui-list-item v-for="(item, index) in list.data" v-bind:key="index" class="vui-user-profile-articles-item">
          <vui-list-item-meta>
            <vui-link slot="title" size="large">{{item.title}}</vui-link>
            <template slot="description">
              <vui-tag v-for="(tag, index) in item.tags" v-bind:key="index" style="margin-right: 8px;">{{tag}}</vui-tag>
            </template>
          </vui-list-item-meta>
          <article class="vui-user-profile-articles-item-content">{{item.content}}</article>
          <div class="vui-user-profile-articles-item-meta">
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pagination: {
          total: 0,
          page: 1,
          pageSize: 10
        },
        list: {
          loading: false,
          data: []
        }
      };
    },
    methods: {
      getList() {
        const payload = {
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
      handleChangePage(page) {
        this.pagination.page = page;
        this.getList();
      },
      handleChangePageSize(pageSize) {
        this.pagination.pageSize = pageSize;
        this.getList();
      }
    },
    created() {
      this.getList();
    }
  };
</script>

<style>
  .vui-user-profile-articles { padding:20px; }

  .vui-user-profile-articles-item {  }
  .vui-user-profile-articles-item:first-child { padding-top:0; }
  .vui-user-profile-articles-item-content { display:-webkit-box; overflow:hidden; text-overflow:ellipsis; -webkit-box-orient:vertical; -webkit-line-clamp:3; }
  .vui-user-profile-articles-item-meta { display:flex; align-items:center; margin-top:16px; }
  .vui-user-profile-articles-item-meta .vui-avatar {  }
  .vui-user-profile-articles-item-meta a { margin-left:8px; }
  .vui-user-profile-articles-item-meta span { margin-left:8px; color:#bfbfbf; }
  .vui-user-profile-articles-item-meta em { margin-left:16px; color:#bfbfbf; }
</style>