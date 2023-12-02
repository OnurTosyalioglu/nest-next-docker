import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema({
	collection: 'account',
  strict: false,
  timestamps: true,
})
export class Account {}

export const AccountScheme = SchemaFactory.createForClass(Account);
