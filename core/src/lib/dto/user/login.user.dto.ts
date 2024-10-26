import { PickType } from '@nestjs/mapped-types';
import { BaseUserDto } from './base.user.dto';

export class  loginUserDto extends PickType(BaseUserDto, ["email","password"]){}
