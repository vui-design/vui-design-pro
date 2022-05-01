<template>
  <div>
    <vui-card v-bind:bordered="false">
      <vui-descriptions title="退款申请">
        <vui-description label="取货单号">1000000000</vui-description>
        <vui-description label="状态">已取货</vui-description>
        <vui-description label="销售单号">123412341234</vui-description>
        <vui-description label="子订单" v-bind:span="3">432143214321</vui-description>
      </vui-descriptions>
    </vui-card>
    <vui-card v-bind:bordered="false" style="margin-top: 16px;">
      <template slot="title">退货商品</template>
      <vui-table v-bind="list1" style="max-width: unset; margin: -1px;">
        <template slot="price" slot-scope="{ row }">{{row.price | numerical(2)}}</template>
        <template slot="count" slot-scope="{ row }">{{row.count | numerical}}</template>
        <template slot="total" slot-scope="{ row }">{{row.total | numerical(2)}} </template>
      </vui-table>
    </vui-card>
    <vui-card v-bind:bordered="false" style="margin-top: 16px;">
      <template slot="title">退货进度</template>
      <vui-table v-bind="list2" style="max-width: unset; margin: -1px;">
        <template slot="id" slot-scope="{ row }">{{row.id}}</template>
        <template slot="status" slot-scope="{ row }">
          <vui-badge v-if="row.status === 0" status="default" text="等待中" />
          <vui-badge v-else-if="row.status === 1" status="processing" text="进行中" />
          <vui-badge v-else-if="row.status === 2" status="success" text="已完成" />
        </template>
      </vui-table>
    </vui-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list1: {
          bordered: true,
          rowKey: "id",
          columns: [
            { key: "no", dataIndex: "no", width: 200, title: "商品编号" },
            { key: "name", dataIndex: "name", title: "商品名称" },
            { key: "barcode", dataIndex: "barcode", title: "商品条码" },
            { key: "price", dataIndex: "price", width: 160, align: "right", slot: "price", title: "单价" },
            { key: "count", dataIndex: "count", width: 160, align: "right", slot: "count", title: "数量(件)" },
            { key: "total", dataIndex: "total", width: 160, align: "right", slot: "total", title: "金额" }
          ],
          data: [
            { id: 4, no: "12341234", barcode: "1234123412341234", price: 2, count: 1, total: 2, name: "矿泉水 550ml" },
            { id: 3, no: "12341234", barcode: "1234123412341234", price: 3, count: 2, total: 25.5, name: "  凉茶 300ml" },
            { id: 2, no: "12341234", barcode: "1234123412341234", price: 7, count: 4, total: 28, name: "好吃的薯片" },
            { id: 1, no: "12341234", barcode: "1234123412341234", price: 8.5, count: 3, total: 25.5, name: "特别好吃的蛋卷" }
          ]
        },
        list2: {
          bordered: true,
          rowKey: "id",
          columns: [
            { key: "createdAt", dataIndex: "createdAt", width: 200, title: "时间" },
            { key: "processText", dataIndex: "processText", title: "当前进度" },
            { key: "status", dataIndex: "status", width: 160, slot: "status", title: "状态" },
            { key: "operateUser", dataIndex: "operateUser", title: "操作员ID" },
            { key: "duration", dataIndex: "duration", width: 160, title: "耗时" }
          ],
          data: [
            { id: 5, createdAt: "2020-10-01 14:30", processText: "联系客户", status: 1, duration: "5mins", operateUser: "取货员 ID1234" },
            { id: 4, createdAt: "2020-10-01 14:00", processText: " 取货员出发", status: 2, duration: "1h", operateUser: "取货员 ID1234" },
            { id: 3, createdAt: "2020-10-01 13:30", processText: "取货员接单", status: 2, duration: "5mins", operateUser: "取货员 ID1234" },
            { id: 2, createdAt: "2020-10-01 13:00", processText: "申请审批通过", status: 2, duration: "1h", operateUser: "系统" },
            { id: 1, createdAt: "2020-10-01 12:00", processText: "发起退货申请", status: 2, duration: "5mins", operateUser: "用户" }
          ]
        }
      };
    }
  };
</script>