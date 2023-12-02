import {MessagesEntity} from "../entity/messages.entity";

export interface IMessagesRepository {
	findAll(query: any): Promise<Array<MessagesEntity>>;
	find(query: any): Promise<MessagesEntity>;
	findById(query: any): Promise<MessagesEntity>;
	create(message: MessagesEntity): Promise<MessagesEntity>;
	update(message: MessagesEntity): Promise<MessagesEntity>;
	removeById(query: any): Promise<boolean>;
}
