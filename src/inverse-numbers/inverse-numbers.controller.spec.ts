import { Test, TestingModule } from '@nestjs/testing';
import { InverseNumbersController } from './inverse-numbers.controller';
import { InverseNumbersService } from './inverse-numbers.service';

describe('InverseNumbersController', () => {
  let controller: InverseNumbersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InverseNumbersController],
      providers: [InverseNumbersService],
    }).compile();

    controller = module.get<InverseNumbersController>(InverseNumbersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
