interface ILanguage {
  name?: string;
  svg?: string;
}

export class Language implements ILanguage {
  constructor(
    public name?: string,
    public svg?: string
  ) {}
}
