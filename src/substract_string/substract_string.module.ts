import { Module } from '@nestjs/common';
import { SubstractStringService } from './substract_string.service';
import { SubstractStringController } from './substract_string.controller';

@Module({
  controllers: [SubstractStringController],
  providers: [SubstractStringService],
})
export class SubstractStringModule {}
