import { IUserProfile } from './user-profile.interface';
import { IIncomeType } from './income-type.interface';

export interface IIncome {
  incomeID: string; // UUID primary key
  type: IIncomeType; // Reference to IncomeType interface
  userProfile: IUserProfile; // Reference to UserProfile interface
}
