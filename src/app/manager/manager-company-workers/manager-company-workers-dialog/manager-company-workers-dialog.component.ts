import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { CompanyService } from 'src/app/entities/company/service/company.service';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { EmployeeService } from 'src/app/entities/employees/service/employee.service';

@Component({
  selector: 'app-manager-company-workers-dialog',
  templateUrl: './manager-company-workers-dialog.component.html',
  styleUrls: ['./manager-company-workers-dialog.component.scss']
})
export class ManagerCompanyWorkersDialogComponent implements OnInit {

  addCompanyWorkerForm = this.fb.group({
    id: ['', Validators.required]
  });

  id: any;

  edit: any;

  workers: any[] = [];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder,
    private companyService: CompanyService, private employeeService: EmployeeService, private translateService: TranslateService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.edit = this.config.data.edit;
    this.workers = this.config.data.workers;
  }

  onSubmit(): void {
   this.employeeService.addWorker(this.id).subscribe(
    {
      next: (response) => {
        this.messageService.add({key: 'mainToast', severity: 'success', summary: this.translateService.instant('global.message.success'),
          detail: this.translateService.instant('global.message.addWorkerSuccess')});
        this.ref.close(response);
      },
      error: () => {
        this.messageService.add({key: 'mainToast', severity: 'error', summary: this.translateService.instant('global.message.error'),
          detail: this.translateService.instant('global.message.addWorkerSuccess')});
      }
    }
   )
  }

  onClose(): void {
    this.ref.close();
  }
}
