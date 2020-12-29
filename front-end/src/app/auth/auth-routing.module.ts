import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {DetailComponent} from './components/detail/detail.component';

const routes: Routes = [
  { path:'login', component:LoginComponent },
  { path:'detail', component:DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
