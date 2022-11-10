import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { EditCompanyDialogComponent } from './edit-company-dialog.component';
import { NgModule } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    EditCompanyDialogComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule
  ],
  exports: [
    EditCompanyDialogComponent
  ]
})
export class EditCompanyDialogModule {}
