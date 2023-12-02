import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  strict: false,
  timestamps: true,
})
export class User {}

export const UserScheme = SchemaFactory.createForClass(User);
