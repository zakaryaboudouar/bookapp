import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) {
    this.loginFormGroup = new FormGroup({
      fullName: new FormControl( '', Validators.required),
      userName: new FormControl(  '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]),
      email: new FormControl('', [
        Validators.required
        , Validators.email]),
      password: new FormControl(
        '', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]),
      confirmPassword:new FormControl('', Validators.required),
      acceptTerms: new FormControl('', Validators.requiredTrue)
    });
  }

  ngOnInit(): void {

  }

  get fullName(){
    return this.loginFormGroup?.get('fullName');
  }


  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginFormGroup?.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginFormGroup?.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.loginFormGroup?.reset();
  }
}
