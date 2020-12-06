import { Observable } from 'rxjs/internal/observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Book {
  id: number,
  name: string,
  avatar: string,
  giatien: number
}
const URL = 'https://5fca22e93c1c220016441c52.mockapi.io/book';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private HttpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getThongtinsach().subscribe((data) => {
      // Set data for books
      this.books = data;
    })
  }
  getThongtinsach(): Observable<any> {
    return this.HttpClient.get(URL);
  }
}
