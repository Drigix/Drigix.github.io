import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";
import { ManagerCompanyServicesDialogComponent } from "./manager-company-services-dialog/manager-company-services-dialog.component";

@Component({
  selector: 'app-manager-company-services',
  templateUrl: './manager-company-services.component.html',
  styleUrls: ['./manager-company-services.component.scss']
})
export class ManagerCompanyServicesComponent implements OnInit{

  servicesColumns: UniversalTableColumn[] = [];
  services = [
    {
      name: 'Strzyżenie męskie',
      time: '40min',
      price: '60zł'
    },
    {
      name: 'Strzyżenie damskie',
      time: '60min',
      price: '80zł'
    },
    {
      name: 'Strzyżenie dziecięce',
      time: '30min',
      price: '30zł'
    }
  ];

  selectedService: any | null = null;

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
    this.servicesColumns = [
      { field: 'name', header: 'Nazwa' },
      { field: 'time', header: 'Czas' },
      { field: 'price', header: 'Cena' },
    ];
  }

  onWorkerSelect(event: any): void {
    this.selectedService = event;
    console.log(this.selectedService);
  }

  openCompanyWorkerDialog(edit = false): void {
    const ref = this.dialogService.open(ManagerCompanyServicesDialogComponent, {
      header: this.translateService.instant((edit) ? 'global.header.editService' : 'global.header.addService'),
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
