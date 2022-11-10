import { Company } from './../../../entities/company/company.model';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Industry } from "src/app/entities/industry/industry.model";

@Component({
  selector: 'app-edit-company-dialog',
  templateUrl: './edit-company-dialog.component.html',
  styleUrls: ['./edit-company-dialog.component.scss']
})
export class EditCompanyDialogComponent implements OnInit {

  newCompanyForm = this.fb.group({
    name: ['', [Validators.required]],
    industry: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    postalCode: ['', [Validators.required]]
  });

  industries: Industry[] = [new Industry(1, 'hairdresser'), new Industry(2, 'barber'), new Industry(3, 'tatoo')];
  company: Company | null = null;

  constructor(private fb: UntypedFormBuilder, public ref: DynamicDialogRef, private messageService: MessageService,
    public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.company = this.config.data.company;
  }

  onSubmit(): void {
  }

  onClose(): void {
    this.ref.close();
  }
}
