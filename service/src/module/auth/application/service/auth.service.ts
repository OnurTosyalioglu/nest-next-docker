import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { referrerPolicy } from 'helmet';
import { UserService } from 'src/module/user/application/service/user.service';
import { UserEntity } from 'src/module/user/domain/entity/user.entity';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../../../../config/jwt.config';
import { config as bcrpytConfig } from '../../../../config/bcrypt.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(body: UserEntity): Promise<any> {
    try {
      const user = await this.userService.find({ email: body.email });

      if (!user) {
        throw new UnauthorizedException();
      }

      // const isMatch = await bcrypt.compare(body.password, user.password);

      // if (!isMatch) {
      //   throw new UnauthorizedException();
      // }

      const accessToken = await this.jwtService.signAsync(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
        config.access,
      );

      const refreshToken = await this.jwtService.signAsync(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
        config.refresh,
      );

      /**
       *  update refresh token
       */
      const userUpdated = await this.userService.update(
        new UserEntity({
          _id: user._id,
          ...user,
          refreshToken,
        }),
      );

      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async signup(body: UserEntity): Promise<any> {
    try {
      /**
       *  bcrpyt hash
       */
      const hashedPassword = await bcrypt.hash(
        body.password,
        bcrpytConfig.salt,
      );

      const user = await this.userService.create({
        ...body,
        password: hashedPassword,
        verified: false,
        verifyCode: uuidv4(),
      });

      const accessToken = await this.jwtService.signAsync(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
        config.access,
      );

      const refreshToken = await this.jwtService.signAsync(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
        config.refresh,
      );

      /**
       *  write refresh token
       */
      const updatedUser = await this.userService.update(
        new UserEntity({
          _id: user._id,
          ...user,
          refreshToken,
        }),
      );

      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async refresh(body: any): Promise<any> {
    try {
      const user = await this.userService.find(body);

      const accessToken = await this.jwtService.signAsync(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
        config.access,
      );

      const refreshToken = await this.jwtService.signAsync(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
        },
        config.refresh,
      );

      const userUpdate = await this.userService.update(
        new UserEntity({
          _id: user._id,
          // ...user,
          refreshToken,
        }),
      );

      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async verify(code: String): Promise<any> {
    try {
      /**
       *  find email verification code
       */
      const user = await this.userService.find({ verifyCode: code });

      if (!user) {
        throw new UnauthorizedException();
      }

      const updatedUser = await this.userService.update({
        _id: user._id,
        verified: true,
      });

      return true;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async recover(email: String): Promise<any> {
    try {
      /**
       *  find user by email
       */
      const user = await this.userService.find({ email: email });

      /**
       *  generate password
       */
      const password = uuidv4().substring(1, 8);

      /**
       *  hash password
       */
      const hashedPassword = await bcrypt.hash(password, bcrpytConfig.salt);

      /**
       *  send email
       */

      const updatedUser = await this.userService.update({
        _id: user._id,
        password: hashedPassword,
      });

      return true;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async logout(data: any): Promise<any> {
    try {
      const user = await this.userService.find({ _id: data._id });
      const userWithoutToken = new UserEntity({
        _id: user._id,
        ...user,
        refreshToken: '',
      });

      const result = await this.userService.update(
        new UserEntity({
          _id: user._id,
          ...user,
          refreshToken: '',
        }),
      );

      return result ? true : false;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}
