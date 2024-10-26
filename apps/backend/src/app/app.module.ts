import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataAccessModule } from '@money-map/data-access';

@Module({
  imports: [DataAccessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
