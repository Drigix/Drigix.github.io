import { Employee } from './../../entities/employees/employee.model';
import { AuthorityService } from 'src/app/account/authority/service/authority.service';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges, TemplateRef, ViewChild } from "@angular/core";
import { ConfirmationService, LazyLoadEvent, SortEvent } from "primeng/api";
import { Table } from "primeng/table";
import { UniversalTableColumn } from "./column.model";
import * as moment from 'moment';
import * as _ from 'lodash';
import { Permission } from "src/app/entities/permission/permission.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnChanges {

  @ViewChild('table', { static: true }) table: Table | undefined;

  @Input() captionTemplate: TemplateRef<any> | null = null;
  @Input() headerTemplate: string | null = null;
  @Input() bodyTemplate: string | null = null;
  @Input() footerTemplate: string | null = null;

  @Input() values: any[] = [];
  @Input() columns: UniversalTableColumn[] = [];
  @Input() sortField: string | undefined;
  @Input() numerSort = false;
  @Input() showCaption = true;
  @Input() showTableName = false;
  @Input() tableName: string | null = null;

  @Input() expanded = false;
  @Input() permissions: Permission[] = [];

  @Input() selectMode: 'single' | 'multiple' = 'single';
  @Output() selected = new EventEmitter<any | any[]>();
  _selection: any | any[];
  set selection(selection) {
    this._selection = selection;
    this.selected.emit(this._selection);
  }
  get selection(): any | any[] {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._selection;
  }

  filteredValues: any[] = [];
  storagedData: any[] = [];
  lazyValues: any[] = [];
  searchText = '';
  loading = false;
  totalRecords = 0;
  disableTooltip = true;
  draggedRow: any;
  //  sortOrder = SortOrder.ASC;
  sortEvent: SortEvent | null = null;
  filterInitialised = false;
  img: HTMLElement | null = null;

  tableWithUnablePermissions: Permission[] = [];

  filterGlobal = _.debounce((filterString: string) => {
    this.searchText = filterString;
    const filteredData = this.storagedData.filter((data) => this.filterFunction(data));
    this.filterInitialised = true;
    this.values = filteredData;
    if (this.sortEvent !== null) {
      this.handleSort(this.sortEvent);
    }
    this.totalRecords = this.values.length;
    this.lazyValues = this.values;
    this.cd.detectChanges();
  }, 500, { trailing: true });

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2, private confirmationService: ConfirmationService,
    private translateService: TranslateService, private authorityService: AuthorityService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/prefer-optional-chain
    if (changes['values'] != null && changes['values']['currentValue'] != null) {
      this.setInitialValues();
    }
    this.cd.detectChanges();
  }

  resetSelection(): void {
    if (this.selectMode === 'multiple') {
      this.selection = [];
    } else {
      this.selection = null;
    }
  }

  loadDataOnScroll(event: LazyLoadEvent): void {
    if (this.values.length === 0) {
      return;
    }
    this.loading = true;
    const loadedData = this.values.slice(event.first, (event.first! + event.rows!));
    this.lazyValues.splice(event.first!, event.rows!, ...loadedData);
    event.forceUpdate!();
    this.loading = false;
  }


  enableTooltipIfNecessary(event: any): void{
    if (event.target.offsetWidth < event.target.scrollWidth) {
      this.disableTooltip = false;
    } else {
      this.disableTooltip = true;
    }
  }

  getInstanceType(value: any): string {
    if (moment(value, moment.ISO_8601, true).isValid() && value.toString().includes(':')) {
      return 'DATE';
    } else if (typeof (value) === 'boolean') {
      return 'BOOLEAN';
    }
    return 'UNKNOWN';
  }

  handleSort(event: SortEvent): void {
    this.sortEvent = event;
    this.values.sort((data1, data2) => {
      const value1 = data1[event.field!];
      const value2 = data2[event.field!];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      }
      else if (value1 != null && value2 == null) {
        result = 1;
      }
      else if (value1 == null && value2 == null) {
        result = 0;
      }
      else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }
      return (event.order! * result);
    });
    this.lazyValues = this.values;
    this.cd.detectChanges();
  }

  filterFunction(data: any): boolean {
    if (this.searchText && this.searchText.length > 0) {
      const searchStringArray = this.searchText.split(' ').filter((elem) => elem.trim() !== '');
      let foundElements = 0;
      if (searchStringArray.length > 0) {
        for (const search of searchStringArray) {
          let occurrence = false;
          this.columns.forEach((col) => {
            let stringValue = String(data[col['field']]);
            if (col.subField != null) {
              if (data[col['field']] != null) {
                stringValue = String(data[col['field']][col['subField']]);
              }
            }
            if (data[col['field']]) {
              if (this.isIsoDateString(data[col['field']]) || (col.subField != null && (this.isIsoDateString(data[col['field']][col['subField']])))) {
                if (this.filterDate(search.trim(), data[col['field']])) {
                  occurrence = true;
                }
              } else if (stringValue.toLowerCase().includes(search.trim().toLowerCase())) { occurrence = true; }
            }
          });
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (occurrence) {
            foundElements++;
          }
        }
      } else {
        return true;
      }
      if (searchStringArray.length === foundElements) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  filterDate(input: any, value: Date | string): boolean{
    let dateString;
    if (value.toString().includes('Z')) {
      dateString = moment(value).format('YYYY-MM-DD HH:mm:ss');
    } else {
      dateString = moment.parseZone(value).format('YYYY-MM-DD HH:mm:ss');
    }
    return dateString.includes(input) ? true : false ;
  }

  private isIsoDateString(value: string): boolean {
    return /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/.test(value);
  }

  private setInitialValues(): void {
    if (this.values.length > 0) {
      this.storagedData = this.values;
      this.totalRecords = this.values.length;
      this.lazyValues = this.storagedData.slice(0, this.table?.rows);
    } else {
      this.storagedData = [];
      this.totalRecords = 0;
      this.lazyValues = [];
    }
  }

  selectEmployee(event: any): void {
    console.log(event);
    if(this.selection === event) {
      this. selection = null;
    } else {
      this.selection = event;
    }
  }

  changePermissions(event: any): void {
    this.tableWithUnablePermissions = this.permissions;
    event.forEach((element: Permission) => {
      this.tableWithUnablePermissions.forEach((item, index) => {
        if(element.id === item.id) {
          this.tableWithUnablePermissions.splice(index, 1);
        }
      })
    });
  }

  addPermission(permission: Permission, ablePermissions: Permission[]): void {
    this.confirmationService.confirm({
      key: 'addPermissionDialog',
      header: this.translateService.instant('global.header.confirmAdd'),
      message: this.translateService.instant('global.message.confirmAdd'),
      accept: () => this.handleAddPermissionDialogResponse(permission, ablePermissions)
    });
  }

  deletePermission(permission: Permission, ablePermissions: Permission[]): void {
    this.confirmationService.confirm({
      key: 'deletePermissionDialog',
      header: this.translateService.instant('global.header.confirmDelete'),
      message: this.translateService.instant('global.message.confirmDelete'),
      accept: () => this.handleDeletePermissionDialogResponse(permission, ablePermissions)
    });
  }

  handleAddPermissionDialogResponse(permission: Permission, ablePermissions: Permission[]): void {
    ablePermissions.push(permission);
    this.tableWithUnablePermissions.forEach((item, index) => {
      if(item.id === permission.id) {
        this.tableWithUnablePermissions.slice(index, 1);
      }
    });
    const requestTable: string[] = [];
    ablePermissions.forEach((item) => {
      requestTable.push(item.id!);
    });
    const requestEmployee: Employee = this.selection;
    this.authorityService.changePermissions(requestEmployee.employeeId!, requestTable).subscribe(
      {
        next: () => {
          console.log('sukces');
        },
        error: () => {
          console.log('error');
        }
      }
    );
  }

  handleDeletePermissionDialogResponse(permission: Permission, ablePermissions: Permission[]): void {
    ablePermissions.forEach((item, index) => {
      if(permission.id === item.id) {
        ablePermissions.splice(index, 1);
      }
    })
    const requestTable: string[] = [];
    ablePermissions.forEach((item) => {
      requestTable.push(item.id!);
    });
    const requestEmployee: Employee = this.selection;
    this.authorityService.changePermissions(requestEmployee.employeeId!, requestTable).subscribe(
      {
        next: () => {
          console.log('sukces');
        },
        error: () => {
          console.log('error');
        }
      }
    );
  }

}
