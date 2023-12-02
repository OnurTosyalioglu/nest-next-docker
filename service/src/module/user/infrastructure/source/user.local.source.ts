import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../dao/user.dao';
import { ISource } from './i.source';

@Injectable()
export class UserLocalSource implements ISource {
  constructor(@InjectModel(User.name) private dao: Model<UserDocument>) {}

  async findAll(query: any): Promise<any[]> {
    try {
      const result = await this.dao.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<any> {
    try {
      const result = await this.dao.findOne(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<any> {
    try {
      const result = await this.dao.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(data: any): Promise<any> {
    try {
      const result = await this.dao.create(data);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(data: any): Promise<any> {
    try {
      const result = await this.dao.findOneAndUpdate({ _id: data._id }, data, {
        new: true,
      });

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async removeById(query: any): Promise<boolean> {
    try {
      const result = await this.dao.findOneAndDelete(query);
      console.log(result);

      return result ? true : false;
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}
