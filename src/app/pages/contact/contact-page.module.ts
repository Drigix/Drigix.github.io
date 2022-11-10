import { ButtonModule } from 'primeng/button';
import { ContactPageComponent } from './contact-page.component';
import { ComponentModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion';
import {DividerModule} from 'primeng/divider';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextareaModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    AccordionModule,
    DividerModule,
    TranslateModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactPageModule { }
