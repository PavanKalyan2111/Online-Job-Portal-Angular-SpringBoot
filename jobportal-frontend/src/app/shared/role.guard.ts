import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private toast: NgToastService){}

  canActivate(){
    let Role = localStorage.getItem("userType");
    if(Role === "admin"){
      return true;
    }
   // alert("You Don't have Admin Rights!");
   this.toast.warning({detail:"Warning!",summary:"You Don't have Admin Rights!!",duration:5000})
    return false;
  }
  
}
