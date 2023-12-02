import {
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Req,
  Res,
  Body,
  Query,
  Param,
  NotImplementedException,
  Controller,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../../application/service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/')
  async get(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
    @Query() query,
  ): Promise<any> {
    try {
      const result = await this.service.findAll(query);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  @Get(':id')
  async getById(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
    @Query() query,
  ): Promise<any> {
    try {
      const result = await this.service.findById(query);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  @Post('/')
  async post(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
    @Query() query,
  ): Promise<any> {
    try {
      const result = await this.service.create(body);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  @Put(':id')
  async update(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
    @Query() query,
  ): Promise<any> {
    try {
      const result = await this.service.update({ _id: param.id, ...body });

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  @Delete(':id')
  async delete(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
    @Query() query,
  ): Promise<any> {
    try {
      const result = await this.service.removeById(param);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}
