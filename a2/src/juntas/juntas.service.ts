/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJuntaDto } from './dto/create-junta.dto';
//import { UpdateJuntaDto } from './dto/update-junta.dto';
import { Junta } from './entities/junta.entity';

@Injectable()
export class JuntasService {
  constructor(
    @InjectRepository(Junta)
    private readonly juntaRepository: Repository<Junta>,
  ) {}

 
  //Creamos una junta

  async create(createJuntaDto: CreateJuntaDto): Promise<Junta> {
    const nuevaJunta = new Junta();
    nuevaJunta.nominal = createJuntaDto.nominal;
    nuevaJunta.nominal1 = createJuntaDto.nominal1;
    nuevaJunta.linea = createJuntaDto.linea;
    nuevaJunta.especificacion = createJuntaDto.especificacion;
    nuevaJunta.schedule = createJuntaDto.schedule;
    nuevaJunta.tipo_extremos = createJuntaDto.tipo_extremos;
    nuevaJunta.tipo_material = createJuntaDto.tipo_material;
    nuevaJunta.material = createJuntaDto.material;
    nuevaJunta.diam_inch_contabilizadas = createJuntaDto.diam_inch_contabilizadas;
    nuevaJunta.factor_pulgadas_diametrales = createJuntaDto.factor_pulgadas_diametrales;
    nuevaJunta.pulgadas_diametrales = createJuntaDto.pulgadas_diametrales;
    nuevaJunta.proyectID = createJuntaDto.proyectID;
    nuevaJunta.usuarioID = createJuntaDto.usuarioID;



    return await this.juntaRepository.save(nuevaJunta);
  }


  //Encontramos todas las juntas
  async findAll(): Promise<Junta[]> {
    return await this.juntaRepository.find();
  }

  //Encontramos una junta por su id. Ver 

  async findById(id: number): Promise<Junta> {
    const junta = await this.juntaRepository.findOneBy({id:id});

    if (!junta) {
      throw new NotFoundException(`junta con ID ${id} no encontrada`);
    }

    return junta;
  }

  //Actualizamos la informacion de una junta

  async update(id: number, updatedUsuarioData: Partial<Junta>): Promise<Junta> {
    const junta = await this.juntaRepository.findOneBy({id: id})

    if (!junta) {
      throw new NotFoundException(`Junta con ID ${id} no encontrado`);
    }

    // Actualiza los campos del usuario con los datos proporcionados
    this.juntaRepository.merge(junta, updatedUsuarioData);

    return this.juntaRepository.save(junta);
  }


  //Eliminar Junta
  async remove(id: number): Promise<void> {
    const junta = await this.juntaRepository.findOneBy({id: id});

    if (!junta) {
      throw new NotFoundException(`Junta con ID ${id} no encontrado`);
    }

    await this.juntaRepository.remove(junta);
  }


//Elimina todas las juntas
  async deleteAllJuntas(): Promise<void> {
    await this.juntaRepository.delete({});
  }

 
}
