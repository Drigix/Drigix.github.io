import { ConfirmationService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ComponentModule } from 'src/app/components/component.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ManagerCompanyServicesComponent } from './manager-company-services.component';

@NgModule({
  declarations: [
    ManagerCompanyServicesComponent
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
    ManagerCompanyServicesComponent
  ]
})
export class ManagerCompanyServicesModule{}
