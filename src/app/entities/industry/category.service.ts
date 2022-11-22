import { HttpClient, HttpResponse } from '@angular/common/http';
import { Company } from 'src/app/entities/company/company.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { globalHeaders } from 'src/app/account/authority/service/authority.service';
import { Category, ICategory } from './category.model';

export type EntityResponseType = HttpResponse<ICategory>;
export type EntityArrayResponseType = HttpResponse<ICategory[]>;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private resourceUrl = 'https://reservio.azurewebsites.net';
  private CATEGORY_URL = this.resourceUrl + '/Categories';

  constructor(private http: HttpClient) {}

  findAll(): Observable<EntityArrayResponseType> {
    return this.http.get<ICategory[]>(this.CATEGORY_URL, { headers: globalHeaders, observe: 'response'});
  }
}
