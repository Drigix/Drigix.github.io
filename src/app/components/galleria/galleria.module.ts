import { ButtonModule } from 'primeng/button';
import { PhotoService } from './../photo-service/photo-service.service';
import { GalleriaComponent } from './galleria.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    GalleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    ButtonModule
  ],
  providers: [
    PhotoService
  ],
  exports: [
    GalleriaComponent
  ]
})
export class GalerryModule { }
