import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffesModule } from './coffes/coffes.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [CoffesModule, SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
