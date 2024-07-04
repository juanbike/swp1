/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Junta } from './entities/junta.entity';
import { JuntaController } from './junta.controller';
import { JuntaService } from './juntas.services';
import { Proyecto } from '../proyectos/entities/proyecto.entity';
import { Inspector } from '../inspectores/entities/inspectore.entity';
import { TsLinea } from '../ts_linea/entities/ts_linea.entity';
import { TsEspecificacion } from '../ts_especificacion/entities/ts_especificacion.entity';
import { Soldadore } from '../soldadores/entities/soldadore.entity';
import { TsSchedule } from '../ts_schedule/entities/ts_schedule.entity';
import { TsTipoExtremo } from '../ts_tipo-extremo/entities/ts_tipoExtremo.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Junta, Proyecto, Inspector, TsLinea, TsEspecificacion, Soldadore, TsSchedule, TsTipoExtremo])],
  controllers: [JuntaController],
  providers: [JuntaService],
  exports: [JuntaService]
})
export class JuntasModule {}
