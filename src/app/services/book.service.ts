import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "../model/Book";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class BookService {

  private apiServcerUrl=environment.host;

  constructor(private http:HttpClient) { }

  public getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiServcerUrl}/books`);
  }


  getBook(id: any): Observable<any> {
    return this.http.get(`${this.apiServcerUrl}/${id}`);
  }

  create(data: Book): Observable<Book> {
    return this.http.post(`${this.apiServcerUrl}/books`, data);
  }

  update(book:Book): Observable<Book> {
    console.log(this.apiServcerUrl+"/books/"+book.id, book);

    return this.http.put(this.apiServcerUrl+"/books/"+book.id, book);
  }

  delete(id: any): Observable<any> {
    console.log("service: " + id)
    console.log("URl : " + this.apiServcerUrl+"/books/"+id);
    return this.http.delete(this.apiServcerUrl+"/books/"+id);
  }
}
