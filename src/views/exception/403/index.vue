<template>
	<vui-result
		status="403"
		title="Oops...Unauthorized!"
		description="很抱歉，您没有访问该页面的权限，请联系管理员！"
	>
		<template slot="extra">
			<vui-button type="primary" to="/">返回首页</vui-button>
		</template>
	</vui-result>
</template>

<script>
	export default {

	};
</script>