import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InverseNumbersService } from './inverse-numbers.service';
import { CreateInverseNumberDto } from './dto/create-inverse-number.dto';
import { UpdateInverseNumberDto } from './dto/update-inverse-number.dto';

@Controller('inverse-numbers')
export class InverseNumbersController {
  constructor(private readonly inverseNumbersService: InverseNumbersService) {}

  @Post()
  create(@Body() createInverseNumberDto: CreateInverseNumberDto) {
    return this.inverseNumbersService.create(createInverseNumberDto.number);
  }

}
