import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { TableComponent } from "./table.component";
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TableModule,
    InputTextModule,
    TranslateModule,
    TooltipModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    TableComponent
  ]
})
export class UniversalTableModule{}
