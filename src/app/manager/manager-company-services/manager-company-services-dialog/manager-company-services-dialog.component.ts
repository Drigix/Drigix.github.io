import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ServicesService } from 'src/app/entities/services/service/services.service';
import { Services } from './../../../entities/services/services.model';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'app-manager-company-reservations-dialog',
  templateUrl: './manager-company-services-dialog.component.html',
  styleUrls: ['./manager-company-services-dialog.component.scss']
})
export class ManagerCompanyServicesDialogComponent implements OnInit {

  addServiceForm = this.fb.group({
    name: ['', Validators.required],
    time: ['', Validators.required],
    price: ['', Validators.required]
  });

  service: Services = new Services();

  name: any;

  edit: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder, private servicesService: ServicesService,
    private translateService: TranslateService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.edit = this.config.data.edit;
  }

  onSubmit(): void {
    this.servicesService.create(this.service).subscribe(
      {
        next: () => {
          this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.createCompanyServiceSuccess')});
          this.ref.close();
        },
        error: () => {
          this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.error'), detail: this.translateService.instant('global.message.createCompanyServiceError')});
        }
      }
    )
  }

  onClose(): void {
    this.ref.close();
  }
}
