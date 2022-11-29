import { NavbarComponent } from './../navbar/navbar.component';
import { Component, HostListener, OnInit } from '@angular/core';
import { isUserLogin, USER_ROLE } from 'src/app/account/authority/authority.component';

export var phoneView = false;
export var tabletView = false;
export var computerView = true;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  logIn = false;
  isManagerLogged = '';

  constructor(private navbarComponent: NavbarComponent) {}

  ngOnInit(): void {
    this.checkResize();
    this.logIn = isUserLogin;
    this.isManagerLogged = USER_ROLE;
    if(this.isManagerLogged !== 'employee') {
      this.navbarComponent.setUserMenu();
    } else {
      this.navbarComponent.setMenagerMenu();
    }
  }

  checkResize(): void {
    if(window.innerWidth < 1280 && window.innerWidth > 700) {
      tabletView = true;
      phoneView = false;
      computerView = false;
     } else if ( window.innerWidth <= 700) {
       phoneView = true;
       tabletView = false;
       computerView = false;
     } else {
       computerView = true;
       phoneView = false;
       tabletView = false;
     }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if(event.target.innerWidth < 1280 && event.target.innerWidth > 700) {
     tabletView = true;
     phoneView = false;
     computerView = false;
    } else if ( event.target.innerWidth <= 700) {
      phoneView = true;
      tabletView = false;
      computerView = false;
    } else {
      computerView = true;
      phoneView = false;
      tabletView = false;
    }
  }


}
