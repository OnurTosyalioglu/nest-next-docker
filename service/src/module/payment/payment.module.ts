import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {PaymentService} from "./application/service/payment.service";
import {Payment, PaymentScheme} from "./infrastructure/dao/payment.dao";
import {PaymentRepository} from "./infrastructure/repository/payment.repository";
import {PaymentLocalSource} from "./infrastructure/source/payment.local.source";
import {PaymentRemoteSource} from "./infrastructure/source/payment.remote.source";
import {PaymentController} from "./presentation/controller/payment.controller";

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: Payment.name,
				schema: PaymentScheme,
			}
		]),
	],
	exports: [
		MongooseModule.forFeature([
			{
				name: Payment.name,
				schema: PaymentScheme,
			}
		]),
		PaymentService,
		PaymentRepository,
		PaymentLocalSource,
		PaymentRemoteSource,
	],
	providers: [
		PaymentService,
		PaymentRepository,
		PaymentLocalSource,
		PaymentRemoteSource,
	],
	controllers: [
		PaymentController,
	],
})
export class PaymentModule {}
