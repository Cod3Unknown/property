import { Component, OnInit } from '@angular/core';

declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;
declare var $: any;

@Component({
  selector: 'app-uindex',
  templateUrl: './uindex.component.html',
  styleUrls: ['./uindex.component.css']
})
export class UindexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUserName()
    this.clickshow()
  }

  clickshow(){
    document.getElementById('umain').click();
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
  getUserName(){
    this.username=getCookie('user_name')
    console.log("11111111111111111")
    console.log(this.username)
    if(this.username==null||this.username==undefined||this.username==''){
      this.logout()
    }
  }

}
