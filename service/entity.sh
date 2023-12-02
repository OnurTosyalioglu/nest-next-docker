echo "import {ObjectId} from \"mongoose\";

export interface I$3Entity {
	_id: ObjectId,
	createdAt?: Date,
	updatedAt?: Date,
}

export class $3Entity implements I$3Entity {
	_id: ObjectId;
	createdAt?: Date;
	updatedAt?: Date;

	constructor({
		_id,
		createdAt,
		updatedAt,
	}: {
		_id: ObjectId,
		createdAt?: Date,
		updatedAt?: Date,
	}) {
		this._id = _id
		this.createdAt = createdAt
		this.updatedAt = updatedAt
	}
}
" > ./src/module/$1/domain/entity/$2.entity.ts


