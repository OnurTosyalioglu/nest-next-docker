import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Injectable,
  Param,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserEntity } from 'src/module/user/domain/entity/user.entity';
import { AuthService } from '../../application/service/auth.service';
import { JwtAuthGuard } from '../guard/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
  ): Promise<any> {
    try {
      const result = await this.service.login(body);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  @Post('signup')
  async singup(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
  ): Promise<any> {
    try {
      const result = await this.service.signup(new UserEntity(body));

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  @Get('verify')
  async verify(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
  ): Promise<any> {
    try {
      const result = await this.service.verify(body);

      return res
        .status(HttpStatus.OK)
        .json({ message: 'Your account successfully verified!' });
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  @Post('recover')
  async recover(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
  ): Promise<any> {
    try {
      const result = await this.service.recover(body);

      return res
        .status(HttpStatus.OK)
        .json({ message: 'Please check your email' });
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
  ): Promise<any> {
    try {
      const result = await this.service.refresh(body);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(
    @Req() req: Request,
    @Res() res: Response,
    @Param() param,
    @Body() body,
  ): Promise<any> {
    try {
      const result = await this.service.logout(req.user);

      return res.status(HttpStatus.OK).json(result);
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}
