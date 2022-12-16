interface ICompanySchedule {
  shiftDate?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  employeeId?: string | null;
}

interface IShiftDate {
  year?: number | null;
  month?: number | null;
  day?: number | null;
  dayOfWeek?: number | null;
}

interface IStartTime {
  hour?: number | null;
  minute?: number | null;
}

interface IEndTime {
  hour?: number | null;
  minute?: number | null;
}

export class CompanySchedule implements ICompanySchedule {
  constructor(
    public shiftDate?: string | null,
    public startTime?: string | null,
    public endTime?: string | null,
    public employeeId?: string | null
  ) {}
}

export class ShiftDate implements IShiftDate {
  constructor(
    public year?: number | null,
    public month?: number | null,
    public day?: number | null,
    public dayOfWeek?: number | null
  ) {}
}

export class StartTime implements IStartTime {
  constructor(
    public hour?: number | null,
    public minute?: number | null
  ) {}
}

export class EndTime implements IEndTime {
  constructor(
    public hour?: number | null,
    public minute?: number | null
  ) {}
}
