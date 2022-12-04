import { CompanyPageModule } from './../../pages/company/company-page.module';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from '../../components/component.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {CardModule} from 'primeng/card';
import { ManagerHomeComponent } from './manager-home.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CreateWorkerIdDialogComponent } from './create-worker-id-dialog/create-worker-id-dialog.component';

@NgModule({
  declarations: [
    ManagerHomeComponent,
    CreateWorkerIdDialogComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    CompanyPageModule
  ],
  exports: [
    ManagerHomeComponent,
    CreateWorkerIdDialogComponent
  ]
})
export class ManagerHomeModule { }
