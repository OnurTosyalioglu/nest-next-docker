import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationsDocument = Notifications & Document;

@Schema({
	collection: 'notifications',
  strict: false,
  timestamps: true,
})
export class Notifications {}

export const NotificationsScheme = SchemaFactory.createForClass(Notifications);
