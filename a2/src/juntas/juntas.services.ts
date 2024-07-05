/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Junta } from './entities/junta.entity';
import { Proyecto } from '../proyectos/entities/proyecto.entity';
import { Inspector } from '../inspectores/entities/inspectore.entity';
import { TsLinea } from '../ts_linea/entities/ts_linea.entity';
import { TsEspecificacion } from '../ts_especificacion/entities/ts_especificacion.entity';
import { Soldadore } from '../soldadores/entities/soldadore.entity';
import { CreateJuntaDto } from './dto/create-junta.dto';
import { TsSchedule } from '../ts_schedule/entities/ts_schedule.entity';
import { TsTipoExtremo } from '../ts_tipo-extremo/entities/ts_tipoExtremo.entity';
import { TsMaterial } from '../ts_material/entities/ts_material.entity';
import { TsN1 } from '../ts_n1/entities/ts_n1.entity';
import { TsN0 } from '../ts_n0/entities/ts_n0.entity';

@Injectable()
export class JuntaService {
  private readonly logger = new Logger(JuntaService.name);
  constructor(
    private readonly connection: Connection,
    @InjectRepository(Junta)
    private readonly juntaRepository: Repository<Junta>,
   
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,

    @InjectRepository(Inspector)
    private readonly inspectorRepository: Repository<Inspector>,
    
    @InjectRepository(TsLinea)
    private readonly tsLineaRepository: Repository<TsLinea>,
   
    @InjectRepository(TsEspecificacion)
    private readonly tsEspecificacionRepository: Repository<TsEspecificacion>,
    
    @InjectRepository(Soldadore)
    private readonly soldadoreRepository: Repository<Soldadore>,

    @InjectRepository(TsSchedule)
    private readonly tsScheduleRepository: Repository<TsSchedule>,

    @InjectRepository(TsTipoExtremo)
    private readonly tsTipoExtremoRepository: Repository<TsTipoExtremo>,

    @InjectRepository(TsMaterial)
    private readonly tsMaterialRepository: Repository<TsMaterial>,

    @InjectRepository(TsN1)
    private readonly tsN1Repository: Repository<TsN1>,

    @InjectRepository(TsN0)
    private readonly tsN0Repository: Repository<TsN0>,
  ) {}

  async createJunta(data: CreateJuntaDto): Promise<Junta> {
    return await this.connection.transaction(async (manager) => {
      //Proyecto
      const proyecto = await manager.findOne(Proyecto, {
        where: { id: data.proyectoID },
      });
      if (!proyecto) {
        throw new NotFoundException('Proyecto no encontrado');
      }
      //Inspector
      const inspector = await manager.findOne(Inspector, {
        where: { id: data.inspectorID },
      });
      if (!inspector) {
        throw new NotFoundException('Inspector no encontrado');
      }
      //Linea
      const linea = await manager.findOne(TsLinea, {
        where: { id: data.lineaID },
      });
      if (!linea) {
        throw new NotFoundException('Linea no encontrada');
      }
      //Especificacion
      const especificacion = await manager.findOne(TsEspecificacion, {
        where: { id: data.especificacionID },
      });
      if (!especificacion) {
        throw new NotFoundException('Especificacion no encontrada');
      }
      //soldador
      const soldador = await manager.findOne(Soldadore, {
        where: { id: data.soldadorID },
      });
      if (!soldador) {
        throw new NotFoundException('Soldador no encontrado');
      }
      //tsSchedule
      const tsSchedule = await manager.findOne(TsSchedule, {
        where: { id: data.tsScheduleID },
      });
      if (!tsSchedule) {
        throw new NotFoundException('tsSchedule no encontrado');
      }
      //tsTipoExtremo
      const tsTipoExtremo = await manager.findOne(TsTipoExtremo, {
        where: { id: data.tsTipoExtremoID },
      });
      if (!tsTipoExtremo) {
        throw new NotFoundException('tsTipoExtremo no encontrado');
      }
      //tsMaterial
      const tsMaterial = await manager.findOne(TsMaterial, {
        where: { id: data.tsMaterialID },
      });
      if (!tsMaterial) {
        throw new NotFoundException('tsMaterial no encontrado');
      }
      //tsN1
      const tsN1 = await manager.findOne(TsN1, {
        where: { id: data.tsN1ID },
      });
      if (!tsN1) {
        throw new NotFoundException('tsN1 no encontrado');
      }
      //tsN0
      const tsN0 = await manager.findOne(TsN0, {
        where: { id: data.tsN0ID },
      });
      if (!tsN0) {
        throw new NotFoundException('tsN0 no encontrado');
      }


      const junta = new Junta();
      junta.proyectoID = proyecto;
      junta.inspectorID = inspector;
      junta.lineaID = linea;
      junta.especificacionID = especificacion;
      junta.soldadorID = soldador;
      junta.tsScheduleID = tsSchedule;
      junta.tsTipoExtremoID = tsTipoExtremo
      junta.tsMaterialID = tsMaterial;
      junta.tsN1ID = tsN1;
      junta.tsN0ID = tsN0;
      junta.fecha = new Date(data.fecha);
      junta.observaciones = data.observaciones;
      junta.pulgdia = data.pulgdia;
      junta.pulgadascon = data.pulgadascon;
      junta.facpuldia = data.facpuldia;

      return await manager.save(junta);
    });

   
  }
}
