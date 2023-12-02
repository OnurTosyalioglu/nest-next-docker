import {Injectable, NotImplementedException} from "@nestjs/common";
import {PaymentEntity} from "../../domain/entity/payment.entity";
import {PaymentRepository} from "../../infrastructure/repository/payment.repository";

@Injectable()
export class PaymentService {
	constructor(
		private readonly repository: PaymentRepository,
	) {}	

	async findAll(query: any): Promise<Array<PaymentEntity>> {
		try {
			const result = await this.repository.findAll(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async find(query: any): Promise<PaymentEntity> {
		try {
			const result = await this.repository.find(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async findById(query: any): Promise<PaymentEntity> {
		try {
			const result = await this.repository.findById(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async create(payment: PaymentEntity): Promise<PaymentEntity> {
		try {
			const result = await this.repository.create(payment)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async update(payment: PaymentEntity): Promise<PaymentEntity> {
		try {
			const result = await this.repository.update(payment)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async removeById(query: any): Promise<boolean> {
		try {
			const result = await this.repository.removeById(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}
}

