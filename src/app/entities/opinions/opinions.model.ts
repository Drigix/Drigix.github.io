interface IOpinions {
  average?: number | null;
  count?: number | null;
}

export class Opinions implements IOpinions {
  constructor(
    public average?: number | null,
    public count?: number | null
  ) {}
}
