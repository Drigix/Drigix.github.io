import { DropdownModule } from 'primeng/dropdown';
import { ComponentModule } from './../../components/component.module';
import { GalleriaComponent } from './../../components/galleria/galleria.component';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CompanyPageComponent } from "./company-page.component";
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { GalerryModule } from 'src/app/components/galleria/galleria.module';
import { ReservationDialogComponent } from './reservation/reservation-dialog/reservation-dialog.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations:[
    CompanyPageComponent, ReservationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    MenuModule,
    MenubarModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    TranslateModule,
    ComponentModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule
  ],
  exports: [
    CompanyPageComponent,
    ReservationDialogComponent
  ]
})
export class CompanyPageModule {}
