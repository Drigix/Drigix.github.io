import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CompanyCardComponent } from './company-card.component';

@NgModule({
  declarations: [
    CompanyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    ButtonModule,
    FormsModule
  ],
  exports: [
    CompanyCardComponent
  ]
})
export class CompanyCardModule { }
