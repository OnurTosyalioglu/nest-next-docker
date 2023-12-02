import {UnauthorizedException} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {UserService} from 'src/module/user/application/service/user.service';
import { config } from '../../../../config/jwt.config';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
		private readonly userService: UserService,
	) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.access.secret,
    });
  }

  async validate(payload: any): Promise<any> {
		/**
		 *  check user
		 */
		const user = await this.userService.findById({ _id: payload._id})

		if (!user) {
			throw new UnauthorizedException()	
		}

    return user;
  }
}
