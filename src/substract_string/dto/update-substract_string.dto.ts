import { PartialType } from '@nestjs/mapped-types';
import { CreateSubstractStringDto } from './create-substract_string.dto';

export class UpdateSubstractStringDto extends PartialType(CreateSubstractStringDto) {}
