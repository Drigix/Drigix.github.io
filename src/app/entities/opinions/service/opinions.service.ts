import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddClientOpinion, CompanyOpinions } from '../opinions.model';

export type EntityResponseType = HttpResponse<CompanyOpinions>;
export type EntityArrayResponseType = HttpResponse<CompanyOpinions[]>;

@Injectable({providedIn: 'root'})
export class OpinionsService {
  private resourceUrl = 'https://reservio.azurewebsites.net';
  private OPINIONS_URL = this.resourceUrl + '/Opinions';

  constructor(private http: HttpClient) { }

  findByCompanyId(id: string): Observable<EntityResponseType> {
    return this.http.get<CompanyOpinions>(`${this.OPINIONS_URL}/${id}`, { observe: 'response' });
  }

  create(opinion: AddClientOpinion, reservationId: string): Observable<any> {
    return this.http.post(this.OPINIONS_URL, opinion, {params: {reservationId: reservationId}});
  }
}
