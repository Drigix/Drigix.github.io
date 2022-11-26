import { HttpRequest } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { USER_ROLE } from './../authority/authority.component';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from 'src/app/entities/user/user.model';
import { AuthorityService } from '../authority/service/authority.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  passwordForm = this.fb.group({
    oldPassword: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
  })

  emailForm = this.fb.group({
    oldEmail: ['', [Validators.required]],
    newEmail: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required]]
  })

  phoneNumberForm = this.fb.group({
    oldPhoneNumber: ['', [Validators.required]],
    newPhoneNumber: ['', [Validators.required, Validators.minLength(9)]],
    password: ['', [Validators.required]]
  })

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  newAccountForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    birthDay: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern("[0-9 ]{11}")]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    confirmPassword: ['', [Validators.required]],
    role: ['', [Validators.required]]
  })

  forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required]]
  });

  currentPassword: string | null = null;
  newPassword: string | null = null;
  email: string | null = null;

  type: string | null = null;
  isReservation = false;

  name: any;

  confirmPassword: any;
  loading = false;
  roles= ['client', 'employee'];

  user: User = new User();
  maxDateValue: Date = new Date();

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder,
       private authorityService: AuthorityService, private messageService: MessageService, private router: Router, private translateService: TranslateService) {}

    ngOnInit(): void {
      this.type = this.config.data.type;
      this.isReservation = this.config.data.reservation;
      if(this.isReservation) {
        this.messageService.add({key: 'mainToast', severity: 'info', summary: this.translateService.instant('global.message.information'), detail :this.translateService.instant('global.message.infoToLogin')});
      }
    }

    onLogIn(): void {
      this.loading = true;
      this.authorityService.login(this.user!.email!, this.user!.password!).subscribe(
        (response) => {
          localStorage.setItem('jwt', response);
          window.location.reload();
          this.loading = false;
          this.messageService.add({key: 'mainToast', severity:'success', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.emailActive')});
        },
        (error) => {
          this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.error'), detail: this.translateService.instant('global.message.wrongEmailOrPassword')});
          this.loading = false;
        }
        );
    }

    onSignUp(): void {
      this.loading = true;
      if(this.user.password === this.confirmPassword) {
        this.authorityService.signup(this.user!).subscribe(
          (response) => {
            this.ref.close();
            this.messageService.add({key: 'mainToast', severity:'success', summary: 'Sukces', detail: this.translateService.instant('global.message.activatingEmail')});
            this.loading = false;
          },
          (error) => {
            this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.error'), detail: this.translateService.instant('global.message.signUpError')});
          }
        );
      } else {
        this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.error'), detail: this.translateService.instant('global.message.emailActive')});
      }
    }

    onPasswordChange(): void {
      this.loading = true;
      this.authorityService.changePassword(this.currentPassword!, this.newPassword!).subscribe(
        (response) => {
          this.loading = false;
          this.ref.close();
          this.messageService.add({key: 'mainToast', severity:'success', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.passwordChangeSuccess')});
        },
        (error) => {
          this.loading = false;
          this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.passwordChangeError')});
        }
      )
    }

    onEmailChange(): void {
      this.loading = true;
    }

    onPhonenumberChange(): void {
      //this.loading = true;
    }

    onPasswordForgot(): void {
      this.loading = true;
      this.authorityService.resetPassword(this.email!).subscribe(
        (response) => {
          this.loading = false;
          this.ref.close();
          this.messageService.add({key: 'mainToast', severity:'success', summary: this.translateService.instant('global.message.success'), detail: this.translateService.instant('global.message.passwordForgotSuccess')});
        },
        (error) => {
          this.loading = false;
          this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.error'), detail: this.translateService.instant('global.message.passwordForgotError')});
        }
      )
    }

    onClose(): void {
      this.ref.close();
    }

    addNewAccountWindow(): void {
      this.type = 'newAccount';
    }

    forgotPasswordWindow(): void {
      this.type = 'forgotPassword';
    }

    checkPassword(): void {

    }
}
