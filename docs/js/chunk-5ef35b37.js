(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ef35b37"],{"3e89":function(t,e,l){},"572d":function(t,e,l){"use strict";l("3e89")},ee3d:function(t,e,l){"use strict";l.r(e);var a={components:{VuiFilter:l("9a9a").a},data:function(){return{filter:{value:{type:[],state:[],department:[]},options:[{label:"所属类目",key:"type",options:[{value:1,label:"类目一"},{value:2,label:"类目二"},{value:3,label:"类目三"},{value:4,label:"类目四"},{value:5,label:"类目五"},{value:6,label:"类目六"},{value:7,label:"类目七"},{value:8,label:"类目八"},{value:9,label:"类目九"},{value:10,label:"类目十"},{value:11,label:"类目十一"},{value:12,label:"类目十二"}]},{label:"所属阶段",key:"state",options:[{value:1,label:"阶段一"},{value:2,label:"阶段二"},{value:3,label:"阶段三"},{value:4,label:"阶段四"},{value:5,label:"阶段五"},{value:6,label:"阶段六"}]},{label:"所属部门",key:"department",options:[{value:1,label:"部门一"},{value:2,label:"部门二"},{value:3,label:"部门三"},{value:4,label:"部门四"},{value:5,label:"部门五"},{value:6,label:"部门六"},{value:7,label:"部门七"},{value:8,label:"部门八"},{value:9,label:"部门九"},{value:10,label:"部门十"}]}]},list:{loading:!1,grid:{gutter:16,columns:4},data:[]}}},methods:{getList:function(){var t=this;this.list.loading=!0,this.$store.dispatch("list/getProjectList",{}).then((function(e){t.list.loading=!1,t.list.data=e.data})).catch((function(e){t.list.loading=!1}))},handleFilterChange:function(t){console.log(JSON.parse(JSON.stringify(t)))}},created:function(){this.getList()}},i=(l("572d"),l("2877")),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("vui-filter",{attrs:{options:t.filter.options},on:{change:t.handleFilterChange},model:{value:t.filter.value,callback:function(e){t.$set(t.filter,"value",e)},expression:"filter.value"}}),l("vui-spin",{staticStyle:{"margin-top":"16px"},attrs:{spinning:t.list.loading}},[0===t.list.data.length?l("vui-empty",{staticStyle:{padding:"160px 0"}}):l("vui-list",{attrs:{grid:t.list.grid,data:t.list.data},scopedSlots:t._u([{key:"item",fn:function(e,a){return l("vui-list-item",{},[l("vui-card",{attrs:{bordered:!1}},[l("vui-image",{staticStyle:{width:"100%",height:"170px"},attrs:{slot:"cover",src:e.thumbnail,lazyload:"",fit:"cover"},slot:"cover"}),l("vui-card-meta",{attrs:{title:e.title}},[l("div",{staticStyle:{height:"40px"},attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.description))])]),l("div",{staticClass:"vui-list-search-projects-item-meta"},[l("span",{staticClass:"moment"},[t._v(t._s(t._f("dateformatter")(e.createdAt,"yyyy-MM-dd HH:mm")))]),l("vui-avatar-group",{attrs:{size:"small"}},t._l(e.collaborators,(function(t){return l("vui-tooltip",{key:t.id,attrs:{content:t.name}},[l("vui-avatar",{attrs:{src:t.avatar}})],1)})),1)],1),l("template",{slot:"actions"},[l("vui-tooltip",{staticStyle:{display:"block"},attrs:{content:"编辑"}},[l("vui-icon",{attrs:{type:"edit"}})],1),l("vui-tooltip",{staticStyle:{display:"block"},attrs:{content:"删除"}},[l("vui-icon",{attrs:{type:"dustbin"}})],1),l("vui-dropdown",{staticStyle:{display:"block"},attrs:{placement:"bottom"}},[l("vui-icon",{attrs:{type:"more-x"}}),l("vui-dropdown-menu",{attrs:{slot:"menu"},slot:"menu"},[l("vui-dropdown-menu-item",{attrs:{value:"1",title:"编辑"}}),l("vui-dropdown-menu-item",{attrs:{value:"2",danger:"",title:"删除"}})],1)],1)],1)],2)],1)}}])})],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);