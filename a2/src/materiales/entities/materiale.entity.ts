/* eslint-disable prettier/prettier */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity({ name: 'materiales' })
export class Materiales {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tipo', length: 25, nullable: false })
  tipo: string;

  @Column({ name: 'colada', length: 8, nullable: false })
  colada: string;

  @Column({ name: 'schedule', length: 2, nullable: false })
  schedule: string;

  @Column({ name: 'textremo', length: 12, nullable: false })
  textremo: string;

  @Column({ name: 'tmaterial', length: 20, nullable: false })
  tmaterial: string;

  @Column({ name: 'material', length: 25, nullable: false })
  material: string;

  @CreateDateColumn({ name: 'create_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
