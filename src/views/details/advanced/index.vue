<template>
  <div class="vui-design-pro-page">
    <vui-page-header class="vui-design-pro-page-header" v-bind:ghost="false">
      <template slot="title">单号：123412341234</template>
      <vui-space slot="extra" v-bind:size="16">
        <vui-button-group>
          <vui-button>操作一</vui-button>
          <vui-button>操作二</vui-button>
        </vui-button-group>
        <vui-button type="primary">主操作</vui-button>
      </vui-space>
      <div class="vui-details-advanced">
        <div class="vui-details-advanced-content">
          <vui-descriptions v-bind:columns="2">
            <vui-description label="创建人">张三丰</vui-description>
            <vui-description label="项目名称">XXXXXX</vui-description>
            <vui-description label="创建时间">2020-10-01</vui-description>
            <vui-description label="生效日期">2020-10-01 ~ 2022-10-01</vui-description>
            <vui-description label="备注">请于两个工作日内确认</vui-description>
          </vui-descriptions>
        </div>
        <div class="vui-details-advanced-extra">
          <vui-space v-bind:divider="54" v-bind:size="32">
            <vui-statistic class="vui-details-advanced-extra-statistic" v-bind:value="20" suffix="人" title="项目成员" />
            <vui-statistic class="vui-details-advanced-extra-statistic" value="待审批" title="状态" />
          </vui-space>
        </div>
      </div>
    </vui-page-header>
    <div class="vui-design-pro-page-body">
      <vui-card v-bind:bordered="false" bodyStyle="padding: 32px;">
        <template slot="title">流程进度</template>
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
      </vui-card>
      <vui-card v-bind:bordered="false" style="margin-top: 16px;">
        <template slot="title">用户信息</template>
        <vui-descriptions>
          <vui-description label="用户姓名">张三丰</vui-description>
          <vui-description label="联系电话">18088888888</vui-description>
          <vui-description label="所属部门">XX公司 - YY部</vui-description>
          <vui-description label="联系地址">杭州市滨江区江南大道100号</vui-description>
          <vui-description label="备注" v-bind:span="2">无</vui-description>
        </vui-descriptions>
        <vui-divider />
        <vui-descriptions title="信息组">
          <vui-description label="取货单号">1000000000</vui-description>
          <vui-description label="状态">已取货</vui-description>
          <vui-description label="销售单号">123412341234</vui-description>
          <vui-description label="子订单" v-bind:span="3">432143214321</vui-description>
        </vui-descriptions>
        <vui-divider />
        <vui-card>
          <template slot="title">多层级信息组</template>
          <vui-descriptions>
            <vui-description label="用户姓名">张三</vui-description>
            <vui-description label="联系电话">18088888888</vui-description>
            <vui-description label="所属部门">XX公司 - YY部</vui-description>
            <vui-description label="联系地址">杭州市滨江区江南大道100号</vui-description>
            <vui-description label="备注" v-bind:span="2">无</vui-description>
          </vui-descriptions>
          <vui-divider />
          <vui-descriptions title="信息组">
            <vui-description label="取货单号">1000000000</vui-description>
            <vui-description label="状态">已取货</vui-description>
            <vui-description label="销售单号">123412341234</vui-description>
            <vui-description label="子订单" v-bind:span="3">432143214321</vui-description>
          </vui-descriptions>
        </vui-card>
      </vui-card>
      <vui-card v-bind:bordered="false" style="margin-top: 16px;" bodyStyle="padding: 0;">
        <vui-tabs size="large" class="vui-details-advanced-tabs">
          <vui-tab-panel key="tab1" title="表格信息一">
            <div style="padding: 20px;">
              <vui-table v-bind="list1">
                <a href="javascript:;" slot="name" slot-scope="{ row }">{{row.name}}</a>
                <template slot="tags" slot-scope="{ row }">
                  <vui-tag v-for="tag in row.tags" v-bind:key="tag.label" v-bind:color="tag.color" style="margin-right: 8px;">{{tag.label}}</vui-tag>
                </template>
                <vui-space divider slot="action" slot-scope="{ row }">
                  <a href="javascript:;">Edit</a>
                  <a href="javascript:;">Delete</a>
                </vui-space>
              </vui-table>
            </div>
          </vui-tab-panel>
          <vui-tab-panel key="tab2" title="表格信息二">
            <div style="padding: 20px;">
              <vui-table v-bind="list2">
                <a href="javascript:;" slot="name" slot-scope="{ row }">{{row.name}}</a>
                <template slot="tags" slot-scope="{ row }">
                  <vui-tag v-for="tag in row.tags" v-bind:key="tag.label" v-bind:color="tag.color" style="margin-right: 8px;">{{tag.label}}</vui-tag>
                </template>
                <vui-space divider slot="action" slot-scope="{ row }">
                  <a href="javascript:;">Edit</a>
                  <a href="javascript:;">Delete</a>
                </vui-space>
              </vui-table>
            </div>
          </vui-tab-panel>
          <vui-tab-panel key="tab3" title="表格信息三">
            <div style="padding: 20px;">
              <vui-table v-bind="list3">
                <a href="javascript:;" slot="name" slot-scope="{ row }">{{row.name}}</a>
                <template slot="tags" slot-scope="{ row }">
                  <vui-tag v-for="tag in row.tags" v-bind:key="tag.label" v-bind:color="tag.color" style="margin-right: 8px;">{{tag.label}}</vui-tag>
                </template>
                <vui-space divider slot="action" slot-scope="{ row }">
                  <a href="javascript:;">Edit</a>
                  <a href="javascript:;">Delete</a>
                </vui-space>
              </vui-table>
            </div>
          </vui-tab-panel>
        </vui-tabs>
      </vui-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        steps: [
          { title: "创建项目", status: "finish", operator: "张三丰", operatedAt: "2020-02-02 12:00:00" },
          { title: "部门初审", status: "process", operator: "张无忌", operatedAt: "" },
          { title: "财务复核", status: "wait", operator: "", operatedAt: "" },
          { title: "完成", status: "wait", operator: "", operatedAt: "" }
        ],
        list1: {
          bordered: true,
          rowKey: "id",
          columns: [
            { key: "name", dataIndex: "name", width: 200, slot: "name", title: "Name" },
            { key: "age", dataIndex: "age", width: 140, title: "Age" },
            { key: "tags", dataIndex: "tags", slot: "tags", title: "Tags" },
            { key: "address", dataIndex: "address", title: "Address" },
            { key: "action", width: 140, slot: "action", title: "Action" }
          ],
          data: [
            {
              id: 1,
              name: "John Brown",
              age: 20,
              tags: [
                { color: "green", label: "Nice" },
                { color: "geekblue", label: "Developer" }
              ],
              address: "New York No. 1 Lake Park"
            },
            {
              id: 2,
              name: "Jim Green",
              age: 24,
              tags: [
                { color: "red", label: "Loser" }
              ],
              address: "London No. 1 Lake Park"
            },
            {
              id: 3,
              name: "Joe Black",
              age: 30,
              tags: [
                { color: "green", label: "Cool" },
                { color: "geekblue", label: "Teacher" }
              ],
              address: "Sidney No. 1 Lake Park"
            },
            {
              id: 4,
              name: "Jon Snow",
              age: 26,
              tags: [
                { color: "red", label: "Loser" }
              ],
              address: "Ottawa No. 2 Lake Park"
            }
          ]
        },
        list2: {
          bordered: true,
          rowKey: "id",
          columns: [
            { key: "name", dataIndex: "name", width: 200, slot: "name", title: "Name" },
            { key: "age", dataIndex: "age", width: 140, title: "Age" },
            { key: "tags", dataIndex: "tags", slot: "tags", title: "Tags" },
            { key: "address", dataIndex: "address", title: "Address" },
            { key: "action", width: 140, slot: "action", title: "Action" }
          ],
          data: [
            {
              id: 1,
              name: "John Brown",
              age: 20,
              tags: [
                { color: "green", label: "Nice" },
                { color: "geekblue", label: "Developer" }
              ],
              address: "New York No. 1 Lake Park"
            },
            {
              id: 2,
              name: "Jim Green",
              age: 24,
              tags: [
                { color: "red", label: "Loser" }
              ],
              address: "London No. 1 Lake Park"
            }
          ]
        },
        list3: {
          bordered: true,
          rowKey: "id",
          columns: [
            { key: "name", dataIndex: "name", width: 200, slot: "name", title: "Name" },
            { key: "age", dataIndex: "age", width: 140, title: "Age" },
            { key: "tags", dataIndex: "tags", slot: "tags", title: "Tags" },
            { key: "address", dataIndex: "address", title: "Address" },
            { key: "action", width: 140, slot: "action", title: "Action" }
          ],
          data: [
            {
              id: 1,
              name: "John Brown",
              age: 20,
              tags: [
                { color: "green", label: "Nice" },
                { color: "geekblue", label: "Developer" }
              ],
              address: "New York No. 1 Lake Park"
            },
            {
              id: 2,
              name: "Jim Green",
              age: 24,
              tags: [
                { color: "red", label: "Loser" }
              ],
              address: "London No. 1 Lake Park"
            },
            {
              id: 3,
              name: "Joe Black",
              age: 30,
              tags: [
                { color: "green", label: "Cool" },
                { color: "geekblue", label: "Teacher" }
              ],
              address: "Sidney No. 1 Lake Park"
            },
            {
              id: 4,
              name: "Jon Snow",
              age: 26,
              tags: [
                { color: "red", label: "Loser" }
              ],
              address: "Ottawa No. 2 Lake Park"
            }
          ]
        }
      };
    }
  };
</script>

<style>
  /* vui-details-advanced */
  .vui-details-advanced { display:flex; align-items:flex-start; }
  .vui-details-advanced-content { flex:1; display:flex; align-items:center; }
  .vui-details-advanced-extra { margin-left:64px; }
  .vui-details-advanced-extra-statistic {  }
  .vui-details-advanced-extra-statistic .vui-statistic-title { text-align:right; }
  .vui-details-advanced-extra-statistic .vui-statistic-body { justify-content:flex-end; }

  /* vui-details-advanced-tabs */
  .vui-details-advanced-tabs .vui-tabs-header { margin-bottom:0; padding:0 20px; }
  .vui-details-advanced-tabs .vui-tabs-header .vui-tabs-tab { height:54px; }
</style>