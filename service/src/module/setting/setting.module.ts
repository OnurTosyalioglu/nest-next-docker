import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {SettingsService} from "./application/service/settings.service";
import {Settings, SettingsScheme} from "./infrastructure/dao/settings.dao";
import {SettingsRepository} from "./infrastructure/repository/settings.repository";
import {SettingsLocalSource} from "./infrastructure/source/settings.local.source";
import {SettingsRemoteSource} from "./infrastructure/source/settings.remote.source";
import {SettingsController} from "./presentation/controller/settings.controller";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Settings.name,
				schema: SettingsScheme,
			}
		]),
	],
	exports: [
		SettingsService,
		SettingsRepository,
		SettingsLocalSource,
		SettingsRemoteSource,
		MongooseModule.forFeature([
			{
				name: Settings.name,
				schema: SettingsScheme,
			}
		]),
	],
	controllers: [
		SettingsController,
	],
	providers: [
		SettingsService,
		SettingsRepository,
		SettingsLocalSource,
		SettingsRemoteSource,
	],
})
export class SettingModule {}
