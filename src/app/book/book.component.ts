import { Component, OnInit } from '@angular/core';
import {BookService} from "./book.service";
import {Book} from "./Book";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: any;


  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks(): void {
    this.bookService.getBooks().subscribe((response) => {
      console.warn(this.books);
      this.books = response;
    });

  }
}
