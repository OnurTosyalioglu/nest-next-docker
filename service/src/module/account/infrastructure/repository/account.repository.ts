import {Injectable, NotImplementedException} from "@nestjs/common";
import {AccountEntity} from "../../domain/entity/account.entity";
import {IAccountRepository} from "../../domain/repository/i.account.repository";
import {AccountLocalSource} from "../source/account.local.source";
import {AccountRemoteSource} from "../source/account.remote.source";

@Injectable()
export class AccountRepository implements IAccountRepository {
	constructor(
		private readonly local: AccountLocalSource,
		private readonly remote: AccountRemoteSource,
	) {}

	async findAll(query: any): Promise<AccountEntity[]> {
		try {
			const result = await this.local.findAll(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async find(query: any): Promise<AccountEntity> {
		try {
			const result = await this.local.find(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async findById(query: any): Promise<AccountEntity> {
		try {
			const result = await this.local.findById(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async create(account: AccountEntity): Promise<AccountEntity> {
		try {
			const result = await this.local.create(account)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async update(account: AccountEntity): Promise<AccountEntity> {
		try {
			const result = await this.local.update(account)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async removeById(query: any): Promise<boolean> {
		try {
			const result = await this.local.removeById(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}
}
