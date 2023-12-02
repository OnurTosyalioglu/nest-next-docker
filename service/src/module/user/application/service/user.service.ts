import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import { UserEntity } from '../../domain/entity/user.entity';
import { UserRepository } from '../../infrastructure/repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async findAll(query: any): Promise<Array<UserEntity>> {
    try {
      const result = await this.repository.findAll(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<UserEntity> {
    try {
      const result = await this.repository.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<UserEntity> {
    try {
      const result = await this.repository.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(user: UserEntity): Promise<UserEntity> {
    try {
      const result = await this.repository.create(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(user: UserEntity): Promise<UserEntity> {
    try {
      const result = await this.repository.update(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async removeById(query: any): Promise<boolean> {
    try {
      const result = await this.repository.removeById(query);

      return result ? true : false;
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}
