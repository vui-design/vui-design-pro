(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1c350d0c"],{"7abc":function(t,a,e){},"85dd":function(t,a,e){"use strict";e.r(a);var l=e("5530"),i={components:{VuiFilter:e("9a9a").a},data:function(){return{filter:{value:{type:[],words:[],progress:[],updatetime:[]},options:[{label:"作品类型",key:"type",options:[{value:1,label:"玄幻"},{value:2,label:"奇幻"},{value:3,label:"武侠"},{value:4,label:"仙侠"},{value:5,label:"都市"},{value:6,label:"历史"},{value:7,label:"军事"},{value:8,label:"悬疑"},{value:9,label:"科幻"},{value:10,label:"游戏"},{value:11,label:"体育"},{value:12,label:"轻小说"},{value:13,label:"现实"},{value:14,label:"短篇"}]},{label:"作品字数",key:"words",options:[{value:1,label:"30万内"},{value:2,label:"30~50万"},{value:3,label:"50~100万"},{value:4,label:"100~200万"},{value:5,label:"200万以上"}]},{label:"作品进度",key:"progress",options:[{value:1,label:"连载"},{value:2,label:"完结"}]},{label:"更新时间",key:"updatetime",options:[{value:1,label:"3天内"},{value:2,label:"7天内"},{value:3,label:"15天内"},{value:4,label:"30天内"},{value:5,label:"30天前"}]}]},searcher:{evaluation:void 0,authors:[],keywords:""},pagination:{total:0,page:1,pageSize:10},list:{loading:!1,data:[]}}},methods:{getPageList:function(){var t=this,a=Object(l.a)(Object(l.a)({},this.searcher),{},{page:this.pagination.page,pageSize:this.pagination.pageSize});this.list.loading=!0,this.$store.dispatch("list/getArticlePageList",a).then((function(a){t.list.loading=!1,t.list.data=a.data.content,t.pagination.total=a.data.total})).catch((function(a){t.list.loading=!1}))},handleFilterChange:function(t){console.log(JSON.parse(JSON.stringify(t)))},handleSearch:function(){this.pagination.page=1,this.getPageList()},handleChangePage:function(t){this.pagination.page=t,this.getPageList()},handleChangePageSize:function(t){this.pagination.pageSize=t,this.getPageList()}},created:function(){this.getPageList()}},s=(e("c9b7"),e("2877")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("vui-filter",{attrs:{options:t.filter.options},on:{change:t.handleFilterChange},model:{value:t.filter.value,callback:function(a){t.$set(t.filter,"value",a)},expression:"filter.value"}}),e("vui-card",{staticStyle:{"margin-top":"16px"},attrs:{bordered:!1,shadow:"always",title:"文章列表"}},[e("vui-space",{attrs:{slot:"extra"},slot:"extra"},[e("vui-select",{staticStyle:{width:"160px"},attrs:{searchable:"",clearable:"",placeholder:"按好评度查询"},model:{value:t.searcher.evaluation,callback:function(a){t.$set(t.searcher,"evaluation",a)},expression:"searcher.evaluation"}},[e("vui-option",{attrs:{value:0}},[t._v("全部")]),e("vui-option",{attrs:{value:1}},[t._v("优秀")]),e("vui-option",{attrs:{value:2}},[t._v("良好")]),e("vui-option",{attrs:{value:3}},[t._v("合格")])],1),e("vui-select",{staticStyle:{width:"160px"},attrs:{maxTagCount:1,multiple:"",searchable:"",clearable:"",placeholder:"按作者查询"},model:{value:t.searcher.authors,callback:function(a){t.$set(t.searcher,"authors",a)},expression:"searcher.authors"}},[e("vui-option",{attrs:{value:"阿波罗"}},[t._v("阿波罗")]),e("vui-option",{attrs:{value:"柳残阳"}},[t._v("柳残阳")]),e("vui-option",{attrs:{value:"萱子乔"}},[t._v("萱子乔")]),e("vui-option",{attrs:{value:"花满楼"}},[t._v("花满楼")]),e("vui-option",{attrs:{value:"张无忌"}},[t._v("张无忌")]),e("vui-option",{attrs:{value:"紫旭琳"}},[t._v("紫旭琳")]),e("vui-option",{attrs:{value:"张三丰"}},[t._v("张三丰")]),e("vui-option",{attrs:{value:"瑰柳儿"}},[t._v("瑰柳儿")]),e("vui-option",{attrs:{value:"雪浮灵"}},[t._v("雪浮灵")]),e("vui-option",{attrs:{value:"南宫惘"}},[t._v("南宫惘")])],1),e("vui-input-group",{attrs:{compact:""}},[e("vui-input",{staticStyle:{width:"160px"},attrs:{searchable:"",placeholder:"按关键字查询"},model:{value:t.searcher.keywords,callback:function(a){t.$set(t.searcher,"keywords",a)},expression:"searcher.keywords"}}),e("vui-button",{attrs:{icon:"search"},on:{click:t.handleSearch}})],1),e("vui-button",{attrs:{type:"primary",icon:"plus"}},[t._v("写文章")])],1),e("vui-spin",{attrs:{spinning:t.list.loading}},[0==t.list.data.length?e("vui-empty",{staticStyle:{padding:"160px 0"}}):e("vui-list",{attrs:{layout:"vertical",size:"large"}},t._l(t.list.data,(function(a,l){return e("vui-list-item",{key:l},[e("vui-list-item-meta",[e("vui-link",{attrs:{slot:"title",size:"large"},slot:"title"},[t._v(t._s(a.title))]),e("template",{slot:"description"},t._l(a.tags,(function(a,l){return e("vui-tag",{key:l,staticStyle:{"margin-right":"8px"}},[t._v(t._s(a))])})),1)],2),e("article",{staticClass:"vui-list-search-articles-item-content"},[t._v(t._s(a.content))]),e("div",{staticClass:"vui-list-search-articles-item-meta"},[e("vui-avatar",{attrs:{src:a.avatar,size:"small"}}),e("a",{attrs:{href:"javascript:;"}},[t._v(t._s(a.createUserName))]),e("span",[t._v("发布在")]),e("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.url))]),e("em",[t._v(t._s(t._f("dateformatter")(a.createdAt,"yyyy-MM-dd HH:mm")))])],1),e("template",{slot:"actions"},[e("vui-link",{attrs:{icon:"user"}},[t._v(t._s(a.collection))]),e("vui-link",{attrs:{icon:"thumb-up"}},[t._v(t._s(a.like))]),e("vui-link",{attrs:{icon:"chat-ellipsis"}},[t._v(t._s(a.comment))])],1),e("img",{attrs:{slot:"extra",width:"280",height:"210",src:a.thumbnail},slot:"extra"})],2)})),1)],1),e("div",{staticStyle:{"border-top":"1px solid #f0f0f0","padding-top":"20px"}},[e("div",{staticStyle:{float:"left","line-height":"34px"}},[t._v("共 "),e("em",[t._v(t._s(t.pagination.total))]),t._v(" 条")]),e("vui-pagination",t._b({attrs:{align:"right",showPageSizer:"",showPageElevator:""},on:{change:t.handleChangePage,changePageSize:t.handleChangePageSize}},"vui-pagination",t.pagination,!1))],1)],1)],1)}),[],!1,null,null,null);a.default=n.exports},c9b7:function(t,a,e){"use strict";e("7abc")}}]);