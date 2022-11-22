import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/entities/company/company.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { globalHeaders } from 'src/app/account/authority/service/authority.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private resourceUrl = 'https://reservio.azurewebsites.net';
  private COMPANY_URL = this.resourceUrl + '/Companies';

  constructor(private http: HttpClient) {}

  create(company: Company): Observable<any> {
    return this.http.post(this.COMPANY_URL, company, {headers: globalHeaders});
  }
}
