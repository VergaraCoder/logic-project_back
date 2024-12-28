import { Module } from '@nestjs/common';
import { SubstractStringModule } from './substract_string/substract_string.module';
import { InverseNumbersModule } from './inverse-numbers/inverse-numbers.module';


@Module({
  imports: [SubstractStringModule, InverseNumbersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
