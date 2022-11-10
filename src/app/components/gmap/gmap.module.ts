import { GMapComponent } from './gmap.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {GMapModule} from 'primeng/gmap';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    GMapComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    GMapModule,
    GoogleMapsModule
  ],
  exports:[
    GMapComponent
  ]
})
export class MapModule{}
