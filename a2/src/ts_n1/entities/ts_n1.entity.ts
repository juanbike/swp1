/* eslint-disable prettier/prettier */
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    //CreateDateColumn,
    //OneToMany,
  } from 'typeorm';
  //import { Junta } from '../../juntas/entities/junta.entity';

  import {
    IsNotEmpty,
    IsString,
    
  } from 'class-validator';
  @Entity({name: 'TsNominal1'})
export class TsN1 {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty({ message: 'El campo "N1" no puede estar vacío' })
    @IsString({ message: 'El campo "N1" debe ser una cadena de texto' })
    @Column({ name: 'nominal0', length: 10, nullable: false })
    n0: string;1
}
