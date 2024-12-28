import { Module } from '@nestjs/common';
import { MedianService } from './median.service';
import { MedianController } from './median.controller';

@Module({
  controllers: [MedianController],
  providers: [MedianService],
})
export class MedianModule {}
