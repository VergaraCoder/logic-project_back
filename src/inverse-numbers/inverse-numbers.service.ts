import { Injectable } from '@nestjs/common';
import { CreateInverseNumberDto } from './dto/create-inverse-number.dto';
import { UpdateInverseNumberDto } from './dto/update-inverse-number.dto';

@Injectable()
export class InverseNumbersService {
  create(createInverseNumberDto: CreateInverseNumberDto) {
    return 'This action adds a new inverseNumber';
  }

  findAll() {
    return `This action returns all inverseNumbers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inverseNumber`;
  }

  update(id: number, updateInverseNumberDto: UpdateInverseNumberDto) {
    return `This action updates a #${id} inverseNumber`;
  }

  remove(id: number) {
    return `This action removes a #${id} inverseNumber`;
  }
}
