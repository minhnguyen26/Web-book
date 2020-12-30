import { Injectable } from '@angular/core';
import  { HttpClient }from "@angular/common/http";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI ='http://localhost:50036/api';

  formModel = this.fb.group({
      UserName:['',Validators.required],
      Email:['',Validators.email],
      FullName:[''],
      Passwords: this.fb.group({
          Password:['',[Validators.required,Validators.minLength(4)]],
          ConfirmPassword:['',Validators.required]
        },{Validators: this.comparePasswords}),
      PhoneNumber:[''],
      Address:['']  
    });
    comparePasswords(fb:FormGroup){
      let confirmpPswrdCtrl = fb.get('ConfirmPassword');

      // if(confirmpPswrdCtrl?.errors == null || 'passwordMismatch' in confirmpPswrdCtrl.errors){
      //   if(fb.get('Password').value != confirmpPswrdCtrl?.value)
      //     confirmpPswrdCtrl?.setErrors({passwordMismatch:true});
      //     else
      //     confirmpPswrdCtrl?.setErrors(null);
      // }
    }
    register(){
      var body = {
        UserName: this.formModel.value.UserName,
        Email: this.formModel.value.Email,
        FullName: this.formModel.value.FullName,
        Password: this.formModel.value.Passwords.Password,
        PhoneNumber:this.formModel.value.PhoneNumber,
        Address:this.formModel.value.Address
      };
      return this.http.post(this.BaseURI+'/ApplicationUser/Register',body);
    }
  }

