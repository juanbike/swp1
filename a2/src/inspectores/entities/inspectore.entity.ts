/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity({ name: 'inspectores' })
export class Inspectores {
 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nombre', length: 25, nullable: false })
  nombre: string;

  @Column({ name: 'apellido', length: 25, nullable: false })
  apellido: string;
  
  @Column({ name: 'telefono1', length: 25, nullable: false })
  telefono1: string;

  @Column({ name: 'telefono2', length: 25, nullable: false })
  telefono2: string;
 
  @CreateDateColumn({ name: 'create_at' })
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
