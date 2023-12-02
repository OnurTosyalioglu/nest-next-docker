import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {NotificationsService} from "./application/service/notifications.service";
import {Notifications, NotificationsScheme} from "./infrastructure/dao/notifications.dao";
import {NotificationsRepository} from "./infrastructure/repository/notifications.repository";
import {NotificationsLocalSource} from "./infrastructure/source/notifications.local.source";
import { NotificationsRemoteSource} from "./infrastructure/source/notifications.remote.source";
import {NotificationsController} from "./presentation/controller/notifications.controller";

@Module({
	imports: [
		MongooseModule.forFeature([{
			name: Notifications.name,
			schema: NotificationsScheme,
		}]),
	],
	exports: [
		NotificationsService,
		NotificationsRepository,
		NotificationsLocalSource,
		NotificationsRemoteSource,
		MongooseModule.forFeature([{
			name: 'notifications',
			schema: NotificationsScheme,
		}])
	],
	controllers: [
		NotificationsController,
	],
	providers: [
		NotificationsService,
		NotificationsRepository,
		NotificationsLocalSource,
		NotificationsRemoteSource,
	],
})
export class NotificationModule {}
