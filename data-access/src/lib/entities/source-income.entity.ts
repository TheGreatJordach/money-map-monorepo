import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PeriodEmbedded } from '../common/embedded/period.embedded';



/**
 * Represents a source of income entity.
 * @Entity("source-incomes")
 * @property {string} sourceIncomeID - The unique identifier for the source of income.
 * @property {string} name - The name of the source of income.
 * @property {number} amount - The amount of income.
 * @property {PeriodEmbedded} period - The period associated with the income.
 */
@Entity("source-incomes")
export class SourceIncomeEntity {
  @PrimaryGeneratedColumn('uuid')
  sourceIncomeID!: string;

  @Column()
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount!: number;

  @Column(type => PeriodEmbedded)
  period!: PeriodEmbedded;
}
