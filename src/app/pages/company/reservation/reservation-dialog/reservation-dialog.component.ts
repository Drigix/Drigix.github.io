import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CompanyScheduleService } from 'src/app/entities/company-schedule/service/company-schedule.service';
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CompanySchedule } from 'src/app/entities/company-schedule/company-schedule.model';
import { CompanyAvailableSchedule, CompanyAvailableScheduleEmployee } from 'src/app/entities/company-schedule/company-available-schedule.model';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {

  reservationFormBuilder = this.fb.group({
    date: ['', [Validators.required]],
    employee: ['', [Validators.required]],
    term: ['', [Validators.required]],
    description: ['']
  })

  currentDate: Date = new Date();
  availableSchedule: CompanyAvailableSchedule | null = new CompanyAvailableSchedule();
  availableWorkers: CompanyAvailableScheduleEmployee[] = [];
  availableTerms: string[] | null = null;
  selectedEmployee: CompanyAvailableScheduleEmployee | null = null;
  seledtedTerm: string | null = null;
  serviceId: string | null = null;
  date: Date = new Date(2022,11,23);
  tempDates: Date[] = [];

  reservationDate: Date | null = null;

  constructor(private companyScheduleService: CompanyScheduleService, public config: DynamicDialogConfig, private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef) {}

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

  setTerm(event: any): void {
    this.seledtedTerm = event;
    if(this.seledtedTerm) {
      this.reservationFormBuilder.get('term')?.setValidators(Validators.nullValidator);
    }
    this.cd.detectChanges();
    // this.reservationFormBuilder.get('term')?.valueChanges.subscribe(() => {
    //   this.reservationFormBuilder.get('term')?.setValidators(Validators.nullValidator);
    // })
  }

  onSubmit(): void {
    console.log(2);
  }
}
