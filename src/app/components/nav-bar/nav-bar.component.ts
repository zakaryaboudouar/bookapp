import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }
  logout() {
    this.keycloakService.logout();
  }
}
