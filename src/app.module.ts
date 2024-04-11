import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffesModule } from './coffes/coffes.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { CronModule } from './cron/cron.module';

@Module({
  imports: [CoffesModule, SchedulerModule, CronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
