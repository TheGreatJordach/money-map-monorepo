import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserProfileEntity } from './user-profile.entity';
import { IncomeTypeEntity } from './income.type.entity';



/**
 * Entity representing incomes.
 * @property {string} incomeID - The unique identifier for the income.
 * @property {IncomeTypeEntity} type - The type of income.
 * @property {UserProfileEntity} userProfile - The user profile associated with the income.
 */
@Entity("incomes")
export class IncomesEntity{
  @PrimaryGeneratedColumn("uuid")
  incomeID!:string
  @ManyToOne(() => IncomeTypeEntity, (incomeTypeEntity) => incomeTypeEntity.incomes, { eager: true })
  type!: IncomeTypeEntity
  @ManyToOne(() => UserProfileEntity, (userProfile) => userProfile.incomes, { onDelete: 'CASCADE' })
  userProfile!: UserProfileEntity;
}
