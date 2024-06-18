/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Materiales } from './entities/materiale.entity';

import { MaterialesService } from './materiales.service';
import { CreateMaterialeDto } from './dto/create-materiale.dto';
import { UpdateMaterialeDto } from './dto/update-materiale.dto'

@Controller('api/materiales')
export class MaterialesController {
  constructor(private readonly materialesService: MaterialesService) {}

  //Creamos un material
  @Post()
  create(@Body() createMaterialeDto: CreateMaterialeDto) {
    return this.materialesService.create(createMaterialeDto);
  }

  //Recuperamos todos los materiales

  @Get()
  findAll() {
    return this.materialesService.findAll();
  }

  //Recuperamos un material por ID

  @Get(':id')
  findById(@Param('id') id: number): Promise<Materiales> {
    return this.materialesService.findById(id);
  }

    //Actualizamos un material por su ID

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaterialeDto: UpdateMaterialeDto) {
    return this.materialesService.update(+id, updateMaterialeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialesService.remove(+id);
  }

  //eliminha todos los materiales
  deleteAllMateriales(){
    this.materialesService.deleteAllMateriales()
  }
}
