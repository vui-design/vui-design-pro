(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bb424618"],{"8e00":function(t,e,a){},d1cd:function(t,e,a){"use strict";a("8e00")},d800:function(t,e,a){"use strict";a.r(e);var i=a("5530"),s=a("90fe"),l={data:function(){return{modal:{visible:!1,width:600,clickBackdropToClose:!1,bodyStyle:{padding:"24px"},type:1,submitting:!1,callback:void 0},model:{id:void 0,title:"",startAt:"",owner:void 0,description:""},rules:{title:[{trigger:"blur",required:!0,type:"string",message:"请输入任务名称"}],startAt:[{trigger:"blur",required:!0,type:"string",message:"请输入开始时间"}],owner:[{trigger:"change",required:!0,type:"string",message:"请选择负责人"}],description:[{trigger:"blur",required:!0,type:"string",message:"请输入任务描述"}]}}},methods:{add:function(t){this.modal.type=1,this.modal.visible=!0,this.modal.callback=t},edit:function(t,e){var a=this;this.modal.type=2,this.modal.visible=!0,this.modal.callback=e,this.$nextTick((function(){a.model=s.a.clone(t)}))},handleAfterClose:function(){this.$refs.form.reset()},handleClose:function(){this.modal.visible=!1,this.modal.submitting=!1},handleCancel:function(){this.handleClose()},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return t.$message.error("任务信息填写不正确");var a=t.model,i="",s="";1==t.modal.type?(i="example/addListStandardDatasource",s="提交成功"):2==t.modal.type&&(i="example/editListStandardDatasource",s="保存成功"),t.modal.submitting=!0,t.$store.dispatch(i,a).then((function(e){t.handleClose(),t.$message.success(s),"function"==typeof t.modal.callback&&t.modal.callback(e)})).catch((function(e){t.modal.submitting=!1}))}))}}},o=a("2877"),n={components:{VuiEditor:Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vui-modal",{attrs:{width:t.modal.width,clickBackdropToClose:t.modal.clickBackdropToClose,bodyStyle:t.modal.bodyStyle},on:{cancel:t.handleClose,afterClose:t.handleAfterClose},model:{value:t.modal.visible,callback:function(e){t.$set(t.modal,"visible",e)},expression:"modal.visible"}},[a("template",{slot:"title"},[1===t.modal.type?[t._v("添加任务")]:[t._v("编辑任务")]],2),a("vui-form",{ref:"form",attrs:{layout:"horizontal",model:t.model,rules:t.rules,labelWidth:86}},[a("vui-form-item",{attrs:{prop:"title",label:"任务名称"}},[a("vui-input",{attrs:{clearable:"",placeholder:"请输入任务名称"},model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}})],1),a("vui-form-item",{attrs:{prop:"startAt",label:"开始时间"}},[a("vui-input",{staticStyle:{width:"50%"},attrs:{clearable:"",placeholder:"请输入开始时间"},model:{value:t.model.startAt,callback:function(e){t.$set(t.model,"startAt",e)},expression:"model.startAt"}})],1),a("vui-form-item",{attrs:{prop:"owner",label:"负责人"}},[a("vui-select",{staticStyle:{width:"50%"},attrs:{searchable:"",clearable:"",placeholder:"请选择负责人"},model:{value:t.model.owner,callback:function(e){t.$set(t.model,"owner",e)},expression:"model.owner"}},[a("vui-option",{attrs:{value:"阿波罗"}},[t._v("阿波罗")]),a("vui-option",{attrs:{value:"柳残阳"}},[t._v("柳残阳")]),a("vui-option",{attrs:{value:"萱子乔"}},[t._v("萱子乔")]),a("vui-option",{attrs:{value:"花满楼"}},[t._v("花满楼")]),a("vui-option",{attrs:{value:"张无忌"}},[t._v("张无忌")]),a("vui-option",{attrs:{value:"紫旭琳"}},[t._v("紫旭琳")]),a("vui-option",{attrs:{value:"张三丰"}},[t._v("张三丰")]),a("vui-option",{attrs:{value:"瑰柳儿"}},[t._v("瑰柳儿")]),a("vui-option",{attrs:{value:"雪浮灵"}},[t._v("雪浮灵")]),a("vui-option",{attrs:{value:"南宫惘"}},[t._v("南宫惘")])],1)],1),a("vui-form-item",{attrs:{prop:"description",label:"任务描述"}},[a("vui-textarea",{attrs:{clearable:"",maxLength:"200",placeholder:"请输入任务描述"},model:{value:t.model.description,callback:function(e){t.$set(t.model,"description",e)},expression:"model.description"}})],1)],1),a("template",{slot:"footer"},[a("vui-button",{attrs:{disabled:t.modal.submitting},on:{click:t.handleCancel}},[t._v("取消")]),a("vui-button",{attrs:{type:"primary",loading:t.modal.submitting},on:{click:t.handleSubmit}},[1===t.modal.type?[t._v("确认")]:[t._v("保存")]],2)],1)],2)}),[],!1,null,null,null).exports},data:function(){return{searcher:{status:0,keywords:""},pagination:{total:0,page:1,pageSize:10},list:{loading:!1,data:[]}}},methods:{getPageList:function(){var t=this,e=Object(i.a)(Object(i.a)({},this.searcher),{},{page:this.pagination.page,pageSize:this.pagination.pageSize});this.list.loading=!0,this.$store.dispatch("list/getStandardPageList",e).then((function(e){t.list.loading=!1,t.list.data=e.content,t.pagination.total=e.total})).catch((function(e){t.list.loading=!1}))},handleSearch:function(){this.pagination.page=1,this.getPageList()},handleChangePage:function(t){this.pagination.page=t,this.getPageList()},handleChangePageSize:function(t){this.pagination.pageSize=t,this.getPageList()},handleAdd:function(){var t=this;this.$refs.editor.add((function(e){t.getPageList()}))},handleEdit:function(t){var e=this;this.$refs.editor.edit(t,(function(t){e.getPageList()}))},handleDelete:function(t){var e=this,a=t,i=this.$message.loading({duration:0,content:"正在删除，请稍后..."});this.$store.dispatch("example/deleteListTableDatasource",a).then((function(t){i.close(),e.$message.success("删除成功"),e.getPageList()})).catch((function(t){e.list.loading=!1}))},handleMoreAction:function(t,e){var a=this;"edit"===t?this.handleEdit(e):"delete"===t&&this.$modal.confirm({title:"友情提示",description:"您确定要删除当前任务吗？",okButtonProps:{props:{type:"danger"}},ok:function(){return a.handleDelete(e)}})}},created:function(){this.getPageList()}},r=(a("d1cd"),Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vui-design-pro-page"},[a("vui-page-header",{staticClass:"vui-design-pro-page-header",attrs:{ghost:!1}},[a("template",{slot:"title"},[t._v("标准列表")]),a("p",[t._v("标准的列表，包含增删改查等基础操作")])],2),a("div",{staticClass:"vui-design-pro-page-body"},[a("vui-card",{attrs:{bordered:!1,shadow:"always"}},[a("vui-row",[a("vui-col",{attrs:{span:8}},[a("div",{staticClass:"vui-list-standard-statistic"},[a("h4",[t._v("进行中的任务")]),a("p",[a("em",{staticStyle:{color:"#2d8cf0"}},[t._v("10")]),t._v("个任务")])])]),a("vui-col",{attrs:{span:8}},[a("div",{staticClass:"vui-list-standard-statistic"},[a("h4",[t._v("剩余任务")]),a("p",[a("em",{staticStyle:{color:"#faad14"}},[t._v("4")]),t._v("个任务")])])]),a("vui-col",{attrs:{span:8}},[a("div",{staticClass:"vui-list-standard-statistic"},[a("h4",[t._v("任务总耗时")]),a("p",[a("em",{staticStyle:{color:"#ed5565"}},[t._v("120")]),t._v("个小时")])])])],1)],1),a("vui-card",{staticStyle:{"margin-top":"16px"},attrs:{bordered:!1,shadow:"always",headerStyle:"padding: 16px 16px 16px 20px;",title:"标准列表"}},[a("vui-space",{attrs:{slot:"extra"},slot:"extra"},[a("vui-radio-group",{attrs:{type:"button"},model:{value:t.searcher.status,callback:function(e){t.$set(t.searcher,"status",e)},expression:"searcher.status"}},[a("vui-radio",{attrs:{value:0}},[t._v("全部")]),a("vui-radio",{attrs:{value:1}},[t._v("进行中")]),a("vui-radio",{attrs:{value:2}},[t._v("已完成")])],1),a("vui-input-group",{attrs:{compact:""}},[a("vui-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"输入关键字查询"},model:{value:t.searcher.keywords,callback:function(e){t.$set(t.searcher,"keywords",e)},expression:"searcher.keywords"}}),a("vui-button",{attrs:{icon:"search"},on:{click:t.handleSearch}})],1),a("vui-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),a("vui-spin",{attrs:{spinning:t.list.loading}},[0===t.list.data.length?a("vui-empty",{staticStyle:{padding:"160px 0"}}):a("vui-list",t._l(t.list.data,(function(e,i){return a("vui-list-item",{key:i},[a("vui-list-item-meta",[a("vui-avatar",{attrs:{slot:"avatar",shape:"square",src:e.icon,size:48},slot:"avatar"}),a("a",{attrs:{slot:"title",href:"javascript:;"},slot:"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"write-ellipsis",attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.description))])],1),a("div",{staticClass:"vui-list-standard-list-item-content"},[a("div",{staticClass:"vui-list-standard-list-item-content-group"},[a("h4",[t._v("负责人")]),a("p",[t._v(t._s(e.owner))])]),a("div",{staticClass:"vui-list-standard-list-item-content-group"},[a("h4",[t._v("开始时间")]),a("p",[t._v(t._s(t._f("dateformatter")(e.startAt,"yyyy-MM-dd HH:mm")))])]),a("div",{staticClass:"vui-list-standard-list-item-content-group"},[a("vui-progress",{attrs:{stroke:6,status:e.status,percentage:e.progress}})],1)]),a("template",{slot:"actions"},[a("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"},on:{click:function(a){return t.handleEdit(e)}}},[t._v("编辑")]),a("vui-dropdown",{attrs:{trigger:"click",placement:"bottom"}},[a("a",{staticStyle:{display:"block"},attrs:{href:"javascript:;"}},[t._v("更多")]),a("vui-dropdown-menu",{attrs:{slot:"menu"},on:{click:function(a){return t.handleMoreAction(a,e)}},slot:"menu"},[a("vui-dropdown-menu-item",{attrs:{value:"edit",title:"编辑"}}),a("vui-dropdown-menu-item",{attrs:{value:"delete",danger:"",title:"删除"}})],1)],1)],1)],2)})),1)],1),a("div",{staticStyle:{"border-top":"1px solid #f0f0f0","padding-top":"20px"}},[a("div",{staticStyle:{float:"left","line-height":"34px"}},[t._v("共 "),a("em",[t._v(t._s(t.pagination.total))]),t._v(" 条")]),a("vui-pagination",t._b({attrs:{align:"right",showPageSizer:"",showPageElevator:""},on:{change:t.handleChangePage,changePageSize:t.handleChangePageSize}},"vui-pagination",t.pagination,!1))],1)],1),a("vui-editor",{ref:"editor"})],1)],1)}),[],!1,null,null,null));e.default=r.exports}}]);