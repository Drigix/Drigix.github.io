import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
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
import { ReservationHistoryCardComponent } from './reservation-history-card/reservation-history-card.component';
import { ReservationHistoryDialogComponent } from './reservation-history-card/reservation-history-dialog/reservation-history-dialog.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ReservationHistoryCardComponent,
    ReservationHistoryDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    InputTextareaModule
  ],
  exports: [
    CardModule,
    GalerryModule,
    CompanyCardModule,
    OpinionCardModule,
    MapModule,
    UniversalTableModule,
    ScheduleCalenndarModule,
    ReservationHistoryCardComponent
  ]
})
export class ComponentModule { }
