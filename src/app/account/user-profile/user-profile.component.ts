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

    user: User | null = null;

    name = 'Michał Ławinski';

    phoneNumber = '799987763';

    email = 'test@gmail.com';

    constructor(public dialogService: DialogService, public translateService: TranslateService) {}

    ngOnInit(): void {
      this.user = new User(null, 'Michał', 'Ławinski', 'test@gmail.com','123' , '9877655432', '02.02.2022', 'client');
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
