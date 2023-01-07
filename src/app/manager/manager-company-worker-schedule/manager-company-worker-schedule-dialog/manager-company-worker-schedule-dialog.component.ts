import { EmployeeService } from 'src/app/entities/employees/service/employee.service';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";
import { HttpResponse } from '@angular/common/http';
import { Employee } from 'src/app/entities/employees/employee.model';
import { CompanyScheduleService } from 'src/app/entities/company-schedule/service/company-schedule.service';
import { CompanySchedule } from 'src/app/entities/company-schedule/company-schedule.model';

@Component({
  selector: 'app-manager-company-worker-schedule-dialog',
  templateUrl: './manager-company-worker-schedule-dialog.component.html',
  styleUrls: ['./manager-company-worker-schedule-dialog.component.scss']
})
export class ManagerCompanyWorkerScheduleDialogComponent implements OnInit {

  workerScheduleForm = this.fb.group({
    date: ['', Validators.required],
    worker: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required]
  });

  workers: Employee[] = [];
  schedule: CompanySchedule | null = new CompanySchedule();
  selectedDate: Date | null = null;
  selectedWoker: Employee | null = null;
  startTime: Date | null = null;
  startMinute: number | null = null;
  endTime: Date | null = null;
  endMinute: number | null = null;
  currentDate: Date = new Date();

  name: any;

  edit: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder, private employeeSercice: EmployeeService,
    private companyScheduleService: CompanyScheduleService, private messageService: MessageService, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.edit = this.config.data.edit;
    if(this.edit) {
      this.name = this.config.data.worker.name;
    }
    this.loadWorkers();
  }

  loadWorkers(): void {
    this.employeeSercice.getWokers().subscribe(
      (res: HttpResponse<Employee[]>) => {
        this.workers = res.body ?? [];
      });
  }

  onTimeSelect(event: any): void {
    const date = event;
    console.log(date.getHours(), date.getMinutes());
  }

  onSubmit(): void {
    if((this.selectedDate!.getUTCMonth() + 1) < 10) {
      this.schedule!.shiftDate = this.selectedDate?.getFullYear().toString() + '-' + '0' + (this.selectedDate!.getUTCMonth() + 1).toString();
    } else {
      this.schedule!.shiftDate = this.selectedDate?.getFullYear().toString() + '-' + (this.selectedDate!.getUTCMonth() + 1).toString();
    }
    if(this.selectedDate!.getDate() < 10) {
      this.schedule!.shiftDate +=  '-' + '0' + this.selectedDate?.getDate();
    } else {
      this.schedule!.shiftDate +=  '-' + this.selectedDate?.getDate();
    }
    this.schedule!.startTime = this.startTime?.getHours().toString() + ':' + this.startTime?.getMinutes().toString();
    this.schedule!.endTime = this.endTime?.getHours().toString() + ':' + this.endTime?.getMinutes().toString();
    this.schedule!.employeeId = this.selectedWoker?.employeeId;

    this.companyScheduleService.create(this.schedule!).subscribe(
      {
        next: () => {
          this.messageService.add({key: 'mainToast', severity: 'success', summary: this.translateService.instant('global.message.success'),
          detail: this.translateService.instant('global.company.schedule.createScheduleSuccess')});
          this.ref.close();
        },
        error: () => {
          this.messageService.add({key: 'mainToast', severity: 'error', summary: this.translateService.instant('global.message.error'),
          detail: this.translateService.instant('global.company.schedule.createScheduleFail')});
        }
      }
    )
  }

  onClose(): void {
    this.ref.close();
  }
}
