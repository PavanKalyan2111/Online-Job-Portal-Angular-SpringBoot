import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {NgToastService} from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router,
    private toast:NgToastService) { }

  canActivate() {
    if (this.auth.IsLoggedIn()) {
      return true;
      
    }
   // alert("You Aren't Logged in!");
   this.toast.info({detail:"Information!", summary:"You Aren't Logged In!!!", duration:5000})
    this.router.navigate(['login'])
    return false;
  }

}
