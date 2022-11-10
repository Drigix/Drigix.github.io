import { isUserLogin } from './../../account/authority/authority.component';
import { LoginDialogComponent } from './../../account/login-dialog/login-dialog.component';
import { Industry } from './../../entities/industry/industry.model';
import { ReservationDialogComponent } from './reservation/reservation-dialog/reservation-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Company } from './../../entities/company/company.model';
import { TranslateService } from '@ngx-translate/core';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  @Output() company =  new EventEmitter<Company>();

  isAccountLogged = false;

  items: MenuItem[] = [];

  currentCompany: Company | null = null;

  industry: Industry | null = null;

  amountOfRating = 120;

  companyServices = [1,2,3,4];

  companyOpinions: any = [];

  opinionPage = 0;

  constructor(private translateService: TranslateService, private dialogService: DialogService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.isAccountLogged = isUserLogin;
    this.items = [
      {label: this.translateService.instant('global.company.header.home'), icon: 'pi pi-fw pi-home', command: ()=> this.changeMenuItem('home')},
      {label: this.translateService.instant('global.company.header.gallery'), icon: 'pi pi-fw pi-camera', command: ()=> this.changeMenuItem('gallery')},
      {label: this.translateService.instant('global.company.header.localization'), icon: 'pi pi-fw pi-map-marker', command: ()=> this.changeMenuItem('lokalization')},
      {label: this.translateService.instant('global.company.header.opinions'), icon: 'pi pi-fw pi-comment', command: ()=> this.changeMenuItem('opinions')}
    ];
    this.loadDataCompany();
  }

  exportCompany(): void {
    this.company.emit(this.currentCompany!);
  }

  loadDataCompany(): void {
    this.industry = new Industry(1, 'hairdresser');
    this.currentCompany = new Company(1, 'Nazwa firmy', this.industry, 'Gliwice', 'Zwycięstwa 10', '42-100', 3, '9:00', '20:00');
    this.exportCompany();
    this.companyOpinions = [
      {
        name: 'Michał',
        rating: 4,
        description: 'Było ok'
      },
      {
        name: 'Michał',
        rating: 4,
        description: 'Było ok'
      },
      {
        name: 'Michał',
        rating: 4,
        description: 'Było ok'
      },
      {
        name: 'Michał',
        rating: 4,
        description: 'Było ok'
      }
    ]
  }

  changeMenuItem(view: string): void {
    document.getElementById(view)?.scrollIntoView();
  }

  checkIsLogged(): void {
    if (!this.isAccountLogged) {
      const ref = this.dialogService.open(LoginDialogComponent, {
        header: this.translateService.instant('global.action.book'),
        width: '40%',
        data: {
          type: 'login'
        }
      });
      ref.onClose.subscribe((response) => this.handleReservationDialog(response));
    } else {
      this.openReservationDialog();
    }
  }

  openReservationDialog(): void {
    const ref = this.dialogService.open(ReservationDialogComponent, {
      header: this.translateService.instant('global.action.book'),
      width: '40%'
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

  changePage(event: any): void {
    this.opinionPage = event.page;
  }
}
