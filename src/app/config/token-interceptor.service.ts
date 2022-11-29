import { AuthorityService } from './../account/authority/service/authority.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authorityService: AuthorityService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authorityService.getAccessToken();
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwt}`),
    });
    return next.handle(modifiedReq);
  }
}
