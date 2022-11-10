import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CreateCompanyDialog } from "./create-company-dialog.component";
import { InputTextModule } from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations:[
    CreateCompanyDialog
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule
  ],
  exports: [
    CreateCompanyDialog
  ]
})
export class CreateCompanyDialogModule{}
