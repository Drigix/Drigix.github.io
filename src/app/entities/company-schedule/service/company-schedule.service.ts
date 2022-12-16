import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySchedule } from '../company-schedule.model';

export type EntityResponseType = HttpResponse<CompanySchedule>;
export type EntityArrayResponseType = HttpResponse<CompanySchedule[]>;

@Injectable({providedIn: 'root'})
export class CompanyScheduleService {

    private resourceUrl = 'https://reservio.azurewebsites.net';
    private SCHEDULES_URL = this.resourceUrl + '/Schedules';

    constructor(private http: HttpClient) { }

    create(companySchedule: CompanySchedule): Observable<any> {
      return this.http.post(this.SCHEDULES_URL, companySchedule);
    }

    findAll(): Observable<EntityArrayResponseType> {
      return this.http.get<CompanySchedule[]>(this.SCHEDULES_URL, {observe: 'response'});
    }

}
