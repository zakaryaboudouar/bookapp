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
}
