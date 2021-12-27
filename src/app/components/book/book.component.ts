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
  book?:Book;
  selected:boolean=false;

  constructor(private bookService: BookService ) {
  }

  ngOnInit(): void {
  }

  onGetlAllBooks() {
    this.books$ = this.bookService.getAllBooks()
        .pipe(
          map(data=>({dataState:DataStateEnum.LOADED,data:data})),
          startWith({dataState:DataStateEnum.LOADING}),
          catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
    );
  }
  selectToUpdate(book:Book){
    this.book=book;
    this.selected=true;
  }
  onDelete(id:any){
    let v=confirm("are you sure !")
    if (v)
    this.bookService.delete(id).subscribe(
      data=>{
        this.onGetlAllBooks();
      }
    )
  }

  onUpdate(book: Book) {
    let v=confirm("are you sure !")
    if (v)
      this.bookService.update(book).subscribe((response:Book) => {
        console.log('update Book successfully!'+ response);
      });
    this.onGetlAllBooks();
  }
}
