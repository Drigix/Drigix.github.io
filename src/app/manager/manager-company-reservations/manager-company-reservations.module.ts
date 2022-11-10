import { ConfirmationService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ComponentModule } from 'src/app/components/component.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ManagerCompanyReservationsComponent } from './manager-company-reservations.component';

@NgModule({
  declarations: [
    ManagerCompanyReservationsComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ButtonModule,
    TranslateModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService
  ],
  exports: [
    ManagerCompanyReservationsComponent
  ]
})
export class ManagerCompanyReservationsModule{}
