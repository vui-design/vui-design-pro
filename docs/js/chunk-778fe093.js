(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-778fe093"],{"21de":function(t,a,i){},"289b":function(t,a,i){},"4dc5":function(t,a,i){"use strict";i.r(a);var e={},s=(i("ff46"),i("2877")),r=Object(s.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"vui-dashboard-workplace-details"},[a("div",{staticClass:"vui-dashboard-workplace-details-profile"},[a("div",{staticClass:"vui-dashboard-workplace-details-profile-header"},[a("vui-avatar",{attrs:{src:"images/avatars/svg1.svg",size:72}})],1),a("div",{staticClass:"vui-dashboard-workplace-details-profile-body"},[a("h4",[this._v("早安，Ding Wei，祝你开心每一天！")]),a("vui-space",{attrs:{divider:""}},[a("span",[this._v("前端开发工程师")]),a("span",[this._v("电魂网络－发行线－技术运营中心－运营开发部－前端开发组")])])],1)]),a("div",{staticClass:"vui-dashboard-workplace-details-extra"},[a("vui-space",{attrs:{divider:54,size:32}},[a("vui-statistic",{staticClass:"vui-dashboard-workplace-details-extra-statistic",attrs:{value:24,title:"项目数"}}),a("vui-statistic",{staticClass:"vui-dashboard-workplace-details-extra-statistic",attrs:{value:8,suffix:"/ 24",title:"待办事项"}}),a("vui-statistic",{staticClass:"vui-dashboard-workplace-details-extra-statistic",attrs:{value:2048,title:"项目访问"}})],1)],1)])}),[],!1,null,null,null).exports,o={data:function(){return{list:{loading:!1,data:[]}}},methods:{getList:function(){var t=this;this.list.loading=!0,this.$store.dispatch("dashboard/getProjectList",{}).then((function(a){t.list.loading=!1,t.list.data=a.data})).catch((function(a){t.list.loading=!1}))}},created:function(){this.getList()}},l=(i("6ddb"),Object(s.a)(o,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("vui-card",{attrs:{bordered:!1}},[i("template",{slot:"title"},[t._v("我的项目")]),i("router-link",{attrs:{slot:"extra",to:"/list/search/projects"},slot:"extra"},[t._v("全部项目")]),0===t.list.data.length?i("vui-empty",{staticStyle:{padding:"53px 0"}},[i("img",{staticStyle:{height:"80px"},attrs:{slot:"image",src:"images/empty/projects.png"},slot:"image"}),i("template",{slot:"description"},[t._v("Sorry，暂无项目记录！点击下方按钮立即创建")]),i("vui-button",{attrs:{type:"primary",to:"/list/search/projects"}},[t._v("立即创建")])],2):t._l(t.list.data,(function(a){return i("vui-card-grid",{key:a.id,staticStyle:{width:"33.33333333%",padding:"0"}},[i("router-link",{staticClass:"vui-dashboard-workplace-project",attrs:{to:"/list/search/projects"}},[i("div",{staticClass:"vui-dashboard-workplace-project-header"},[i("div",{staticClass:"vui-dashboard-workplace-project-avatar"},[i("vui-avatar",{attrs:{src:a.logo,size:32}})],1),i("h4",{staticClass:"vui-dashboard-workplace-project-name"},[t._v(t._s(a.title))])]),i("div",{staticClass:"vui-dashboard-workplace-project-body"},[t._v(t._s(a.description))]),i("div",{staticClass:"vui-dashboard-workplace-project-footer"},[i("span",{staticClass:"vui-dashboard-workplace-project-tag"},[t._v(t._s(a.tag))]),i("span",{staticClass:"vui-dashboard-workplace-project-moment"},[i("vui-time",{attrs:{time:a.createdAt}})],1)])])],1)}))],2)}),[],!1,null,null,null).exports),n={data:function(){return{list:{loading:!1,data:[]}}},methods:{getList:function(){var t=this;this.list.loading=!0,this.$store.dispatch("dashboard/getEventList",{}).then((function(a){t.list.loading=!1,t.list.data=a.data})).catch((function(a){t.list.loading=!1}))}},created:function(){this.getList()}},c=(i("89dd"),Object(s.a)(n,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("vui-card",{staticStyle:{"margin-top":"16px"},attrs:{bordered:!1}},[i("template",{slot:"title"},[t._v("最新动态")]),0===t.list.data.length?i("vui-empty",{staticStyle:{padding:"188px 0"}},[i("img",{staticStyle:{height:"80px"},attrs:{slot:"image",src:"images/empty/events.png"},slot:"image"}),i("template",{slot:"description"},[t._v("暂无动态")])],2):i("vui-list",{staticClass:"vui-dashboard-workplace-event-list"},t._l(t.list.data,(function(a){return i("vui-list-item",{key:a.id,staticClass:"vui-dashboard-workplace-event"},[i("vui-list-item-meta",{attrs:{avatar:a.avatar}},[i("div",{attrs:{slot:"title"},slot:"title"},[i("a",{staticClass:"username",attrs:{href:"javascript:;"}},[t._v(t._s(a.username))]),i("span",{staticClass:"text"},[t._v(t._s(a.action))]),a.targetUsername?i("a",{staticClass:"username",attrs:{href:"javascript:;"}},[t._v(t._s(a.targetUsername))]):t._e(),a.targetContent?i("span",{staticClass:"text"},[t._v(t._s(a.targetContent))]):t._e(),i("a",{staticClass:"content",attrs:{href:"javascript:;"}},[t._v(t._s(a.content))])]),i("div",{staticClass:"moment",attrs:{slot:"description"},slot:"description"},[t._v(t._s(a.moment))])])],1)})),1)],2)}),[],!1,null,null,null).exports),d={data:function(){return{}}},u=(i("d4de"),Object(s.a)(d,(function(){var t=this.$createElement,a=this._self._c||t;return a("vui-card",{attrs:{bordered:!1}},[a("template",{slot:"title"},[this._v("快速开始 / 便捷导航")]),a("vui-card-grid",{staticStyle:{width:"33.33333333%",padding:"0"}},[a("router-link",{staticClass:"vui-dashboard-workplace-shortcut",attrs:{to:"/dashboard"}},[a("vui-icon",{staticStyle:{color:"#2d8cf0"},attrs:{type:"apps"}}),a("h4",[this._v("控制面板")])],1)],1),a("vui-card-grid",{staticStyle:{width:"33.33333333%",padding:"0"}},[a("router-link",{staticClass:"vui-dashboard-workplace-shortcut",attrs:{to:"/form"}},[a("vui-icon",{staticStyle:{color:"#52c41a"},attrs:{type:"edit-square"}}),a("h4",[this._v("表单")])],1)],1),a("vui-card-grid",{staticStyle:{width:"33.33333333%",padding:"0"}},[a("router-link",{staticClass:"vui-dashboard-workplace-shortcut",attrs:{to:"/list"}},[a("vui-icon",{staticStyle:{color:"#faad14"},attrs:{type:"table"}}),a("h4",[this._v("列表")])],1)],1),a("vui-card-grid",{staticStyle:{width:"33.33333333%",padding:"0"}},[a("router-link",{staticClass:"vui-dashboard-workplace-shortcut",attrs:{to:"/details"}},[a("vui-icon",{staticStyle:{color:"#975fe4"},attrs:{type:"profile"}}),a("h4",[this._v("详情页")])],1)],1),a("vui-card-grid",{staticStyle:{width:"33.33333333%",padding:"0"}},[a("router-link",{staticClass:"vui-dashboard-workplace-shortcut",attrs:{to:"/user"}},[a("vui-icon",{staticStyle:{color:"#fa8c16"},attrs:{type:"user"}}),a("h4",[this._v("个人页")])],1)],1),a("vui-card-grid",{staticStyle:{width:"33.33333333%",padding:"0"}},[a("router-link",{staticClass:"vui-dashboard-workplace-shortcut",attrs:{to:"/result"}},[a("vui-icon",{staticStyle:{color:"#5bc0de"},attrs:{type:"info"}}),a("h4",[this._v("结果页")])],1)],1)],2)}),[],!1,null,null,null).exports),v={data:function(){return{list:{loading:!1,rowKey:"id",columns:[{key:"no",slot:"no",width:60,align:"center",ellipsis:!0,title:"#"},{key:"title",dataIndex:"title",slot:"title",ellipsis:!0,title:"任务"},{key:"collaborators",dataIndex:"collaborators",width:100,ellipsis:!0,slot:"collaborators",title:"协作者"}],data:[]}}},methods:{getList:function(){var t=this;this.list.loading=!0,this.$store.dispatch("dashboard/getTodoList",{}).then((function(a){t.list.loading=!1,t.list.data=a.data})).catch((function(a){t.list.loading=!1}))}},created:function(){this.getList()}},p=(i("f539"),Object(s.a)(v,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("vui-card",{staticStyle:{"margin-top":"16px"},attrs:{bordered:!1,bodyStyle:"padding: 0;"}},[i("template",{slot:"title"},[t._v("待办事项")]),i("vui-table",t._b({staticClass:"vui-pro-dashboard-workplace-todo-list",scopedSlots:t._u([{key:"no",fn:function(a){a.row;var i=a.rowIndex;return[t._v(t._s(i+1))]}},{key:"title",fn:function(a){var i=a.row;return[t._v(t._s(i.title))]}},{key:"collaborators",fn:function(a){var e=a.row;return[i("vui-avatar-group",{attrs:{size:"small"}},t._l(e.collaborators,(function(t){return i("vui-tooltip",{key:t.id,attrs:{content:t.name}},[i("vui-avatar",{attrs:{src:t.avatar}})],1)})),1)]}}])},"vui-table",t.list,!1))],2)}),[],!1,null,null,null).exports),h=(i("7db0"),i("159b"),i("4de4"),i("7104")),g=i.n(h),f={citation:"引用",praise:"口碑",output:"产量",contribution:"贡献",hot:"热度"},b={getScaleText:function(t){return f[t]},getGeomColor:function(t,a){var i=t.find((function(t){return t.target===a}));return i?i.color:a},getChartTooltipTemplate:function(t,a){var i="";return i+='<div class="g2-tooltip">',i+='<div class="g2-tooltip-title">'+t+"</div>",i+='<ul class="g2-tooltip-list">',a.forEach((function(t){var a=t.point._origin;i+='<li class="g2-tooltip-list-item">',i+='<i class="g2-tooltip-list-item-marker" style="background-color: '+t.color+';"></i>',i+='<label class="g2-tooltip-list-item-key">'+a.target+"</label>",i+='<label class="g2-tooltip-list-item-value">'+a.value+"</label>",i+="</li>"})),i+="</ul>",i+="</div>"},getSettings:function(t){var a=this,i=t.filter((function(t){return t.enabled}));return(i=(new g.a.View).source(i)).transform({type:"fold",fields:["citation","praise","output","contribution","hot"],key:"item",value:"value"}),i=i.rows,{root:{key:(new Date).getTime(),forceFit:!0,animate:!0,height:270,padding:["auto","auto","auto","auto"],data:i,scale:[{dataKey:"item",formatter:this.getScaleText},{dataKey:"value",min:0,max:10}]},coord:{type:"polar",radius:1},axis:{dataKey:"value",line:null,tickLine:null,grid:{type:"polygon"}},line:{position:"item*value",size:1,color:["target",function(i){return a.getGeomColor(t,i)}]},point:{position:"item*value",size:3,shape:"circle",color:["target",function(i){return a.getGeomColor(t,i)}]},tooltip:{crosshairs:!1,useHtml:!0,htmlContent:this.getChartTooltipTemplate}}}},m={data:function(){var t=[];return{dataSource:t,chartSettings:b.getSettings(t)}},methods:{getChartLegendItemColor:function(t){return t.enabled?t.color:"#aaaaaa"},handleClickChartLegendItem:function(t){if(!(this.dataSource.filter((function(t){return t.enabled})).length<=1&&!0===t.enabled)){t.enabled=!t.enabled;var a=b.getSettings(this.dataSource);this.chartSettings=a}}},created:function(){var t=[{target:"个人",citation:9,praise:8,output:4,contribution:6,hot:8,enabled:!0,color:"#1890ff"},{target:"团队",citation:4,praise:4,output:8,contribution:4,hot:2,enabled:!0,color:"#2fc25b"},{target:"部门",citation:6,praise:2,output:6,contribution:8,hot:8,enabled:!0,color:"#facc14"}],a=b.getSettings(t);this.dataSource=t,this.chartSettings=a}},_=(i("9118"),{components:{VuiDetails:r,VuiProjectList:l,VuiEventList:c,VuiShortcutList:u,VuiTodoList:p,VuiRadar:Object(s.a)(m,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("vui-card",{staticStyle:{"margin-top":"16px"},attrs:{bordered:!1}},[i("template",{slot:"title"},[t._v("XX 指数")]),0===t.dataSource.length?i("vui-empty",{staticStyle:{padding:"127px 0"}},[i("img",{staticStyle:{height:"60px"},attrs:{slot:"image",src:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"},slot:"image"}),i("div",{attrs:{slot:"description"},slot:"description"},[t._v("暂无统计数据")])]):i("div",[i("v-chart",t._b({},"v-chart",t.chartSettings.root,!1),[i("v-coord",t._b({},"v-coord",t.chartSettings.coord,!1)),i("v-axis",t._b({},"v-axis",t.chartSettings.axis,!1)),i("v-line",t._b({},"v-line",t.chartSettings.line,!1)),i("v-point",t._b({},"v-point",t.chartSettings.point,!1)),i("v-tooltip",t._b({},"v-tooltip",t.chartSettings.tooltip,!1))],1),i("vui-space",{staticStyle:{"margin-top":"24px"},attrs:{divider:56,size:40,block:"",justify:"center"}},t._l(t.dataSource,(function(a,e){return i("a",{key:e,attrs:{href:"javascript:;"},on:{click:function(i){return t.handleClickChartLegendItem(a)}}},[i("vui-statistic",{staticClass:"vui-dashboard-workplace-radar-statistic",attrs:{value:a.citation+a.praise+a.output+a.contribution+a.hot}},[i("vui-badge",{attrs:{slot:"title",color:t.getChartLegendItemColor(a),text:a.target},slot:"title"})],1)],1)})),0)],1)],2)}),[],!1,null,null,null).exports}}),y=Object(s.a)(_,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"vui-design-pro-page"},[a("vui-page-header",{staticClass:"vui-design-pro-page-header",attrs:{ghost:!1,title:"工作台"}},[a("vui-details")],1),a("div",{staticClass:"vui-design-pro-page-body"},[a("vui-row",{attrs:{gutter:16}},[a("vui-col",{attrs:{span:16}},[a("vui-project-list"),a("vui-event-list")],1),a("vui-col",{attrs:{span:8}},[a("vui-shortcut-list"),a("vui-todo-list"),a("vui-radar")],1)],1)],1)],1)}),[],!1,null,null,null);a.default=y.exports},"6ddb":function(t,a,i){"use strict";i("82e3")},"7d93":function(t,a,i){},"82e3":function(t,a,i){},8743:function(t,a,i){},"89dd":function(t,a,i){"use strict";i("7d93")},9118:function(t,a,i){"use strict";i("8743")},a57f:function(t,a,i){},d4de:function(t,a,i){"use strict";i("289b")},f539:function(t,a,i){"use strict";i("21de")},ff46:function(t,a,i){"use strict";i("a57f")}}]);