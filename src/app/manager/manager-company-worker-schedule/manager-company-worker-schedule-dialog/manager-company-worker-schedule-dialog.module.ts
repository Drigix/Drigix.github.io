import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ComponentModule } from 'src/app/components/component.module';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ManagerCompanyWorkerScheduleDialogComponent } from './manager-company-worker-schedule-dialog.component';

@NgModule({
  declarations: [
    ManagerCompanyWorkerScheduleDialogComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ButtonModule,
    TranslateModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    ManagerCompanyWorkerScheduleDialogComponent
  ]
})
export class ManagerCompanyWorkerScheduleDialogModule {}
