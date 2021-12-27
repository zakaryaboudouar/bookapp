import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book=new Book();
  submitted = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {

  }

  saveBook() {
    this.bookService.create(this.book).subscribe((response:Book) => {
      console.log('Created new item successfully!'+ response);
      this.submitted = true;
    });
  }

  newBook(){
    this.book=new Book();
    this.submitted = false;
  }
}


