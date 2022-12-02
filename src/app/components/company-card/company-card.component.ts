import { Router } from '@angular/router';
import { Company } from './../../entities/company/company.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {

  @ViewChild('element') element?: ElementRef;

  @Input() listOfCompanies: Company[] = [];
  @Input() page?: number;

  list = [1,2,3];
  rating = 3;
  amountOfRating = 120;
  companyName = 'Nazwa firmy';
  companyAddress = 'Zwycięstwa 10, 42-100, Gliwice';
  styleToCard = 'inner';
  hideLeftArrow = false;
  currentDate: Date = new Date();
  currentTime: number | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentTime = this.currentDate.getHours();
  }

  onCompanySelect(id: string, name: string): void {
    this.router.navigate([`company/${id}`]);
  }

  timeToNumber(time: string): number {
    return Number(time.slice(0,2));
  }
}
