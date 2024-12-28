import { PartialType } from '@nestjs/mapped-types';
import { CreateMedianDto } from './create-median.dto';

export class UpdateMedianDto extends PartialType(CreateMedianDto) {}
