import {Injectable, NotImplementedException} from "@nestjs/common"
import {ISource} from "./i.source"

@Injectable()
export class NotificationsRemoteSource implements ISource {
	constructor() {}

	async findAll(query: any): Promise<any> {
		try {
			
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async find(query: any): Promise<any> {
		try {
			
		} catch (e) {
			throw new NotImplementedException(e)
		}	
		
	}

	async findById(query: any): Promise<any> {	
		try {
			
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async create(data: any): Promise<any> {
		try {
			
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async update(data: any): Promise<any> {
		try {
			
		} catch (e) {
			throw new NotImplementedException(e)
		}		
	}

	async removeById(data: any): Promise<any> {
		try {
			
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}
}
