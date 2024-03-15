/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Proyecto } from './entities/proyecto.entity';

@Controller('api/proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  //Creamos un proyecto
  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  //Recuperamos todos los proyectos

  @Get()
  findAll() {
    return this.proyectosService.findAll();
  }

  //Recuperamos un proyecto por su Id
  @Get(':id')
  findById(@Param('id') id: number): Promise<Proyecto> {
    return this.proyectosService.findById(id);
  }

  //Actualizamos un proyecto
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInspectoreDto: UpdateProyectoDto,
  ) {
    return this.proyectosService.update(+id, updateInspectoreDto);
  }

  // Eliminar un proyecto por su Id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectosService.remove(+id);
  }

  //Elimina todos los proyectos

  @Delete()
  deleteAllProyectos() {
    this.proyectosService.deleteAllProyectos();
  }
}
