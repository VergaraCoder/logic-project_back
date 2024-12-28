import { PartialType } from '@nestjs/mapped-types';
import { CreateInverseNumberDto } from './create-inverse-number.dto';

export class UpdateInverseNumberDto extends PartialType(CreateInverseNumberDto) {}
