import { EditCompanyDialogModule } from './manager-home.component/edit-company-dialog/edit-company-dialog.module';
import { ManagerCompanyServicesDialogModule } from './manager-company-services/manager-company-services-dialog/manager-company-services-dialog.module';
import { ManagerCompanyServicesModule } from './manager-company-services/manager-company-services.module';
import { ManagerCompanyReservationsModule } from './manager-company-reservations/manager-company-reservations.module';
import { ManagerCompanyScheduleModule } from './manager-company-schedule/manager-company-schedule.module';
import { ManagerCompanyWorkersModule } from './manager-company-workers/manager-company-workers.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ManagerHomeModule } from './manager-home.component/manager-home.module';
import { ManagerCompanyWorkersDialogModule } from './manager-company-workers/manager-company-workers-dialog/manager-company-workers-dialog.module';
import { ManagerCompanyReservationsDialogModule } from './manager-company-reservations/manager-company-reservations-dialog/manager-company-reservations-dialog.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ],
  exports: [
    ManagerHomeModule,
    ManagerCompanyWorkersModule,
    ManagerCompanyScheduleModule,
    ManagerCompanyWorkersDialogModule,
    ManagerCompanyReservationsModule,
    ManagerCompanyReservationsDialogModule,
    ManagerCompanyServicesModule,
    ManagerCompanyServicesDialogModule,
    EditCompanyDialogModule
  ]
})
export class ManagerModule{}
