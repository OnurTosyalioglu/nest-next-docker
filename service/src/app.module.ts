import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { CacheModule } from '@nestjs/cache-manager'
import { BullModule } from '@nestjs/bull'
import { BullBoardModule } from "@bull-board/nestjs";
import { ExpressAdapter } from "@bull-board/express";
import { ScheduleModule } from '@nestjs/schedule';

import { config as bullConfig } from './config/bull.config'
import { config as mongoConfig } from './config/mongo.config'
import {UserModule} from './module/user/user.module';
import {AuthModule} from './module/auth/auth.module';
import {JwtStrategy} from './module/auth/presentation/strategy/jwt.strategy';
import {JwtRefreshStrategy} from './module/auth/presentation/strategy/jwt.refresh.strategy';
import {AccountModule} from './module/account/account.module';
import {MessageModule} from './module/message/message.module';
import {NotificationModule} from './module/notification/notification.module';
import {SettingModule} from './module/setting/setting.module';
import {PaymentModule} from './module/payment/payment.module';

@Module({
  imports: [
		ConfigModule.forRoot({
		  isGlobal: true,
			envFilePath: process.env.NODE_ENV === 'DEV' ? 
				['.env', '.env.devlopment'] :
				['.env.production'],
		}),	
		BullBoardModule.forRoot({
      route: bullConfig.route,
      adapter: ExpressAdapter,
    }),
    ScheduleModule.forRoot(),
		MongooseModule.forRoot(mongoConfig.uri, { dbName: mongoConfig.name, }),

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
  providers: [
		AppService, 
		JwtStrategy,
		JwtRefreshStrategy,
	],
})
export class AppModule {}
