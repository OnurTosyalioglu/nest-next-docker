import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {MessagesService} from "./application/service/messages.service";
import {Messages, MessagesScheme} from "./infrastructure/dao/messages.dao";
import {MessagesRepository} from "./infrastructure/repository/messages.repository";
import {MessagesLocalSource} from "./infrastructure/source/messages.local.source";
import {MessagesRemoteSource} from "./infrastructure/source/messages.remote.source";
import {MessagesController} from "./presentation/controller/messages.controller";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Messages.name,
				schema: MessagesScheme,
			}
		]),
	],
	exports: [
		MessagesService,
		MessagesRepository,
		MessagesLocalSource,
		MessagesRemoteSource,
		MongooseModule.forFeature([
			{
				name: Messages.name,
				schema: MessagesScheme,
			}
		]),
	],
	controllers: [
		MessagesController,
	],
	providers: [
		MessagesService,
		MessagesRepository,
		MessagesLocalSource,
		MessagesRemoteSource,
	],
})
export class MessageModule {}
