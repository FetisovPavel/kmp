import { Test, TestingModule } from '@nestjs/testing';
import { KmpController } from './kmp.controller';

describe('KmpController', () => {
  let controller: KmpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KmpController],
    }).compile();

    controller = module.get<KmpController>(KmpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
