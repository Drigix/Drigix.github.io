import jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { head } from 'lodash';
import { Observable } from 'rxjs';
import { webSocket } from "rxjs/webSocket";
import { User } from 'src/app/entities/user/user.model';
import { Permission } from 'src/app/entities/permission/permission.model';

interface Jwt {
  accessToken?: string;
  role?: string;
  permissions?: string [];
}

export type EntityResponseType = HttpResponse<User>;
export type EntityArrayResponseType = HttpResponse<User[]>;

export type PermissionEntityResponseType = HttpResponse<Permission>;
export type PermissionEntityArrayResponseType = HttpResponse<Permission[]>;

@Injectable({
  providedIn: 'root',
})
export class AuthorityService {

  private resourceUrl = 'https://reservio.azurewebsites.net';
  LOGIN_URL = this.resourceUrl + '/Account/sign-in';
  SIGNUP_URL = this.resourceUrl + '/Account/sign-up';
  CHANGE_PASSWORD_URL = this.resourceUrl + '/Account/password-change';
  RESET_PASSWORD_URL = this.resourceUrl + '/Account/password-reset';
  ACCOUNT_DETAILS_URL = this.resourceUrl + '/Account/details';
  ALL_PERMISSIONS_URL = this.resourceUrl + '/Account/all-permissions'
  CHANGE_PERMISSIONS_URL = this.resourceUrl + '/Account/permissions';

  jwt: Jwt | null = null;
  decodeAccessToken: { [key: string]: string } = {};

  headers: HttpHeaders | null = null;

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<string> {
    return this.http.post(this.LOGIN_URL, { email, password }, {responseType: 'text'});
  }

  loguot(): void {
    localStorage.setItem('jwt', '');
    window.location.replace('');
  }

  signup(user: User): Observable<any> {
    return this.http.post(this.SIGNUP_URL, user);
  }

  getUserData(): Observable<EntityResponseType> {
    return this.http.get<User>(this.ACCOUNT_DETAILS_URL, { observe: 'response'});
  }

  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.put(this.CHANGE_PASSWORD_URL, {currentPassword, newPassword}, {headers: this.headers!});
  }

  resetPassword(email: string): Observable<any> {
    return this.http.put(this.RESET_PASSWORD_URL, {email});
  }

  changeUserData(user: User): Observable<any> {
    return this.http.put(this.ACCOUNT_DETAILS_URL, user, {headers: this.headers!});
  }

  getAllPermisions(): Observable<PermissionEntityArrayResponseType> {
    return this.http.get<Permission[]>(this.ALL_PERMISSIONS_URL, {observe: 'response'})
  }

  changePermissions(employeeId: string, permissions: string[]): Observable<any> {
    return this.http.put(`${this.CHANGE_PERMISSIONS_URL}/${employeeId}`, {permissions});
  }

  checkIsEmployeed(): boolean {
    const jsonJwt = localStorage.getItem('jwt');
    if (jsonJwt) {
      this.jwt = JSON.parse(jsonJwt!);
      this.decodeAccessToken = jwt_decode(this.jwt!.accessToken!);
    }
    if (this.decodeAccessToken['isEmployeed'].toLocaleLowerCase() === 'false') {
      return false;
    } else if (this.decodeAccessToken['isEmployeed'].toLocaleLowerCase() === 'true') {
      return true;
    } else {
      return false;
    }
  }

  getAccessToken(): string {
    const jsonJwt = localStorage.getItem('jwt');
    if (jsonJwt) {
      this.jwt = JSON.parse(jsonJwt!);
      this.decodeAccessToken = jwt_decode(this.jwt!.accessToken!);
    }
    return this.jwt ? this.jwt!.accessToken! : '';
  }

  checkJwt(): boolean {
    const jsonJwt = localStorage.getItem('jwt');
    if (jsonJwt) {
      this.jwt = JSON.parse(jsonJwt!);
    }
    return this.jwt ? true : false;
  }
}
