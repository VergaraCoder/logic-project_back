import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedianService } from './median.service';
import { CreateMedianDto } from './dto/create-median.dto';
import { UpdateMedianDto } from './dto/update-median.dto';

@Controller('median')
export class MedianController {
  constructor(private readonly medianService: MedianService) {}

  @Post()
  create(@Body() createMedianDto: CreateMedianDto) {
    return this.medianService.create(createMedianDto);
  }
}
