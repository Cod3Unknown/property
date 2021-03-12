import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var url: any;
declare var is_success: any;
declare var ajax: any;
declare var ajax2: any;
// declare var ajax3: any;
// declare var ajax5: any;
declare var urlRequest: any;

@Component({
  selector: 'app-ainfo',
  templateUrl: './ainfo.component.html',
  styleUrls: ['./ainfo.component.css']
})
export class AinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.system_dept_table()
  }


  system_dept_table() {

    //表格
    const columns = [
      {field: 'user_id', title: '用户ID',visible:false},
      {field: 'roler', title: '身份'},
      {field: 'user_name', title: '用户名'},
      {field: 'name', title: '业主姓名'},
      {field: 'building', title: '栋'},
      {field: 'room_num', title: '房间号'},
      {field: 'sex', title: '性别'},
      {field: 'phone', title: '手机号'},
      {field: 'id_number', title: '身份证号'},
      {field: 'birthday', title: '生日'},
      {field: 'index', title: '操作', align: 'center', width: 150, switchable: false, //  操作
        // tslint:disable-next-line:typedef
        formatter(value, row, index, field){
          let result = '';
          result += '<button type=\'button\' onclick=\'sys_dept_edit(' + '"' + row.user_id + '"' + ')\' class=\'btn btn-primary btn-sm q1\'>' +
            '<span class=\'glyphicon glyphicon-edit\'></span>' +
            '</button>\n&nbsp;';
          result += '<button type=\'button\' onclick=\'sys_dept_del(' + '"' + row.user_id + '"' + ')\' class=\'btn btn-danger btn-sm q2\'>' +
            '<span class=\'glyphicon glyphicon-remove\'></span>' +
            '</button>\n&nbsp;';
          return result;
        }
      }


    ];

    //表格数据获取
    $('#user_table').bootstrapTable({
      contentType: 'application/x-www-form-urlencoded',
      url: url() + '/Admin/getAllUser',
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
          rows: data.result,
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
    var t=this
    this.flag == '';
    this.display = 'display:none';
    $('#user_table').bootstrapTable('refresh');

  }

  nusername;
  npassword;
  nphone;
  nidNumber;
  nsex;
  nbirthday;
  nrole;
  nname;


  //新增用户
  save(){
    console.log(this.nusername)
    var param={userName:this.nusername,password:this.npassword,phone:this.nphone,idNumber:this.nidNumber,sex:this.nsex,birthday:this.nbirthday,role:this.nrole}
      var t=this
    $.ajax({
      url: url() + '/Admin/addUser',
      type: 'post',
      dataType: 'json',
      data: {userName:this.nusername,
        password:this.npassword,
        phone:this.nphone,
        idNumber:this.nidNumber,
        sex:this.nsex,
        birthday:this.nbirthday,
        role:this.nrole,name:this.nname},
      async: false,
      // tslint:disable-next-line:typedef
      success(data) {
        console.log("data = ")
        console.log(data)
        if (data==1){
          t.sys_hide()
        }

      }

    });

    // var asd=ajax2("/Admin/addUser",param,function (a,b) {
    //   console.log(a)
    // })
    console.log(param)

  }

  edit_list
  sys_dept_edit(){
    // this.in = 'in';
    this.display = 'display:block';
    this.flag = "edit";
    var user_id = document.getElementById('sys_dept_edit').innerHTML;
    var list = ajax('/User/getUserInfoById',{user_id:user_id})
    console.log(list[0])
    // this.edit_list.birthday = list[0].birthday
    // this.edit_list.id = list[0].id
    // this.edit_list.idNumber = list[0].id_number
    // this.edit_list.name = list[0].name
    // this.edit_list.password = list[0].password
    // this.edit_list.phone = list[0].phone
    // this.edit_list.role = list[0].role
    // this.edit_list.sex = list[0].sex
    // this.edit_list.userId = list[0].user_id
    // this.edit_list.userName = list[0].user_name
    this.edit_list={birthday:list[0].birthday,
                    id:list[0].id,
                    idNumber:list[0].id_number,
                    name:list[0].name,
                    password:list[0].password,
                    phone:list[0].phone,
                    role:list[0].role,
                    sex:list[0].sex,
                    userId:list[0].user_id,
                    userName:list[0].user_name}

    console.log(this.edit_list)
  }

  edit(){
    var param =this.edit_list
    ajax('/User/editUserInfoById',{birthday:param.birthday,
                                    id:param.id,
                                    idNumber:param.idNumber,
                                    name:param.name,
                                    password:param.password,
                                    phone:param.phone,
                                    role:param.role,
                                    sex:param.sex,
                                    userId:param.userId,
                                    userName:param.userName});
    console.log(this.edit_list)
    this.sys_hide()
  }

  del(){
    var userId = document.getElementById('sys_dept_del').innerHTML;
    console.log(userId)
    ajax('/User/deleteUserInfoById', {userId: userId})
    this.sys_hide()
  }

}
