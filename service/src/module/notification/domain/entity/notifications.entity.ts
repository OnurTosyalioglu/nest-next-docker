import { ObjectId } from "mongoose";

export interface INotificationsEntity {
	_id: ObjectId
}

export class NotificationsEntity implements INotificationsEntity {
	_id: ObjectId

	constructor({
		_id,		
	}: {
		_id?: ObjectId,
	}) {
		this._id = _id
	}
}
