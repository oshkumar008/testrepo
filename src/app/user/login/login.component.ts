import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray,Validators } from "@angular/forms";
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  page:string = 'Log In';
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  constructor(public fb:FormBuilder,public userdata : UserdataService ) { }
  arr:any = this.userdata.shwodata();
  submitted = false;
  ngOnInit(): void {
    
  }

  loginForm = this.fb.group({
    
    email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['',[Validators.required]],
  
  })  

  loginUser() {
    this.submitted = true;
    if(!this.loginForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
    } else {
      console.log(this.loginForm.value)
    }
    let body = JSON.stringify({
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    });

  }

  // Getter method to access formcontrols
  get myForm() {
    return this.loginForm.controls;
  }
  getPageName(pname){
    console.log(pname)
  }
}
