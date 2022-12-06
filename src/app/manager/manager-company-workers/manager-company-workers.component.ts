import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ManagerCompanyWorkersDialogComponent } from './manager-company-workers-dialog/manager-company-workers-dialog.component';
import { UniversalTableColumn } from './../../components/table/column.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-company-workers',
  templateUrl: './manager-company-workers.component.html',
  styleUrls: ['./manager-company-workers.component.scss'],
})
export class ManagerCompanyWorkersComponent implements OnInit {
  workersColumns: UniversalTableColumn[] = [];
  workers = [
    {
      name: 'Michał',
      surname: 'Ławinski',
      id: '111',
    },
    {
      name: 'Michał',
      surname: 'Ławinski',
      id: '222',
    },
    {
      name: 'Michał',
      surname: 'Ławinski',
      id: '333',
    },
  ];

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
    this.workersColumns = [
      { field: 'name', header: this.translateService.instant('global.user.name') },
      { field: 'surname', header: this.translateService.instant('global.user.surname') },
    ];
  }

  onWorkerSelect(event: any): void {
    this.selectedWorker = event;
    console.log(this.selectedWorker);
  }

  openCompanyWorkerDialog(edit = false): void {
    const ref = this.dialogService.open(ManagerCompanyWorkersDialogComponent, {
      header: this.translateService.instant((edit) ? 'global.header.editCompanyWorker' : 'global.header.addCompanyWorker'),
      width: '80%',
      data: {
        edit: edit,
        workers: this.workers
      },
    });
    ref.onClose.subscribe((response) => this.handleCompanyWorkerDialogResponse(response));
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      header: this.translateService.instant('global.header.confirmDelete'),
      message: this.translateService.instant('global.message.confirmDelete'),
      accept: () => this.handleDeleteDialogResponse()
    });
  }

  handleCompanyWorkerDialogResponse(response: any): void {
    if (response) {
      this.messageService.add({key: 'mainToast', severity: 'success', summary: this.translateService.instant('global.message.success'),
       detail: this.translateService.instant('global.message.addWorkerSuccess')});
    } else {
      this.messageService.add({key: 'mainToast', severity: 'error', summary: this.translateService.instant('global.message.error'),
       detail: this.translateService.instant('global.message.addWorkerSuccess')});
    }
  }

  handleDeleteDialogResponse(): void {
    //tutaj http.delete
  }
}
