import { Component, OnInit } from '@angular/core';
import {Store,State} from "@ngrx/store";
import {Observable, from} from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { UserState } from 'src/app/_reducers/user.reducer';
import { getLogin } from 'src/app/_reducers';
import {User} from 'src/app/_models/user';
import * as userLogins from 'src/app/_action/userAction';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent{
  dataUser:any=[]
  constructor(private _store:Store<UserState>,private router:Router){
      // this._store.select(getLogin).subscribe(item=>{
      //      this.dataUser = item;
      //      console.log(item)
      // });
  }
  logout = ()=>{
      this._store.dispatch(new userLogins.LogoutLoginAction);
      this.router.navigate(['/login']);
  }
}
