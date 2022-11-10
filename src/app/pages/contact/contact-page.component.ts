import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  helpForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    email: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

}
