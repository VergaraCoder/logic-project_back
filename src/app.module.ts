import { Module } from '@nestjs/common';
import { SubstractStringModule } from './substract_string/substract_string.module';
import { ErrorModule } from './common/error/error.module';


@Module({
  imports: [SubstractStringModule, ErrorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
