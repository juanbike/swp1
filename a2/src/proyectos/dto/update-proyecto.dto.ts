import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from './create-proyecto.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {
  @IsNotEmpty()
  @IsString()
  nombreProyecto: string;

  @IsNotEmpty()
  @IsString()
  cliente: string;

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  revision: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsNotEmpty()
  @IsString()
  elaboradoPor: string;
}
