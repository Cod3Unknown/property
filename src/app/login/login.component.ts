import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


declare var ajax: any;
declare var $: any;
declare var url: any;
declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm = {
    username: '',
    password: '',
    role:''

  };

  username;
  password;
  role;

  constructor() {
  }

  ngOnInit(): void {
  }


  toLogin() {
    // 确认数据已经进行了双向绑定
    console.log('表单提交');
    console.log(this.signinForm);
    var t = this;

    $.ajax({
      url: 'http://localhost:8000/Login/login',
      type: 'post',
      dataType: 'json',
      data: {username: this.signinForm.username, password: this.signinForm.password},
      async: false,
      // tslint:disable-next-line:typedef
      success(data) {
        // tslint:disable-next-line:triple-equals
        if (data.code == 200) {
          console.log(data);
          console.log(data.data);
          if (data.data == null) {
            alert('账号或密码错误');
          } else {
            alert('登录成功');
            console.log(data.data[0].role)
            setCookie('user_id', data.data[0].user_id, 2);
            setCookie('role', data.data[0].role, 2);
            setCookie('user_name', data.data[0].user_name, 2);
            if(data.data[0].role==1){
              window.localStorage.setItem('login', JSON.stringify(data.data));
              window.location.href = '/uindex';
            }else if(data.data[0].role==0){
              window.localStorage.setItem('login', JSON.stringify(data.data));
              window.location.href = '/aindex';
            }else {
              alert("无效账号")
            }

          }
        } else {
          alert('登录失败,');
        }

      }

    });

  }

  changerole(x){
    if (x==1){
      this.role=1
    }else {
      this.role=0
    }
    console.log(this.role)
  }
}
