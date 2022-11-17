import { isUserLogin, USER_ROLE } from './../authority.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserRouteAccessService implements CanActivate {

  roleAuthority: any[] = [];

  constructor(private router: Router) {}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.accountService.identity().pipe(
  //     map(account => {
  //       if (account) {
  //         const authorities = route.data['authorities'];

  //         if (!authorities || authorities.length === 0 || this.accountService.hasAnyAuthority(authorities)) {
  //           return true;
  //         }

  //         if (isDevMode()) {
  //           // eslint-disable-next-line no-console
  //           console.error('User has not any of required authorities: ', authorities);
  //         }
  //         this.router.navigate(['accessdenied']);
  //         return false;
  //       }

  //       this.stateStorageService.storeUrl(state.url);
  //       this.router.navigate(['/login']);
  //       return false;
  //     })
  //   );
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(isUserLogin) {
      this.roleAuthority = route.data['authorities'];
      return this.roleAuthority.includes(USER_ROLE);
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
