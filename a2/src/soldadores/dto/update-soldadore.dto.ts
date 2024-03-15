/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSoldadoreDto } from './create-soldadore.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSoldadoreDto extends PartialType(CreateSoldadoreDto) {
  @IsNotEmpty({ message: 'El campo Nombre no puede estar vacio' })
  @IsString()
  nombre: string;

  @IsNotEmpty({ message: 'El campo Apeliido no puede estar vacio' })
  @IsString()
  apellido: string;

  
  @IsNotEmpty({ message: 'El campo Identificacion no puede estar vacio' })
  @IsString()
  identificacion: string;

  @IsNotEmpty({ message: 'El campo valores no puede estar vacio' })
  @IsString()
  valores: string;

  @IsNotEmpty({ message: 'El campo Estampa no puede estar vacio' })
  @IsString()
  estampa: string;

  @IsNotEmpty({ message: 'El campo Calicación no puede estar vacio' })
  @IsString()
  calificacion: string;

  @IsNotEmpty({ message: 'El campo BaeMetal no puede estar vacio' })
  @IsString()
  basemetal: string;

  @IsNotEmpty({ message: 'El campo Número P no puede estar vacio' })
  @IsString()
  numerop: string;

 




}
