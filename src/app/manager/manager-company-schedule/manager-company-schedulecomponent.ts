import { Component, OnInit } from "@angular/core";
import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'app-manager-company-schedule',
  templateUrl: './manager-company-schedule.component.html',
  styleUrls: ['./manager-company-schedule.component.scss']
})
export class ManagerCompanyScheduleComponent implements OnInit {

  // calendarOptions: CalendarOptions = {
  //   plugins: [ dayGridPlugin, interactionPlugin ],
  //   themeSystem: "bootstrap",
  // }

 constructor() {}

  ngOnInit(): void {
    const name = Calendar.name;
  }
}
