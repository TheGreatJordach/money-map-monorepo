import { IExpenseCategory } from '../interfaces/expense-category.interface';
import { IExpense } from '../interfaces/expense.interface';
import { IPeriod } from '../interfaces/period.interface';
import { Expense } from './expense.class';
import { Type } from 'class-transformer';
import { Period } from './periode.class';

export class ExpenseCategory implements IExpenseCategory {
  category!: string;
  expenseCatID!: string;
  @Type(()=>Expense)
  expenses!: IExpense[];
  @Type(()=>Period)
  period!: IPeriod;
}
