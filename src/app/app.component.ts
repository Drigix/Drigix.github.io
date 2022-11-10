import { AuthorityComponent } from './account/authority/authority.component';
import { AuthorityService } from './account/authority/service/authority.service';
import { AfterViewInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService, MessageService]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Project_IO';

  constructor(private config: PrimeNGConfig, private translateService: TranslateService, private router: Router,
    private authorityComponent: AuthorityComponent) {}

  ngOnInit(): void {
    this.config.ripple = true;
    this.authorityComponent.checkIsUserLogin();
    this.translateService.setDefaultLang('pl/global');
  }

  ngAfterViewInit(): void {
    const DSLScript = document.createElement('script');
    DSLScript.src = 'https://maps.googleapis.com/maps/api/js?key=xxxxx'; // replace by your API key
    DSLScript.type = 'text/javascript';
    document.body.appendChild(DSLScript);
    document.body.removeChild(DSLScript);
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }
}
