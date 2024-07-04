/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Proyecto } from '../../proyectos/entities/proyecto.entity';
import { Inspector } from '../../inspectores/entities/inspectore.entity'
import { TsLinea } from '../../ts_linea/entities/ts_linea.entity'
import { TsEspecificacion } from '../../ts_especificacion/entities/ts_especificacion.entity';
import { Soldadore } from '../../soldadores/entities/soldadore.entity';
import { TsSchedule } from '../../ts_schedule/entities/ts_schedule.entity';
import { TsTipoExtremo } from '../../ts_tipo-extremo/entities/ts_tipoExtremo.entity';
import { TsMaterial } from '../../ts_material/entities/ts_material.entity';

@Entity('junta')
export class Junta {
  @PrimaryGeneratedColumn('increment', { name: 'id_junta' })
  id: number;

  @ManyToOne(() => Proyecto, proyecto => proyecto.juntas)
  @JoinColumn({ name: 'id_proyecto' })
  proyectoID: Proyecto;

  
  @ManyToOne(() => Inspector, inspector => inspector.juntas)
  @JoinColumn({ name: 'id_inspector' })
  inspectorID: Inspector;


  //Linea
  
  @ManyToOne(() => TsLinea, linea => linea.juntas)
  @JoinColumn({ name: 'id_linea'})
  lineaID: TsLinea;

  //Especificacion
  @ManyToOne(() => TsEspecificacion, tsespecificacion => tsespecificacion.juntas)
  @JoinColumn({ name: 'id_especificacion' })
  especificacionID: TsEspecificacion;

  //soldador
  @ManyToOne(() => Soldadore, soldador => soldador.juntas)
  @JoinColumn({ name: 'id_soldador' })
  soldadorID: Soldadore;

  //schedule
  @ManyToOne(() => TsSchedule, tsSchedule => tsSchedule.juntas)
  @JoinColumn({ name: 'id_tsSchedule' })
  tsScheduleID: TsSchedule;

  //TipoExtremo
  @ManyToOne(() => TsTipoExtremo, tsTipoExtremo => tsTipoExtremo.juntas)
  @JoinColumn({ name: 'id_tsTipoExtremo' })
  tsTipoExtremoID: TsTipoExtremo;

  //TipoMaterial
  @ManyToOne(() => TsMaterial, tsMaterial => tsMaterial.juntas)
  @JoinColumn({ name: 'id_tsMaterial' })
  tsMaterialID: TsMaterial;

  @CreateDateColumn({ name: 'create_at' })
  fecha: Date;

  @Column({ name: 'observaciones', type: 'text' })
  observaciones: string;

/*
  @ManyToOne(() => Proyecto, proyecto => proyecto.tipo)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Inspectores, inspector => inspector.juntas)
  @JoinColumn({ name: 'id_inspector' })
  inspector: Inspectores;

  @Column({ name: 'fecha', type: 'timestamp' })
  fecha: Date;

  @Column({ name: 'observaciones', type: 'text' })
  observaciones: string;
 */


}
