import { IExpense } from '../interfaces/expense.interface';
import { IExpenseCategory } from '../interfaces/expense-category.interface';
import { IPeriod } from '../interfaces/period.interface';
import { Type } from 'class-transformer';
import { ExpenseCategory } from './expense-category.class';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Period } from './periode.class';

export class Expense implements IExpense{
  @IsNumber()
  @IsNotEmpty()
  amount!: number;
  @Type(()=>ExpenseCategory)
  category!: IExpenseCategory;
  @IsString()
  @IsNotEmpty()
  detail?: string;
  @IsString()
  @IsNotEmpty()
  expenseID!: string;
  @IsString()
  @IsNotEmpty()
  name!: string;
  @Type(()=>Period)
  period!: IPeriod;
}
