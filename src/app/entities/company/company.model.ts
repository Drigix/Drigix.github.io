import { Industry } from "../industry/industry.model";

interface ICompany {
  id: number;
  name: string;
  industry: Industry;
  city: string;
  address: string;
  postalCode: string;
  rating: number;
  openingTime: string;
  closingTime: string;
};

export class Company implements ICompany {
  constructor(
    public id: number,
    public name: string,
    public industry: Industry,
    public city: string,
    public address: string,
    public postalCode: string,
    public rating: number,
    public openingTime: string,
    public closingTime: string) {}
}
