import { FooterModule } from './../footer/footer.module';
import { NavbarModule } from './../navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainComponent } from './main.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    ToastModule
  ],
  providers: [
    NavbarComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
