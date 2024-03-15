/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldaduraService } from './soldadura.service';
import { CreateSoldaduraDto } from './dto/create-soldadura.dto';
import { UpdateSoldaduraDto } from './dto/update-soldadura.dto';
import { Soldadura } from './entities/soldadura.entity';


@Controller('api/soldadura')
export class SoldaduraController {
  constructor(private readonly soldaduraService: SoldaduraService) {}

  @Post()
  create(@Body() createSoldaduraDto: CreateSoldaduraDto) {
    return this.soldaduraService.create(createSoldaduraDto);
  }

  //Recupera todas las soldaduras
  
  @Get()
  findAll() {
    return this.soldaduraService.findAll();
  }

  //Recupera una sola soldadura por su ID

  @Get(':id')
  findById(@Param('id') id: number): Promise<Soldadura> {
    return this.soldaduraService.findById(id);
  }

  //Actualiza una sola soldadura
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldaduraDto: UpdateSoldaduraDto) {
    return this.soldaduraService.update(+id, updateSoldaduraDto);
  }

  //Elimina una sola soldadura
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldaduraService.remove(+id);
  }
}
