<template>
	<vui-card v-bind:bordered="false" shadow="always" class="margin-top-20">
		<template slot="title">最新动态</template>
		<vui-list class="vui-pro-dashboard-workplace-event-list">
			<vui-list-item class="vui-pro-dashboard-workplace-event">
				<vui-list-item-meta avatar="/static/images/avatars/svg/1.svg">
					<div slot="title">
						<a slot="title" href="javascript:;" class="username">阿波罗</a>
						<span class="text">关注了项目</span>
						<a slot="title" href="javascript:;" class="content">Vui Design Pro</a>
					</div>
					<div slot="description" class="moment">刚刚</div>
				</vui-list-item-meta>
			</vui-list-item>
			<vui-list-item class="vui-pro-dashboard-workplace-event">
				<vui-list-item-meta avatar="/static/images/avatars/svg/2.svg">
					<div slot="title">
						<a slot="title" href="javascript:;" class="username">柳残阳</a>
						<span class="text">发表了文章</span>
						<a slot="title" href="javascript:;" class="content">SEO 页面优化之 Nuxt 服务器渲染</a>
					</div>
					<div slot="description" class="moment">6 小时前</div>
				</vui-list-item-meta>
			</vui-list-item>
			<vui-list-item class="vui-pro-dashboard-workplace-event">
				<vui-list-item-meta avatar="/static/images/avatars/svg/3.svg">
					<div slot="title">
						<a slot="title" href="javascript:;" class="username">萱子乔</a>
						<span class="text">提出问题</span>
						<a slot="title" href="javascript:;" class="content">Table 组件支持合并单元格吗？</a>
					</div>
					<div slot="description" class="moment">2 天前</div>
				</vui-list-item-meta>
			</vui-list-item>
			<vui-list-item class="vui-pro-dashboard-workplace-event">
				<vui-list-item-meta avatar="/static/images/avatars/svg/4.svg">
					<div slot="title">
						<a slot="title" href="javascript:;" class="username">萱子乔</a>
						<span class="text">回复了</span>
						<a slot="title" href="javascript:;" class="username">花满楼</a>
						<span class="text">的问题</span>
						<a slot="title" href="javascript:;" class="content">Vue 中如何实现大数据列表的虚拟滚动？</a>
					</div>
					<div slot="description" class="moment">4 天前</div>
				</vui-list-item-meta>
			</vui-list-item>
			<vui-list-item class="vui-pro-dashboard-workplace-event">
				<vui-list-item-meta avatar="/static/images/avatars/svg/5.svg">
					<div slot="title">
						<a slot="title" href="javascript:;" class="username">张无忌</a>
						<span class="text">兑换了物品</span>
						<a slot="title" href="javascript:;" class="content">《Vue.js 实战》</a>
					</div>
					<div slot="description" class="moment">2 周前</div>
				</vui-list-item-meta>
			</vui-list-item>
			<vui-list-item class="vui-pro-dashboard-workplace-event">
				<vui-list-item-meta avatar="/static/images/avatars/svg/6.svg">
					<div slot="title">
						<a slot="title" href="javascript:;" class="username">紫旭琳</a>
						<span class="text">评论了</span>
						<a slot="title" href="javascript:;" class="username">张三丰</a>
						<span class="text">的文章</span>
						<a slot="title" href="javascript:;" class="content">关于 Modal 对话框的异步关闭</a>
					</div>
					<div slot="description" class="moment">2 个月前</div>
				</vui-list-item-meta>
			</vui-list-item>
		</vui-list>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	};
</script>

<style>
	.vui-pro-dashboard-workplace-event-list { min-height:486px; }

	.vui-pro-dashboard-workplace-event {  }
	.vui-pro-dashboard-workplace-event .username { color:#262626; }
	.vui-pro-dashboard-workplace-event .text { margin:0 4px; color:#8c8c8c; }
	.vui-pro-dashboard-workplace-event .content { color:#2090d8; }
	.vui-pro-dashboard-workplace-event .moment { color:#bfbfbf; }
</style>