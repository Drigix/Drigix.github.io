import { Category } from "../industry/category.model";
import { Photos } from "../photos/photos.model";
import { Address } from "./address.model";

interface ICompany {
  id?: number | null;
  name?: string | null;
  nip?: string | null;
  categoryId?: string | null;
  address?: Address | null;
  photos?: Photos[] | null;
  description?: string | null;
  logo?: string | null;
};

export class Company implements ICompany {
  constructor(
    public id?: number | null,
    public name?: string | null,
    public nip?: string | null,
    public categoryId?: string | null,
    public address?: Address | null,
    public photos?: Photos[] | null,
    public descrption?: string | null,
    public logo?: string | null) {}
}
