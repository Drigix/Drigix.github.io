import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild('element') element?: ElementRef;

  listCompanies = [1,2,3,4];
  rating = 3;
  amountOfRating = 120;
  companyName = 'Nazwa firmy';
  companyAddress = 'Zwycięstwa 10, 42-100, Gliwice';
  styleToCard = 'inner';
  slideNumber = 0;
  distanceX = 0 ;
  hideLeftArrow = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(direction: string): void {
    this.hideLeftArrow = false;
    let distance = this.element?.nativeElement.getBoundingClientRect().x - 189 ;
    console.log(distance);
    console.log(this.element?.nativeElement);
    if (direction === 'left' && this.slideNumber > 0) {
        this.slideNumber = this.slideNumber - 1;
        this.distanceX = distance + 527.7;
    }
    if (direction === 'right' && this.slideNumber < 5) {
        this.slideNumber = this.slideNumber + 1;
        this.distanceX = distance - 527.7;
    }
  }

  getTransform(): string {
    return `translateX(${this.distanceX}px)`;
  }
}
