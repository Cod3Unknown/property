function changeSubMenu(obj) {
    var subMenuId = $(obj).attr("name");
    $("#curBtn").html("<b>" + $(obj).text() + "</b>");
    $("#menu").children("div").hide();
    $("#" + subMenuId + "Menu").show();
};

function subMenuPageTo1(obj) {
    var url = $(obj).attr("title");
    var reqUrl = '/anguilar/src/roote'+url+".html";
   var gid= $(obj).attr("id")
    $("#main_wrapper #main_content").load("/home",{adata:gid});
    $(".ztree-menu").hide();

    /*if($(obj).attr("title").substring(1).indexOf("/")==-1){
        var val = new Function($(obj).attr("title").substring(1));
        val();
    }else{
        $("#main_wrapper #main_content").load(url, function (data) {
        });
    }*/

};



function subMenuPagePop(type) {
    var tname = '';
    var hsize = 300;
    if (type == 'makeUserCard') {
        tname = "${message(code:'menu.musercard')}";
        hsize = 300;
    } else {
        tname = "${message(code:'paramsCard.make')}";
        hsize = 400;
    }
    $("#pop_window").show();
    $("#pop_window").window({
        title: tname,
        iconCls: "icon-edit",
        modal: true,
        minimizable: false,
        cache: false,
        width: 420,
        height: 300,
        onClose: function () {
            emptyPopWindow()
        },
        href: getRootPath_dc()+'/' + type + '/index'
    });
};


function getRootPath_dc() {
    var pathName = window.location.pathname.substring(1);
    console.log(pathName);
    var webName = pathName == ''? '':pathName.substring(0, pathName.indexOf('/'));
    if (webName == "") {
        return window.location.protocol+'//'+ window.location.host;
    }
    else {
        return window.location.protocol + '//' + window.location.host +'/' + webName;
    }
};

function openFirstPageLink(obj, url, path) {
    addTab($(obj).text(), url, path);
    createPath(path);
}

function shortcutPageTo(obj, path) {

    var title = $(obj).parent().attr("text");
    var url = $(obj).parent().attr("title");

    addTab(title, url, path);
    createPath(path);
}

function shortcutPageTo1(obj, path) {

    var title = $(obj).parent().attr("text");
    var url = $(obj).parent().attr("title");

    addTab1(title, url, path);
    //createPath(path);
}

function createPath(path) {
    if (null != path) {
        $.ajax({
            url: 'main/getPath',
            type: 'GET',
            cache: false,
            data: {path: path},
            error: function () {
                $.messager.alert('${message(code:"warning")}', '${message(code:"warning.getData.failed")}', 'warning');
            },
            success: function (data) {
//				$("#breadcrumb").html(data);
            }
        });
    } else {
//		$("#breadcrumb").html("");
    }
}

function ajaxSubmit(formId) {
    $("#" + formId).form('submit', {
        success: function (data) {
            eval('data=' + data);
            if (data.flag == "0") {
                $.messager.alert('${message(code:"warning")}', '${message(code:"info.save.succeed")}', 'info');
            } else if (data.flag == "1") {
                $.messager.alert('${message(code:"warning")}', '${message(code:"warning.save.failed")}', 'warning');
            }
        }
    });

}

function colorUl(wrapDivId) {
    var Ptr = document.getElementById(wrapDivId).getElementsByTagName("li");
    for (i = 1; i < Ptr.length + 1; i++) {
        Ptr[i - 1].className = (i % 2 > 0) ? "t1" : "t2";
    }
    for (var i = 0; i < Ptr.length; i++) {
        Ptr[i].onmouseover = function () {
            $(this).addClass("t3");
        };
        Ptr[i].onmouseout = function () {
            $(this).removeClass("t3");
        };
        Ptr[i].onmousedown = function () {
            // $(this).find("input[type='radio']").attr("checked",true);
            $(this).find("input[type='radio']").click();
            $(this).find("input[type='checkbox']").click();
            var inputTag = $("#" + wrapDivId).find("input");
            $.each(inputTag, function (i, n) {
                if ($(inputTag[i]).attr("checked") == true) {
                    $(this).parent().addClass("t4");
                } else {
                    $(this).parent().removeClass("t4");
                }
            });
        };
    }
}

