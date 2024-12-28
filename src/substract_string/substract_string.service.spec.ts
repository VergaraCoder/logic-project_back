import { Test, TestingModule } from '@nestjs/testing';
import { SubstractStringService } from './substract_string.service';

describe('SubstractStringService', () => {
  let service: SubstractStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubstractStringService],
    }).compile();

    service = module.get<SubstractStringService>(SubstractStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
