import { HttpResponse } from '@angular/common/http';
import { CompanyService } from 'src/app/entities/company/service/company.service';
import { AuthorityService } from './../../account/authority/service/authority.service';
import { MessageService } from 'primeng/api';
import { USER_ROLE } from 'src/app/account/authority/authority.component';
import { Authority } from './../../account/authority/authority.model';
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

  isCompanyExist = false;
  isEmployeed = false;

  company: Company | null = null;
  companyId: string | null = null;
  loading = false;

  constructor(private router: Router, private dialogService: DialogService, private translateService: TranslateService, private messageService: MessageService,
    private authorityService: AuthorityService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loading = true;
    if(Authority.OWNER === USER_ROLE) {
      this.isCompanyExist = true;
      this.loadActualCompany();
    }
  }

  loadActualCompany(): void {
    this.companyService.findActualCompany().subscribe(
      (res: HttpResponse<string>) => {
        this.companyId = res.body ?? null;
        this.loading = false;
      });
  }

  setCompany(event: any): void {
    this.company = event;
  }

  openCreateCompanyDialog(): void {
    const ref = this.dialogService.open(CreateCompanyDialog, {
      header: this.translateService.instant('global.header.createCompany'),
      width: '80%',
    });
    ref.onClose.subscribe((response) => this.handleLoginDialogResponse(response));
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

  handleLoginDialogResponse(response: any): void {
    if(response) {
      if(response.result) {
        this.messageService.add({key: 'mainToast', severity:'success', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.createCompanySuccess')});
        this.authorityService.loguot();
      }
    }
  }
}
