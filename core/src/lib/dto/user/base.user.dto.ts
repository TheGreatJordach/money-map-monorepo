
import { IUser } from '../../interfaces/user.interface';
import { IFullName } from '../../interfaces/full-name.interface';
import { IAddress } from '../../interfaces/address.interface';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { Type } from 'class-transformer';
import { UserAddress } from '../../types/user.address.class';
import { IUserProfile } from '../../interfaces/user-profile.interface';
import { UserProfileType } from '../../types/user.profile.class';
import { OmitType, PartialType, PickType } from '@nestjs/mapped-types';

export class BaseUserDto implements IUser{
  @IsNotEmpty()
  @IsString()
  userID!:string
  identity!: IFullName
  dateOfBirth?:Date
  @Type(() => UserAddress)
  address?: IAddress
  @IsNotEmpty()
  @IsEmail()
  email!: string
  @IsStrongPassword()
  password!:string
  @Type(() => UserProfileType) // this is a class
  profile!: IUserProfile // this is a Type
}




