import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubstractStringService } from './substract_string.service';
import { CreateSubstractStringDto } from './dto/create-substract_string.dto';
import { UpdateSubstractStringDto } from './dto/update-substract_string.dto';

@Controller('subtract')
export class SubstractStringController {
  constructor(private readonly substractStringService: SubstractStringService) {}

  @Post()
  create(@Body() createSubstractStringDto: CreateSubstractStringDto) {
    return this.substractStringService.subtractString(createSubstractStringDto.characters);
  }
}
