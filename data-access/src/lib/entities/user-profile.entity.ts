import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Incomes } from './incomes.entity';


/**
 * Entity representing a user profile.
 * @property {number} profileId - The unique identifier for the profile.
 * @property {string} profileName - The name of the profile.
 * @property {string} [profileImageUrl] - The URL of the profile image, if available.
 * @property {Incomes[]} incomes - Array of incomes associated with the profile.
 * @property {User} user - The user linked to this profile.
 */
@Entity('user-profile')
export class UserProfile {
  @PrimaryGeneratedColumn()
  profileId!:number
  @Column()
  profileName!: string
  @Column()
  profileImageUrl?: string
  @OneToMany(() => Incomes, (income) => income.userProfile, { onDelete: 'CASCADE' })
  incomes!: Incomes[]
  @OneToOne(() => User, (user) => user.profile)
  user!:User
}
