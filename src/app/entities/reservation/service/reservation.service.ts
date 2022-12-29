import { HttpResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../reservation.model';

export type EntityResponseType = HttpResponse<Reservation>;
export type EntityArrayResponseType = HttpResponse<Reservation[]>;

@Injectable({providedIn: 'root'})
export class ReservationService {

    private resourceUrl = 'https://reservio.azurewebsites.net';
    private RESERVATION_URL = this.resourceUrl + '/Reservations';

    constructor(private http: HttpClient) { }

    create(reservation: Reservation): Observable<any> {
      return this.http.post(this.RESERVATION_URL, reservation);
    }
}
