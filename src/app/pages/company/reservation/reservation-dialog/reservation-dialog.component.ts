import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {

  currentDate: Date = new Date();

  tempDates: Date[] = [];

  reservationDate: Date | null = null;

  ngOnInit(): void {
    this.tempDates = [new Date(2022,10,10), new Date(2022,10,11), new Date(2022,10,12)];
  }

  onDateSelect(): void {
    console.log(this.reservationDate);
  }
}
