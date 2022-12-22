import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts$?:Observable<Post[]>;
  
  posts?:Post[] = [];

  post?:Post = {
    userId:0,
    id:0,
    title:'',
    body:''
  };
  
  status:boolean=true;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.getPosts();
    this.status = true;
  }

  getPosts(){
        //this.posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(response=>{
          this.posts = response; 
          
        });
  }


  intiliser(){

    this.post = {
      userId:0,
      id:0,
      title:'',
      body:''
    };
    this.status=true;
  }
  onCreate(post:Post){
    this.http.post('https://jsonplaceholder.typicode.com/posts/',post).subscribe(response=>{
    console.log('this from post ' + response.toString);
  })
  this.intiliser();
  }

  onUpdate(id:number){
    this.http.put('https://jsonplaceholder.typicode.com/posts/'+id,this.post).subscribe(response=>{
    console.log(response);
  })
  this.intiliser();
  }

  onDelete(post:Post){
    console.log(post);
    this.http.delete('https://jsonplaceholder.typicode.com/posts/'+post.id).subscribe(response=>{
      this.posts?.splice(this.posts.indexOf(post),1);
  })
  this.intiliser();
  }

onEdit(post:Post){
  this.post=post;
  this.status= false;
}
}
