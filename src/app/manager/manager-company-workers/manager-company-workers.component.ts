import { EmployeeService } from 'src/app/entities/employees/service/employee.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ManagerCompanyWorkersDialogComponent } from './manager-company-workers-dialog/manager-company-workers-dialog.component';
import { UniversalTableColumn } from './../../components/table/column.model';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entities/employees/employee.model';
import { HttpResponse } from '@angular/common/http';
import { PermissionService } from 'src/app/account/authority/service/permission.service';
import { AuthorityService } from 'src/app/account/authority/service/authority.service';
import { Permission } from 'src/app/entities/permission/permission.model';

@Component({
  selector: 'app-manager-company-workers',
  templateUrl: './manager-company-workers.component.html',
  styleUrls: ['./manager-company-workers.component.scss'],
})
export class ManagerCompanyWorkersComponent implements OnInit {
  workersColumns: UniversalTableColumn[] = [];
  workers: Employee[] = [];
  permissions: Permission[] = [];
  isPermission = false;

  selectedWorker: any | null = null;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private employeeSercice: EmployeeService,
    private permissionService: PermissionService,
    private authorityService: AuthorityService
  ) {}

  ngOnInit(): void {
    this.permissionService.checkWorkersPermission() ? this.isPermission = true : this.isPermission = false;
    this.loadWorkers();
    this.loadColumns();
  }

  loadWorkers(): void {
    this.employeeSercice.getWokers().subscribe(
      (res: HttpResponse<Employee[]>) => {
        this.workers = res.body ?? [];
        this.loadAllPermissions();
      });
  }

  loadColumns(): void {
    this.workersColumns = [
      { field: 'firstName', header: this.translateService.instant('global.user.name') },
      { field: 'lastName', header: this.translateService.instant('global.user.surname') },
    ];
  }

  loadAllPermissions(): void {
    this.authorityService.getAllPermisions().subscribe(
      (res: HttpResponse<Permission[]>) => {
        this.permissions = res.body ?? [];
      });
  }

  onReload(event: any) {
    this.loadWorkers();
  }

  onWorkerSelect(event: any): void {
    this.selectedWorker = event;
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
    // if (response) {
    //   this.messageService.add({key: 'mainToast', severity: 'success', summary: this.translateService.instant('global.message.success'),
    //    detail: this.translateService.instant('global.message.addWorkerSuccess')});
    // } else {
    //   this.messageService.add({key: 'mainToast', severity: 'error', summary: this.translateService.instant('global.message.error'),
    //    detail: this.translateService.instant('global.message.addWorkerSuccess')});
    // }
  }

  handleDeleteDialogResponse(): void {
    //tutaj http.delete
  }
}
