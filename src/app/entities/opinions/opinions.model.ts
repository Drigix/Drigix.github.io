interface IOpinions {
  average?: number | null;
  count?: number | null;
}

interface ICompanyOpinions {
  companyId?: string | null;
  averageRate?: number | null;
  opinions?: ClientOpinions[] | null;
}

interface IClientOpinions {
  content?: string | null;
  rate?: number | null;
  employee?: string | null;
  service?: string | null;
}

interface IAddClientOpinion {
  content?: string | null;
  rate?: number | null;
}

export class Opinions implements IOpinions {
  constructor(
    public average?: number | null,
    public count?: number | null
  ) {}
}

export class CompanyOpinions implements ICompanyOpinions {
  constructor(
  public companyId?: string | null,
  public averageRate?: number | null,
  public opinions?: ClientOpinions[] | null
  ) {}
}

export class ClientOpinions implements IClientOpinions {
  constructor(
  public content?: string | null,
  public rate?: number | null,
  public employee?: string | null,
  public service?: string | null
  ) {}
}

export class AddClientOpinion implements IAddClientOpinion {
  constructor(
    public content?: string | null,
    public rate?: number | null
  ) {}
}

