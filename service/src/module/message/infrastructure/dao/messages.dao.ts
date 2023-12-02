import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessagesDocument = Messages & Document;

@Schema({
	collection: 'messages',
  strict: false,
  timestamps: true,
})
export class Messages {}

export const MessagesScheme = SchemaFactory.createForClass(Messages);
