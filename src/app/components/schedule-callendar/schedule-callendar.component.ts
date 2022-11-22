
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-schedule-callendar',
  templateUrl: './schedule-callendar.component.html',
  styleUrls: ['./schedule-callendar.component.scss'],
})
export class ScheduleCallendarComponent implements OnInit {

  currentDate: Date = new Date(2022,10,17);
  currentDay : number | null = null;
  currentMonth : number | null = null;
  currentYear : number | null = null;
  month31List = [0,2,4,6,7,9,11];
  month30List = [3,5,8,10];
  moth28List = [1];

  workHours = [
    {hour: '9:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '10:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '11:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '12:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '13:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '14:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '15:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '16:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '17:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '18:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '19:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
    {hour: '20:00', reservations:[
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},
      {worker: 'Michał', client: 'Marta M', service: 'Strzyrzenie damskie'},]},
  ];

  ngOnInit(): void {
    this.currentDay = this.currentDate.getDate();
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
  }

  plusDay(): void {
    if(this.month31List.includes(this.currentMonth!)) {
      if(this.currentDay! < 31) {
        this.currentDay = this.currentDay! + 1;
      } else {
        this.currentDay = 1;
        if(this.currentMonth! < 12) {
          this.currentMonth = this. currentMonth! + 1;
        } else {
          this.currentMonth = 0;
        }
      }
    } else if (this.month30List.includes(this.currentMonth!)) {
      if(this.currentDay! < 30) {
        this.currentDay = this.currentDay! + 1;
      } else {
        this.currentDay = 1;
        this.currentMonth = this.currentMonth! + 1;
      }
    } else {
      if(this.currentDay! < 28) {
        this.currentDay = this.currentDay! + 1;
      } else {
        this.currentDay = 1;
        this.currentMonth = this.currentMonth! + 1;
      }
    }
    this.currentDate.setDate(this.currentDay!);
    this.currentDate.setMonth(this.currentMonth!);
    this.currentDate = new Date(this.currentYear!, this.currentMonth!, this.currentDay!);
  }

  minusDay(): void {
    if(this.month31List.includes(this.currentMonth!)) {
      if(this.currentDay! > 1) {
        this.currentDay = this.currentDay! - 1;
      } else {
        this.currentDay = 30;
        if(this.currentMonth! > 0) {
          this.currentMonth = this. currentMonth! - 1;
        } else {
          this.currentMonth = 12;
        }
      }
    } else if (this.month30List.includes(this.currentMonth!)) {
      if(this.currentDay! > 1) {
        this.currentDay = this.currentDay! - 1;
      } else {
        this.currentDay = 31;
        this.currentMonth = this. currentMonth! - 1;
      }
    } else {
      if(this.currentDay! > 1) {
        this.currentDay = this.currentDay! - 1;
      } else {
        this.currentDay = 31;
        this.currentMonth = this. currentMonth! - 1;
      }
    }
    this.currentDate.setDate(this.currentDay);
    this.currentDate.setMonth(this.currentMonth!);
    this.currentDate = new Date(this.currentYear!, this.currentMonth!, this.currentDay);
  }

}
