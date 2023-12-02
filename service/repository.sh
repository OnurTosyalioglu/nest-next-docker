echo "import { Inject, Injectable, NotImplementedException } from \"@nestjs/common\";
import { $3Entity } from \"../../domain/entity/$2.entity\";
import { I$3Repository } from \"../../domain/repository/i.$2.repository\";
import { $3LocalSource } from \"../source/$2.local.source\";
import { $3RemoteSource } from \"../source/$2.remote.source\";

@Injectable()
export class $3Repository implements I$3Repository {
  constructor(
    private readonly remote: $3RemoteSource,
    private readonly local: $3LocalSource,
  ) {}

  async findAll(query: any): Promise<Array<$3Entity>> {
    try {
      const result = await this.local.findAll(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async find(query: any): Promise<$3Entity> {
    try {
      const result = await this.local.find(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async findById(query: any): Promise<$3Entity> {
    try {
      const result = await this.local.findById(query);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async create(user: $3Entity): Promise<$3Entity> {
    try {
      const result = await this.local.create(user);

      return result;
    } catch (e) {
      throw new NotImplementedException();
    }
  }

  async update(user: $3Entity): Promise<$3Entity> {
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
" > ./src/module/$1/infrastructure/repository/$2.repository.ts
