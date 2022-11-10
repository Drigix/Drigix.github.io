import { EditCompanyDialogComponent } from './edit-company-dialog/edit-company-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { CreateCompanyDialog } from 'src/app/account/create-company-dialog/create-company-dialog.component';
import { Company } from 'src/app/entities/company/company.model';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent implements OnInit {

  isCompanyExist = true;

  company: Company | null = null;

  constructor(public router: Router, public dialogService: DialogService, public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  setCompany(event: any): void {
    this.company = event;
  }

  openCreateCompanyDialog(): void {
    const ref = this.dialogService.open(CreateCompanyDialog, {
      header: this.translateService.instant('global.header.createCompany'),
      width: '80%',
    });
    //ref.onClose.subscribe((response) => this.handleLoginDialogResponse(response))
  }

  openEditCompanyDialog(): void {
    const ref = this.dialogService.open(EditCompanyDialogComponent, {
      header: this.translateService.instant('global.header.editCompany'),
      width: '80%',
      data: {
        company: this.company
      }
    });
    //ref.onClose.subscribe((response) => this.handleLoginDialogResponse(response))
  }
}
