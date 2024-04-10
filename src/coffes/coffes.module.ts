import { Module } from '@nestjs/common';
import { COFFEES_DATA_COURCE, CoffesService } from './coffes.service';
import { CoffesController } from './coffes.controller';

@Module({
  controllers: [CoffesController],
  providers: [
    CoffesService,
    {
      provide: COFFEES_DATA_COURCE,
      useValue: [],
    },
  ],
})
export class CoffesModule {}
