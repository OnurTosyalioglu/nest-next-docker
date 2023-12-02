import {Injectable, NotImplementedException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Notifications, NotificationsDocument} from "../dao/notifications.dao";
import {ISource} from "./i.source";

@Injectable()
export class NotificationsLocalSource implements ISource {
	constructor(
		@InjectModel(Notifications.name) private readonly dao: Model<NotificationsDocument>,
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
			const result = await this.dao.findOne(query)

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
			const result = await this.dao.findOneAndUpdate({ _id: data._id, }, data, {new: true})

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async removeById(query: any): Promise<any> {
		try {
			const result = await this.dao.findOneAndDelete(query)
	
			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}
}
