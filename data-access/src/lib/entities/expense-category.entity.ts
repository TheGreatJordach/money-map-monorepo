import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PeriodEmbedded } from '../common/embedded/period.embedded';
import {  ExpenseEntity } from './expense.entity';

/**
 * Represents an expense category entity.
 * @Entity('expense-category')
 * @property {string} expenseCatID - The unique identifier for the expense category.
 * @property {string} category - The name of the expense category.
 * @property {PeriodEmbedded} period - The period associated with the expense category.
 * @property {ExpenseEntity[]} expenses - The expenses belonging to this category.
 */
@Entity('expense-category')
export class ExpenseCategoryEntity {
  @PrimaryGeneratedColumn("uuid")
  expenseCatID!:string
  @Column()
  category!:string

  @Column(() => PeriodEmbedded, {prefix:false})
  period!: PeriodEmbedded
  @OneToMany(type => ExpenseEntity, (expense) => expense.category, { onDelete: 'CASCADE' })
  expenses!:ExpenseEntity[]
}

