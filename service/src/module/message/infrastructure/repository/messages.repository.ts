import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { MessagesEntity } from '../../domain/entity/messages.entity';
import { IMessagesRepository } from '../../domain/repository/i.messages.repository';
import { MessagesLocalSource } from '../source/messages.local.source';
import { MessagesRemoteSource } from '../source/messages.remote.source';

@Injectable()
export class MessagesRepository implements IMessagesRepository {
  constructor(
    private readonly remote: MessagesRemoteSource,
    private readonly local: MessagesLocalSource,
  ) {}

  async findAll(query: any): Promise<Array<MessagesEntity>> {
    try {
      const result = await this.local.findAll(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<MessagesEntity> {
    try {
      const result = await this.local.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<MessagesEntity> {
    try {
      const result = await this.local.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(user: MessagesEntity): Promise<MessagesEntity> {
    try {
      const result = await this.local.create(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(user: MessagesEntity): Promise<MessagesEntity> {
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

