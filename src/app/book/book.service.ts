import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Book} from "./Book";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServcerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getBooks():Observable<Book>{
    return this.http.get<Book>(`${this.apiServcerUrl}/book/all`);
  }


}
