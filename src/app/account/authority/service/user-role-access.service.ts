import { isUserLogin, USER_PERMISSIONS, USER_ROLE } from './../authority.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Location } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class UserRouteAccessService implements CanActivate {

  roleAuthority: any[] = [];
  permissionsAuthority: any[] = [];

  constructor(private router: Router, private _location: Location) {}

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
      this.permissionsAuthority = route.data['permissions'];
      var isCheck = false;
      console.log(USER_PERMISSIONS);
      if(this.permissionsAuthority === null || this.permissionsAuthority === undefined) {
        if(this.roleAuthority.includes(USER_ROLE)) {
          isCheck = true;
        }
      }else if(this.roleAuthority.includes(USER_ROLE)) {
        USER_PERMISSIONS.forEach((element: string) => {
          if(this.permissionsAuthority.includes(element)) {
            isCheck = true;
          }
        });
      }
      return isCheck;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
