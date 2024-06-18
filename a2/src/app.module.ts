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
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
