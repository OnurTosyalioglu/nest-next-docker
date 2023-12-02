echo "import {Injectable, NotImplementedException} from \"@nestjs/common\";
import {$3Entity} from \"../../domain/entity/$2.entity\";
import {$3Repository} from \"../../infrastructure/repository/$2.repository\";

@Injectable()
export class $3Service {
	constructor(
		private readonly repository: $3Repository,
	) {}	

	async findAll(query: any): Promise<Array<$3Entity>> {
		try {
			const result = await this.repository.findAll(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async find(query: any): Promise<$3Entity> {
		try {
			const result = await this.repository.find(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async findById(query: any): Promise<$3Entity> {
		try {
			const result = await this.repository.findById(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async create($2: $3Entity): Promise<$3Entity> {
		try {
			const result = await this.repository.create($2)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async update($2: $3Entity): Promise<$3Entity> {
		try {
			const result = await this.repository.update($2)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}

	async removeById(query: any): Promise<boolean> {
		try {
			const result = await this.repository.removeById(query)	

			return result
		} catch (e) {
			throw new NotImplementedException()
		}
	}
}
" > ./src/module/$1/application/service/$2.service.ts
