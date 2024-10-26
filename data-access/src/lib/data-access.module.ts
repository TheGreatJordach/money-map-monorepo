import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validateAndLoad } from './db/env.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDbConfig } from './db/db.config';


@Module({
  imports:[

  ConfigModule.forRoot({isGlobal: true,envFilePath:".env",validate:validateAndLoad}),
  TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    inject: [ConfigService],
    useFactory: getDbConfig
  })],
  controllers: [],
  providers: [],
  exports: [],
})
export class DataAccessModule {}
