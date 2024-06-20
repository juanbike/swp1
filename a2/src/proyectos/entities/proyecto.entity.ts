/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  
} from 'class-validator';
@Entity({name: 'proyectos'})
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  @Column({ length: 70 })
  @IsNotEmpty({ message: 'El campo "nombreProyecto" no puede estar vacío' })
  @IsString({ message: 'El campo "nombreProyecto" debe ser una cadena de texto' })
  proyecto: string;

  @Column('text', { nullable: true })
  @Column({ length: 70 })
  @IsNotEmpty({ message: 'El campo "cliente" no puede estar vacío' })
  @IsString({ message: 'El campo "cliente" debe ser una cadena de texto' })
  cliente: string;

  @Column('text', { nullable: true })
  @Column({ length: 70})
  @IsNotEmpty({ message: 'El campo "titulo" no puede estar vacío' })
  @IsString({ message: 'El campo "titulo" debe ser una cadena de texto' })
  titulo: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty({ message: 'El campo "revision" no puede estar vacío' })
  @IsString({ message: 'El campo "revision" debe ser una cadena de texto' })
  revision: string;

  @Column('text', { nullable: true })
  @Column({ length: 25 })
  @IsNotEmpty({ message: 'El campo "tipo" no puede estar vacío' })
  @IsString({ message: 'El campo "tipo" debe ser una cadena de texto' })
  tipo: string;

  @Column('text', { nullable: true })
  @Column({ length: 60 })
  @IsNotEmpty({ message: 'El campo "elaboradoPor" no puede estar vacío' })
  @IsString({ message: 'El campo "elaboradoPor" debe ser una cadena de texto' })
  elaboradoPor: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;
}
