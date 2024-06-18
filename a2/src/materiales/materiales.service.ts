/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMaterialeDto } from './dto/create-materiale.dto';

import { Materiales } from './entities/materiale.entity';

@Injectable()
export class MaterialesService {


  constructor(
    @InjectRepository(Materiales)
    private readonly materialesRepository: Repository<Materiales>,
  ) {}

  //Creamos un registro de material

  async create(createMaterialeDto: CreateMaterialeDto): Promise<Materiales> {
    const nuevoMaterial = new Materiales();
      nuevoMaterial.tipo = createMaterialeDto.tipo;
      nuevoMaterial.colada = createMaterialeDto.colada;
      nuevoMaterial.schedule = createMaterialeDto.schedule;
      nuevoMaterial.textremo = createMaterialeDto.textremo;
      nuevoMaterial.tmaterial = createMaterialeDto.tmaterial;
      nuevoMaterial.material = createMaterialeDto.material
 
    return await this.materialesRepository.save(nuevoMaterial);
  }


  //Recuperamos todos los materiales
  async findAll(): Promise<Materiales[]> {
    return await this.materialesRepository.find();
  }

  //Recupermos un registro de material
  async findById(id: number) {
    const material = await this.materialesRepository.findOneBy({id:id})
    if(!material){
      throw new NotFoundException(`El material con el ID ${id} no se encuentra`)
    }
    return material;
  }


      // Actualiza los campos del usuario con los datos proporcionados

      async update(id: number,  UpdateMaterialDto: Partial<Materiales>): Promise<Materiales> {
        const material = await this.materialesRepository.findOneBy({id: id})
      
        if (!material) {
          throw new NotFoundException(`El material con el ID ${id} no se encuentra`);
        }
      
        // Actualiza los campos del usuario con los datos proporcionados
        this.materialesRepository.merge(material, UpdateMaterialDto);
      
        return this.materialesRepository.save(material);
      }
    

  // Eliminar un MATERIAL por su Id

  async remove(id: number): Promise<void> {
    const material = await this.materialesRepository.findOneBy({id: id});
  
    if (!material) {
      throw new NotFoundException(`El soldador con el ID ${id} no se encuentra`);
     }
  
    await this.materialesRepository.remove(material);
  }

  
  //Elimina todos los soldadores
  async deleteAllMateriales(): Promise<void> {
    await this.materialesRepository.delete({});
  }


}
