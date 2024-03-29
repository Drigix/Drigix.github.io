import { CategoryService } from 'src/app/entities/industry/category.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthorityService } from './../../account/authority/service/authority.service';
import { Company } from './../../entities/company/company.model';
import { Language } from './../../entities/language/language.model';
import { Router } from '@angular/router';
import { CreateCompanyDialog } from './../../account/create-company-dialog/create-company-dialog.component';
import { ServicesPageComponent } from './../../pages/services/services-page.component';
import { LoginDialogComponent } from './../../account/login-dialog/login-dialog.component';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AppComponent } from 'src/app/app.component';
import { isUserLogin, USER_PERMISSIONS, USER_ROLE } from 'src/app/account/authority/authority.component';
import { Authority } from 'src/app/account/authority/authority.model';
import { phoneView, tabletView } from '../main/main.component';
import { HttpResponse } from '@angular/common/http';
import { Category } from 'src/app/entities/industry/category.model';
import { PermissionService } from 'src/app/account/authority/service/permission.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @ViewChild('menu', {static: false}) menu?: ElementRef<HTMLElement>;

    role = '';
    isClient = true;

    showMenu = false;

    languagesMenu = false;

    logIn = false;
    idustriesToMenu = [{
      label: 'Fryzjer',
      routerLink: '/services/7228be80-f7f2-4977-a1f5-770ff986537a',
      state: {type: 'hairdresser'},
      command: () => this.onServiceChange('/services', '7228be80-f7f2-4977-a1f5-770ff986537a' )
    },
    {
      label: 'Barber',
      routerLink: '/services/barber',
      state: {type: 'barber'},
      command: () => this.onServiceChange('barber', '7228be80-f7f2-4977-a1f5-770ff986537a')
    },
    {
      label: 'Kosmetyka',
      routerLink: '/services/beautician',
      state: {type: 'beautician'},
      command: () => this.onServiceChange('beautician', '7228be80-f7f2-4977-a1f5-770ff986537a')
    },
    {
      label: 'Salony tatuażu',
      routerLink: '/services/d67cdf00-c65a-44ad-8f17-b4580f79e5b0',
      state: {type: 'tatoo'},
      command: () => this.onServiceChange('/services', 'd67cdf00-c65a-44ad-8f17-b4580f79e5b0')
    },
    {
      label: 'SPA',
      routerLink: '/services/spa',
      state: {type: 'spa'},
      command: () => this.onServiceChange('/services', 'd67cdf00-c65a-44ad-8f17-b4580f79e5b0')
    },
    {
      label: 'Piercing',
      routerLink: '/services/piercing',
      state: {type: 'piercing'},
      command: () => this.onServiceChange('/services', 'd67cdf00-c65a-44ad-8f17-b4580f79e5b0')
    }];
    items: MenuItem[] = [];
    languages: Language[] = [];
    companies: Company[] = [];
    industries: Category[] = [];
    selectedComapny: Company | null = null;
    selectedLanguage: Language | null = new Language('pl', '/src/assets/photos/flags/flaga_polski.jpg');
    selectedLanguages: any;
    amoutOfNotification = 1;
    phoneView = phoneView;

    constructor(public dialogService: DialogService, public messageService: MessageService, public appComponent: AppComponent,
      private servicesPageComponent: ServicesPageComponent, private router: Router, private cd: ChangeDetectorRef, private authorityService: AuthorityService,
      private translateService: TranslateService, private categoryService: CategoryService, private permissionService: PermissionService) {}

    ngOnInit(): void {
      this.setLanguages();
      this.logIn = isUserLogin;
      this.role = USER_ROLE;
      this.phoneView = phoneView;
      this.loadIndustries();
      if(this.role !== Authority.EMPLOYEE && this.role !== Authority.OWNER) {
        this.setUserMenu();
      } else if (this.role !== Authority.OWNER) {
        this.isClient = false;
        this.setEmployeeMenu();
      }
      else {
        this.isClient = false;
        this.setMenagerMenu();
      }
    }

    loadIndustries(): void {
      this.categoryService.findAll().subscribe(
        (res: HttpResponse<Category[]>) => {
          this.industries = res.body ?? [];
        });
    }

    setLanguages(): void {
      this.languages = [
        new Language('pl', '../../../assets/photos/flags/flaga_polski.jpg'),
        new Language('en', '../../../assets/photos/flags/flaga_wielkiejbrytani.jpg')
      ];
    }

    setUserMenu(): void {
      this.items = [
        {
            label: 'Główna',
            routerLink: '/'
        },
        {
            label: 'Usługi',
            items: this.idustriesToMenu
        },
        {
            label: 'O nas',
            routerLink: '/aboutus'
        },
        {
            label: 'Kontakt',
            routerLink: '/contact'
        }
    ];
    }

    setEmployeeMenu(): void {
      if(this.authorityService.checkIsEmployeed()) {
        this.items = [{
          label: 'Home',
          routerLink: '/'
        }];
        if(this.permissionService.checkWorkersReadPermission()) {
          this.items.push({
            label: 'Pracownicy',
            routerLink: 'manager/company-workers'
          });
        }
        if(this.permissionService.checkReservationsReadPermission()) {
          this.items.push({
            label: 'Rezerwacje',
            routerLink: 'manager/company-reservations'
          });
        }
        if(this.permissionService.checkSerivceReadPermission()) {
          this.items.push({
            label: 'Usługi',
            routerLink: 'manager/company-services'
          });
        }
        if(this.permissionService.checkSchedulesReadPermission()) {
          this.items.push({
            label: 'Harmonogram rezerwacji',
            routerLink: '/manager/company-schedule'
          },
          {
            label: 'Harmonogram pracowników',
            routerLink: '/manager/company-worker-schedule'
          });
        }
      } else {
        this.items = [
          {
            label: 'Home',
            routerLink: '/'
          }
        ];
      }
    }

    setMenagerMenu(): void {
      this.items = [
        {
          label: 'Home',
          routerLink: '/'
        },
        {
          label: 'Pracownicy',
          routerLink: 'manager/company-workers'
        },
        {
          label: 'Rezerwacje',
          routerLink: 'manager/company-reservations'
        },
        {
          label: 'Usługi',
          routerLink: 'manager/company-services'
        },
        {
          label: 'Harmonogram rezerwacji',
          routerLink: '/manager/company-schedule'
        },
        {
          label: 'Harmonogram pracowników',
          routerLink: '/manager/company-worker-schedule'
        }
      ];
    }

    @HostListener('window:resize')
    onResize(): void {
      if(phoneView) {
        this.phoneView = phoneView;
      } else {
        this.phoneView = phoneView;
      }
    }

    changeLanguage(): void {
      if (this.selectedLanguage?.name === 'en') {
        this.appComponent.translate('en/global');
      } else if (this.selectedLanguage?.name === 'pl') {
        this.appComponent.translate('pl/global');
      }
    }

    openLoginDialog(type: string): void {
      const ref = this.dialogService.open(LoginDialogComponent, {
        header: this.translateService.instant('global.header.login'),
        width: phoneView || tabletView ? '60%': '35%',
        data: {
          type: type
        }
      });
      ref.onClose.subscribe((response) => this.handleLoginDialogResponse(response));
    }

    handleLoginDialogResponse(response: any): void {
      if(response) {
        localStorage.setItem('jwt', response);
        this.messageService.add({key: 'mainToast', severity:'success', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.loginSuccess')});
        window.location.reload();
      }
  }

  logoutAccount(): void {
    this.showMenu = false;
    localStorage.setItem('jwt', '');
    window.location.reload();
    //this.router.navigateByUrl('')
  }

  filterCompanies(event: any) {
    console.log(event.query);
  }

  onServiceChange(url: string, type: string): void {
    this.router.navigate([url], {queryParams: {type: type}})
  }
}
