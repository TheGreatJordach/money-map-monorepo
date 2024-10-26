import { IIncome } from '../interfaces/icome.interface';
import { IPeriod } from '../interfaces/period.interface';
import { ISourceIncome } from '../interfaces/source-income.interface';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { Period } from './periode.class';

export class SourceIncome implements ISourceIncome {
  @IsPositive()
  @IsInt()
  amount!: number;
  @IsString()
  @IsNotEmpty()
  name!: string;
  @Type(() => Period )
  period!: IPeriod;
  @IsString()
  @IsNotEmpty()
  sourceIncomeID!: string;
}
