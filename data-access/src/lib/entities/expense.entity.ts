import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Period } from '../common/embedded/period.embedded';
import { ExpenseCategory } from './expense-category.entity';

/**
 * Represents an expense entity.
 * @Entity('expenses')
 * @property {string} expenseID - The unique identifier for the expense.
 * @property {string} name - The name of the expense.
 * @property {string} [detail] - Additional details about the expense (optional).
 * @property {number} amount - The amount of the expense.
 * @property {Period} period - The period associated with the expense.
 * @property {ExpenseCategory} category - The category to which the expense belongs.
 */
@Entity('expenses')
export class Expense{
  @PrimaryGeneratedColumn("uuid")
  expenseID!:string
  @Column()
  name!: string
  @Column()
  detail?:string

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount!: number;

  @Column(() => Period, {prefix:false})
  period!: Period

  @ManyToOne(() => ExpenseCategory, (expenseCat) => expenseCat.expenses)
  category!: ExpenseCategory
}
