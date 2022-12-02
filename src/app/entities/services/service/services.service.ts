import { Services } from './../services.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type EntityResponseType = HttpResponse<Services>;
export type EntityArrayResponseType = HttpResponse<Services[]>;

@Injectable({providedIn: 'root'})
export class ServicesService {
  private resourceUrl = 'https://reservio.azurewebsites.net';
  private SERVICES_URL = this.resourceUrl + '/Services';

  constructor(private http: HttpClient) {}

  findAll(): Observable<EntityArrayResponseType> {
    return this.http.get<Services[]>(this.SERVICES_URL, { observe: 'response' });
  }

  create(service: Services): Observable<any> {
    return this.http.post(this.SERVICES_URL, service);
  }
}
