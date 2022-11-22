import { Address } from './../../entities/company/address.model';
import { Company } from './../../entities/company/company.model';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/entities/industry/category.model';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-home',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit, OnChanges {

  @ViewChild('serviceType', { static: true }) serviceTypeDropdown: Dropdown | undefined;
  showFilter = true;

  industry: Category[] = [new Category('1', 'hairdresser'), new Category('2', 'barber'), new Category('3', 'tatoo')];
  address: Address = new Address(1, 'Katowice', 'Zwycięstwa 10', '42-600', 'Poland');

  // companies: Company[] = [new Company(1, 'Nazwa 1', this.industry[0],),
  // new Company(2, 'Nazwa 2', this.industry[1], 'Katowice', 'Zwycięstwa 10', '42-100', 4, '9', '20'),
  // new Company(3, 'Nazwa 3', this.industry[2], 'Warszawa', 'Zwycięstwa 10', '42-100', 5, '8', '17'),
  // new Company(4, 'Nazwa 1', this.industry[0], 'Gliwice', 'Zwycięstwa 10', '42-100', 3, '9', '18'),
  // new Company(5, 'Nazwa 2', this.industry[1], 'Katowice', 'Zwycięstwa 10', '42-100', 4, '9', '17'),
  // new Company(6, 'Nazwa 3', this.industry[2], 'Warszawa', 'Zwycięstwa 10', '42-100', 5, '9', '20'),
  // new Company(7, 'Nazwa 1', this.industry[0], 'Gliwice', 'Zwycięstwa 10', '42-100', 3, '9', '20'),
  // new Company(8, 'Nazwa 2', this.industry[1], 'Katowice', 'Zwycięstwa 10', '42-100', 4, '9', '20'),
  // new Company(9, 'Nazwa 3', this.industry[2], 'Warszawa', 'Zwycięstwa 10', '42-100', 5, '9', '20'),
  // new Company(10, 'Nazwa 1', this.industry[0], 'Gliwice', 'Zwycięstwa 10', '42-100', 3, '10', '21'),
  // new Company(11, 'Nazwa 2', this.industry[1], 'Katowice', 'Zwycięstwa 10', '42-100', 1, '9', '19'),
  // new Company(12, 'Nazwa 3', this.industry[2], 'Warszawa', 'Zwycięstwa 10', '42-100', 1, '8', '18')];

  companies: Company[] = [new Company()];

  tempList: Company[] = this.companies;

  cities = ['Gliwice', 'Katowice', 'Zabrze'];
  industries = ['hairdresser', 'barber', 'tatoo', 'beautician', 'spa', 'piercing'];
  selectedCity: string[] = [];
  passedServiceType: any;
  selectedServiceType: string = '';
  companyPage = 0;

  filterBy = ['Najlepsze oceny', 'Najgorsze oceny', 'Od najtańszych', 'Od najdroższych'];

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(v => this.passedServiceType = window.history.state);
    this.tempList = this.companies;
    this.selectedServiceType = this.passedServiceType.type;
    this.filterByIndustry();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onShowFilter(): void {
    this.showFilter = !this.showFilter;
  }

  filterByIndustry(): void {
    this.companies = this.tempList;
    if(this.selectedServiceType !== null && this.selectedServiceType !== undefined) {
      this.companies = this.companies.filter((item) => item.categoryId === this.selectedServiceType);
    }
  }

  filterByCities(): void {
    this.filterByIndustry();
    if(this.selectedCity.length !== 0) {
      this.companies = this.companies.filter((item) =>
        this.selectedServiceType ? item.address!.city === this.selectedCity[0] && item.categoryId === this.selectedServiceType
        :item.address!.city === this.selectedCity[0]);
    }
  }

  changeServiceType(type: string): void {
    this.selectedServiceType = type;
    this.filterByIndustry();
  }

  changePage(event: any): void {
    this.companyPage = event.page;
  }

}
