import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";
import { ManagerCompanyReservationsDialogComponent } from "./manager-company-reservations-dialog/manager-company-reservations-dialog.component";

@Component({
  selector: 'app-manager-company-reservations',
  templateUrl: './manager-company-reservations.component.html',
  styleUrls: ['./manager-company-reservations.component.scss']
})
export class ManagerCompanyReservationsComponent implements OnInit{

  reservationsColumns: UniversalTableColumn[] = [];
  reservations = [
    {
      name: 'Michał',
      data: '02.02.2022',
      worker: 'Ola',
      service: "Strzyżenie męskie"
    },
    {
      name: 'Marcin',
      data: '02.02.2022',
      worker: 'Szymon',
      service: "Strzyżenie męskie"
    },
    {
      name: 'Bartek',
      data: '02.02.2022',
      worker: 'Alicja',
      service: "Strzyżenie męskie"
    }
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
    this.reservationsColumns = [
      { field: 'name', header: 'Imie' },
      { field: 'data', header: 'Data' },
      { field: 'worker', header: 'Pracownik' },
      { field: 'service', header: 'Usługa' }
    ];
  }

  onWorkerSelect(event: any): void {
    this.selectedWorker = event;
    console.log(this.selectedWorker);
  }

  openCompanyReservationDialog(edit = false): void {
    const ref = this.dialogService.open(ManagerCompanyReservationsDialogComponent, {
      header: this.translateService.instant((edit) ? 'global.header.editReservation' : 'global.header.addReservation'),
      width: '80%',
      data: {
        edit: edit,
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
