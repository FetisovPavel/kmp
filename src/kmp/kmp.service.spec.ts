import { Test, TestingModule } from '@nestjs/testing';
import { KmpService } from './kmp.service';

describe('KmpService', () => {
  let service: KmpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KmpService],
    }).compile();

    service = module.get<KmpService>(KmpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
