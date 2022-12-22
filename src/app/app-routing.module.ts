import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./components/book/book.component";
import {LoginComponent} from "./components/login/login.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import { PostsComponent } from './posts/posts.component';
import { GithubfolowrsComponent } from './githubfolowrs/githubfolowrs.component';

const routes:Routes = [
  {path: 'books',component:BookComponent},
  {path: 'login',component:LoginComponent},
  {path:'addBook',component:AddBookComponent},
  {path:'posts',component:PostsComponent},
  {path:'github',component:GithubfolowrsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
