import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  logout(){
    this.toast.success({detail:'Logged out!',summary:"You have Successfully Logged out!!!",duration:3000})
    this.router.navigate(['login']);
    localStorage.clear();//to entirely clear local storage
  }

}
