(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5707d730"],{3511:function(t,l,e){"use strict";e("90b3")},4355:function(t,l,e){"use strict";e.r(l);var a={components:{VuiFilter:e("9a9a").a},data:function(){return{filter:{value:{type:[],state:[],department:[]},options:[{label:"所属类目",key:"type",options:[{value:1,label:"类目一"},{value:2,label:"类目二"},{value:3,label:"类目三"},{value:4,label:"类目四"},{value:5,label:"类目五"},{value:6,label:"类目六"},{value:7,label:"类目七"},{value:8,label:"类目八"},{value:9,label:"类目九"},{value:10,label:"类目十"},{value:11,label:"类目十一"},{value:12,label:"类目十二"}]},{label:"所属阶段",key:"state",options:[{value:1,label:"阶段一"},{value:2,label:"阶段二"},{value:3,label:"阶段三"},{value:4,label:"阶段四"},{value:5,label:"阶段五"},{value:6,label:"阶段六"}]},{label:"所属部门",key:"department",options:[{value:1,label:"部门一"},{value:2,label:"部门二"},{value:3,label:"部门三"},{value:4,label:"部门四"},{value:5,label:"部门五"},{value:6,label:"部门六"},{value:7,label:"部门七"},{value:8,label:"部门八"},{value:9,label:"部门九"},{value:10,label:"部门十"}]}]},list:{loading:!1,grid:{gutter:16,columns:4},data:[]}}},methods:{getList:function(){var t=this;this.list.loading=!0,this.$store.dispatch("example/getListSearchApplicationsDatasource",{}).then((function(l){t.list.loading=!1,t.list.data=l.content})).catch((function(l){t.list.loading=!1}))},handleFilterChange:function(t){console.log(JSON.parse(JSON.stringify(t)))}},created:function(){this.getList()}},i=(e("3511"),e("2877")),s=Object(i.a)(a,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("vui-filter",{attrs:{options:t.filter.options},on:{change:t.handleFilterChange},model:{value:t.filter.value,callback:function(l){t.$set(t.filter,"value",l)},expression:"filter.value"}}),e("vui-spin",{staticStyle:{"margin-top":"16px"},attrs:{spinning:t.list.loading}},[0===t.list.data.length?e("vui-empty",{staticStyle:{padding:"160px 0"}}):e("vui-list",{attrs:{grid:t.list.grid,data:t.list.data},scopedSlots:t._u([{key:"item",fn:function(t,l){return e("vui-list-item",{},[e("vui-card",{attrs:{bordered:!1,shadow:"always"}},[e("vui-card-meta",{attrs:{title:t.title}},[e("vui-avatar",{attrs:{slot:"avatar",src:t.logo},slot:"avatar"})],1),e("div",{staticClass:"vui-list-search-applications-item-statistic"},[e("vui-statistic",{attrs:{value:t.au,suffix:"万",title:"活跃用户"}}),e("vui-statistic",{attrs:{value:t.nu,title:"新增用户"}})],1),e("template",{slot:"actions"},[e("vui-tooltip",{staticStyle:{display:"block"},attrs:{content:"编辑"}},[e("vui-icon",{attrs:{type:"edit"}})],1),e("vui-tooltip",{staticStyle:{display:"block"},attrs:{content:"下载"}},[e("vui-icon",{attrs:{type:"download"}})],1),e("vui-tooltip",{staticStyle:{display:"block"},attrs:{content:"分享"}},[e("vui-icon",{attrs:{type:"share"}})],1),e("vui-dropdown",{staticStyle:{display:"block"},attrs:{placement:"bottom"}},[e("vui-icon",{attrs:{type:"more-x"}}),e("vui-dropdown-menu",{attrs:{slot:"menu"},slot:"menu"},[e("vui-dropdown-menu-item",{attrs:{value:"1",title:"编辑"}}),e("vui-dropdown-menu-item",{attrs:{value:"2",title:"下载"}}),e("vui-dropdown-menu-item",{attrs:{value:"3",title:"分享"}}),e("vui-dropdown-menu-item",{attrs:{value:"4",danger:"",title:"删除"}})],1)],1)],1)],2)],1)}}])})],1)],1)}),[],!1,null,null,null);l.default=s.exports},"90b3":function(t,l,e){}}]);