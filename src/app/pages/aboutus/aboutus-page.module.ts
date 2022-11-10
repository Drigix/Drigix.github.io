import { ButtonModule } from 'primeng/button';
import { ComponentModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { AboutusPageComponent } from './aboutus-page.component';

@NgModule({
  declarations: [
    AboutusPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  exports: [
    AboutusPageComponent
  ]
})
export class ContactPageModule { }
