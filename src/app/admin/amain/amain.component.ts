import { Component, OnInit } from '@angular/core';

declare var clearCookie: any;
declare var setCookie: any;
declare var getCookie: any;


@Component({
  selector: 'app-amain',
  templateUrl: './amain.component.html',
  styleUrls: ['./amain.component.css']
})
export class AmainComponent implements OnInit {

  constructor() { }
username
  ngOnInit(): void {
    this.getUserName()
  }


  getUserName(){
    this.username=getCookie('user_name')
  }

}
