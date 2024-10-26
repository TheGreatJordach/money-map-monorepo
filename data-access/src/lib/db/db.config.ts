import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserProfileEntity } from '../entities/user-profile.entity';
import { IncomesEntity } from '../entities/incomes.entity';
import { IncomeTypeEntity } from '../entities/income.type.entity';
import { SourceIncomeEntity } from '../entities/source-income.entity';
import { ExpenseEntity } from '../entities/expense.entity';
import { ExpenseCategoryEntity } from '../entities/expense-category.entity';


export const getDbConfig = async (configService:ConfigService): Promise<TypeOrmModuleOptions> => ({
  type: "postgres",
  host: configService.getOrThrow<string>("DATASOURCE_HOST"),
  port: configService.getOrThrow<number>("DATASOURCE_PORT"),
  username: configService.getOrThrow<string>("DATASOURCE_USERNAME"),
  password: configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
  database: configService.getOrThrow<string>("DATASOURCE_DATABASE"),
  entities: [UserEntity,UserProfileEntity,IncomesEntity,IncomeTypeEntity,SourceIncomeEntity, ExpenseEntity,ExpenseCategoryEntity],
  synchronize:true
})
