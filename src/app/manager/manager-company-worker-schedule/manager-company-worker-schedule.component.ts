import { HttpResponse } from '@angular/common/http';
import { CompanyScheduleService } from './../../entities/company-schedule/service/company-schedule.service';
import { PermissionService } from './../../account/authority/service/permission.service';
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";
import { CompanySchedule } from "src/app/entities/company-schedule/company-schedule.model";
import { ManagerCompanyWorkerScheduleDialogComponent } from "./manager-company-worker-schedule-dialog/manager-company-worker-schedule-dialog.component";
import { USER_ROLE } from 'src/app/account/authority/authority.component';
import { Authority } from 'src/app/account/authority/authority.model';

@Component({
  selector: 'app-manager-company-worker-schedule',
  templateUrl: './manager-company-worker-schedule.component.html',
  styleUrls: ['./manager-company-worker-schedule.component.scss']
})
export class ManagerCompanyWorkerScheduleComponent implements OnInit {

  reservationsColumns: UniversalTableColumn[] = [];
  reservations = [
    {
      name: 'Michał',
      surname: 'Ławinski',
      data: '02.02.2022',
      startTime: '9:00',
      endTime: '18:00'
    },
    {
      name: 'Michał',
      surname: 'Ławinski',
      data: '02.02.2022',
      startTime: '9:00',
      endTime: '12:00'
    },
    {
      name: 'Michał',
      surname: 'Ławinski',
      data: '02.02.2022',
      startTime: '15:00',
      endTime: '20:00'
    }
  ];
  permission = false;
  workerSchedules: CompanySchedule[] = [];

  selectedWorker: any | null = null;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private permissionService: PermissionService,
    private companyScheduleService: CompanyScheduleService
  ) {}

  ngOnInit(): void {
    this.permissionService.checkSchedulesPermission() ? this.permission = true : this.permission = false;
    if(USER_ROLE === Authority.EMPLOYEE) {
      this.loadEmployeeSchedule();
    }
    this.loadColumns();
  }

  loadEmployeeSchedule(): void {
    this.companyScheduleService.findTermForEmployee('').subscribe(
      (res: HttpResponse<CompanySchedule[]>) => {
        this.workerSchedules = res.body ?? [];
        console.log(this.workerSchedules);
      }
    )
  }

  loadColumns(): void {
    this.reservationsColumns = [
      { field: 'shiftDate', header: 'Data' },
      { field: 'startTime', header: 'Godzina rozpoczęcie' },
      { field: 'endTime', header: 'Godzina zakończenia' }
    ];
  }

  onWorkerSelect(event: any): void {
    this.selectedWorker = event;
  }

  openWorkerScheduleDialog(edit = false): void {
    const ref = this.dialogService.open(ManagerCompanyWorkerScheduleDialogComponent, {
      header: this.translateService.instant((edit) ? 'global.header.editWorkerSchedule' : 'global.header.addWorkerSchedule'),
      width: '80%',
      data: {
        edit: edit,
        worker: this.selectedWorker
      },
    });
    ref.onClose.subscribe((response) => this.handleWorkerScheduleDialogResponse(response));
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      header: this.translateService.instant('global.header.confirmDelete'),
      message: this.translateService.instant('global.message.confirmDelete'),
      accept: () => this.handleDeleteDialogResponse()
    });
  }

  handleWorkerScheduleDialogResponse(response: any): void {
    if (response.result) {
      this.messageService.add({key: 'mainToast', severity: 'success', summary:'Sukces', detail:'Sukces'});
    } else {
      this.messageService.add({key: 'mainToast', severity: 'error', summary:'Błąd', detail:'Błąd'});
    }
  }

  handleDeleteDialogResponse(): void {
    //tutaj http.delete
  }
}
