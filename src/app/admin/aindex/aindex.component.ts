import { Component, OnInit } from '@angular/core';
import {nodeNameForError} from "@angular/compiler-cli/src/ngtsc/util/src/typescript";

declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;
declare var $: any;


@Component({
  selector: 'app-aindex',
  templateUrl: './aindex.component.html',
  styleUrls: ['./aindex.component.css']
})
export class AindexComponent implements OnInit {

  constructor() { }

  showid
  showidnew
  ngOnInit(): void {
    // this.show()
    this.clickshow();
    this.getUserName();

  }

  clickshow(){

    // document.getElementById("new").click();
    // var ob=x;
    // document.getElementById(ob).innerHTML=$(x).attr("id");
    // document.getElementById(ob).title=x.innerHTML.replace("","")
    document.getElementById('amain').click();
    // this.showidnew=x
    // this.show()
  }

  show(){
    // if(this.showid!=null||this.showid!=undefined){
    //   document.getElementById(this.showid).style.display='none'
    // }
    // if (this.showidnew==null||this.showidnew==undefined){
    //   this.showidnew='amain'
    // }
    // document.getElementById(this.showidnew).style.display=''
    // this.showid=this.showidnew

  }

  logout(){
    clearCookie();
    // window.localStorage.setItem('login', JSON.stringify(data.data));
    window.location.href = '/login';
  }

username
  role
  getUserName(){
    this.username=getCookie('user_name')
    this.role=getCookie('role')
    if(this.username==null||this.username==undefined||this.username==''){
      this.logout()
    }
    if(this.role!= 0){
      alert('权限不足')

    }
  }

}
