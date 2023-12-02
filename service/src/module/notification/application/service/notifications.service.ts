import {Injectable, NotImplementedException} from "@nestjs/common";
import {NotificationsEntity} from "../../domain/entity/notifications.entity";
import {NotificationsRepository} from "../../infrastructure/repository/notifications.repository";

@Injectable()
export class NotificationsService {
	constructor(
		private readonly repository: NotificationsRepository,
	) {}

	async findAll(query: any): Promise<Array<NotificationsEntity>> {
		try {
			const result = await this.repository.findAll(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async find(query: any): Promise<NotificationsEntity> {
		try {
			const result = await this.repository.find(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async findById(query: any): Promise<NotificationsEntity> {
		try {
			const result = await this.repository.findById(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async create(messages: NotificationsEntity): Promise<NotificationsEntity> {
		try {
			const result = await this.repository.create(messages)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async update(messages: NotificationsEntity): Promise<NotificationsEntity> {
		try {
			const result = await this.repository.update(messages)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async removeById(query: any): Promise<boolean> {
		try {
			const result = await this.repository.removeById(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}
}
