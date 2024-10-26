import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullName } from '../common/embedded/full.name.embedded';
import { Address } from '../common/embedded/address.embedded';
import { UserProfile } from './user-profile.entity';

/**
 * Represents a user entity in the system.
 * @property {string} userID - The unique identifier for the user.
 * @property {FullName} identity - The full name details of the user.
 * @property {Date} [dateOfBirth] - The date of birth of the user.
 * @property {Address} [address] - The address details of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 * @property {UserProfile} profile - The user profile linked to this user.
 */
@Entity('users')
export class User{
  @PrimaryGeneratedColumn("uuid")
  userID!:string
  @Column(() => FullName,{prefix:false})
  identity!: FullName
  @Column({ nullable: true ,type:"date"})
  dateOfBirth?:Date;
  @Column(() => Address,{prefix:false})
  address?: Address
  @Column({unique:true})
  email!: string
  @Column({nullable:false})
  password!:string
  @OneToOne(() => UserProfile, (userProfile) => userProfile.user, { cascade: true })
  profile!: UserProfile
}
