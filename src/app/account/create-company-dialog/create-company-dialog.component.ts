import { AuthorityService } from './../authority/service/authority.service';
import { TranslateService } from '@ngx-translate/core';
import { Address } from 'src/app/entities/company/address.model';
import { Company } from 'src/app/entities/company/company.model';
import { Category, ICategory   } from '../../entities/industry/category.model';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import { CategoryService } from 'src/app/entities/industry/category.service';
import { HttpResponse } from '@angular/common/http';
import { CompanyService } from 'src/app/entities/company/service/company.service';

@Component({
  selector: 'app-create-company-dialog',
  templateUrl : './create-company-dialog.component.html',
  styleUrls: ['./create-company-dialog.component.scss']
})
export class CreateCompanyDialog implements OnInit {

  uploadedFiles: any[] = [];
  showImage: any;

  industries: Category[] = [];
  createdCompany: Company | null = new Company();
  createdCompanyAddress: Address | null = new Address();
  createdCompanyCategory: Category | null = null;

  newCompanyForm = this.fb.group({
    name: ['', [Validators.required]],
    nip: ['', [Validators.required]],
    industry: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    postalCode: ['', [Validators.required]],
    country: ['', [Validators.required]],
    logo: ['']
  })

  constructor(private fb: UntypedFormBuilder, public ref: DynamicDialogRef, private messageService: MessageService, private translateService: TranslateService,
    private categoryService: CategoryService, private companyService: CompanyService, private authorityService: AuthorityService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.findAll().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.industries = res.body ?? [];
      }
    )
  }

  onUpload(event: any): void {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
    this.showImage = this.uploadedFiles[0].name;
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onSubmit(): void {
    console.log(this.createdCompany);
    this.createdCompany!.categoryId = this.createdCompanyCategory?.code;
    this.createdCompany!.address = this.createdCompanyAddress;
    this.createdCompany!.logo = 'https://d375139ucebi94.cloudfront.net/region2/pl/104637/biz_photo/c732831d4fdd4ca6a79ba95521b7e468.jpeg?size=640x427';
    // this.createdCompany!.photos = null;
    // this.createdCompany!.descrption = null;
    this.companyService.create(this.createdCompany!).subscribe(
      {
        next: () => {
          this.ref.close();
        },
        error: () => {
          this.messageService.add({key: 'mainToast', severity:'error', summary: this.translateService.instant('global.message.error'), detail: this.translateService.instant('global.message.createCompanyError')});
        }
      }
    )

  }

  onClose(): void {
    this.ref.close();
  }
}
