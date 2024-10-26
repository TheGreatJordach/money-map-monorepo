
import { IUser } from '../../interfaces/user.interface';
import { IFullName } from '../../interfaces/full-name.interface';
import { IAddress } from '../../interfaces/address.interface';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { Type } from 'class-transformer';
import { Address } from '../../types/user.address.class';
import { IUserProfile } from '../../interfaces/user-profile.interface';
import { UserProfile } from '../../types/user.profile.class';



export class BaseUserDto implements IUser{
  @IsNotEmpty()
  @IsString()
  userID!:string
  identity!: IFullName
  dateOfBirth?:Date
  @Type(() => Address)
  address?: IAddress
  @IsNotEmpty()
  @IsEmail()
  email!: string
  @IsStrongPassword()
  password!:string
  @Type(() => UserProfile) // this is a class
  profile!: IUserProfile // this is a Type
}




