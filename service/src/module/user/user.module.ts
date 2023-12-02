import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './application/service/user.service';
import { User, UserScheme } from './infrastructure/dao/user.dao';
import { UserRepository } from './infrastructure/repository/user.repository';
import { UserLocalSource } from './infrastructure/source/user.local.source';
import { UserRemoteSource } from './infrastructure/source/user.remote.source';
import { UserController } from './presentation/controller/user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserScheme,
      },
    ]),
  ],
  exports: [
    UserService,
    UserRepository,
    UserLocalSource,
    UserRemoteSource,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserScheme,
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserLocalSource, UserRemoteSource],
})
export class UserModule {}
