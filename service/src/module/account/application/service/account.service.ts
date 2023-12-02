import {Injectable, NotImplementedException} from "@nestjs/common";
import {AccountEntity} from "../../domain/entity/account.entity";
import {AccountRepository} from "../../infrastructure/repository/account.repository";

@Injectable()
export class AccountService {
	constructor(
		private readonly repository: AccountRepository,
	) {}

	async findAll(query: any): Promise<Array<AccountEntity>> {
		try {
			const result = await this.repository.findAll(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}
	
	async find(query: any): Promise<AccountEntity> {
		try {
			const result = await this.repository.find(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async findById(query: any): Promise<AccountEntity> {
		try {
			const result = await this.repository.findById(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async create(messages: AccountEntity): Promise<AccountEntity> {
		try {
			const result = await this.repository.create(messages)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async update(messages: AccountEntity): Promise<AccountEntity> {
		try {
			const result = await this.repository.update(messages)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async removeById(query: any): Promise<AccountEntity> {
		try {
			const result = await this.repository.update(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}
}
