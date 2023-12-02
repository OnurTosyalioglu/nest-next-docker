import {Injectable, NotImplementedException} from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import {Model} from "mongoose"
import {Account, AccountDocument} from "../dao/account.dao"
import {ISource} from "./i.source"

@Injectable()
export class AccountLocalSource implements ISource {
	constructor(
		@InjectModel(Account.name) private readonly dao: Model<AccountDocument>,
	) {}

	async findAll(query: any): Promise<any> {
		try {
			const result = await this.dao.find(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async find(query: any): Promise<any> {
		try {
			const result = await this.dao.findOne(query)

			return result	
		} catch (e) {
			throw new NotImplementedException(e)
		}	
		
	}

	async findById(query: any): Promise<any> {	
		try {
			const result = await this.dao.findById(query)

			return result		
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async create(data: any): Promise<any> {
		try {
			const result = await this.dao.create(data)

			return result			
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async update(data: any): Promise<any> {
		try {
			const result = await this.dao.findOneAndUpdate({ _id: data._id }, data, { new: true })

			return result				
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async removeById(query: any): Promise<any> {
		try {
			const result = await this.dao.deleteOne(query)

			return result					
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}
}
