import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

export type EntityResponseType = HttpResponse<Employee>;
export type EntityArrayResponseType = HttpResponse<Employee[]>;

@Injectable({providedIn: 'root'})
export class EmployeeService {

    private resourceUrl = 'https://reservio.azurewebsites.net';
    private EMPLOYEES_URL = this.resourceUrl + '/Employees';

    constructor(private http: HttpClient) { }

    generateWorkerId(): Observable<any> {
        return this.http.post(this.EMPLOYEES_URL, { responseType: 'text' });
    }

    addWorker(id: string): Observable<any> {
        return this.http.put(`${this.EMPLOYEES_URL}/${id}`, id);
    }

    getWokers(): Observable<EntityArrayResponseType> {
        return this.http.get<Employee[]>(this.EMPLOYEES_URL, {observe: 'response'});
    }

}
