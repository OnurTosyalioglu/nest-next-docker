import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {AccountService} from "./application/service/account.service";
import {Account, AccountScheme} from "./infrastructure/dao/account.dao";
import {AccountRepository} from "./infrastructure/repository/account.repository";
import {AccountLocalSource} from "./infrastructure/source/account.local.source";
import {AccountRemoteSource} from "./infrastructure/source/account.remote.source";
import {AccountController} from "./presentation/controller/account.controller";

@Module({
	imports: [
		MongooseModule.forFeature([{
			name: Account.name,
			schema: AccountScheme,
		}])
	],
	exports: [
		MongooseModule.forFeature([{
			name: Account.name,
			schema: AccountScheme,
		}]),
		AccountService,
		AccountRepository,
		AccountLocalSource,
		AccountRemoteSource,
	],
	controllers: [
		AccountController,
	],
	providers: [
		AccountService,
		AccountRepository,
		AccountLocalSource,
		AccountRemoteSource,
	],
})
export class AccountModule {}
