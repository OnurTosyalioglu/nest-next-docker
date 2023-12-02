echo "import {$3Entity} from \"../entity/$2.entity\";

export interface I$3Repository {
	findAll(query: any): Promise<Array<$3Entity>>;
	find(query: any): Promise<$3Entity>;
	findById(query: any): Promise<$3Entity>;
	create($2: $3Entity): Promise<$3Entity>;
	update($2: $3Entity): Promise<$3Entity>;
	removeById(query: any): Promise<boolean>;
}
" > ./src/module/$1/domain/repository/i.$2.repository.ts
