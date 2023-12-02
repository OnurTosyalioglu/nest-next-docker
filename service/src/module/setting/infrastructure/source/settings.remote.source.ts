import {Injectable, NotImplementedException} from "@nestjs/common";
import {ISource} from "./i.source";

@Injectable()
export class SettingsRemoteSource implements ISource {
	constructor(){}

	async findAll(query: any): Promise<any[]> {
		try {
			throw new NotImplementedException()	
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async find(query: any): Promise<any> {
		try {
			throw new NotImplementedException()	
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async findById(query: any): Promise<any> {
		try {
			throw new NotImplementedException()	
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async create(settings: any): Promise<any> {
		try {
			throw new NotImplementedException()	
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async update(data: any): Promise<any> {
		
		try {
			throw new NotImplementedException()	
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async removeById(query: any): Promise<boolean> {
		try {
			throw new NotImplementedException()	
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}
}
