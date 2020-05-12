<template>
	<div style="padding: 20px;">
		<div class="vui-design-pro-result-success">
			<vui-result :status="status" :title="title" :description="description">
				<div slot="content" class="vui-design-pro-result-success-content">
					<h4>您提交的内容有如下错误：</h4>
					<ul>
						<li>
							<vui-icon type="crossmark-circle" color="#ed5565" />
							<span>您的账户已被冻结</span>
							<a>立即解冻 ></a>
						</li>
						<li>
							<vui-icon type="crossmark-circle" color="#ed5565" />
							<span>您的账户还不具备申请资格</span>
							<a>立即升级 ></a>
						</li>
					</ul>
				</div>
				<template slot="extra">
					<vui-button type="primary">返回列表</vui-button>
					<vui-button>查看详情</vui-button>
					<vui-button>打印</vui-button>
				</template>
			</vui-result>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				status: "success",
				title: "提交成功",
				description: "这里可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
			};
		}
	};
</script>

<style>
	.vui-design-pro-result-success { min-height:calc(100vh - 104px); border-radius:2px; background-color:#fff; }

	.vui-design-pro-result-success-content {  }
	.vui-design-pro-result-success-content h4 { color:#262626; font-size:16px; }
	.vui-design-pro-result-success-content ul { margin-top:20px; color:#595959; }
	.vui-design-pro-result-success-content li + li { margin-top:10px; }
</style>