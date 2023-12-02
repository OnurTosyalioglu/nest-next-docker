import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from '../dao/payment.dao';
import { ISource } from './i.source';

@Injectable()
export class PaymentLocalSource implements ISource {
  constructor(@InjectModel(Payment.name) private dao: Model<PaymentDocument>) {}

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

      return result ? true : false;
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}


