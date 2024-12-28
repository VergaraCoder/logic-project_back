import { Test, TestingModule } from '@nestjs/testing';
import { MedianController } from './median.controller';
import { MedianService } from './median.service';

describe('MedianController', () => {
  let controller: MedianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedianController],
      providers: [MedianService],
    }).compile();

    controller = module.get<MedianController>(MedianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
