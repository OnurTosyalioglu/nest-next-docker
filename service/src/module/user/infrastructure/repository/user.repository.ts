import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { UserEntity } from '../../domain/entity/user.entity';
import { IUserRepository } from '../../domain/repository/i.user.repository';
import { UserLocalSource } from '../source/user.local.source';
import { UserRemoteSource } from '../source/user.remote.source';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    private readonly remote: UserRemoteSource,
    private readonly local: UserLocalSource,
  ) {}

  async findAll(query: any): Promise<Array<UserEntity>> {
    try {
      const result = await this.local.findAll(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<UserEntity> {
    try {
      const result = await this.local.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<UserEntity> {
    try {
      const result = await this.local.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(user: UserEntity): Promise<UserEntity> {
    try {
      const result = await this.local.create(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(user: UserEntity): Promise<UserEntity> {
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
