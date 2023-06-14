import { Module } from '@nestjs/common';
import { AlgorithmController } from './algorithm.controller';
import { AlgorithmService } from './algorithm.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClientsEntity} from "./entity/algorithm.entity";
import {TokenEntity} from "./entity/algorithm.entity.token";

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientsEntity, TokenEntity])
  ],
  controllers: [AlgorithmController],
  providers: [AlgorithmService]
})
export class AlgorithmModule {}
