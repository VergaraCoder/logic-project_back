import { Module } from '@nestjs/common';
import { SubstractStringModule } from './substract_string/substract_string.module';


@Module({
  imports: [SubstractStringModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
