export interface ICategory {
  code?: string | null;
  name?: string | null;
}

export class Category implements ICategory {
  constructor(public code?: string | null, public name?: string | null) {}
}
