import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { IncomesEntity } from './incomes.entity';



/**
 * Entity representing a user profile.
 * @property {number} profileId - The unique identifier for the profile.
 * @property {string} profileName - The name of the profile.
 * @property {string} [profileImageUrl] - The URL of the profile image, if available.
 * @property {IncomesEntity[]} incomes - Array of incomes associated with the profile.
 * @property {UserEntity} user - The user linked to this profile.
 */
@Entity('user-profile')
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  profileId!:number
  @Column()
  profileName!: string
  @Column()
  profileImageUrl?: string
  @OneToMany(() => IncomesEntity, (income) => income.userProfile, { onDelete: 'CASCADE' })
  incomes!: IncomesEntity[]
  @OneToOne(() => UserEntity, (user) => user.profile)
  user!:UserEntity
}