function colorTr(tableClass) {
    var Ptr = $(tableClass);
    for (i = 1; i < Ptr.length + 1; i++) {
        var className = (i % 2 > 0) ? "t1" : "t2";
        $(this).prev().addClass(className);
    }
    for (var i = 0; i < Ptr.length; i++) {
        Ptr[i].onmouseover = function () {
            $(this).addClass("t3");
        };
        Ptr[i].onmouseout = function () {
            $(this).removeClass("t3");
        };
    }
}

function getDateTime() {
    var curtime;
    $.ajax({
        url: "main/currtimes",
        type: 'post', // 请求方式
        cache: false,// 是否缓存
        error: function () {
            alert('${message(code:"warning.exception")}');
        },// 这个是抛出加载失败的信息
        success: function (data) {
            if (data) {
                curtime = data.currenttimes;
            }
        }
    });

    return curtime;
}

function getDate() {
    var date = new Date();
    var thisYear = date.getYear();
    if ($.browser.mozilla) {
        thisYear += 1900;
    }
    var thisMonth = date.getMonth() + 1;

    // 如果月份长度是一位则前面补0
    if (thisMonth < 10)
        thisMonth = "0" + thisMonth;
    var thisDay = date.getDate();

    // 如果天的长度是一位则前面补0
    if (thisDay < 10)
        thisDay = "0" + thisDay;

    return thisYear + "-" + thisMonth + "-" + thisDay;
}

function getTimeNoSec() {
    var date = new Date();

    var thisHour = date.getHours();
    // 如果小时长度是一位则前面补0
    if (thisHour < 10)
        thisHour = "0" + thisHour;
    var thisMinute = date.getMinutes();

    // 如果分钟长度是一位则前面补0
    if (thisMinute < 10)
        thisMinute = "0" + thisMinute;

    return thisHour + ":" + thisMinute;
}

Date.prototype.DateAdd = function (strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
        case 's':
            return new Date(Date.parse(dtTmp) + (1000 * Number));
        case 'n':
            return new Date(Date.parse(dtTmp) + (60000 * Number));
        case 'h':
            return new Date(Date.parse(dtTmp) + (3600000 * Number));
        case 'd':
            return new Date(Date.parse(dtTmp) + (86400000 * Number));
        case 'w':
            return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
        case 'q':
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3,
                dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp
                    .getSeconds());
        case 'm':
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp
                .getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp
                .getSeconds());
        case 'y':
            return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp
                .getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp
                .getSeconds());
    }
}

function getYestodayDate() {
    var date = new Date();
    var ddd = date.DateAdd('d', -1);
    var thisYear = ddd.getYear();
    if ($.browser.mozilla) {
        thisYear += 1900;
    }
    var thisMonth = ddd.getMonth() + 1;

    // 如果月份长度是一位则前面补0
    if (thisMonth < 10)
        thisMonth = "0" + thisMonth;
    var thisDay = ddd.getDate();

    // 如果天的长度是一位则前面补0
    if (thisDay < 10)
        thisDay = "0" + thisDay;

    return thisYear + "-" + thisMonth + "-" + thisDay;
}

function getMonth() {
    var date = new Date();
    var thisYear = date.getYear();
    if ($.browser.mozilla) {
        thisYear += 1900;
    }
    var thisMonth = date.getMonth() + 1;

    // 如果月份长度是一位则前面补0
    if (thisMonth < 10)
        thisMonth = "0" + thisMonth;

    return thisYear + "-" + thisMonth;
}

function getLastMonth() {
    var date = new Date();
    var thisYear = date.getYear();
    if ($.browser.mozilla) {
        thisYear += 1900;
    }
    var thisMonth = date.getMonth();

    // 如果月份长度是一位则前面补0
    if (thisMonth == 0) {
        thisMonth = "12";
        thisYear = thisYear - 1;
    }
    if (thisMonth < 10)
        thisMonth = "0" + thisMonth;

    return thisYear + "-" + thisMonth;
}

