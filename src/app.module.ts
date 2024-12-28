import { Module } from '@nestjs/common';
import { SubstractStringModule } from './substract_string/substract_string.module';
import { InverseNumbersModule } from './inverse-numbers/inverse-numbers.module';
import { MedianModule } from './median/median.module';


@Module({
  imports: [SubstractStringModule, InverseNumbersModule, MedianModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
