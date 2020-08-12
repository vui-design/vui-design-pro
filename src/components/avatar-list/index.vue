<template>
	<div class="vui-pro-avatar-list">
		<vui-tooltip v-for="(item, index) in data" v-bind:key="index" v-bind:content="item.name" class="vui-pro-avatar">
			<vui-avatar v-bind:size="24" v-bind:src="item.avatar" />
		</vui-tooltip>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default: () => []
			}
		}
	};
</script>

<style>
	.vui-pro-avatar-list {  }

	.vui-pro-avatar { position:relative; width:28px; height:28px; border:2px solid #fff; border-radius:28px; opacity:0.8; transition:opacity 0.2s; }
	.vui-pro-avatar:hover { opacity:1; }

	.vui-pro-avatar + .vui-pro-avatar { margin-left:-8px; }
</style>