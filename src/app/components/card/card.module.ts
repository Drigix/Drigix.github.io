import { ButtonModule } from 'primeng/button';
import { CardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    CarouselModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
