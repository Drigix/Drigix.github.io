import { Component, OnInit } from "@angular/core";
import jwt_decode from 'jwt-decode';
import { AuthorityService } from "./service/authority.service";

export var isUserLogin: boolean;
export var USER_ROLE: any;
export var USER_PERMISSIONS: any;

@Component({
  selector: 'app-authority-component',
  template: ''
})
export class AuthorityComponent implements OnInit {

  decodedToken: { [key: string]: string } = {};

  constructor(private authorityService: AuthorityService) {}

  ngOnInit(): void {

  }

  checkIsUserLogin(): void {
    isUserLogin = this.authorityService.checkJwt();
    if (isUserLogin) {
      this.decodeJwtToken();
    }
  }

  decodeJwtToken(): void {
    const token = localStorage.getItem('jwt');
    this.decodedToken = jwt_decode(token!);
    USER_PERMISSIONS = this.decodedToken['permissions'];
    USER_ROLE = this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }

}
