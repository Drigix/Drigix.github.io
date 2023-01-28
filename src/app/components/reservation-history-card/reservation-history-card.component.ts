import { DialogService } from 'primeng/dynamicdialog';
import { ReservationHistory, ReservationHistoryDetails } from './../../entities/reservation/reservation.model';
import { Component, OnInit, Input } from '@angular/core';
import { ReservationHistoryDialogComponent } from './reservation-history-dialog/reservation-history-dialog.component';

@Component({
  selector: 'app-reservation-history-card',
  templateUrl: './reservation-history-card.component.html',
  styleUrls: ['./reservation-history-card.component.scss']
})

export class ReservationHistoryCardComponent implements OnInit {

  @Input() reservationHistory: ReservationHistoryDetails[] = [];
  @Input() page: number = 0;

  constructor(private dialogService: DialogService) { }

  ngOnInit() { }

  openReservationHistoryDialog(reservation: ReservationHistoryDetails): void {
    this.dialogService.open(ReservationHistoryDialogComponent, {
      header: 'Dodawanie opinii',
      width: '40%',
      data: {
        reservationDetails: reservation
      }
    });
  }
}
