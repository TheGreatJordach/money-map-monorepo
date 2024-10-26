import { PickType } from '@nestjs/mapped-types';
import { BaseUserDto } from './base.user.dto';

export class  logInUserDto extends PickType(BaseUserDto, ["email","password"]){}
