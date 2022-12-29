import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { CompanyScheduleService } from 'src/app/entities/company-schedule/service/company-schedule.service';
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CompanySchedule } from 'src/app/entities/company-schedule/company-schedule.model';
import { CompanyAvailableSchedule, CompanyAvailableScheduleEmployee } from 'src/app/entities/company-schedule/company-available-schedule.model';
import { Services } from 'src/app/entities/services/services.model';
import { Reservation } from 'src/app/entities/reservation/reservation.model';
import { ReservationService } from 'src/app/entities/reservation/service/reservation.service';

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {

  reservationFormBuilder = this.fb.group({
    date: ['', [Validators.required]],
    employee: ['', [Validators.required]],
    term: [''],
    description: ['']
  });

  currentDate: Date = new Date();
  availableSchedule: CompanyAvailableSchedule | null = new CompanyAvailableSchedule();
  availableWorkers: CompanyAvailableScheduleEmployee[] = [];
  availableTerms: string[] | null = null;
  selectedEmployee: CompanyAvailableScheduleEmployee | null = null;
  selectedTerm: string | null = null;
  service: Services | null = null;
  serviceId: string | null = null;
  date: Date = new Date(2022,11,23);
  tempDates: Date[] = [];
  reservation: Reservation = new Reservation();
  isConfirm = false;

  reservationDate: Date | null = null;

  constructor(private companyScheduleService: CompanyScheduleService, public config: DynamicDialogConfig, private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef, private reservationService: ReservationService,
    private messageService: MessageService, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.service = this.config.data.service;
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

  onEmployeeChange(): void {
    this.reservationFormBuilder.get('term')?.valueChanges.subscribe(() => {
      this.reservationFormBuilder.get('term')?.setValidators(Validators.required);
    })
    //this.reservationFormBuilder.get('term')?.setValidators(Validators.required);
    this.cd.detectChanges();
  }

  setTerm(event: any): void {
    this.selectedTerm = event;
    if(this.selectedTerm) {
      console.log('wchodzi');
      this.reservationFormBuilder.get('term')?.setValidators(Validators.nullValidator);
    }
    this.cd.detectChanges();
    // this.reservationFormBuilder.get('term')?.valueChanges.subscribe(() => {
    //   this.reservationFormBuilder.get('term')?.setValidators(Validators.nullValidator);
    // })
  }

  onSubmit(): void {
    this.isConfirm = true;
  }

  goToReservation(): void {
    this.isConfirm = false;
  }

  confirmReservation(): void {
    this.reservation.serviceId = this.serviceId;
    this.reservation.employeeId = this.selectedEmployee?.employeeId;
    this.reservation.startTime = this.selectedTerm;
    //this.reservation.date = this.reservationDate?.getFullYear().toString() + '-' + (this.reservationDate!.getMonth() + 1).toString() + '-' + this.reservationDate?.getDate().toString();
    this.reservation.date = '2022-12-23';
    this.reservationService.create(this.reservation).subscribe(
      {
        next: () => {
          this.messageService.add({key: 'mainToast', severity: 'success', summary: this.translateService.instant('global.message.success'),
          detail: this.translateService.instant('global.message.addReservationSuccess')});
        },
        error: () => {
          this.messageService.add({key: 'mainToast', severity: 'error', summary: this.translateService.instant('global.message.error'),
          detail: this.translateService.instant('global.message.addReservationError')});
        }
      }
    )
  }
}
