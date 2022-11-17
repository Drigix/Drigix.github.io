import { TranslateService } from '@ngx-translate/core';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user.profile.component.scss']
})
export class UserProfileComponent implements OnInit {

    items: any[] = [];
    isMenuProfile = true;
    isMenuHistory = false;
    isMenuSettings = false;
    user: User | null = null;

    name = 'Michał Ławinski';

    phoneNumber = '799987763';

    email = 'test@gmail.com';

    constructor(public dialogService: DialogService, public translateService: TranslateService) {}

    ngOnInit(): void {
      this.items = [
        {label: this.translateService.instant('global.account.menu.profile'), icon: 'pi pi-id-card', command: ()=> this.changeMenu('profile')},
        {label: this.translateService.instant('global.account.menu.history'), icon: 'pi pi-shopping-bag', command: ()=> this.changeMenu('history')},
        {label: this.translateService.instant('global.account.menu.setting'), icon: 'pi pi-user-edit', command: ()=> this.changeMenu('settings')}
      ];
      this.user = new User(null, 'Michał', 'Ławinski', 'test@gmail.com','123' , '9877655432', '02.02.2022', 'client');
    }

    changeMenu(menuOption: string): void {
      if(menuOption === 'profile') {
        this.isMenuProfile = true;
        this.isMenuHistory = false;
        this.isMenuSettings = false;
      } else if (menuOption === 'history') {
        this.isMenuProfile = false;
        this.isMenuHistory = true;
        this.isMenuSettings = false;
      } else if (menuOption === 'settings') {
        this.isMenuProfile = false;
        this.isMenuHistory = false;
        this.isMenuSettings = true;
      }
    }

    changePassword(type: string): void {
      const ref = this.dialogService.open(LoginDialogComponent,
         {
          header: 'Zmiana',
          width: '25%',
          data: {
            type: type
          }
         });
    }
 }
