import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Store,State} from "@ngrx/store";
import {Observable, from} from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { UserState } from 'src/app/_reducers/user.reducer';
import { UserService } from 'src/app/_servieces/user.servieces';
import * as userLogins from 'src/app/_action/userAction';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Box Login"
  profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });
  isCheckLogin:boolean = false;
  dataLogin = [
      {
          "id":1,
          "name":"Tran Cong Due",
          "email":"trancongdue.com@gmail.com",
          "password":"12345678",
          "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
      },
      {
          "id":2,
          "name":"SKIPPERHOA",
          "email":"skipperhoa2021@gmail.com",
          "password":"hoa123",
          "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
      }
  ]

  constructor(private _store:Store<UserState>,private router:Router,private _userService:UserService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
//     this._userService.login(this.profileForm.value).subscribe(item=>{
//       if(item.success>0){
//            console.log("Success login");
//            this._store.dispatch(new userLogins.CheckLoginAction({
//                id:item.data[0].id,
//                name:item.data[0].name,
//                email:item.data[0].email,
//                password:item.data[0].password,
//                remember_token:item.data[0].remember_token
//             }));
//            this.router.navigate(['/detail']);
//       }
//  })

     console.warn(this.profileForm.value['email']);
     this.dataLogin.filter(item=>{
         if(item.email==this.profileForm.value['email'] && item.password==this.profileForm.value['password']){
             this.isCheckLogin=true;
             this._store.dispatch(new userLogins.CheckLoginAction({
                 id:item.id,
                 name:item.name,
                 email:item.email,
                 password:item.password,
                 remember_token:item.remember_token
              }));
         }
     });
     if(this.isCheckLogin){
          alert("Success login");
          this.router.navigate(['/detail']);
     }
     else{
         alert("Fail login");
     }
  }

}
