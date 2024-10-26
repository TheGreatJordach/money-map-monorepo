import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FullNameEmbedded } from '../common/embedded/full.name.embedded';
import { AddressEmbedded } from '../common/embedded/address.embedded';
import { UserProfileEntity } from './user-profile.entity';


/**
 * Represents a user entity in the system.
 * @property {string} userID - The unique identifier for the user.
 * @property {FullNameEmbedded} identity - The full name details of the user.
 * @property {Date} [dateOfBirth] - The date of birth of the user.
 * @property {AddressEmbedded} [address] - The address details of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The password of the user.
 * @property {UserProfileEntity} profile - The user profile linked to this user.
 */
@Entity('users')
export class UserEntity{
  @PrimaryGeneratedColumn("uuid")
  userID!:string
  @Column(() => FullNameEmbedded,{prefix:false})
  identity!: FullNameEmbedded
  @Column({ nullable: true ,type:"date"})
  dateOfBirth?:Date;
  @Column(() => AddressEmbedded,{prefix:false})
  address?: AddressEmbedded
  @Column({unique:true})
  email!: string
  @Column({nullable:false})
  password!:string
  @OneToOne(() => UserProfileEntity, (userProfile) => userProfile.user, { cascade: true })
  profile!: UserProfileEntity
}
