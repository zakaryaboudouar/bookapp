import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GithubfolowrsService {

  
  private apiServcerUrl=environment.apiGithub;

  constructor(private http:HttpClient) { }

  public getAll():Observable<any[]>{
    return this.http.get<any[]>(this.apiServcerUrl);
  }

 /*
  create(data: any): Observable<any> {
    return this.http.post(`${this.apiServcerUrl}/books`, data);
  }

  update(book:any): Observable<any> {
    console.log(this.apiServcerUrl+"/books/"+book.id, book);

    return this.http.put(this.apiServcerUrl+"/books/"+book.id, book);
  }

  delete(id: any): Observable<any> {
    console.log("service: " + id)
    console.log("URl : " + this.apiServcerUrl+"/books/"+id);
    return this.http.delete(this.apiServcerUrl+"/books/"+id);
  }*/
  
}

