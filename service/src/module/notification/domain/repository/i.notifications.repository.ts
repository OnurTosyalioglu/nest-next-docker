import {NotificationsEntity} from "../entity/notifications.entity";

export interface INotificationsRepository {
	findAll(query: any): Promise<Array<NotificationsEntity>>;
	find(query: any): Promise<NotificationsEntity>;
	findById(query: any): Promise<NotificationsEntity>;
	create(message: NotificationsEntity): Promise<NotificationsEntity>;
	update(message: NotificationsEntity): Promise<NotificationsEntity>;
	removeById(query: any): Promise<boolean>;
}
