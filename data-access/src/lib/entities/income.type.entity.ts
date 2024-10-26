import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import {  IncomesEntity } from './incomes.entity';
import { SourceIncomeEntity } from './source-income.entity';



/**
 * Entity representing income types.
 * @property {string} incomesTypeId - The unique identifier for the income type.
 * @property {SourceIncomeEntity} source - The source of income associated with the type.
 * @property {IncomesEntity[]} incomes - Array of incomes associated with this type.
 */
@Entity('incomesType')
export class IncomeTypeEntity {
  @PrimaryGeneratedColumn("uuid")
  incomesTypeId!: string;

  /*
  * Since you added @JoinColumn() on the IncomeType side of the
  * OneToOne relationship,
  * SourceIncome does not need a counterpart relation pointing back to IncomeType.
  * **/
  @OneToOne(() => SourceIncomeEntity, { cascade: true, eager: true }) // One-to-one relationship
  @JoinColumn() // Adds a foreign key column in `IncomeType`
  source! : SourceIncomeEntity
  @OneToMany(type => IncomesEntity, (incomes) => incomes.type)
  incomes!: IncomesEntity[]
}
