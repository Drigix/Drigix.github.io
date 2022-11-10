import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ComponentModule } from 'src/app/components/component.module';
import { InputTextModule } from 'primeng/inputtext';
import { ManagerCompanyServicesDialogComponent } from './manager-company-services-dialog.component';

@NgModule({
  declarations: [
    ManagerCompanyServicesDialogComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ButtonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    ManagerCompanyServicesDialogComponent
  ]
})
export class ManagerCompanyServicesDialogModule{}
