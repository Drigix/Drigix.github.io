import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginDialogComponent } from './login-dialog.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {KeyFilterModule} from 'primeng/keyfilter';


@NgModule({
  declarations: [
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TranslateModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    ProgressSpinnerModule,
    KeyFilterModule
  ],
  exports: [
    LoginDialogComponent
  ]
})
export class LoginDialogModule { }
