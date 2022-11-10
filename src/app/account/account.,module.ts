import { CreateCompanyDialogModule } from './create-company-dialog/create-company-dialog.module';
import { LoginDialogModule } from './login-dialog/login-dialog.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    UserProfileModule,
    LoginDialogModule,
    CreateCompanyDialogModule
  ]
})
export class AccountModule { }