// function show_time() {
//
// 	var date = new Date();
//
// 	var thisYear = date.getFullYear();
// //	if ($.browser.mozilla || $.browser.safari) {
// //		thisYear += 1900;
// //	}
//
// 	var thisMonth = date.getMonth() + 1;
// 	if (thisMonth < 10){
// 		thisMonth = "0" + thisMonth;
// 	}
//
// 	var thisDay = date.getDate();
// 	if (thisDay < 10){
// 		thisDay = "0" + thisDay;
// 	}
//
// 	var thisHour = date.getHours();
// 	if (thisHour < 10){
// 		thisHour = "0" + thisHour;
// 	}
//
// 	var thisMinute = date.getMinutes();
// 	if (thisMinute < 10){
// 		thisMinute = "0" + thisMinute;
// 	}
//
// 	var thisSecond = date.getSeconds();
// 	if (thisSecond < 10){
// 		thisSecond = "0" + thisSecond;
// 	}
//
// 	if (LANGUAGE_SELECT == 'CN')
// 	  time = thisYear + "${message(code:"year")}" + thisMonth + "${message(code:"month")}" + thisDay + "${message(code:"day")}";
// 	else
// 	  time = thisMonth + "${message(code:"month")}" + thisDay + "${message(code:"day")}" + thisYear + "${message(code:"year")}";
// 	time += thisHour + ":" + thisMinute	+ ":" + thisSecond;
//
// 	$(".currentDateTime").html(time);
//
//   if(0==thisSecond)
//   {
//     //var tmp = (new Date().getTime() - g_prevOpTimestamp)/60/1000
//     //$.messager.alert('warning',''+tmp,'warning');
//     if(new Date().getTime() - g_prevOpTimestamp > g_pageLogoutNMillisecAfterNoOp){//no operation timeout, page logout
//       logout(true)
//       return;
//     }
//     $.get(
//               "eventAlarm/unProcessedEventsCnt?random="+Math.random(),
//               function(data,status){
//                   if(data.currentAlarmCnt === undefined){
//                       return;
//                   }
//                   if(data.currentAlarmCnt > 0){
//                     $("#alarmArea").css('background','url(images/alarm.gif) repeat');
//                   }else{
//                     $("#alarmArea").css('background','transparent');
//                   }
//               },
//               'json'
//           );
//   }
// }
var dg;

function PrintAPWindow(type) {
    dg = $("#" + type + "DataGrid");
    dg.datagrid("options").pagination = false;
    var rows = dg.datagrid("getRows");
    if (rows.length != 0) {
        dg.datagrid('loaded');
        dg.parent().printElement();
    }
}

function updateTree(data) {
    //$("#show_ajax_data").append('\n' + new Date().toLocaleString() + ':update tree');
    for (var i = 0; i < data.length; i++) {
        var dc = data[i];
        var span = $("div.tree-node[node-id='" + dc.terminalId + "'][node-type='terminal']").find("span:nth-last-child(2)");
        if (span.length > 0) {
            var c = "tree-icon tree-file ";
            c += dc.onlineStatus == "ONLINE" ? "icon-online" : dc.onlineStatus == "OFFLINE" ? "icon-offline" : "icon-busy";
            span.attr("class", c)
        }
    }
}

var this_table_line_data; //当前列数据
/**
 * 需要传入以下参数来使用
 * pathEdit String   双击编辑页面请求后台路径
 * toolbar  String   工具栏div的ID字符串 如：'#table_toolbar'
 * url      String   table加载数据的路径
 * key      String         该列表的主键 主键必须别名必须为ID
 * onDblClickRow function  双击事件回调函数(params) 会将当期列的数据传入
 * table_id  String    table的id
 *             后台传来的数据按照
 *             数据体json: res.ret.rows,
 *             数据总条数:  res.ret.total
 * columns Object 栏目对应表 如下
 * [{
        field: 'ck',
        checkbox: true
      },{
        field:'name',
        title:'名称'
      },{
        field:'permissionValue',
        title:'简称'
      }]
 * treegrid 生成树表格,默认不生成
 * @param mod
 * creator mike.gu
 */
