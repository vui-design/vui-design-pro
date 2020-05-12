<template>
	<div style="padding: 20px;">
		<vui-result
			status="404"
			title="Oops...Not Found!"
			description="很抱歉，你访问的页面地址有误，或者该页面不存在！"
		>
			<template slot="extra">
				<vui-button type="primary" to="/">返回首页</vui-button>
			</template>
		</vui-result>
	</div>
</template>

<script>
	export default {

	};
</script>