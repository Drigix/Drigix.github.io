import { HttpResponse } from '@angular/common/http';
import { CompanyService } from 'src/app/entities/company/service/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isUserLogin } from './../../account/authority/authority.component';
import { LoginDialogComponent } from './../../account/login-dialog/login-dialog.component';
import { ReservationDialogComponent } from './reservation/reservation-dialog/reservation-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Company } from './../../entities/company/company.model';
import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { Services } from 'src/app/entities/services/services.model';
import { OpinionsService } from 'src/app/entities/opinions/service/opinions.service';
import { CompanyOpinions } from 'src/app/entities/opinions/opinions.model';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  @Output() company =  new EventEmitter<Company>();
  @Input() isEmployee = false;
  @Input() actualCompanyId?: string;

  companyId: string | null = null;

  isAccountLogged = false;
  items: MenuItem[] = [];

  currentCompany: Company | null = null;

  companyOpinions: CompanyOpinions| null = null;

  servicePage = 0;
  opinionPage = 0;

  constructor(private translateService: TranslateService, private dialogService: DialogService, private messageService: MessageService,
    private router: Router, private route: ActivatedRoute, private companyService: CompanyService, private opinionsService: OpinionsService) {}

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('companyName');
    this.isAccountLogged = isUserLogin;
    this.items = [
      {label: this.translateService.instant('global.company.header.home'), icon: 'pi pi-fw pi-home', command: ()=> this.changeMenuItem('home')},
      {label: this.translateService.instant('global.company.header.gallery'), icon: 'pi pi-fw pi-camera', command: ()=> this.changeMenuItem('gallery')},
      {label: this.translateService.instant('global.company.header.localization'), icon: 'pi pi-fw pi-map-marker', command: ()=> this.changeMenuItem('lokalization')},
      {label: this.translateService.instant('global.company.header.opinions'), icon: 'pi pi-fw pi-comment', command: ()=> this.changeMenuItem('opinions')}
    ];
    if(this.actualCompanyId) {
      this.companyId = this.actualCompanyId;
    }
    this.loadCompany();
    this.loadOpinions();
  }

  exportCompany(): void {
    this.company.emit(this.currentCompany!);
  }

  loadCompany(): void {
    this.companyService.findCompanyById(this.companyId!).subscribe(
      (res: HttpResponse<Company>) => {
        this.currentCompany = res.body ?? null;
        this.exportCompany();
      }
    )
  }

  loadOpinions(): void {
    this.opinionsService.findByCompanyId(this.companyId!).subscribe(
      (res: HttpResponse<CompanyOpinions>) => {
        this.companyOpinions = res.body;
        console.log(this.companyOpinions?.opinions);
      });
  }

  changeMenuItem(view: string): void {
    document.getElementById(view)?.scrollIntoView();
  }

  checkIsLogged(service: Services): void {
    if (!this.isAccountLogged) {
      const ref = this.dialogService.open(LoginDialogComponent, {
        header: this.translateService.instant('global.action.book'),
        width: '40%',
        data: {
          type: 'login',
          reservation: true
        }
      });
      ref.onClose.subscribe((response) => this.handleReservationDialogAfterLogin(response, service));
    } else {
      this.openReservationDialog(service);
    }
  }

  handleReservationDialogAfterLogin(response: any, service: Services): void {
    if(response.result) {
      this.openReservationDialog(service);
    } else {
      this.messageService.add({key: 'mainToast', severity: 'error', summary:'Błąd', detail:'Błąd'});
    }
  }

  openReservationDialog(service: Services): void {
    const ref = this.dialogService.open(ReservationDialogComponent, {
      header: this.translateService.instant('global.action.book'),
      width: '60%',
      data: {
        service: service
      }
    });
    ref.onClose.subscribe((response) => this.handleReservationDialog(response));
  }

  handleReservationDialog(response: any): void {
    if (response.result) {
        this.messageService.add({key: 'mainToast', severity: 'success', summary:'Sukces', detail:'Sukces'});
      } else {
        this.messageService.add({key: 'mainToast', severity: 'error', summary:'Błąd', detail:'Błąd'});
    }
  }

  changePageService(event: any): void {
    this.servicePage = event.page;
  }

  changePage(event: any): void {
    this.opinionPage = event.page;
  }

  goToCompanyServices(): void {
    this.router.navigate(['manager/company-services']);
  }
}
