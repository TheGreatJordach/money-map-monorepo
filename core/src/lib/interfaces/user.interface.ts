import { IFullName } from './full-name.interface';
import { IAddress } from './address.interface';
import { IUserProfile } from './user-profile.interface';


export interface IUser{
  userID:string,
  identity: IFullName,
  dateOfBirth?:Date,
  address?: IAddress,
  email: string,
  password:string,
  profile: IUserProfile
}
