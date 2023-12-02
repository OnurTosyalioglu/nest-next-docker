import {ObjectId} from "mongoose";

export interface IAccountEntity {
	_id?: ObjectId
}

export class AccountEntity implements IAccountEntity {
	_id?: ObjectId

	constructor({
		_id,
	}: {
		_id?: ObjectId,
	}) {
		this._id = _id
	}
}
