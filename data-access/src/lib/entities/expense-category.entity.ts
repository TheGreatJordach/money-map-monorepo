import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Period } from '../common/embedded/period.embedded';
import { Expense } from './expense.entity';

/**
 * Represents an expense category entity.
 * @Entity('expense-category')
 * @property {string} expenseCatID - The unique identifier for the expense category.
 * @property {string} category - The name of the expense category.
 * @property {Period} period - The period associated with the expense category.
 * @property {Expense[]} expenses - The expenses belonging to this category.
 */
@Entity('expense-category')
export class ExpenseCategory {
  @PrimaryGeneratedColumn("uuid")
  expenseCatID!:string
  @Column()
  category!:string

  @Column(() => Period, {prefix:false})
  period!: Period
  @OneToMany(type => Expense, (expense) => expense.category, { onDelete: 'CASCADE' })
  expenses!:Expense[]
}

