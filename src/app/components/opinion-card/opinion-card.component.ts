import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.scss']
})
export class OpinionCardComponent implements OnInit {

  @Input() companyOpinions: any[]  = [];
  @Input() page?: number;

  ngOnInit(): void {
    console.log(this.page);
  }
}
