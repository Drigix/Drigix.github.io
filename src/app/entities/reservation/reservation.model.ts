interface IReservation {
  serviceId?: string | null;
  employeeId?: string | null;
  startTime?: string | null;
  date?: string | null;
  note?: string | null;
}

export class Reservation implements IReservation {
  constructor(
    public serviceId?: string | null,
    public employeeId?: string | null,
    public startTime?: string | null,
    public date?: string | null,
    public note?: string | null,
  ) {}
}
