interface ICompanyAvailableSchedule {
  durationInMinutes?: string | null;
  employees?: CompanyAvailableScheduleEmployee[] | null;
  serviceName?: string | null;
}

interface ICompanyAvailableScheduleEmployee {
  employeeId?: string | null;
  employeeName?: string | null;
  terms?: string[] | null;
}

export class CompanyAvailableSchedule implements ICompanyAvailableSchedule {
  constructor(
    public durationInMinutes?: string | null,
    public employees?: CompanyAvailableScheduleEmployee[] | null,
    public serviceName?: string | null
  ){}
}

export class CompanyAvailableScheduleEmployee implements ICompanyAvailableScheduleEmployee {
  constructor(
    public employeeId?: string | null,
    public employeeName?: string | null,
    public terms?: string[] | null
  ){}
}
