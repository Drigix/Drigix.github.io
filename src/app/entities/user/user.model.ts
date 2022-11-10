export interface IUser {
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  password?: string | null;
  phone?: string | null;
  birthDay?: string | null;
  role?: string | null;
};

export class User implements IUser {
  constructor(
  public id?: number | null,
  public firstName?: string | null,
  public lastName?: string | null,
  public email?: string | null,
  public password?: string | null,
  public phone?: string | null,
  public birthDay?: string | null,
  public role?: string | null
  ) {}
}
