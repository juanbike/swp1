/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { Junta } from './entities/junta.entity';
import { JuntaService } from './juntas.services';
import { CreateJuntaDto } from './dto/create-junta.dto';

@Controller('api/juntasv2')
export class JuntaController {
  constructor(private readonly juntaService: JuntaService) {}

  @Post()
  async create(@Body() createJuntaDto: CreateJuntaDto): Promise<Junta> {
    return await this.juntaService.createJunta(createJuntaDto);
  }
}
