import {AccountEntity} from "../entity/account.entity";

export interface IAccountRepository {
	findAll(query: any): Promise<Array<AccountEntity>>;
	find(query: any): Promise<AccountEntity>;
	findById(query: any): Promise<AccountEntity>;
	create(message: AccountEntity): Promise<AccountEntity>;
	update(message: AccountEntity): Promise<AccountEntity>;
	removeById(query: any): Promise<boolean>;
}
