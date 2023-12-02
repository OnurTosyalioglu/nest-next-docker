import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthService } from './application/service/auth.service';
import { AuthController } from './presentation/controller/auth.controller';
import { JwtRefreshStrategy } from './presentation/strategy/jwt.refresh.strategy';
import { JwtStrategy } from './presentation/strategy/jwt.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  exports: [AuthService],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
