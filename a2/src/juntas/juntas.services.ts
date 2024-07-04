/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
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

  ) {}

  async createJunta(data: CreateJuntaDto): Promise<Junta> {
    return await this.connection.transaction(async (manager) => {
      const proyecto = await manager.findOne(Proyecto, {
        where: { id: data.proyectoID },
      });
      const inspector = await manager.findOne(Inspector, {
        where: { id: data.inspectorID },
      });
      const linea = await manager.findOne(TsLinea, {
        where: { id: data.lineaID },
      });
      const especificacion = await manager.findOne(TsEspecificacion, {
        where: { id: data.especificacionID },
      });
      const soldador = await manager.findOne(Soldadore, {
        where: { id: data.soldadorID },
      });
      const tsSchedule = await manager.findOne(TsSchedule, {
        where: { id: data.tsScheduleID },
      });
      const tsTipoExtremo = await manager.findOne(TsTipoExtremo, {
        where: { id: data.tsTipoExtremoID },
      });


      const junta = new Junta();
      junta.proyectoID = proyecto;
      junta.inspectorID = inspector;
      junta.lineaID = linea;
      junta.especificacionID = especificacion;
      junta.soldadorID = soldador;
      junta.tsScheduleID = tsSchedule;
      junta.tsTipoExtremoID = tsTipoExtremo
      junta.fecha = new Date(data.fecha);
      junta.observaciones = data.observaciones;

      return await manager.save(junta);
    });

   
  }
}
