import { IIncome } from '../interfaces/icome.interface';
import { IIncomeType } from '../interfaces/income-type.interface';
import { IUserProfile } from '../interfaces/user-profile.interface';
import { Type } from 'class-transformer';
import { UserProfile } from './user.profile.class';
import { IncomeType } from './income-type.class';
import { IsNotEmpty, IsString } from 'class-validator';

export class Income implements IIncome{
  @IsNotEmpty()
  @IsString()
  incomeID!: string;
  @Type(()=> IncomeType)
  type!: IIncomeType;
  @Type(()=> UserProfile)
  userProfile!: IUserProfile;
}
