import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { USER_ROLE } from 'src/app/account/authority/authority.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isManagerLogged = '';

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.isManagerLogged = USER_ROLE;
  }

}
