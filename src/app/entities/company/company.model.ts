import { WorkingDays } from './workingDays.model';
import { Opinions } from './../opinions/opinions.model';
import { Category } from "../industry/category.model";
import { Photos } from "../photos/photos.model";
import { Address } from "./address.model";
import { Services } from '../services/services.model';

interface ICompany {
  id?: string | null;
  name?: string | null;
  nip?: string | null;
  categoryId?: string | null;
  address?: Address | null;
  photos?: Photos[] | null;
  description?: string | null;
  logo?: string | null;
  opinions?: Opinions | null;
  workingDays?: WorkingDays[] | null;
  services?: Services[] | null
};

export class Company implements ICompany {
  constructor(
    public id?: string | null,
    public name?: string | null,
    public nip?: string | null,
    public categoryId?: string | null,
    public address?: Address | null,
    public photos?: Photos[] | null,
    public description?: string | null,
    public logo?: string | null,
    public opinions?: Opinions | null,
    public workingDays?: WorkingDays[] | null,
    public services?: Services[] | null
    ) {}
}
