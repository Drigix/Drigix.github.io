import { Injectable } from '@angular/core';
import { USER_PERMISSIONS } from '../authority.component';
import { GlobalPermission } from '../permission.model';

@Injectable({providedIn: 'root'})
export class PermissionService {

  private companyWorkersPermission = GlobalPermission.EMPLOYEES_EDIT;
  private companyServicePermission = GlobalPermission.SERVICES_EDIT;
  private companyReservationsPermission = GlobalPermission.RESERVATIONS_EDIT;
  private companySchedulesPermission = GlobalPermission.SCHEDULES_EDIT;

  constructor() { }

  checkWorkersPermission(): boolean {
    return USER_PERMISSIONS.includes(this.companyWorkersPermission);
  }

  checkSerivcePermission(): boolean {
    return USER_PERMISSIONS.includes(this.companyServicePermission);
  }

  checkReservationsPermission(): boolean {
    return USER_PERMISSIONS.includes(this.companyReservationsPermission);
  }

  checkSchedulesPermission(): boolean {
    return USER_PERMISSIONS.includes(this.companySchedulesPermission);
  }
}
