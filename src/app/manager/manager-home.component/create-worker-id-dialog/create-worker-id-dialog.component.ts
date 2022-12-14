import { EmployeeService } from 'src/app/entities/employees/service/employee.service';
import { HttpResponse } from '@angular/common/http';
import { CompanyService } from 'src/app/entities/company/service/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-worker-id-dialog',
  templateUrl: './create-worker-id-dialog.component.html'
})

export class CreateWorkerIdDialogComponent implements OnInit {

  workerId: any | null = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.generateWorkerId();
  }

  generateWorkerId(): void {
    this.employeeService.generateWorkerId().subscribe(
      (res: HttpResponse<any>) => {
        this.workerId = res;
      });
  }
}
