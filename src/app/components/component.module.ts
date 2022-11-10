import { ScheduleCalenndarModule } from './schedule-callendar/schedule-callendar.module';
import { UniversalTableModule } from './table/table.module';
import { MapModule } from './gmap/gmap.module';
import { CompanyCardModule } from './company-card/company-card.module';
import { GalerryModule } from './galleria/galleria.module';
import { CardModule } from './card/card.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OpinionCardModule } from './opinion-card/opinion-card.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    CardModule,
    GalerryModule,
    CompanyCardModule,
    OpinionCardModule,
    MapModule,
    UniversalTableModule,
    ScheduleCalenndarModule
  ]
})
export class ComponentModule { }
