import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { UniversalTableColumn } from "src/app/components/table/column.model";

@Component({
  selector: 'app-manager-company-worker-schedule-dialog',
  templateUrl: './manager-company-worker-schedule-dialog.component.html',
  styleUrls: ['./manager-company-worker-schedule-dialog.component.scss']
})
export class ManagerCompanyWorkerScheduleDialogComponent implements OnInit {

  workerScheduleForm = this.fb.group({
    worker: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required]
  });

  name: any;

  edit: any;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.edit = this.config.data.edit;
    if(this.edit) {
      this.name = this.config.data.worker.name;
    }
  }

  onTimeSelect(event: any): void {
    const date = event;
    console.log(date.getHours(), date.getMinutes());
  }

  onSubmit(): void {
    console.log(this.name);
  }

  onClose(): void {
    this.ref.close();
  }
}
