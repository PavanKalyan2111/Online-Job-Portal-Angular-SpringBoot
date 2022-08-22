import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm !: FormGroup;

  constructor(private elementRef: ElementRef, private formBuilder: FormBuilder,
    private httpClient: HttpClient, private router: Router, private toast: NgToastService ) { }
  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required],

    })
}

  login(){
    this.httpClient.get<any>("http://localhost:8080/api/users/")
    .subscribe(res =>{
       const user = res.find((a:any) =>{
        return a.username === this.loginForm.value.username &&  a.password === this.loginForm.value.password
    });
    if(user){
      // alert("Login is Successfull!!");
      this.toast.success({detail:"Success!",summary:"Login is Successfull!!",duration:3000});
      localStorage.setItem('token', "abcdefghaswedkcnjdcwirewlkejkerfweffewfwekfeqfek");
      this.loginForm.value.username=="admin" ? localStorage.setItem('userType', 'admin') : localStorage.setItem('userType', 'buyer');
      this.loginForm.reset();
        this.router.navigate(['jobs']);
    }
    else{
      // alert("User Not Found!!");
      this.toast.error({detail:"Error!",summary:"Login is Failed! User Not Found",duration:4000});
    }
  },
  error =>  this.toast.warning({detail:"Warning!", summary:"Something Went Wrong!!", duration:5000}) // alert("Something Went Wrong!!")
  );

  }
ngAfterViewInit() {
  this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'lightblue';
}
}
