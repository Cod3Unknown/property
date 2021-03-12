import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var url: any;
declare var is_success: any;
declare var ajax: any;
declare var ajax2: any;
// declare var ajax3: any;
// declare var ajax5: any;
declare var urlRequest: any;
declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;

@Component({
  selector: 'app-uinfo',
  templateUrl: './uinfo.component.html',
  styleUrls: ['./uinfo.component.css']
})
export class UinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.system_dept_table()
  }

  system_dept_table() {
    var user_id=getCookie('user_id')
    //表格
    const columns = [
      {field: 'user_id', title: '用户ID',visible:false},
      {field: 'user_name', title: '用户名'},
      {field: 'name', title: '业主姓名'},
      {field: 'building', title: '栋'},
      {field: 'room_num', title: '房间号'},
      {field: 'sex', title: '性别'},
      {field: 'phone', title: '手机号'},
      {field: 'id_number', title: '身份证号'},
      {field: 'birthday', title: '生日'},

    ];

    //表格数据获取
    $('#uuser_table').bootstrapTable({
      contentType: 'application/x-www-form-urlencoded',
      url: url() + '/User/getUserInfoById',
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
        params.user_id = user_id;
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


}
