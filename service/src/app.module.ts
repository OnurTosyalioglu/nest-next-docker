import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtModule } from '@nestjs/jwt'
import { CacheModule } from '@nestjs/cache-manager'
import { BullModule } from '@nestjs/bull'
import { BullBoardModule } from "@bull-board/nestjs";
import { ExpressAdapter } from "@bull-board/express";

import { config as bullConfig } from './config/bull.config'

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
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
