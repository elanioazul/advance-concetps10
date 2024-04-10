import { Inject, Injectable } from '@nestjs/common';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';
import { Coffe } from './entities/coffe.entity';

export const COFFEES_DATA_COURCE = Symbol('COFFEES_DATA_COURCE');
export interface CoffeesDataSource {
  // OR alternatively "export type CoffeesDataSource = Coffee[]"
  [index: number]: Coffe;
}
@Injectable()
export class CoffesService {
  constructor(@Inject(COFFEES_DATA_COURCE) dataSource: CoffeesDataSource) {}

  create(createCoffeDto: CreateCoffeDto) {
    return 'This action adds a new coffe';
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
