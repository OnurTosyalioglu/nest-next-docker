import {Injectable, NotImplementedException} from "@nestjs/common";
import {SettingsEntity} from "../../domain/entity/settings.entity";
import {ISettingsRepository} from "../../domain/repository/i.settings.repository";
import {SettingsLocalSource} from "../source/settings.local.source";
import {SettingsRemoteSource} from "../source/settings.remote.source";

@Injectable()
export class SettingsRepository implements ISettingsRepository {
	constructor(
		private readonly local: SettingsLocalSource,
		private readonly remote: SettingsRemoteSource,
	) {}	

	async findAll(query: any): Promise<SettingsEntity[]> {
		try {
			const result = await this.local.findAll(query)	

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async find(query: any): Promise<SettingsEntity> {
		try {
			const result = await this.local.find(query)	

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async findById(query: any): Promise<SettingsEntity> {
		try {
			const result = await this.local.findById(query)	

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async create(settings: SettingsEntity): Promise<SettingsEntity> {
		try {
			const result = await this.local.create(settings)	

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}	
	}

	async update(settings: SettingsEntity): Promise<SettingsEntity> {
		try {
			const result = await this.local.update(settings)	

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
