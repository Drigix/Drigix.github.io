interface IAddress {
  id?: number | null;
  city?: string | null;
  street?: string | null;
  zipCode?: string | null;
  country?: string | null;
}

export class Address implements IAddress {
  constructor(
    public id?: number | null,
    public city?: string | null,
    public street?: string | null,
    public zipCode?: string | null,
    public country?: string | null
  ) {}
}
