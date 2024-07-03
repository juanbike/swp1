/* eslint-disable prettier/prettier */
import { IsDateString, IsInt, IsNumber, IsString } from 'class-validator';
//import { NumericType } from 'typeorm';

export class CreateJuntaDto {
  /*
  @IsNotEmpty({ message: 'El campo  nominal no puede estar vacio' })
  @IsString()
  nominal: string;

  @IsNotEmpty({ message: 'El campo  nominal1 no puede estar vacio' })
  @IsString()
  nominal1: string;
*/

 

  //@IsInt({ message: 'inspectorID debe ser un número entero' })
  inspectorID: number;

  //@IsInt({ message: 'soldadorId debe ser un número entero' })
  soldadorID: number;

  //@IsInt({ message: 'lineaID debe ser un número entero' })
  lineaID: number;

  //@IsInt({ message: 'especificacionID debe ser un número entero' })
  especificacionID: number;

  @IsDateString(
    {},
    {
      message:
        'fecha debe ser una cadena de fecha ISO 8601 válida:ejemplo:2023-06-24T10:00:00Z',
    },
  )
  fecha: string;

  @IsString()
  observaciones: string;

  @IsNumber({}, { message: 'schedule debe ser un  número entero' })
  schedule: number;

  @IsNumber({}, { message: 'proyectoId debe ser un  número entero' })
  proyectoID: number;

  /*
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

 */
}
