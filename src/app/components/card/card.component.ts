import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { phoneView, tabletView } from 'src/app/layouts/main/main.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild('element') element?: ElementRef;
  @ViewChild('carousel', {static: true}) carousel?: Carousel;

  listCompanies = [1,2,3,4];
  rating = 3;
  amountOfRating = 120;
  companyName = 'Nazwa firmy';
  companyAddress = 'Zwycięstwa 10, 42-100, Gliwice';
  styleToCard = 'inner';
  slideNumber = 0;
  distanceX = 0 ;
  numberVisible = 3;
  hideLeftArrow = false;
  tabletView = false;
  phoneView = false;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize(): void {
    if(phoneView) {
      this.numberVisible = 1;
      console.log(phoneView);
    } else if(tabletView) {
      this.numberVisible = 2;
      console.log(tabletView);
    } else {
      this.numberVisible = 3;
    }
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any): void {
  //   if(event.target.innerWidth < 1280 && event.target.innerWidth > 700) {
  //     //this.carousel!.numVisible = 2;
  //     this.numberVisible = 2;
  //     this.phoneView = false;
  //     this.tabletView = true;
  //   } else if ( event.target.innerWidth <= 700) {
  //     //this.carousel!.numVisible = 1;
  //     this.numberVisible = 1;
  //     this.tabletView = false;
  //     this.phoneView = true;
  //   } else {
  //     this.numberVisible = 3;
  //     this.carousel!.numVisible = 3;
  //     this.tabletView = false;
  //     this.phoneView = false;
  //   }
  // }
}
