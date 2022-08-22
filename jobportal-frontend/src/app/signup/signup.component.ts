import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;


  signupForm !: FormGroup;

  constructor(private elementRef: ElementRef, private formBuilder:FormBuilder,
     private httpClient: HttpClient, private router: Router, private toast:NgToastService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username : ['', Validators.required],
      email : ['', Validators.required],
      mobile : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  signup(){
    this.httpClient.post<any>("http://localhost:8080/api/user/",this.signupForm.value)
    .subscribe(res => {
     // alert("Signup is Successfull");
     this.toast.success({detail:"Successs!",summary:"Signup is Successfull!!!",duration:5000});
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'lightblue';
  }
}
