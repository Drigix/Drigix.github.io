import { ButtonModule } from 'primeng/button';
import { ManagerModule } from './../../manager/manager.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentModule } from './../../components/component.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    CardModule,
    TranslateModule,
    ManagerModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
