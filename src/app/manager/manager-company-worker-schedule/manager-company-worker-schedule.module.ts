import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ManagerCompanyWorkerScheduleComponent } from "./manager-company-worker-schedule.component";
import { ComponentModule } from 'src/app/components/component.module';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    ManagerCompanyWorkerScheduleComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ButtonModule,
    TranslateModule,
    ConfirmDialogModule
  ],
  exports: [
    ManagerCompanyWorkerScheduleComponent
  ]
})
export class ManagerCompanyWorkerScheduleModule {}
