interface IWorkingDays {
  dayName?: string | null;
  startAt?: string | null;
  endAt?: string | null;
}

export class WorkingDays implements IWorkingDays {
  constructor(
    public dayName?: string | null,
    public startAt?: string | null,
    public endAt?: string | null
  ) {}
}
