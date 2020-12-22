webpackJsonp([26],{abSv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),r=i.n(a),o={data:function(){return{searcher:{endAt:"2020-01-07",range:"week",daterange:"2020-01-01 ~ 2020-01-07",zone:0},type:1,list:{loading:!1,scroll:{x:1880},columns:[{key:"distribution",dataIndex:"distribution",fixed:"left",width:150,align:"right",ellipsis:!0,title:"累充金额分布(元)"},{key:"users",dataIndex:"users",width:90,align:"right",ellipsis:!0,sorter:!0,slot:"users",title:"用户数"},{key:"percentage",dataIndex:"percentage",width:80,align:"right",ellipsis:!0,sorter:!0,slot:"percentage",title:"占比"},{key:"amount",dataIndex:"amount",width:140,align:"right",ellipsis:!0,sorter:!0,slot:"amount",title:"累充总金额(元)"},{key:"activityAmount",dataIndex:"activityAmount",width:196,align:"right",ellipsis:!0,sorter:!0,slot:"activityAmount",title:"活跃期间充值总金额(元)"},{key:"averageActivityHours",dataIndex:"averageActivityHours",width:166,align:"right",ellipsis:!0,sorter:!0,slot:"averageActivityHours",title:"人均游戏时长(小时)"},{key:"pvp",dataIndex:"pvp",width:104,align:"right",ellipsis:!0,sorter:!0,slot:"pvp",title:"竞技人数"},{key:"pve",dataIndex:"pve",width:104,align:"right",ellipsis:!0,sorter:!0,slot:"pve",title:"关卡人数"},{key:"mix",dataIndex:"mix",width:130,align:"right",ellipsis:!0,sorter:!0,slot:"mix",title:"混合玩法人数"},{key:"averageM3bStock",dataIndex:"averageM3bStock",align:"right",ellipsis:!0,sorter:!0,slot:"averageM3bStock",title:"人均梦三币存量"},{key:"lost_uv_7d",dataIndex:"lost_uv_7d",width:130,align:"right",ellipsis:!0,sorter:!0,slot:"lost_uv_7d",title:"7天流失人数"},{key:"lost_uv_30d",dataIndex:"lost_uv_30d",width:130,align:"right",ellipsis:!0,sorter:!0,slot:"lost_uv_30d",title:"30天流失人数"},{key:"lost_uv_90d",dataIndex:"lost_uv_90d",width:130,align:"right",ellipsis:!0,sorter:!0,slot:"lost_uv_90d",title:"90天流失人数"},{key:"action",fixed:"right",width:180,align:"center",slot:"action",title:"明细"}],data:[]}}},methods:{getList:function(){var t=this,e=r()({},this.searcher);this.list.loading=!0,this.$store.dispatch("example/getListTableDatasource",e).then(function(e){e=[{id:1,distribution:"0",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:2,distribution:"1-100",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:3,distribution:"101-300",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:4,distribution:"301-500",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:5,distribution:"501-1,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:6,distribution:"1,001-2,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:7,distribution:"2,001-3,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:8,distribution:"3,001-5,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:9,distribution:"5,001-7,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:10,distribution:"7,001-10,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:11,distribution:"10,001-15,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:12,distribution:"15,001-20,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:13,distribution:"20,001-30,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:14,distribution:"30,001-50,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:15,distribution:"50,001-70,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:16,distribution:"70,001-100,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:17,distribution:"100,001-150,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:18,distribution:"150,001-200,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:19,distribution:"200,001-300,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:20,distribution:"300,001-500,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:21,distribution:"500,001-1,000,000",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:22,distribution:"100万以上",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640},{id:23,distribution:"求和/平均",users:52678,percentage:2.22,amount:526780,activityAmount:126780,averageActivityHours:3.5,pvp:33210,pve:5888,mix:13580,averageM3bStock:5600,lost_uv_7d:114,lost_uv_30d:1200,lost_uv_90d:2640}],t.list.loading=!1,t.list.data=e}).catch(function(e){t.list.loading=!1})},handleResetSearch:function(t){this.$refs.searcher.reset(),this.getList()},handleSearch:function(){this.getList()},handleExport:function(){this.$refs.table.export({original:!1,quoted:!0,columns:this.list.columns.filter(function(t,e){return"action"!==t.key}),data:this.list.data,filename:"梦三国充值分析"})}},created:function(){this.getList()}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vui-card",{attrs:{bordered:!1,shadow:"always"}},[i("vui-form",{ref:"searcher",attrs:{layout:"inline"}},[i("vui-form-item",[i("vui-input",{staticStyle:{width:"180px"},attrs:{prepend:"更新日期",placeholder:"更新日期"},model:{value:t.searcher.endAt,callback:function(e){t.$set(t.searcher,"endAt",e)},expression:"searcher.endAt"}})],1),i("vui-form-item",[i("vui-radio-group",{attrs:{type:"button"},model:{value:t.searcher.range,callback:function(e){t.$set(t.searcher,"range",e)},expression:"searcher.range"}},[i("vui-radio",{attrs:{value:"yesterday"}},[t._v("昨日")]),i("vui-radio",{attrs:{value:"week"}},[t._v("近7日")]),i("vui-radio",{attrs:{value:"month"}},[t._v("近30日")]),i("vui-radio",{attrs:{value:"quarter"}},[t._v("近90日")]),i("vui-radio",{attrs:{value:"year"}},[t._v("近1年")])],1)],1),i("vui-form-item",[i("vui-input",{attrs:{placeholder:"请选择时间范围"},model:{value:t.searcher.daterange,callback:function(e){t.$set(t.searcher,"daterange",e)},expression:"searcher.daterange"}})],1),i("vui-form-item",[i("vui-select",{staticStyle:{width:"170px"},attrs:{placeholder:"所属大区"},model:{value:t.searcher.zone,callback:function(e){t.$set(t.searcher,"zone",e)},expression:"searcher.zone"}},[i("vui-option",{attrs:{value:0}},[t._v("所有大区")]),i("vui-option",{attrs:{value:1}},[t._v("梦1大区 - 全部")]),i("vui-option",{attrs:{value:2}},[t._v("梦2大区 - 全部")]),i("vui-option",{attrs:{value:3}},[t._v("Wegame大区 - 全部")]),i("vui-option",{attrs:{value:4}},[t._v("梦1大区 - 七星合一")]),i("vui-option",{attrs:{value:5}},[t._v("梦2大区 - 火烧赤壁")]),i("vui-option",{attrs:{value:6}},[t._v("梦2大区 - 草船借箭")])],1)],1),i("vui-form-item",[i("vui-button",{on:{click:t.handleResetSearch}},[t._v("重置")]),i("vui-button",{staticClass:"margin-left-10",attrs:{type:"primary"},on:{click:t.handleSearch}},[t._v("查询")])],1)],1)],1),i("vui-card",{staticClass:"margin-top-20",attrs:{bordered:!1,shadow:"always",headerStyle:"padding: 16px 16px 16px 20px;",bodyStyle:"padding: 0; overflow: hidden;"}},[i("template",{slot:"title"},[t._v(t._s(1==t.type?"累充分析":"至尊分析"))]),i("vui-space",{attrs:{slot:"extra",divider:""},slot:"extra"},[i("vui-radio-group",{attrs:{type:"button"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("vui-radio",{attrs:{value:1}},[t._v("累充分析")]),i("vui-radio",{attrs:{value:2}},[t._v("至尊分析")])],1),i("vui-space",[i("vui-button",{attrs:{type:"primary",icon:"bar-chart",to:"trend",append:""}},[t._v("查看趋势")]),i("vui-button",{attrs:{type:"primary",icon:"download"},on:{click:t.handleExport}},[t._v("导出")])],1)],1),i("vui-table",t._b({ref:"table",staticStyle:{"max-width":"unset",margin:"-1px"},attrs:{bordered:"",rowKey:"id"},scopedSlots:t._u([{key:"users",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.users)))]}},{key:"percentage",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.percentage,2))+" %")]}},{key:"amount",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.amount)))]}},{key:"activityAmount",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.activityAmount)))]}},{key:"averageActivityHours",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.averageActivityHours,2)))]}},{key:"pvp",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.pvp)))]}},{key:"pve",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.pve)))]}},{key:"mix",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.mix)))]}},{key:"averageM3bStock",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.averageM3bStock)))]}},{key:"lost_uv_7d",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.lost_uv_7d)))]}},{key:"lost_uv_30d",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.lost_uv_30d)))]}},{key:"lost_uv_90d",fn:function(e){var i=e.row;return[t._v(t._s(t._f("numerical")(i.lost_uv_90d)))]}},{key:"action",fn:function(e){return e.row,[i("vui-space",{attrs:{divider:""}},[i("a",{attrs:{href:"javascript:;"}},[t._v("神兵分布")]),i("a",{attrs:{href:"javascript:;"}},[t._v("地域分布")])])]}}])},"vui-table",t.list,!1))],2)],1)},staticRenderFns:[]},v=i("VU/8")(o,s,!1,null,null,null);e.default=v.exports}});
//# sourceMappingURL=26.51e157395cc4915ee82b.js.map