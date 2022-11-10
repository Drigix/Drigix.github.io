import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';

import { AppRoutingModule } from '../app-routing.module';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    MainModule,
    NavbarModule,
    FooterModule
  ]
})
export class LayoutsModule { }
