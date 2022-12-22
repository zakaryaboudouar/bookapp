import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddBookComponent } from './components/add-book/add-book.component';
import { PostsComponent } from './posts/posts.component';
import { GithubfolowrsComponent } from './githubfolowrs/githubfolowrs.component';
import { GithubfolowrsService } from './services/githubfolowrs.service';
import { BookService } from './services/book.service';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080' + '/auth',
        realm: 'FirstRealm',
        clientId: 'zakarya'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavBarComponent,
    LoginComponent,
    AddBookComponent,
    PostsComponent,
    GithubfolowrsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule
],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  },
    Title,GithubfolowrsService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
