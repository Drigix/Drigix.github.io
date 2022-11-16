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
        component: ManagerCompanyWorkersComponent
      },
      {
        path: 'manager/company-reservations',
        component: ManagerCompanyReservationsComponent
      },
      {
        path: 'manager/company-services',
        component: ManagerCompanyServicesComponent
      },
      {
        path: 'manager/company-schedule',
        component: ManagerCompanyScheduleComponent
      },
      {
        path: 'manager/company-worker-schedule',
        component: ManagerCompanyWorkerScheduleComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
