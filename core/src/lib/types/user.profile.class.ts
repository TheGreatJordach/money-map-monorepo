import { IUserProfile } from '../interfaces/user-profile.interface';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { IIncome } from '../interfaces/icome.interface';
import { Income } from './income.class';


export class UserProfile implements IUserProfile{
  @IsNotEmpty()
  @IsString()
  profileId!: number;
  @IsNotEmpty()
  @IsString()
  profileName!: string;
  @IsOptional()
  @IsString()
  profileImageUrl?: string;
  @Type(() => Income)
  incomes!: IIncome[];
}
