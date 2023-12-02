import { UserEntity } from '../entity/user.entity';

export interface IUserRepository {
  findAll(query: any): Promise<Array<UserEntity>>;
  findById(query: any): Promise<UserEntity>;
  create(user: UserEntity): Promise<UserEntity>;
  update(user: UserEntity): Promise<UserEntity>;
  removeById(query: any): Promise<boolean>;
}
