import { IIncome } from './icome.interface';


export interface IUserProfile {
  profileId: number;
  profileName: string;
  profileImageUrl?: string;
  incomes: IIncome[];
}
