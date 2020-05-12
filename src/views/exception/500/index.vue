<template>
	<div style="padding: 20px;">
		<vui-result
			status="500"
			title="Oops...Server Error!"
			description="很抱歉，遇到一些临时服务器问题，请稍后再试！"
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