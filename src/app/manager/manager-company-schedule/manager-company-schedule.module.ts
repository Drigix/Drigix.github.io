import { ComponentModule } from './../../components/component.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ManagerCompanyScheduleComponent } from './manager-company-schedulecomponent';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   daygridPlugin,
//   interactionPlugin
// ]);

@NgModule({
  declarations: [
    ManagerCompanyScheduleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    ComponentModule
  ],
  providers:[
  ],
  exports: [
    ManagerCompanyScheduleComponent
  ]
})
export class ManagerCompanyScheduleModule{}
