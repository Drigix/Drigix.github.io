import { DropdownModule } from 'primeng/dropdown';
import { ComponentModule } from './../../components/component.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesPageComponent } from './services-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MultiSelectModule} from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    ComponentModule,
    DropdownModule,
    PaginatorModule
  ],
  exports: [
    ServicesPageComponent
  ]
})
export class ServicesPageModule { }
