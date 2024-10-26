import { IExpense } from './expense.interface';
import { IPeriod } from './period.interface';

export interface IExpenseCategory {
  expenseCatID: string;
  category: string;
  period: IPeriod;
  expenses: IExpense[];
}
