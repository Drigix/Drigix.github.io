import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ComponentModule } from 'src/app/components/component.module';
import { InputTextModule } from 'primeng/inputtext';
import { ManagerCompanyReservationsDialogComponent } from './manager-company-reservations-dialog.component';

@NgModule({
  declarations: [
    ManagerCompanyReservationsDialogComponent
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
    ManagerCompanyReservationsDialogComponent
  ]
})
export class ManagerCompanyReservationsDialogModule{}
