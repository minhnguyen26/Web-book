import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})

export class LogginComponent implements OnInit {
formModel={
  UserName:'',
  Password:''
}
  constructor() { }

  ngOnInit(): void {
  }

}
