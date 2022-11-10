
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-schedule-callendar',
  templateUrl: './schedule-callendar.component.html',
  styleUrls: ['./schedule-callendar.component.scss'],
})
export class ScheduleCallendarComponent implements OnInit {

  currentDate: Date = new Date();
  currentDay : number | null = null;
  currentMonth : number | null = null;
  currentYear : Date | null = null;

  workHours = [
    {hour: '9:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '10:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '11:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '12:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '13:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '14:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '15:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '16:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '17:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '18:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '19:00', workers: ['Michał', 'Paulina', 'Kasia']},
    {hour: '20:00', workers: ['Michał', 'Paulina', 'Kasia']},
  ];

  ngOnInit(): void {
    this.currentDay = this.currentDate.getDay();
    this.currentMonth = this.currentDate.getMonth();
    console.log(this.currentMonth);
  }

  plusDay(): void {
    if(this.currentDay! < 31) {
      this.currentDay = this.currentDay! + 1;
    } else {
      this.currentDay = 1;
      if(this.currentMonth! < 12) {
        this.currentMonth = this. currentMonth! + 1;
      } else {
        this.currentMonth = 1;
      }
    }
    this.currentDate.setDate(this.currentDay);
    this.currentDate.setMonth(this.currentMonth!);
    this.currentDate = new Date(2022, this.currentMonth!, this.currentDay);
    console.log(this.currentDate);
  }

  minusDay(): void {
    if(this.currentDay! > 1) {
      this.currentDay = this.currentDay! - 1;
    } else {
      this.currentDay = 31;
      if(this.currentMonth! > 1) {
        this.currentMonth = this. currentMonth! - 1;
      } else {
        this.currentMonth = 12;
      }
    }
    this.currentDate.setDate(this.currentDay);
    this.currentDate.setMonth(this.currentMonth!);
    this.currentDate = new Date(2022, this.currentMonth!, this.currentDay);
  }

}
