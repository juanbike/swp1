/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntasModule } from './juntas/juntas.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { SoldadoresModule } from './soldadores/soldadores.module';
import { InspectoresModule } from './inspectores/inspectores.module';
import { PaginacionModule } from './paginacion/paginacion.module';
import { dataSourceOptions } from './db/data-source';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { SoldaduraModule } from './soldadura/soldadura.module';
import { MaterialesModule } from './materiales/materiales.module';
import { TsLineaModule } from './ts_linea/ts_linea.module';
import { TsMaterialModule } from './ts_material/ts_material.module';
import { TsTipoExtremoModule } from './ts_tipo-extremo/ts_tipo-extremo.module';
import { TsTipoMaterialModule } from './ts_tipo-material/ts_tipo-material.module';
import { TsEspecificacionModule } from './ts_especificacion/ts_especificacion.module';
import { TsScheduleModule } from './ts_schedule/ts_schedule.module';
import { TsMainJuntaModule } from './ts-main-junta/ts-main-junta.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
       
    JuntasModule,
    ProyectosModule,
    SoldadoresModule,
    InspectoresModule,
    PaginacionModule,
    UsuariosModule,
    PerfilesModule,
    SoldaduraModule,
    MaterialesModule,
    TsLineaModule,
    TsMaterialModule,
    TsTipoExtremoModule,
    TsTipoMaterialModule,
    TsEspecificacionModule,
    TsScheduleModule,
    TsMainJuntaModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
