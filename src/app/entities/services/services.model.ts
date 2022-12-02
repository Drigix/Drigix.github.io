interface IServices {
  id?: string | null;
  name?: string | null;
  duration?: string | null;
  price?: number | null;
}

export class Services implements IServices {
  constructor(
    public id?: string | null,
    public name?: string | null,
    public duration?: string | null,
    public price?: number | null
  ) {}
}
