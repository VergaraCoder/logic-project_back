import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubstractStringService } from './substract_string.service';
import { CreateSubstractStringDto } from './dto/create-substract_string.dto';
import { UpdateSubstractStringDto } from './dto/update-substract_string.dto';

@Controller('substract-string')
export class SubstractStringController {
  constructor(private readonly substractStringService: SubstractStringService) {}

  @Post()
  create(@Body() createSubstractStringDto: CreateSubstractStringDto) {
    return this.substractStringService.create(createSubstractStringDto);
  }

  @Get()
  findAll() {
    return this.substractStringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.substractStringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubstractStringDto: UpdateSubstractStringDto) {
    return this.substractStringService.update(+id, updateSubstractStringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.substractStringService.remove(+id);
  }
}
