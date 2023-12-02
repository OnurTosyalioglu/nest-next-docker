import {Injectable, NotImplementedException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Settings, SettingsDocument} from "../dao/settings.dao";
import {ISource} from "./i.source";

@Injectable()
export class SettingsLocalSource implements ISource {
	constructor(
		@InjectModel(Settings.name) private readonly dao: Model<SettingsDocument>
	) {}

	async findAll(query: any): Promise<any[]> {
		try {
			console.log('dao')
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
			const result = await this.dao.findOneAndUpdate({
				_id: data._id,
				data
			}, data, { new: true})

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}				
	}

	async removeById(query: any): Promise<boolean> {
		try {
			const result = await this.dao.findOneAndDelete(query)

			return result ? true : false
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}
}
