import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { MailerModule } from '@nestjs-modules/mailer';
import { MysqlModule } from 'nest-mysql'

import { BullModule } from '@nestjs/bull';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { S3Module } from 'nestjs-s3';

import { config as bullConfig } from './config/bull.config';
import { config as mongoConfig } from './config/mongo.config';
import { config as s3Config } from './config/aws.config';
import { config as queueConfig } from './config/queue.config';
import { config as cacheConfig } from './config/cache.config';
import { config as mailConfig } from './config/mail.config';
import { config as mysqlConfig } from './config/mysql.config'

import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { JwtStrategy } from './module/auth/presentation/strategy/jwt.strategy';
import { JwtRefreshStrategy } from './module/auth/presentation/strategy/jwt.refresh.strategy';
import { AccountModule } from './module/account/account.module';
import { MessageModule } from './module/message/message.module';
import { NotificationModule } from './module/notification/notification.module';
import { SettingModule } from './module/setting/setting.module';
import { PaymentModule } from './module/payment/payment.module';

@Module({
  imports: [
    /**
     *  Mail Module
     */
    //
    // S3Module.forRootAsync({
    // 	useFactory: () => s3Config,
    // }),
    //

   	/**
   	 *  mysql module
   	 */
		// MysqlModule.forRootAsync({
		// 	useFactory: () => mysqlConfig
		// }),

    /**
     *  Mail Module
     */
    //
    // MailerModule.forRootAsync({
    // 	useFactory: () => mailConfig,
    // }),
    //

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: cacheConfig.host,
            port: cacheConfig.port,
          },
        }),
      }),
    }),
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'DEV'
          ? ['.env', '.env.devlopment']
          : ['.env.production'],
    }),
    BullModule.forRoot(queueConfig),
    BullBoardModule.forRoot({
      route: bullConfig.route,
      adapter: ExpressAdapter,
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(mongoConfig.uri, { dbName: mongoConfig.database }),

    /**
     *  modules
     */
    UserModule,
    AuthModule,
    AccountModule,
    MessageModule,
    NotificationModule,
    SettingModule,
    PaymentModule,
  ],
  controllers: [
    // AppController,
  ],
  providers: [AppService, JwtStrategy, JwtRefreshStrategy],
})
export class AppModule {}
