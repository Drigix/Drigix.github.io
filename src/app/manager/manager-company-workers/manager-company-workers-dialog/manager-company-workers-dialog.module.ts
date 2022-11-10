import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ComponentModule } from 'src/app/components/component.module';
import { ManagerCompanyWorkersDialogComponent } from './manager-company-workers-dialog.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ManagerCompanyWorkersDialogComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    ButtonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  exports: [
    ManagerCompanyWorkersDialogComponent
  ]
})
export class ManagerCompanyWorkersDialogModule{}
