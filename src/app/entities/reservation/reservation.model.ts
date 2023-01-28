interface IReservation {
  serviceId?: string | null;
  employeeId?: string | null;
  startTime?: string | null;
  date?: string | null;
  note?: string | null;
}

interface IReservationHistory {
  reservations?: ReservationHistoryDetails[] | null;
}

interface IReservationHistoryDetails {
  companyId?: string | null;
  companyName?: string | null;
  date?: string | null;
  employeeId?: string | null;
  employeeName?: string | null;
  endsAt?: string | null;
  id?: string | null;
  isCancelled?: boolean | null;
  price?: string | null;
  serviceId?: string | null;
  serviceName?: string | null;
  startsAt?: string | null;
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

export class ReservationHistory implements IReservationHistory {
  constructor(
    public reservations?: ReservationHistoryDetails[] | null
  ) {}
}

export class ReservationHistoryDetails implements IReservationHistoryDetails {
  constructor(
  public companyId?: string | null,
  public companyName?: string | null,
  public date?: string | null,
  public employeeId?: string | null,
  public employeeName?: string | null,
  public endsAt?: string | null,
  public id?: string | null,
  public isCancelled?: boolean | null,
  public price?: string | null,
  public serviceId?: string | null,
  public serviceName?: string | null,
  public startsAt?: string | null
  ) {}
}
