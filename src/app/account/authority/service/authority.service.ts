import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { head } from 'lodash';
import { Observable } from 'rxjs';
import { webSocket } from "rxjs/webSocket";
import { User } from 'src/app/entities/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorityService {

  private resourceUrl = 'https://reservio.azurewebsites.net';

  LOGIN_URL = this.resourceUrl + '/Account/sign-in';

  SIGNUP_URL = this.resourceUrl + '/Account/sign-up';

  constructor(private http: HttpClient) {}


  login(email: string, password: string): Observable<string> {
    return this.http.post(this.LOGIN_URL, { email, password }, {responseType: 'text'});
  }

  // signup(firstName: string, lastName: string, email: string, password: string, phone: string, birthDay: string, role: string): Observable<any> {
  //   return this.http.post('https://reservio.azurewebsites.net/Account/sign-up', { firstName, lastName, email, password, phone, birthDay, role});
  // }

  signup(user: User): Observable<any> {
    return this.http.post(this.SIGNUP_URL, user);
  }

  checkJwt(): boolean {
    const jwt = localStorage.getItem('jwt');
    return jwt ? true : false;
  }


}
