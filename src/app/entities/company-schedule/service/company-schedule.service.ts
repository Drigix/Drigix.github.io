import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyAvailableSchedule } from '../company-available-schedule.model';
import { CompanySchedule } from '../company-schedule.model';

export type EntityResponseType = HttpResponse<CompanySchedule>;
export type EntityArrayResponseType = HttpResponse<CompanySchedule[]>;

export type EntityResponseTypeAvailableSchedule = HttpResponse<CompanyAvailableSchedule>;
export type EntityArrayResponseTypeAvailableSchedule = HttpResponse<CompanyAvailableSchedule[]>;

@Injectable({providedIn: 'root'})
export class CompanyScheduleService {

    private resourceUrl = 'https://reservio.azurewebsites.net';
    private SCHEDULES_URL = this.resourceUrl + '/Schedules';
    private AVAILABLE_SCHEDULE_URL = this.SCHEDULES_URL + '/available-terms';

    constructor(private http: HttpClient) { }

    create(companySchedule: CompanySchedule): Observable<any> {
      return this.http.post(this.SCHEDULES_URL, companySchedule);
    }

    findAll(): Observable<EntityArrayResponseType> {
      return this.http.get<CompanySchedule[]>(this.SCHEDULES_URL, {observe: 'response'});
    }

    findAvailableSchedulesForService(serviceId: string, date: string):Observable<EntityResponseTypeAvailableSchedule> {
      return this.http.get<CompanyAvailableSchedule>(`${this.AVAILABLE_SCHEDULE_URL}/${serviceId}`, { params:{date: date}, observe: 'response'});
    }
}
