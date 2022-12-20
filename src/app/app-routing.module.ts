import { Authority } from './account/authority/authority.model';
import { UserRouteAccessService } from './account/authority/service/user-role-access.service';
import { ManagerCompanyWorkerScheduleComponent } from './manager/manager-company-worker-schedule/manager-company-worker-schedule.component';
import { ManagerCompanyReservationsComponent } from './manager/manager-company-reservations/manager-company-reservations.component';
import { ManagerCompanyWorkersComponent } from './manager/manager-company-workers/manager-company-workers.component';
import { ManagerCompanyScheduleComponent } from './manager/manager-company-schedule/manager-company-schedulecomponent';
import { CompanyPageComponent } from './pages/company/company-page.component';
import { ServicesPageComponent } from './pages/services/services-page.component';
import { AboutusPageComponent } from './pages/aboutus/aboutus-page.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { ManagerCompanyServicesComponent } from './manager/manager-company-services/manager-company-services.component';
import { GlobalPermission } from './account/authority/permission.model';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
        //loadChildren: () => import('./pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'aboutus',
        component: AboutusPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'user-profile',
        data: {
          authorities: [Authority.CLIENT, Authority.EMPLOYEE, Authority.OWNER]
        },
        canActivate: [UserRouteAccessService],
        component: UserProfileComponent
      },
      {
        path: 'services/:type',
        component: ServicesPageComponent
      },
      {
        path: 'company/:companyName',
        component: CompanyPageComponent
      },
      {
        path: 'manager/company-workers',
        data: {
          authorities: [Authority.OWNER, Authority.EMPLOYEE],
          permissions: [
            GlobalPermission.EMPLOYEES_EDIT
          ]
        },
        canActivate: [UserRouteAccessService],
        component: ManagerCompanyWorkersComponent
      },
      {
        path: 'manager/company-reservations',
        data: {
          authorities: [Authority.OWNER, Authority.EMPLOYEE],
          permissions: [
            GlobalPermission.RESERVATIONS_READ
          ]
        },
        canActivate: [UserRouteAccessService],
        component: ManagerCompanyReservationsComponent
      },
      {
        path: 'manager/company-services',
        data: {
          authorities: [Authority.OWNER, Authority.EMPLOYEE],
          permissions: [
            GlobalPermission.SERVICES_READ
          ]
        },
        canActivate: [UserRouteAccessService],
        component: ManagerCompanyServicesComponent
      },
      {
        path: 'manager/company-schedule',
        data: {
          authorities: [Authority.OWNER, Authority.EMPLOYEE],
          permissions: [
            GlobalPermission.SCHEDULES_READ
          ]
        },
        canActivate: [UserRouteAccessService],
        component: ManagerCompanyScheduleComponent
      },
      {
        path: 'manager/company-worker-schedule',
        data: {
          authorities: [Authority.OWNER, Authority.EMPLOYEE],
          permissions: [
            GlobalPermission.SCHEDULES_READ
          ]
        },
        canActivate: [UserRouteAccessService],
        component: ManagerCompanyWorkerScheduleComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
