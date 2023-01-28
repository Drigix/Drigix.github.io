import { ReservationService } from './../../entities/reservation/service/reservation.service';
import { MessageService } from 'primeng/api';
import { HttpResponse } from '@angular/common/http';
import { AuthorityService } from './../authority/service/authority.service';
import { TranslateService } from '@ngx-translate/core';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user/user.model';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Reservation, ReservationHistory } from 'src/app/entities/reservation/reservation.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user.profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  changeUserDataForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    surname: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)],
    ],
    birthDay: ['', [Validators.required]],
    email: [
      { value: '', disabled: true },
      [Validators.required, Validators.email],
    ],
    phoneNumber: ['', [Validators.required, Validators.pattern('[0-9 ]{11}')]],
    role: [{ value: '', disabled: true }, [Validators.required]],
  });

  items: any[] = [];
  isMenuProfile = true;
  isMenuHistory = false;
  isMenuSettings = false;
  user: User | null = null;
  changeUser: User | null = null;
  changeUserBirthday: Date | null = null;
  maxDateValue: Date = new Date();
  reservationHistory: ReservationHistory | null = null;
  reservationPage: number = 0;
  loading = true;

  constructor(
    public dialogService: DialogService,
    public translateService: TranslateService,
    private authorityService: AuthorityService,
    private messageService: MessageService,
    private fb: UntypedFormBuilder,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: this.translateService.instant('global.account.menu.profile'),
        icon: 'pi pi-id-card',
        command: () => this.changeMenu('profile'),
      },
      {
        label: this.translateService.instant('global.account.menu.history'),
        icon: 'pi pi-shopping-bag',
        command: () => this.changeMenu('history'),
      },
      {
        label: this.translateService.instant('global.account.menu.setting'),
        icon: 'pi pi-user-edit',
        command: () => this.changeMenu('settings'),
      },
    ];
    this.loadUserData();
  }

  loadUserData(): void {
    this.loading = true;
    this.authorityService.getUserData().subscribe((res: HttpResponse<User>) => {
      this.user = res.body ?? null;
      this.changeUser = { ...this.user };
      this.changeUserBirthday = new Date(this.changeUser.birthDay!);
      this.loading = false;
    });
  }

  loadReservationsHistory(): void {
    this.reservationService.findAll().subscribe(
      (res: HttpResponse<ReservationHistory>) => {
        this.reservationHistory = res.body;
      });
  }

  changeMenu(menuOption: string): void {
    if (menuOption === 'profile') {
      this.isMenuProfile = true;
      this.isMenuHistory = false;
      this.isMenuSettings = false;
    } else if (menuOption === 'history') {
      this.isMenuProfile = false;
      this.isMenuHistory = true;
      this.isMenuSettings = false;
      this.loadReservationsHistory();
    } else if (menuOption === 'settings') {
      this.isMenuProfile = false;
      this.isMenuHistory = false;
      this.isMenuSettings = true;
    }
  }

  changeUserData(): void {
    this.changeUser!.birthDay = this.changeUserBirthday?.toString();
    this.authorityService.changeUserData(this.changeUser!).subscribe({
      next: () => {
        this.messageService.add({
          key: 'mainToast',
          severity: 'success',
          summary: this.translateService.instant('global.message.success'),
          detail: this.translateService.instant(
            'global.message.userDataChangeSuccess'
          ),
        });
      },
      error: (error) => {
        this.messageService.add({
          key: 'mainToast',
          severity: 'error',
          summary: this.translateService.instant('global.message.error'),
          detail: this.translateService.instant(
            'global.message.userDataChangeError'
          ),
        });
      },
    });
  }

  changePassword(type: string): void {
    const ref = this.dialogService.open(LoginDialogComponent, {
      header: 'Zmiana',
      width: '25%',
      data: {
        type: type,
      },
    });
  }
}
