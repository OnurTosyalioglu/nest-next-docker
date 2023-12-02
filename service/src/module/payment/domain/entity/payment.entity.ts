import {ObjectId} from "mongoose";

export interface IPaymentEntity {
	_id: ObjectId,
	createdAt?: Date,
	updatedAt?: Date,
}

export class PaymentEntity implements IPaymentEntity {
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

