import {
  Body,
  Controller,
  Get,
  Param,
  Req,
  Res,
  Query,
  Put,
  Delete,
  NotImplementedException,
  Post,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/module/auth/presentation/guard/jwt.guard';
import { SettingsService } from '../../application/service/settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly service: SettingsService) {}

  @Get()
  async get(
    @Req() req: any,
    @Res() res: Response,
    @Body() body,
    @Param() param,
    @Query() query,
  ): Promise<Response> {
    try {
      const result = await this.service.findAll(query);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  @Get(':id')
  async getById(
    @Req() req: any,
    @Res() res: Response,
    @Body() body,
    @Param() param,
    @Query() query,
  ): Promise<Response> {
    try {
      const result = await this.service.find({ _id: param.id });

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async post(
    @Req() req: any,
    @Res() res: Response,
    @Body() body,
    @Param() param,
    @Query() query,
  ): Promise<Response> {
    try {
      const result = await this.service.create({ user: req.user._id, ...body });

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  @Put(':id')
  async put(
    @Req() req: any,
    @Res() res: Response,
    @Body() body,
    @Param() param,
    @Query() query,
  ): Promise<Response> {
    try {
      const result = await this.service.update({ _id: param.id, ...body });

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  @Delete(':id')
  async delete(
    @Req() req: any,
    @Res() res: Response,
    @Body() body,
    @Param() param,
    @Query() query,
  ): Promise<Response> {
    try {
      const result = await this.service.removeById({ _id: param.id });

      return result
        ? res
            .status(HttpStatus.OK)
            .json({ message: 'Record successfully deleted' })
        : res.status(HttpStatus.OK).json({ message: 'Record not found' });
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }
}
