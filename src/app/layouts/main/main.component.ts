import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { isUserLogin, USER_ROLE } from 'src/app/account/authority/authority.component';

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
    this.logIn = isUserLogin;
    this.isManagerLogged = USER_ROLE;
    if(this.isManagerLogged !== 'employee') {
      this.navbarComponent.setUserMenu();
    } else {
      this.navbarComponent.setMenagerMenu();
    }
  }


}