var rzj_table_generator = function (mod) {
    var $table = $(mod.table_id);
    if (mod.singleSelect == null) {
        mod.singleSelect = true
    }
    if (mod.showColumns == null) {
        mod.showColumns = true
    }
    if (mod.showRefresh == null) {
        mod.showRefresh = true
    }
    if(mod.height == null){
        mod.height=$(window).height()
    }
    $table.bootstrapTable({
//     data:data,
        height: mod.height,
        idField: mod.key,
        url: mod.path,
        method: 'post',                      //请求方式（*）
        contentType: "application/x-www-form-urlencoded",
        toolbar: mod.toolbarId==null?"#table_toolbar":mod.toolbarId,                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortName:mod.sortName,                  //排序字段
        sortOrder: "asc",                   //排序方式
        checkbox: false,
        singleSelect: mod.singleSelect,
        remoteSort: false,
        // queryParams : queryParams,
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 50],                 //可供选择的每页的行数（*）
        // search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: mod.showColumns,                  //是否显示所有的列
        showRefresh: mod.showRefresh,                  //是否显示刷新按钮
        // minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        // height: null,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: mod.key,                     //每一行的唯一标识，一般为主键列
        columns: mod.columns,
        treeShowField: 'DEPT_NAME',
        //parentIdField: 'PARENT_ID',
        onLoadSuccess: function (data) {
            if (mod.treeGrid) {
                load_table_treegrid(mod.table_id)
            }
            if (typeof mod.onLoadSuccess === 'function') {
                mod.onLoadSuccess(data)
            }
        },
        responseHandler: function (res) {
            if (typeof mod.responseHandler === 'function') {
                mod.responseHandler(res)
            } else {
                return {
                    "rows": res.ret.rows,
                    "total": res.ret.total
                };
            }
        },
        onDblClickRow: function (params) {
            if (typeof mod.onDblClickRow === 'function') {
                mod.onDblClickRow(params)
            }
        },
        queryParams:function (params) {
            if (typeof mod.queryParams === 'function') {
                params = mod.queryParams(params)
            }
            return params
        }
    });
};

function load_table_treegrid(table_id) {
    var $table = $(table_id);
    $table.treegrid({
        treeColumn: 1,
        expanderExpandedClass: 'glyphicon glyphicon-minus',
        expanderCollapsedClass: 'glyphicon glyphicon-plus',
        onChange: function () {
            $table.bootstrapTable('resetWidth');
        }
    });
}

function mod_hide(id) {
    $(id).modal("hide");
    // $("body").css("padding","0px")
}

function load() {

}
//Default messenger style
$._messengerDefaults = {
  extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right'
  // extraClasses: 'messenger-fixed messenger-on-bottom'
}
function treeview_init(params) {
    var $tree = $(params.id);
    $.ajax({
        url: params.url,
        type: "post",
        data: {data: params.data},
        error: function (ret) {
            $.globalMessenger().post({
                message: "${message(code:'universal.server.500')}",
                type: 'error',//error、info、success
                hideAfter: 3,//多长时间消失
                showCloseButton: true
            });
        },
        success: function (ret) {
            var tree = ret.ret.lastData;
            if (!tree.length) {
                return
            }
            ;
            $tree.treeview({
                data: tree,         // data is not optional
                levels: 99,
                showTags: true,
                showCheckbox: true,
                onNodeSelected: function (event, data) {
                    // console.log("nodeId:"+data.nodeId)
                    $tree.treeview('uncheckAll', {silent: true});

                    $tree.treeview('checkNode', [data.nodeId, {silent: true}]);
                },
                onNodeChecked: function (event, data) {
                    $tree.treeview('uncheckAll', {silent: true});
                    $tree.treeview('checkNode', [data.nodeId, {silent: true}]);
                    $tree.treeview('selectNode', [data.nodeId, {silent: true}]);
                },
                nodeUnchecked: function (event, data) {
                    $tree.treeview('unSelectNode', [data.nodeId, {silent: true}]);
                }
            });
            if(ret.ret.index){
                $tree.treeview('revealNode', [ret.ret.index, {silent: true}]);
            }
        }
    });
    //-------treeview树数据模板
    var tree = [
        {
            id: 1123,
            text: "Parent 1",
            state: {
                // selected:true
            },
            nodes: [
                {
                    id: 2,
                    text: "Child 1",
                    state: {
                        // selected: true,
                        // checked: true
                    },
                    nodes: [
                        {
                            text: "Grandchild 1",
                            state: {
                                disabled: true
                                // expanded:true
                            }
                        },
                        {
                            text: "Grandchild 2",
                            state: {
                                // selected:true
                            }
                        }
                    ]
                },
                {
                    text: "Child 2"
                }
            ]
        },
        {
            id: 4,
            text: "Parent 2",
            nodes: [{
                text: "2-1"
            }, {
                text: "2-2"
            }, {
                text: "2-3"
            }
            ]
        },
        {
            text: "Parent 3",
            nodes: [{
                text: "3-1"
            }, {
                text: "3-2",
                state: {
                    checked: true,
                    // disabled: true,
                    expanded: true,
                    selected: true
                },
            }
            ]
        },
        {
            text: "Parent 4"
        },
        {
            text: "Parent 5"
        }
    ];
    $("#editWindow #dept_tree_submit").bind("click", function () {
        var nodes = $("#editWindow #sys_dept_tree").treeview("getChecked");
        if (nodes.length != 1) {
            bootbox.alert("${message(code:'sys.dept.select.node')}", function (result) {
            });
            return
        }
        var newPid = nodes[0].id;
        $.ajax({
            url: "sysDept/setTree",
            type: "post",
            data: {newPId: newPid, id: id},
            error: function (ret) {
                $.globalMessenger().post({
                    message: "${message(code:'universal.server.500')}",
                    type: 'error',//error、info、success
                    hideAfter: 3,//多长时间消失
                    showCloseButton: true
                });
            },
            success: function (ret) {
                var ret = ret.ret.ret
                if (ret == "error") {
                    bootbox.alert("${message(code:'setup.failed')}", function (result) {
                    });
                } else if (ret == "succeed") {
                    $.globalMessenger().post({
                        message: "${message(code:'dept.switch.successful')}",
                        type: 'info',//error、info、success
                        hideAfter: 3,//多长时间消失
                        showCloseButton: true
                    });
                    class_array = [];  //修改树结构后，缓存重新计算
                    mod_hide(".wrapper #editWindow");
                    $("#dept_table").bootstrapTable("refresh", "sysDept/table")
                }

            }
        })
    });
}
/**
 * 根据table列号，获取table当前选择列的数据
 * @param index
 * @returns {Object}
 * creator Mike 2018-5-9
 */
