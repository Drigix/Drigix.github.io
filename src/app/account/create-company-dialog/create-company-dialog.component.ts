import { Industry } from './../../entities/industry/industry.model';
import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: 'app-create-company-dialog',
  templateUrl : './create-company-dialog.component.html',
  styleUrls: ['./create-company-dialog.component.scss']
})
export class CreateCompanyDialog implements OnInit {

  uploadedFiles: any[] = [];
  showImage: any;

  industries: Industry[] = [new Industry(1, 'hairdresser'), new Industry(2, 'barber'), new Industry(3, 'tatoo')];

  newCompanyForm = this.fb.group({
    name: ['', [Validators.required]],
    industry: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    postalCode: ['', [Validators.required]]
  })

  constructor(private fb: UntypedFormBuilder, public ref: DynamicDialogRef, private messageService: MessageService) {}

  ngOnInit(): void {

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
    console.log('2');
  }

  onClose(): void {
    this.ref.close();
  }
}
