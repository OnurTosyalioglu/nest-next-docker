echo "import { Injectable, NotImplementedException } from '@nestjs/common';
import { ISource } from './i.source';

@Injectable()
export class $3RemoteSource implements ISource {
  constructor() {}

  async findAll(query: any): Promise<any[]> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  async findById(query: any): Promise<any> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  async create(data: any): Promise<any> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  async update(data: any): Promise<any> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }

  async removeById(query: any): Promise<boolean> {
    try {
      throw new NotImplementedException();
    } catch (e) {
      throw new NotImplementedException(e);
    }
  }
}
" > ./src/module/$1/infrastructure/source/$2.remote.source.ts

echo "import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { $3, $3Document } from '../dao/$2.dao';
import { ISource } from './i.source';

@Injectable()
export class $3LocalSource implements ISource {
  constructor(@InjectModel($3.name) private dao: Model<$3Document>) {}

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

" > ./src/module/$1/infrastructure/source/$2.local.source.ts

