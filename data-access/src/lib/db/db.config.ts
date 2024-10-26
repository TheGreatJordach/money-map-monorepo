import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserProfile } from '../entities/user-profile.entity';
import { Incomes } from '../entities/incomes.entity';
import { IncomeType } from '../entities/income.type.entity';
import { SourceIncome } from '../entities/source-income.entity';
import { Expense } from '../entities/expense.entity';
import { ExpenseCategory } from '../entities/expense-category.entity';


export const getDbConfig = async (configService:ConfigService): Promise<TypeOrmModuleOptions> => ({
  type: "postgres",
  host: configService.getOrThrow<string>("DATASOURCE_HOST"),
  port: configService.getOrThrow<number>("DATASOURCE_PORT"),
  username: configService.getOrThrow<string>("DATASOURCE_USERNAME"),
  password: configService.getOrThrow<string>("DATASOURCE_PASSWORD"),
  database: configService.getOrThrow<string>("DATASOURCE_DATABASE"),
  entities: [User,UserProfile,Incomes,IncomeType,SourceIncome, Expense,ExpenseCategory],
  synchronize:true
})
