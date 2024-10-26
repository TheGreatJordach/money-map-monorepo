import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Incomes } from './incomes.entity';
import { SourceIncome } from './source-income.entity';


/**
 * Entity representing income types.
 * @property {string} incomesTypeId - The unique identifier for the income type.
 * @property {SourceIncome} source - The source of income associated with the type.
 * @property {Incomes[]} incomes - Array of incomes associated with this type.
 */
@Entity('incomesType')
export class IncomeType {
  @PrimaryGeneratedColumn("uuid")
  incomesTypeId!: string;

  /*
  * Since you added @JoinColumn() on the IncomeType side of the
  * OneToOne relationship,
  * SourceIncome does not need a counterpart relation pointing back to IncomeType.
  * **/
  @OneToOne(() => SourceIncome, { cascade: true, eager: true }) // One-to-one relationship
  @JoinColumn() // Adds a foreign key column in `IncomeType`
  source! : SourceIncome
  @OneToMany(type => Incomes, (incomes) => incomes.type)
  incomes!: Incomes[]
}
