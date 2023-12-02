import {Injectable, NotImplementedException} from "@nestjs/common";
import {MessagesEntity} from "../../domain/entity/messages.entity";
import {MessagesRepository} from "../../infrastructure/repository/messages.repository";

@Injectable()
export class MessagesService {
	constructor(
		private readonly repository: MessagesRepository,
	) {}

	async findAll(query: any): Promise<Array<MessagesEntity>> {
		try {
			const result = await this.repository.findAll(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async find(query: any): Promise<MessagesEntity> {
		try {
			const result = await this.repository.find(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async findById(query: any): Promise<MessagesEntity> {
		try {
			const result = await this.repository.findById(query)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async create(messages: MessagesEntity): Promise<MessagesEntity> {
		try {
			const result = await this.repository.create(messages)

			return result
		} catch (e) {
			throw new NotImplementedException(e)
		}
	}

	async update(messages: MessagesEntity): Promise<MessagesEntity> {
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
