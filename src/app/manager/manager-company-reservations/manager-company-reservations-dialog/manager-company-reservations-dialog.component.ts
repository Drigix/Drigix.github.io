import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'app-manager-company-reservations-dialog',
  templateUrl: './manager-company-reservations-dialog.component.html',
  styleUrls: ['./manager-company-reservations-dialog.component.scss']
})
export class ManagerCompanyReservationsDialogComponent implements OnInit {

  addReservationForm = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    worker: ['', Validators.required],
    service: ['', Validators.required]
  });

  name: any;

  edit: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.edit = this.config.data.edit;
  }

  onSubmit(): void {
    console.log(this.name);
  }

  onClose(): void {
    this.ref.close();
  }
}
