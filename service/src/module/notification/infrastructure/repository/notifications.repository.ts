import {Injectable, NotImplementedException} from "@nestjs/common";
import {NotificationsEntity} from "../../domain/entity/notifications.entity";
import {INotificationsRepository} from "../../domain/repository/i.notifications.repository";
import {NotificationsLocalSource} from "../source/notifications.local.source";
import {NotificationsRemoteSource} from "../source/notifications.remote.source";

@Injectable()
export class NotificationsRepository implements INotificationsRepository {
	constructor(
		private readonly remote: NotificationsRemoteSource,
		private readonly local: NotificationsLocalSource,
	) {}

  async findAll(query: any): Promise<Array<NotificationsEntity>> {
    try {
      const result = await this.local.findAll(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<NotificationsEntity> {
    try {
      const result = await this.local.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<NotificationsEntity> {
    try {
      const result = await this.local.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(user: NotificationsEntity): Promise<NotificationsEntity> {
    try {
      const result = await this.local.create(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(user: NotificationsEntity): Promise<NotificationsEntity> {
    try {
      const result = await this.local.update(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async removeById(query: any): Promise<boolean> {
    try {
      const result = await this.local.removeById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}
