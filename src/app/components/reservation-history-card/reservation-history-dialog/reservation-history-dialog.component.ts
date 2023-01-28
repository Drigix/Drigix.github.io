import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { OpinionsService } from './../../../entities/opinions/service/opinions.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';
import { ReservationHistoryDetails } from 'src/app/entities/reservation/reservation.model';
import { AddClientOpinion } from 'src/app/entities/opinions/opinions.model';

@Component({
  selector: 'app-reservation-history-dialog',
  templateUrl: './reservation-history-dialog.component.html',
  styleUrls: ['./reservation-history-dialog.component.scss']
})

export class ReservationHistoryDialogComponent implements OnInit {

  opinion: AddClientOpinion = new AddClientOpinion();
  reservationDetails: ReservationHistoryDetails | null = null;
  rateAtmosphere: number = 0;
  rateService: number = 0;
  ratePrice: number = 0;
  content: string | null = null;

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig, private opinionsService: OpinionsService,
    private messageService: MessageService, private translateService: TranslateService) { }

  ngOnInit() {
    this.reservationDetails = this.config.data.reservationDetails;
    console.log(this.reservationDetails);
  }

  addOpinion(): void {
    const avgRate = (this.rateAtmosphere + this.rateService + this.ratePrice) / 3;
    this.opinion.content = this.content;
    this.opinion.rate = avgRate;

    this.opinionsService.create(this.opinion, this.reservationDetails?.id!).subscribe(
      {
        next: () => {
          this.messageService.add({key: 'mainToast', severity: 'success', summary: this.translateService.instant('global.message.success'),
          detail: 'Dodano opinię do rezezrwacji!'});
          this.ref.close();
        },
        error: () => {
          this.messageService.add({key: 'mainToast', severity: 'error', summary: this.translateService.instant('global.message.error'),
          detail: 'Nie udało sie dodać opinii!'});
        }
      }
    )
  }
}
