import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Book} from "../../model/Book";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum} from "../../state/book.state";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$:Observable<AppDataState<Book[]>>|null=null;

  readonly dataStateEnum: DataStateEnum | undefined;



  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  onGetlAllBooks() {
    this.books$ =
      this.bookService.getAllBooks()
        .pipe(
          map(data=> {
            console.log(data);
            return ({dataState:DataStateEnum.LOADED,data:data})
          }),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }




}
