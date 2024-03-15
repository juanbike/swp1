/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntasService } from './juntas.service';
import { JuntasController } from './juntas.controller';
import { Junta } from './entities/junta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Junta])],
  controllers: [JuntasController],
  providers: [JuntasService],
  exports: [JuntasService]
})
export class JuntasModule {}
