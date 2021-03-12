import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var url: any;
declare var is_success: any;
declare var ajax: any;
declare var ajax2: any;
declare var urlRequest: any;

@Component({
  selector: 'app-aroom',
  templateUrl: './aroom.component.html',
  styleUrls: ['./aroom.component.css']
})
export class AroomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.system_dept_table()
  }


  system_dept_table() {

    //表格
    const columns = [
      {field: 'room_id', title: '房间号',visible:false},
      {field: 'building', title: '栋'},
      {field: 'room_num', title: '房间号'},
      {field: 'area', title: '面积'},
      {field: 'name', title: '业主姓名'},
      {field: 'phone', title: '手机号'},



    ];

    //表格数据获取
    $('#room_table').bootstrapTable({
      contentType: 'application/x-www-form-urlencoded',
      url: url() + '/Admin/getRoomInfo',
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
    $('#room_table').bootstrapTable('refresh');

  }

nbuilding;
  nroomnum;
  narea;

  //新增用户
  save(){
    // console.log(this.nusername)
    // var param={user_name:this.nusername,password:this.npassword,phone:this.nphone,id_number:this.nidNumber,sex:this.nsex,birthday:this.nbirthday,role:this.nrole}
    var t=this
    $.ajax({
      url: url() + '/Admin/addTheRepairInfo',
      type: 'post',
      dataType: 'json',
      data: {building:this.nbuilding,
        roomNum:this.nroomnum,
        area:this.narea},
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

    // var asd=ajax2("/Admin/addUser",param,function (a,b) {
    //   console.log(a)
    // })
    // console.log(param)

  }

}
