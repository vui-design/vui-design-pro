<template>
	<vui-card v-bind:bordered="false" shadow="always" bodyStyle="padding: 0;">
		<div class="vui-pro-result-error">
			<vui-result v-bind:status="status" v-bind:title="title" v-bind:description="description">
				<div slot="content" class="vui-pro-result-error-content">
					<h4>您提交的内容可能存在如下错误：</h4>
					<ul>
						<li>
							<vui-icon type="crossmark-circle" color="#ed5565" />
							<span>您的账户已被冻结</span>
							<a href="javascript:;">立即解冻 &gt;</a>
						</li>
						<li>
							<vui-icon type="crossmark-circle" color="#ed5565" />
							<span>您的账户还不具备申请资格</span>
							<a href="javascript:;">立即升级 &gt;</a>
						</li>
					</ul>
				</div>
				<template slot="extra">
					<vui-button type="primary" to="/">返回首页</vui-button>
					<vui-button>重试</vui-button>
				</template>
			</vui-result>
		</div>
	</vui-card>
</template>

<script>
	export default {
		data() {
			return {
				status: "error",
				title: "提交失败",
				description: "请在重新提交之前核对并修改以下信息！"
			};
		}
	};
</script>

<style>
	.vui-pro-result-error { min-height:calc(100vh - 104px); }

	.vui-pro-result-error-content {  }
	.vui-pro-result-error-content h4 { color:#262626; font-size:16px; }
	.vui-pro-result-error-content ul { margin-top:32px; color:#595959; }
	.vui-pro-result-error-content li {  }
	.vui-pro-result-error-content li .vui-icon { margin-right:8px; }
	.vui-pro-result-error-content li a { margin-left:8px; }
	.vui-pro-result-error-content li + li { margin-top:16px; }
</style>