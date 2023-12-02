import {Injectable, NotImplementedException} from "@nestjs/common";
import {SettingsEntity} from "../../domain/entity/settings.entity";
import {SettingsRepository} from "../../infrastructure/repository/settings.repository";

@Injectable()
export class SettingsService {
	constructor(
		private readonly repository: SettingsRepository,
	) {}	

	async findAll(query: any): Promise<Array<SettingsEntity>> {
		try {
			const result = await this.repository.findAll(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async find(query: any): Promise<SettingsEntity> {
		try {
			const result = await this.repository.find(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async findById(query: any): Promise<SettingsEntity> {
		try {
			const result = await this.repository.findById(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async create(settings: SettingsEntity): Promise<SettingsEntity> {
		try {
			const result = await this.repository.create(settings)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async update(settings: SettingsEntity): Promise<SettingsEntity> {
		try {
			const result = await this.repository.update(settings)	

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
