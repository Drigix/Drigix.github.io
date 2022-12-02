import { HttpClient, HttpResponse } from '@angular/common/http';
import { Company } from 'src/app/entities/company/company.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

export type EntityResponseType = HttpResponse<Company>;
export type EntityArrayResponseType = HttpResponse<Company[]>;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private resourceUrl = 'https://reservio.azurewebsites.net';
  private COMPANY_URL = this.resourceUrl + '/Companies';

  constructor(private http: HttpClient) {}

  create(company: Company): Observable<any> {
    return this.http.post(this.COMPANY_URL, company);
  }

  findWithIndustryId(categoryId: string): Observable<EntityArrayResponseType> {
    return this.http.get<Company[]>(`${this.COMPANY_URL}/${categoryId}`, {observe: 'response'});
  }

  findCompanyById(companyId: string): Observable<EntityResponseType> {
    return this.http.get<Company>(`${this.COMPANY_URL}/${companyId}/details`, { observe: 'response' })
  }
}
