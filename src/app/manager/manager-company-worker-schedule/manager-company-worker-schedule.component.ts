import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";
import { CompanySchedule } from "src/app/entities/company-schedule/company-schedule.model";
import { ManagerCompanyWorkerScheduleDialogComponent } from "./manager-company-worker-schedule-dialog/manager-company-worker-schedule-dialog.component";

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
  workerSchedules: CompanySchedule[] = [];

  selectedWorker: any | null = null;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadColumns();
  }

  loadColumns(): void {
    this.reservationsColumns = [
      { field: 'name', header: 'Imie' },
      { field: 'surname', header: 'Nazwisko' },
      { field: 'data', header: 'Data' },
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
