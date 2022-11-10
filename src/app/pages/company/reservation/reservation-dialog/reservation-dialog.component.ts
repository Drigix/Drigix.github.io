import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {

  currentDate: Date = new Date();

  reservationDate: Date | null = null;

  ngOnInit(): void {

  }

  onDateSelect(): void {
    console.log(this.reservationDate);
  }
}
