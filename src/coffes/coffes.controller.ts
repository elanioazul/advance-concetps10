import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { CoffesService } from './coffes.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';
import { CoffeesDataSource } from './coffes.service';
@Controller('coffes')
export class CoffesController {
  constructor(
    @Inject(CoffesService) private readonly coffesService: CoffesService,
    private readonly coffeesDataSource: CoffeesDataSource,
  ) {}

  @Post()
  create(@Body() createCoffeDto: CreateCoffeDto) {
    return this.coffesService.create(createCoffeDto);
  }

  @Get()
  findAll() {
    return this.coffesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeDto: UpdateCoffeDto) {
    return this.coffesService.update(+id, updateCoffeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffesService.remove(+id);
  }
}
