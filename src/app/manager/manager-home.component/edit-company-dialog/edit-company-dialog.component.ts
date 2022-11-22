import { Company } from './../../../entities/company/company.model';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Category } from "src/app/entities/industry/category.model";
import { CategoryService } from 'src/app/entities/industry/category.service';
import { HttpResponse } from '@angular/common/http';

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

  industries: Category[] = [];
  company: Company | null = null;

  constructor(private fb: UntypedFormBuilder, public ref: DynamicDialogRef, private messageService: MessageService,
    public config: DynamicDialogConfig, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.company = this.config.data.company;
  }

  loadCategories(): void {
    this.categoryService.findAll().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.industries = res.body ?? [];
      }
    )
  }

  onSubmit(): void {
  }

  onClose(): void {
    this.ref.close();
  }
}
