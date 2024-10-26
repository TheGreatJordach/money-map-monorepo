import { IIncome } from '../interfaces/icome.interface';
import { IIncomeType } from '../interfaces/income-type.interface';
import { ISourceIncome } from '../interfaces/source-income.interface';
import { IsNotEmpty, IsString } from 'class-validator';

import { Type } from 'class-transformer';
import { SourceIncome } from './source.income.class';
import { Income } from './income.class';

export class IncomeType implements IIncomeType{
  @IsNotEmpty()
  @IsString()
  incomesTypeId!: string;
  @Type(()=> SourceIncome)
  source!: ISourceIncome;
  @Type(()=> Income)
  incomes!: IIncome[];

}
