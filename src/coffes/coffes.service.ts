import { Inject, Injectable } from '@nestjs/common';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';
import { Coffe } from './entities/coffe.entity';
import { LazyModuleLoader } from '@nestjs/core';

export const COFFEES_DATA_COURCE = Symbol('COFFEES_DATA_COURCE');
export interface CoffeesDataSource {
  // OR alternatively "export type CoffeesDataSource = Coffee[]"
  [index: number]: Coffe;
}
@Injectable()
export class CoffesService {
  constructor(@Inject(COFFEES_DATA_COURCE) dataSource: CoffeesDataSource,
  private readonly lazyModuleLoader: LazyModuleLoader,
  ) {}

  async create(createCoffeDto: CreateCoffeDto) {
    console.time(); // 👈
    // Lazy load RewardsModule
    const rewardsModuleRef = await this.lazyModuleLoader.load(() =>
      import('../rewards/rewards.module').then((m) => m.RewardsModule),
    );
    const { RewardsService } = await import('../rewards/rewards.service');
    const rewardsService = rewardsModuleRef.get(RewardsService);
    console.timeEnd();
    rewardsService.grantTo();
    return 'This action adds a new coffee';
  }

  findAll() {
    return `This action returns all coffes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coffe`;
  }

  update(id: number, updateCoffeDto: UpdateCoffeDto) {
    return `This action updates a #${id} coffe`;
  }

  remove(id: number) {
    return `This action removes a #${id} coffe`;
  }
}
