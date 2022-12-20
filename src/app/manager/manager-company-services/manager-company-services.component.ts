import { PermissionService } from './../../account/authority/service/permission.service';
import { HttpResponse } from '@angular/common/http';
import { Services } from './../../entities/services/services.model';
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";
import { ManagerCompanyServicesDialogComponent } from "./manager-company-services-dialog/manager-company-services-dialog.component";
import { ServicesService } from 'src/app/entities/services/service/services.service';

@Component({
  selector: 'app-manager-company-services',
  templateUrl: './manager-company-services.component.html',
  styleUrls: ['./manager-company-services.component.scss']
})
export class ManagerCompanyServicesComponent implements OnInit{

  servicesColumns: UniversalTableColumn[] = [];
  services: Services[] = [];
  permission = false;

  selectedService: any | null = null;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private servicesService: ServicesService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.permissionService.checkSerivcePermission() ? this.permission = true : this.permission = false;
    this.loadServices();
    this.loadColumns();
  }

  loadServices(): void {
    this.servicesService.findAll().subscribe(
      (res: HttpResponse<Services[]>) => {
        this.services = res.body ?? [];
      });
  }

  loadColumns(): void {
    this.servicesColumns = [
      { field: 'name', header: 'Nazwa' },
      { field: 'duration', header: 'Czas' },
      { field: 'price', header: 'Cena' },
    ];
  }

  onServiceSelect(event: any): void {
    this.selectedService = event;
    console.log(this.selectedService);
  }

  openCompanyServiceDialog(edit = false): void {
    const ref = this.dialogService.open(ManagerCompanyServicesDialogComponent, {
      header: this.translateService.instant((edit) ? 'global.header.editService' : 'global.header.addService'),
      width: '80%',
      data: {
        edit: edit,
      },
    });
    ref.onClose.subscribe((response) => this.handleCompanyServiceDialogResponse(response));
  }

  openDeleteDialog(): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      header: this.translateService.instant('global.header.confirmDelete'),
      message: this.translateService.instant('global.message.confirmDelete'),
      accept: () => this.handleDeleteDialogResponse()
    });
  }

  handleCompanyServiceDialogResponse(response: any): void {
    this.loadServices();
    // if (response.result) {
    //   this.loadServices();
    //   this.messageService.add({key: 'mainToast', severity: 'success', summary:'Sukces', detail:'Sukces'});
    // } else {
    //   this.messageService.add({key: 'mainToast', severity: 'error', summary:'Błąd', detail:'Błąd'});
    // }
  }

  handleDeleteDialogResponse(): void {
    //tutaj http.delete
  }

}
