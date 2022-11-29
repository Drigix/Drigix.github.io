import { AuthorityService } from './../account/authority/service/authority.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { isUserLogin } from '../account/authority/authority.component';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authorityService: AuthorityService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authorityService.getAccessToken();
    const modifiedReq =  isUserLogin ?
    req.clone({headers: req.headers.set('Authorization', `Bearer ${jwt}`),}) :
    req.clone();
    return next.handle(modifiedReq);
  }
}
