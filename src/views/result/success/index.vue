<template>
  <vui-card v-bind:bordered="false" bodyStyle="padding: 0;">
    <div style="min-height: calc(100vh - 96px);">
      <vui-result v-bind:status="status" v-bind:title="title" v-bind:description="description">
        <div slot="content">
          <vui-steps type="dot">
            <vui-step v-for="(step, index) in steps" v-bind:key="index" v-bind:status="step.status" v-bind:title="step.title">
              <div v-if="step.status !== 'wait'" slot="description">
                <p>
                  <template>{{step.operator}}</template>
                  <a v-if="step.status === 'process'" href="javascript:;" style="margin-left: 4px;">催一下</a>
                </p>
                <p v-if="step.operatedAt">{{step.operatedAt}}</p>
              </div>
            </vui-step>
          </vui-steps>
          <vui-descriptions bordered v-bind:columns="2" v-bind:labelWidth="160" style="margin-top: 24px;">
            <vui-description label="项目名称">这里是项目名称</vui-description>
            <vui-description label="项目类型">自研产品</vui-description>
            <vui-description label="项目简介" v-bind:span="2">
              <p>1、这里是项目简介</p>
              <p>2、劈里啪啦一顿疯狂介绍，QAQ~</p>
            </vui-description>
            <vui-description label="创建者">张三丰</vui-description>
            <vui-description label="创建时间">2020-02-02 12:00:00</vui-description>
            <vui-description label="当前状态" v-bind:span="2">
              <vui-badge status="processing" text="审核中" />
            </vui-description>
            <vui-description label="项目预算">$100,000.00</vui-description>
          </vui-descriptions>
        </div>
        <vui-space slot="extra">
          <vui-button type="primary" to="/">返回首页</vui-button>
          <vui-button-group>
            <vui-button>查看详情</vui-button>
            <vui-button>打印</vui-button>
          </vui-button-group>
        </vui-space>
      </vui-result>
    </div>
  </vui-card>
</template>

<script>
  export default {
    data() {
      return {
        status: "success",
        title: "提交成功",
        description: "提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。",
        steps: [
          { title: "创建项目", status: "finish", operator: "张三丰", operatedAt: "2020-02-02 12:00:00" },
          { title: "部门初审", status: "process", operator: "张无忌", operatedAt: "" },
          { title: "财务复核", status: "wait", operator: "", operatedAt: "" },
          { title: "完成", status: "wait", operator: "", operatedAt: "" }
        ]
      };
    }
  };
</script>