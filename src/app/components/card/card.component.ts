import { Router } from '@angular/router';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Carousel } from 'primeng/carousel';
import { ICategoryCard } from 'src/app/entities/industry/category-card.model';
import { phoneView, tabletView } from 'src/app/layouts/main/main.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild('element') element?: ElementRef;
  @ViewChild('carousel', {static: true}) carousel?: Carousel;
  @Input() formName?: FormGroup;
  @Input() availableTermsTemplate = false;
  @Input() industriesTemplate = false;
  @Input() availableTerms?: string[];
  @Input() selectedTerm: string | null = null;
  @Output() term = new EventEmitter<any | any[]>();

  categoryCardList: ICategoryCard[] = [];


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

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.industriesTemplate) {
      this.setIndustries();
    }
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

  onTermSelect(event: any): void {
    this.selectedTerm = event;
    this.exportCompany();
  }

  exportCompany(): void {
    this.term.emit(this.selectedTerm!);
  }

  onServiceChange(type: string): void {
    this.router.navigate(['/services'], {queryParams: {type: type}});
  }

  setIndustries(): void {
    this.categoryCardList = [
      {
        code:'7228be80-f7f2-4977-a1f5-770ff986537a',
        name: 'Fryzjer',
        img: 'https://piotrsierpinski.pl/wp-content/uploads/2021/06/fryzjer-poznan.jpg'
      },
      {
        code:'7228be80-f7f2-4977-a1f5-770ff986537a',
        name: 'Barber',
        img: 'https://barberstore.pl/img/cms/strzy%C5%BCenie%20w%20barbershopie.jpg'
      },
      {
        code:'7228be80-f7f2-4977-a1f5-770ff986537a',
        name: 'Kosmetyka',
        img: 'https://dbmzwqcmiz51l.cloudfront.net/images/p-64772-jakie-uslugi-swiadcza-mobilne-kosmetyczki.jpg'
      },
      {
        code:'d67cdf00-c65a-44ad-8f17-b4580f79e5b0',
        name: 'Tatuaż',
        img: 'https://www.miedzynami.net.pl/wp-content/uploads/2021/10/tatuaz-wroclaw.jpg'
      },
      {
        code:'d67cdf00-c65a-44ad-8f17-b4580f79e5b0',
        name: 'Piercing',
        img: 'https://images.squarespace-cdn.com/content/v1/584c5737ebbd1a316fc7faf1/1635192643527-Y3IVZ5C09GEL6S9CV029/industrial.png?format=1000w'
      },
      {
        code:'d67cdf00-c65a-44ad-8f17-b4580f79e5b0',
        name: 'Spa',
        img: 'https://cdn.pkt.pl/f-26466-mobilna-kosmetyczka-niezwykla-wygoda-dla-kazdej-kobiety.jpg'
      },
      {
        code:'d67cdf00-c65a-44ad-8f17-b4580f79e5b0',
        name: 'Stomatologia',
        img: 'https://www.miedzynami.net.pl/wp-content/uploads/2021/10/tatuaz-wroclaw.jpg'
      },
    ];
  }
}
