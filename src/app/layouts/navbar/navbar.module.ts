import { ServicesPageComponent } from './../../pages/services/services-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {MenuModule} from 'primeng/menu'
import {DropdownModule} from 'primeng/dropdown';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AvatarGroupModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    MenuModule,
    DropdownModule,
    FormsModule,
    TranslateModule,
    OverlayPanelModule,
    AutoCompleteModule
  ],
  providers: [
    ServicesPageComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
