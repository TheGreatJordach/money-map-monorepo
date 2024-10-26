import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { IncomeType } from './income.type.entity';


/**
 * Entity representing incomes.
 * @property {string} incomeID - The unique identifier for the income.
 * @property {IncomeType} type - The type of income.
 * @property {UserProfile} userProfile - The user profile associated with the income.
 */
@Entity("incomes")
export class Incomes{
  @PrimaryGeneratedColumn("uuid")
  incomeID!:string
  @ManyToOne(() => IncomeType, (incomeType) => incomeType.incomes, { eager: true })
  type!: IncomeType
  @ManyToOne(() => UserProfile, (userProfile) => userProfile.incomes, { onDelete: 'CASCADE' })
  userProfile!: UserProfile;
}
