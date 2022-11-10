import { ButtonModule } from 'primeng/button';
import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleCallendarComponent } from "./schedule-callendar.component";

@NgModule({
  declarations:[
    ScheduleCallendarComponent
  ],
  imports:[
    BrowserModule,
    DatePipe,
    ButtonModule
  ],
  exports: [
    ScheduleCallendarComponent
  ],
})
export class ScheduleCalenndarModule {}
