import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var url: any;
declare var is_success: any;
declare var ajax: any;
declare var ajax2: any;
declare var urlRequest: any;
declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;
@Component({
  selector: 'app-aaccusation',
  templateUrl: './aaccusation.component.html',
  styleUrls: ['./aaccusation.component.css']
})
export class AaccusationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.system_dept_table();
  }


  system_dept_table() {
    var user_id=getCookie('user_id')

    //表格
    const columns = [
      {field: 'user_id', title: '用户ID',visible:false},
      {field: 'accu_id', title: '投诉记录编号',visible:false},
      {field: 'name', title: '业主姓名'},
      {field: 'phone', title: '手机号',visible:false},
      {field: 'building', title: '栋'},
      {field: 'room_num', title: '房间号'},
      {field: 'user_remark', title: '故障描述',width: 150},
      {field: 'insert_time', title: '上报时间'},
      {field: 'admin_name', title: '处理人'},
      {field: 'start_time', title: '开始时间'},
      {field: 'end_time', title: '结束时间'},
      {field: 'admin_remark', title: '处理结果描述'},
      {field: 'index', title: '处理', align: 'center', width: 50, switchable: false, //  操作
        // tslint:disable-next-line:typedef
        formatter(value, row, index, field){
          let result = '';
          result += '<button type=\'button\' onclick=\'sys_dept_edit(' + '"' + row.accu_id + '"' + ')\' class=\'btn btn-primary btn-sm q1\'>' +
            '<span class=\'glyphicon glyphicon-edit\'></span>' +
            '</button>\n&nbsp;';
          return result;
        }
      }


    ];

    //表格数据获取
    $('#aaccu_table').bootstrapTable({
      contentType: 'application/x-www-form-urlencoded',
      url: url() + '/Admin/getAllAccusationInfo',
      ajaxOptions: {
      },
      method: 'post',
      toolbar: '#table_toolbar',
      columns,
      uniqueId: 'id',
      showRefresh: true,
      showToggle: false,
      showColumns: false, // 显示或隐藏列
      cache: false,
      striped: true,
      clickToSelect: true,
      singleSelect: true,
      sidePagination: 'server',
      pagination: true,
      paginationLoop: true,
      smartDisplay: false,
      pageNumber: 1,
      pageSize: 10,
      pageList: [10, 20, 100], // The min size must be equal to pageSize
      // 重写请求函数，如果是查询将带上查询条件
      queryParams(params) {
        params.userId = user_id
        return params;
      },

      responseHandler(data) {
        console.log(data)
        return {
          rows: data,
          total: data.total,
        };
      },

      onLoadSuccess(data) {
        console.log(data)
      },

    });

  }

  flag
  display

  new(){
    this.flag = 'new';
    this.display = 'display:block';

  }



  sys_hide(){
    this.flag == '';
    this.display = 'display:none';
    $('#aaccu_table').bootstrapTable('refresh');
  }



  nuser_remark
  save(){
    // console.log(this.nusername)
    // var param={user_name:this.nusername,password:this.npassword,phone:this.nphone,id_number:this.nidNumber,sex:this.nsex,birthday:this.nbirthday,role:this.nrole}
    var user_id=getCookie('user_id')
    var t=this
    $.ajax({
      url: url() + '/User/addTheAccusationInfo',
      type: 'post',
      dataType: 'json',
      data: {userRemark:this.nuser_remark,
        userId:user_id},
      async: false,
      // tslint:disable-next-line:typedef
      success(data) {
        console.log("data = ")
        console.log(data)
        if (data==1){
          t.system_dept_table()
          t.sys_hide()
        }

      }

    });

  }

user_id;
  edit_list;
  sys_dept_edit(){
    // this.in = 'in';
    this.display = 'display:block';
    this.flag = "edit";
    var accu_id = document.getElementById('sys_dept_edit').innerHTML;
    console.log(accu_id)
    var list = ajax('/Admin/getTheAccusationInfoByAccId',{accuId:accu_id})
    console.log(list[0])
    this.edit_list=list[0]
    this.user_id=getCookie('user_id')
    console.log(this.edit_list)
  }




  take(){
    var adminId = getCookie('user_id')
    ajax("/Admin/takeTheAccusationInfoByAccId",{adminId:adminId,accuId:this.edit_list.accu_id})
    this.sys_hide()
  }

  complete(){
    ajax("/Admin/completeTheAccusationInfoByAccId",{accuId:this.edit_list.accu_id,adminRemark:this.edit_list.admin_remark})
    this.sys_hide()


  }

}
