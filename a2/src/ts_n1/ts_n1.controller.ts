/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  Logger
} from '@nestjs/common';

import { TsN1Service } from './ts_n1.service';
import { CreateTsN1Dto } from './dto/create-ts_n1.dto';
import { UpdateTsN1Dto } from './dto/update-ts_n1.dto';

import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { TsN1 } from '../ts_n1/entities/ts_n1.entity';


@Controller('/api/ts-n1')
export class TsN1Controller {
  private readonly logger = new Logger(TsN1.name );
  constructor(private readonly tsN1Service: TsN1Service) {}

  @Post()
  create(@Body() createTsN1Dto: CreateTsN1Dto) {
    return this.tsN1Service.create(createTsN1Dto);
  }

  @Get()
  findAll() {
    return this.tsN1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tsN1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTsN1Dto: UpdateTsN1Dto) {
    return this.tsN1Service.update(+id, updateTsN1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tsN1Service.remove(+id);
  }

  
  @Post('upload')
  @UseInterceptors(FileInterceptor('File', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${randomName}${extname(file.originalname)}`);
      }
    })
  }))
  async uploadData(@UploadedFile() file: Express.Multer.File): Promise<{ message: string }> {
    try {
      if (!file) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Archivo no proporcionado',
        }, HttpStatus.BAD_REQUEST);
      }
      await this.tsN1Service.readExcelAndSave(file.path);
      return { message: 'La tabla se creó en la base de datos' };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Error al procesar el archivo',
      }, HttpStatus.BAD_REQUEST);
    }
  }


  @Delete()
  async deleteAllData() {
    this.logger.log('Received request to delete all data');
    try {
      await this.tsN1Service.deleteAllData();
      this.logger.log('All data deleted successfully');
      return { message: 'Todos los datos han sido eliminados' };
    } catch (error) {
      this.logger.error('Error deleting all data', error.stack);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'No se pudieron eliminar los datos',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}
