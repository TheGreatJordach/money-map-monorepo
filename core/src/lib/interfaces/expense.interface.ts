import { IExpenseCategory } from './expense-category.interface';
import { IPeriod } from './period.interface';

export interface IExpense {
  expenseID: string;
  name: string;
  detail?: string;
  amount: number;
  period: IPeriod;
  category: IExpenseCategory;
}
