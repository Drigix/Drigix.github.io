import { CompanyService } from './../../entities/company/service/company.service';
import { HttpResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/entities/industry/category.service';
import { Address } from './../../entities/company/address.model';
import { Company } from './../../entities/company/company.model';
import { ChangeDetectorRef, Component, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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

  typeId: string | null = null;

  showFilter = true;
  industries: Category[] = [];
  companies: Company[] = [];
  tempList: Company[] = [];
  loading = false;

  cities = ['Gliwice', 'Katowice', 'Zabrze'];
  selectedCity: string[] = [];
  passedServiceType: any;
  selectedIndustry: Category | null = null;
  companyPage = 0;
  filterBy = ['Najlepsze oceny', 'Najgorsze oceny', 'Od najtańszych', 'Od najdroższych'];

  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef, private categoryService: CategoryService,
    private companyService: CompanyService, private ngZone: NgZone) {
      this.route.queryParams.subscribe(
        params => {
          this.typeId = params['type'];
          this.loadIndustries();
        });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(2);
  }

  loadIndustries(): void {
    this.loading = true;
    this.categoryService.findAll().subscribe(
      (res: HttpResponse<Category[]>) => {
        this.industries = res.body ?? [];
        this.industries.forEach((item) => {
          if(item.code === this.typeId) {
            this.selectedIndustry = item;
            this.filterByIndustry();
            this.cd.detectChanges();
          }
        })
      });
  }

  onShowFilter(): void {
    this.showFilter = !this.showFilter;
  }

  filterByIndustry(): void {
    this.companyService.findWithIndustryId(this.selectedIndustry!.code!).subscribe(
      (res: HttpResponse<Company[]>) => {
        //setTimeout(()=> {this.ngZone.run(() => {this.companies = res.body ?? []}), 1000});
        this.companies = res.body ?? [];
        this.loading = false;
      });
  }

  filterByCities(): void {
    this.filterByIndustry();
    // if(this.selectedCity.length !== 0) {
    //   this.companies = this.companies.filter((item) =>
    //     this.selectedServiceType ? item.address!.city === this.selectedCity[0] && item.categoryId === this.selectedServiceType
    //     :item.address!.city === this.selectedCity[0]);
    // }
  }

  changePage(event: any): void {
    this.companyPage = event.page;
  }

}
