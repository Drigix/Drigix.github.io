import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'app-manager-company-workers-dialog',
  templateUrl: './manager-company-workers-dialog.component.html',
  styleUrls: ['./manager-company-workers-dialog.component.scss']
})
export class ManagerCompanyWorkersDialogComponent implements OnInit {

  addCompanyWorkerForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    id: ['', Validators.required]
  });

  name: any;
  surname: any;
  id: any;

  edit: any;

  workers: any[] = [];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.edit = this.config.data.edit;
    this.workers = this.config.data.workers;
  }

  onSubmit(): void {
    const temp = {name: this.name, surname: this.surname, id: this.id};
    //this.workers.push(temp);
    this.config.data.workers = [...this.config.data.workers, temp];
    console.log(this.config.data.workers);
  }

  onClose(): void {
    this.ref.close();
  }
}
