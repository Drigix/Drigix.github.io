import { PermissionService } from './../../account/authority/service/permission.service';
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
      date: new Date(2022,10,10),
      worker: 'Ola',
      time: '9:00',
      service: "Strzyżenie męskie"
    },
    {
      name: 'Marcin',
      date: new Date(2022,10,11),
      worker: 'Szymon',
      time: '9:00',
      service: "Strzyżenie męskie"
    },
    {
      name: 'Bartek',
      date: new Date(),
      worker: 'Alicja',
      time: '9:00',
      service: "Strzyżenie męskie"
    }
  ];
  permission = false;
  filteredReservations: any[] = [];
  currentDate: Date = new Date();
  reservationsDate: Date | null = null;
  selectedWorker: any | null = null;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService.checkReservationsPermission() ? this.permission = true : this.permission = false;
    this.filteredReservations = this.reservations;
    this.loadColumns();
  }

  loadColumns(): void {
    this.reservationsColumns = [
      { field: 'name', header: 'Imie' },
      { field: 'date', header: 'Data' },
      { field: 'worker', header: 'Pracownik' },
      { field: 'time', header: 'Godzina' },
      { field: 'service', header: 'Usługa' }
    ];
  }

  onWorkerSelect(event: any): void {
    this.selectedWorker = event;
    console.log(this.selectedWorker);
  }

  filterByDate(): void {
    this.reservations = [];
    // this.filteredReservations.forEach((item) =>
    // {item.date.toDateString() === this.reservationsDate?.toDateString() ? this.reservations.push(item): null});
    this.reservations = this.filteredReservations.filter((item) => item.date.toDateString() === this.reservationsDate?.toDateString());
    console.log(this.reservationsDate?.toDateString());
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
