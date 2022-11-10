import { ConfirmationService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ManagerCompanyWorkersComponent } from "./manager-company-workers.component";
import { ComponentModule } from 'src/app/components/component.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    ManagerCompanyWorkersComponent
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
    ManagerCompanyWorkersComponent
  ]
})
export class ManagerCompanyWorkersModule{}
