import { Module } from '@nestjs/common';
import { InverseNumbersService } from './inverse-numbers.service';
import { InverseNumbersController } from './inverse-numbers.controller';

@Module({
  controllers: [InverseNumbersController],
  providers: [InverseNumbersService],
})
export class InverseNumbersModule {}