function sysGetThisRowData(tableId, index) {
    var dataAll = $(tableId).bootstrapTable('getData');
    var data = new Object();
    $.each(dataAll, function (i, val) {
        if (index - 1 == i) {
            data = val;
        }
    })
    return data
}
var lan=getCookie("lan")
if(lan=='zh'){
    bootbox.setDefaults("locale","zh_CN");
}
if(lan=='en'){
    bootbox.setDefaults("locale","en");
}

function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
}

Date.prototype.Format = function (fmt) {//时间格式化
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * cookie中存值
 * */
function setCookie(name, value) {
    var days = 1;	//定义一天
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    // 写入Cookie, toGMTString将时间转换成字符串
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
};

function getZTree(ZTreeName) {
    var nodeData = [];
    var zTree = $.fn.zTree.getZTreeObj(ZTreeName);
    //console.log(zTree)
    if(zTree==null){
        nodeData.push({"level":null,"id":null,"name":null})
        return nodeData[0];
    }
    var nodes=zTree.getSelectedNodes();
    if(nodes.length==0){
        nodeData.push({"level":null,"id":null,"name":null})
        return nodeData[0];
    }
    var level = nodes[0].myLevel// 0,1,2:树结构三级
    var id = nodes[0].id
    var name = nodes[0].name
    nodeData.push({"level":level,"id":id,"name":name})
    return nodeData[0]
}

function initZTree(ZTreeMenuName,ZTreeName){//动态创建树结构
    $("#ZTreeShowName").val(ZTreeName);
    $(".ztree-menu").hide();
    if($("#"+ZTreeMenuName).length==0){
        $(".sidebar").append("<div id='" + ZTreeMenuName + "' class='ztree-menu' style=\"max-height:800px;overflow:auto;\"></div>" );
        $("#"+ZTreeMenuName).load("ZTree/index", {"ZTreeName":ZTreeName},function (data) {

        });
    }
    $("#"+ZTreeMenuName).show();
    //alert($("#ZTreeHiddenName").val())
}


function isShowTree(ishow){

    //$(".sidebar-toggle").css("pointer-events", "none");

    /*if(ishow){
        $("body").attr("class", "skin-blue sidebar-mini");
    } else {
        $("body").attr("class", "skin-blue sidebar-mini sidebar-collapse");
    }*/

}

/**
 * 通用时间组件，
 * @param id 需要显示时间的input的id
 **/
function timeComponent(id){

    var startTime;
    var endTime;
    $.ajax({
        url:"securitySettings/timeComponent",
        async: false,
        success: function (result) {
            startTime = result.ret.pastTime;
            endTime = result.ret.currentTime;
        },error:function(data) {
            removeLoading('test');
            alert("${message(code: 'universal.add.fails')}");
        }
    });

    $("#"+id).daterangepicker({
        timePicker: true,
        timePicker24Hour: true,
        startDate: startTime,
        endDate: endTime,
        locale: {
            format: "YYYY-MM-DD HH:mm:ss", //设置显示格式
            applyLabel: '确定', //确定按钮文本
            cancelLabel: '取消', //取消按钮文本
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'
            ]
        }
    });
}
