import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./components/book/book.component";
import {LoginComponent} from "./components/login/login.component";

const routes:Routes = [
  {path: 'books',component:BookComponent},
  {path: 'login',component:LoginComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
