import { Module } from '@nestjs/common';
import { KmpController } from './kmp.controller';
import { KmpService } from './kmp.service';

@Module({
  controllers: [KmpController],
  providers: [KmpService]
})
export class KmpModule {}
