import { IIncome } from './icome.interface';
import { ISourceIncome } from './source-income.interface';

export interface IIncomeType {
  incomesTypeId: string;
  source: ISourceIncome;
  incomes: IIncome[];
}
