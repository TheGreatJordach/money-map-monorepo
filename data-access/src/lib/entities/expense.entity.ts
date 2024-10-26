import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PeriodEmbedded } from '../common/embedded/period.embedded';
import { ExpenseCategoryEntity } from './expense-category.entity';

/**
 * Represents an expense entity.
 * @Entity('expenses')
 * @property {string} expenseID - The unique identifier for the expense.
 * @property {string} name - The name of the expense.
 * @property {string} [detail] - Additional details about the expense (optional).
 * @property {number} amount - The amount of the expense.
 * @property {PeriodEmbedded} period - The period associated with the expense.
 * @property {ExpenseCategoryEntity} category - The category to which the expense belongs.
 */
@Entity('expenses')
export class ExpenseEntity{
  @PrimaryGeneratedColumn("uuid")
  expenseID!:string
  @Column()
  name!: string
  @Column()
  detail?:string

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount!: number;

  @Column(() => PeriodEmbedded, {prefix:false})
  period!: PeriodEmbedded

  @ManyToOne(() => ExpenseCategoryEntity, (expenseCat) => expenseCat.expenses)
  category!: ExpenseCategoryEntity
}
