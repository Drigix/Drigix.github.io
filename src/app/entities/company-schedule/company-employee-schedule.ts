import { CompanySchedule } from './company-schedule.model';
interface ICompanyEmployeeSchedules {
  employeeId?: string | null;
  employeeName?: string | null;
  schedules?: CompanySchedule[] | null;
}

interface ICompanyEmployeeSchedule {
  employeeId?: string | null;
  employeeName?: string | null;
  shiftDate?: string | null;
  startTime?: string | null;
  endTime?: string | null;
}

export class CompanyEmployeeSchedules implements ICompanyEmployeeSchedules {
  constructor(
    public employeeId?: string | null,
    public employeeName?: string | null,
    public schedules?: CompanySchedule[] | null
  ){}
}

export class CompanyEmployeeSchedule implements ICompanyEmployeeSchedule {
  constructor(
    public employeeId?: string | null,
    public employeeName?: string | null,
    public shiftDate?: string | null,
    public startTime?: string | null,
    public endTime?: string | null,
  ) {}
}
