import { Injectable, NotImplementedException } from '@nestjs/common';
import { ISource } from './i.source';

@Injectable()
export class UserRemoteSource implements ISource {
  constructor() {}

  async findAll(query: any): Promise<any[]> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<any> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(data: any): Promise<any> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(data: any): Promise<any> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async removeById(query: any): Promise<boolean> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException();
    }
  }
}
