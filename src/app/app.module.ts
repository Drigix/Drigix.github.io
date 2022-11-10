import { AuthorityComponent } from './account/authority/authority.component';
import { ManagerModule } from './manager/manager.module';
import { CompanyPageModule } from './pages/company/company-page.module';
import { CompanyCardModule } from './components/company-card/company-card.module';
import { ServicesPageModule } from './pages/services/services-page.module';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ComponentModule } from './components/component.module';
import { CardModule } from './components/card/card.module';
import { HomeModule } from './pages/home/home.module';
import { MainModule } from './layouts/main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { LayoutsModule } from './layouts/layouts.module';
import { AccountModule } from './account/account.,module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { ContactPageModule } from './pages/contact/contact-page.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    LayoutsModule,
    AccountModule,
    ComponentModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ContactPageModule,
    TranslateModule,
    ServicesPageModule,
    CompanyPageModule,
    ManagerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
    })
  ],
  providers: [
    AuthorityComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
