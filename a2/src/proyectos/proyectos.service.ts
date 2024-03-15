/* eslint-disable prettier/prettier */
import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create-proyecto.dto';

import { Proyecto } from './entities/proyecto.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectosRepository: Repository<Proyecto>,
  ) {}

  //Creamos un proyecto
  async create(createProyectoDto: CreateProyectoDto): Promise<Proyecto> {
    // Validar el objeto CreateProductDto
    const errors = await validate(createProyectoDto);

    // Si hay errores de validación, devolverlos en una respuesta HTTP 400 Bad Request
    if (errors.length > 0) {
      throw new HttpException(
        { message: 'Error de validación', errors },
        HttpStatus.BAD_REQUEST,
      );
    }

    const nuevoProyecto = new Proyecto();
    nuevoProyecto.nombreProyecto = createProyectoDto.nombreProyecto;
    nuevoProyecto.cliente = createProyectoDto.cliente;
    nuevoProyecto.titulo = createProyectoDto.titulo;
    nuevoProyecto.revision = createProyectoDto.revision;
    nuevoProyecto.tipo = createProyectoDto.tipo;
    nuevoProyecto.elaboradoPor = createProyectoDto.elaboradoPor;
    return await this.proyectosRepository.save(nuevoProyecto);
  }

  //Recuperamos todos los proyectos

  async findAll(): Promise<Proyecto[]> {
    return await this.proyectosRepository.find();
  }

  //Recuperamos un proyecto por su Id

  async findById(id: number): Promise<Proyecto> {
    const proyecto = await this.proyectosRepository.findOneBy({ id: id });

    if (!proyecto) {
      throw new NotFoundException(
        `El inspector con el ID ${id} no se encuentra`,
      );
    }

    return proyecto;
  }

  //Actualizamos un proyecto

  async update(
    id: number,
    UpdateProyectoDto: Partial<Proyecto>,
  ): Promise<Proyecto> {
    const proyecto = await this.proyectosRepository.findOneBy({ id: id });

    if (!proyecto) {
      throw new NotFoundException(
        `El inspector con el ID ${id} no se encuentra`,
      );
    }

    // Actualiza los campos del usuario con los datos proporcionados
    this.proyectosRepository.merge(proyecto, UpdateProyectoDto);

    return this.proyectosRepository.save(proyecto);
  }

  // Eliminar un proyecto por su Id
  async remove(id: number): Promise<void> {
    const proyecto = await this.proyectosRepository.findOneBy({ id: id });

    if (!proyecto) {
      throw new NotFoundException(
        `El inspector con el ID ${id} no se encuentra`,
      );
    }

    await this.proyectosRepository.remove(proyecto);
  }

  //Elimina todos los proyectos
  async deleteAllProyectos(): Promise<void> {
    await this.proyectosRepository.delete({});
  }
}
