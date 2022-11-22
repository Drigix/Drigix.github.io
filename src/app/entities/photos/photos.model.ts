interface IPhotos {
  id?: number | null;
  url?: string | null;
  alternativeName?: string | null;
}

export class Photos implements IPhotos {
  constructor(
    public id?: number | null,
    public url?: string | null,
    public alternativeName?: string | null
  ) {}
}
