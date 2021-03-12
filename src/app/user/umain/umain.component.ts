import { Component, OnInit } from '@angular/core';

declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;



@Component({
  selector: 'app-umain',
  templateUrl: './umain.component.html',
  styleUrls: ['./umain.component.css']
})
export class UmainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUserName()
  }


  username;
  getUserName(){
    this.username=getCookie('user_name')
  }

}
