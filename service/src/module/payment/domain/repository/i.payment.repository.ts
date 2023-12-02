import {PaymentEntity} from "../entity/payment.entity";

export interface IPaymentRepository {
	findAll(query: any): Promise<Array<PaymentEntity>>;
	find(query: any): Promise<PaymentEntity>;
	findById(query: any): Promise<PaymentEntity>;
	create(payment: PaymentEntity): Promise<PaymentEntity>;
	update(payment: PaymentEntity): Promise<PaymentEntity>;
	removeById(query: any): Promise<boolean>;
}

