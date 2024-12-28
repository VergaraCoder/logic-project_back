import { Test, TestingModule } from '@nestjs/testing';
import { InverseNumbersService } from './inverse-numbers.service';

describe('InverseNumbersService', () => {
  let service: InverseNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InverseNumbersService],
    }).compile();

    service = module.get<InverseNumbersService>(InverseNumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
