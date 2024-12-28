import { Test, TestingModule } from '@nestjs/testing';
import { SubstractStringController } from './substract_string.controller';
import { SubstractStringService } from './substract_string.service';

describe('SubstractStringController', () => {
  let controller: SubstractStringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubstractStringController],
      providers: [SubstractStringService],
    }).compile();

    controller = module.get<SubstractStringController>(SubstractStringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
