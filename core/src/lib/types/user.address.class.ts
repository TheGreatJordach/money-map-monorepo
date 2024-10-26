
import { IsOptional, IsString } from 'class-validator';
import { IAddress } from '../interfaces/address.interface';

export class Address implements IAddress{
  @IsOptional()
  @IsString()
  street1?: string;

  @IsOptional()
  @IsString()
  street2?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  zip?: string;

  @IsOptional()
  @IsString()
  country?: string;
}
