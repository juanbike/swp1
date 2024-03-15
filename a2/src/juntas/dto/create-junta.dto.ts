/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Allow } from 'class-validator';

export class CreateJuntaDto {
  
  @IsNotEmpty({ message: 'El campo  nominal no puede estar vacio' })
  @IsString()
  nominal: string;

  @IsNotEmpty({ message: 'El campo  nominal1 no puede estar vacio' })
  @IsString()
  nominal1: string;

  
  @IsNotEmpty({ message: 'El campo  linea no puede estar vacio' })
  @IsString()
  linea: string;

  @IsNotEmpty({ message: 'El campo  especificacion no puede estar vacio' })
  @IsString()
  especificacion: string;

  @IsNotEmpty({ message: 'El campo   schedule no puede estar vacio' })
  @IsString()
  schedule: string;
 
  @IsNotEmpty({ message: 'El campo   tipo_extremos no puede estar vacio' })
  @IsString()
  tipo_extremos: string;

 
  @IsNotEmpty({ message: 'El campo   tipo_material no puede estar vacio' })
  @IsString()
  tipo_material: string;

  @IsNotEmpty({ message: 'El campo   material no puede estar vacio' })
  @IsString()
  material: string;

  @IsNotEmpty({ message: 'El campo   diam_inch_contabilizadas no puede estar vacio' })
  @IsString()
  diam_inch_contabilizadas: string;

  @IsNotEmpty({ message: 'El campo  factor_pulgadas_diametrales no puede estar vacio' })
  @IsString()
  factor_pulgadas_diametrales: string;

  @IsNotEmpty({ message: 'El campo  pulgadas_diametrales no puede estar vacio' })
  @IsString()
  pulgadas_diametrales: string;

  @Allow()
  @IsNotEmpty({ message: 'El campo  proyectID no puede estar vacio' })
  @IsString()
  proyectID: string;
  
  @Allow()
  @IsNotEmpty({ message: 'El campo  usuarioID no puede estar vacio' })
  @IsString()
  usuarioID: string;
  



}
