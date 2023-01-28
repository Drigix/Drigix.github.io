import { Component, Input, OnInit } from "@angular/core";
import { ClientOpinions } from "src/app/entities/opinions/opinions.model";

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.scss']
})
export class OpinionCardComponent implements OnInit {

  @Input() companyOpinions: ClientOpinions[]  = [];
  @Input() page?: number;

  ngOnInit(): void {
    console.log(this.companyOpinions);
    console.log(this.page);
  }
}
