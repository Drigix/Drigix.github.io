import { HttpResponse } from '@angular/common/http';
import { CompanyScheduleService } from 'src/app/entities/company-schedule/service/company-schedule.service';
import { Component, OnInit } from "@angular/core";
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CompanySchedule } from 'src/app/entities/company-schedule/company-schedule.model';
import { CompanyAvailableSchedule, CompanyAvailableScheduleEmployee } from 'src/app/entities/company-schedule/company-available-schedule.model';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {

  currentDate: Date = new Date();
  availableSchedule: CompanyAvailableSchedule | null = new CompanyAvailableSchedule();
  availableWorkers: CompanyAvailableScheduleEmployee[] = [];
  availableTerms: string[] | null = null;
  selectedEmployee: CompanyAvailableScheduleEmployee | null = null;
  serviceId: string | null = null;
  date: Date = new Date(2022,11,23);
  tempDates: Date[] = [];

  reservationDate: Date | null = null;

  constructor(private companyScheduleService: CompanyScheduleService, public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    //this.serviceId = this.config.data.serviceId;
    this.serviceId = '1c079bfc-7b45-449a-bc8a-b14c6aed67d2';
    this.tempDates = [new Date(2022,10,10), new Date(2022,10,11), new Date(2022,10,12)];
  }

  onDateSelect(): void {
    console.log(this.reservationDate);
  }

  findAvailableTerms(): void {
    this.companyScheduleService.findAvailableSchedulesForService(this.serviceId!, '2022-12-23').subscribe(
      (res: HttpResponse<CompanyAvailableSchedule>) => {
        this.availableSchedule = res.body ?? null;
        this.availableWorkers = this.availableSchedule?.employees!;
      });
  }

  onEmployeeSelect(event: any): void {
    this.selectedEmployee = event.value;
  }
}
