import { Test, TestingModule } from '@nestjs/testing';
import { MedianService } from './median.service';

describe('MedianService', () => {
  let service: MedianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedianService],
    }).compile();

    service = module.get<MedianService>(MedianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
